import React, { Component } from 'react'
import * as THREE from 'three'
// import * as OBJLoader from 'three-obj-loader'
// OBJLoader(THREE)
import MTLLoader from 'three-react-mtl-loader'
import OBJLoader from 'three-react-obj-loader'

const OrbitControls = require('three-orbit-controls')(THREE)

// https://medium.com/@necsoft/three-js-101-tools-tips-part-2-b825710a1f60
// OrbitControls: for Camera

class Scene extends Component {
  constructor(props) {
    super(props)
    this.mount = null
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    // SETUP
    this.width = this.mount.clientWidth
    this.height = this.mount.clientHeight
    this.windowHalfX = this.mount.clientWidth / 2
    this.windowHalfY = this.mount.clientHeight / 2

    // CAMERA
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 5000)
    this.camera.position.z = 3

    // SCENE
    this.scene = new THREE.Scene()
    this.ambient = new THREE.AmbientLight(0xffffff, 1.0)
    this.scene.add(this.ambient)

    // LIGHTS
    this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0)
    this.keyLight.position.set(-100, 0, 100)
    this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75)
    this.fillLight.position.set(100, 0, 100)
    this.backLight = new THREE.DirectionalLight(0xffffff, 1.0)
    this.backLight.position.set(100, 0, -100).normalize()
    this.scene.add(this.keyLight)
    this.scene.add(this.fillLight)
    this.scene.add(this.backLight)

    // MODEL
    this.mtlLoader = new MTLLoader()
    this.mtlLoader.setBaseUrl('')
    this.mtlLoader.setPath('armature/')
    this.mtlLoader.load('untitled.mtl', (materials) => {
      materials.preload() /* eslint-disable no-param-reassign */
      // materials.materials.default.map.magFilter = THREE.NearestFilter
      // materials.materials.default.map.minFilter = THREE.LinearFilter
      this.objLoader = new OBJLoader() /* eslint-enable no-param-reassign */
      this.objLoader.setMaterials(materials)
      this.objLoader.setPath('armature/')
      this.objLoader.load('untitled.obj', (object) => {
        this.scene.add(object)
      })
    })

    // RENDER
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(new THREE.Color('hsl(0, 0%, 10%)'))
    this.mount.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.center.set(0, 0, 0)
    this.controls.addEventListener('change', this.renderScene)

    // TERRAIN
    const geometry = new THREE.PlaneGeometry(600, 600, 30, 30)
    const { length } = geometry.vertices
    for (let index = 0; index < length; index += 1) {
      geometry.vertices[index].z = Math.floor((Math.random() * 10) + 1)
    }
    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: '#66FCF1',
    })

    this.terrain = new THREE.Mesh(geometry, material)
    this.terrain.overdraw = true
    this.terrain.rotation.x = 90
    this.terrain.rotation.z = 45
    this.scene.add(this.terrain)


    window.scene = this.scene
    window.THREE = THREE
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.frameId = window.requestAnimationFrame(this.animate)
    this.controls.update()
    this.renderScene()
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 999,
        }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene
