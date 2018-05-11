import React, { Component } from 'react'
import * as THREE from 'three'

const OrbitControls = require('three-orbit-controls')(THREE)

// TODO: A timer or the render loop is continuing after the Scene unmounts.
// This note is to remove it.
// console.logs are suppressed in prod, so priority is sub-maximal

class Scene extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.cat = {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    }
    this.adamAction = {}
    this.isLoaded = false
    this.clock = null
    this.delta = 0
    this.adamAction = {}
    this.adam = null
    this.from = null
    this.to = null
    this.activeActionName = 'idle'
    this.animations = ['idle', 'walk', 'run', 'hello']
    this.currentAnimation = 0
    this.mount = null
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    // SETUP
    this.clock = new THREE.Clock()
    this.width = this.mount.clientWidth
    this.height = this.mount.clientHeight
    this.windowHalfX = this.mount.clientWidth / 2
    this.windowHalfY = this.mount.clientHeight / 2

    // CAMERA
    this.camera = new THREE.PerspectiveCamera(85, this.width / this.height, 1, 4000)
    this.camera.position.x = 5
    this.camera.position.y = 5
    this.camera.position.z = 5

    // SCENE
    this.scene = new THREE.Scene()
    this.ambient = new THREE.AmbientLight(0xffffff, 1.0)
    this.scene.add(this.ambient)

    // ADAM MODEL
    this.adamLoader = new THREE.JSONLoader()
    this.adamLoader.load('adam.json', (geometry, materials) => {
      materials.forEach((material) => {
        material.skinning = true // eslint-disable-line no-param-reassign
      })
      this.adamCharacter = new THREE.SkinnedMesh(
        geometry,
        new THREE.MeshFaceMaterial(materials),
      )
      this.adamCharacter.scale.set(2, 2, 2)
      this.adam = new THREE.AnimationMixer(this.adamCharacter)
      this.adamAction.hello = this.adam.clipAction(geometry.animations[0])
      this.adamAction.idle = this.adam.clipAction(geometry.animations[1])
      this.adamAction.run = this.adam.clipAction(geometry.animations[3])
      this.adamAction.walk = this.adam.clipAction(geometry.animations[4])

      this.adamAction.hello.setEffectiveWeight(1)
      this.adamAction.idle.setEffectiveWeight(1)
      this.adamAction.run.setEffectiveWeight(1)
      this.adamAction.walk.setEffectiveWeight(1)

      this.adamAction.hello.setLoop(THREE.LoopOnce, 0)
      this.adamAction.hello.clampWhenFinished = true

      this.adamAction.hello.enabled = true
      this.adamAction.idle.enabled = true
      this.adamAction.run.enabled = true
      this.adamAction.walk.enabled = true

      this.scene.add(this.adamCharacter)
      window.addEventListener('resize', this.handleResize, false)

      this.animate()
      this.isLoaded = true
      this.adamAction.idle.play()
    })

    // RENDER
    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    this.mount.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.target.set(0, 0, 0)
    this.controls.addEventListener('change', this.renderScene)

    window.scene = this.scene
    window.THREE = THREE
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
    return window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    return this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  handleDoubleClick() {
    this.currentAnimation += 1
    if (this.currentAnimation === this.animations.length) {
      this.currentAnimation = 1
    }
    return this.fadeAction(this.animations[this.currentAnimation])
  }

  fadeAction(name) {
    this.from = this.adamAction[this.activeActionName].play()
    this.to = this.adamAction[name].play()

    this.from.enabled = true
    this.to.enabled = true

    if (this.to.loop === THREE.LoopOnce) {
      this.to.reset()
    }

    this.from.crossFadeTo(this.to, 0.3)
    this.activeActionName = name
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    return cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    this.frameId = window.requestAnimationFrame(this.animate)
    this.controls.update()
    return this.renderScene()
  }

  renderScene = () => {
    if (!this.adam) return null
    this.delta = this.clock.getDelta()
    this.adam.update(this.delta)
    return this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        id="skills_scene"
        ref={(mount) => { this.mount = mount }}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Scene
