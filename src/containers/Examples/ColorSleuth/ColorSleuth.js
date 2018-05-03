import React, { Component } from 'react'
import names from './color_names.json'

/**
 * COLOR SLEUTH: Put a name to that hex code.
 *
 * Purpose: Tired of struggling to name your color-related CSS Variables?
 *
 * Usage:
 * 1. Call `this.init()` to load RGB and HSL values into `this.names` Array
 * 2. Feed hex colors into `this.name()`
 * 3. Utilize resultant name
 *
 * Advanced Debugging:
 * - If you ever encounter issues with incorrect colors being reported,
 *   remove the radix parameter from every parseInt() and re-check. This
 *   should only be a concern if new colors are added to the system.
 *
 * Source:
 * - This code is based on this project: http://chir.ag/projects/ntc/
 * - Code has been upgraded to ES6+ Environment Standards and best practices.
 */
class ColorSleuth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.rgb = null
    this.hsl = null
    this.names = names
  }

  componentDidMount() {
    this.init()
  }

  getHSL = (color) => {
    const rgb = [
      parseInt('0x' + color.substring(1, 3), 16) / 255,
      parseInt('0x' + color.substring(3, 5), 16) / 255,
      parseInt('0x' + color.substring(5, 7), 16) / 255,
    ]
    let min, max, delta, h, s, l
    let r = rgb[0], g = rgb[1], b = rgb[2]

    min = Math.min(r, Math.min(g, b))
    max = Math.max(r, Math.max(g, b))
    delta = max - min
    l = (min + max) / 2

    s = 0
    if (l > 0 && l < 1)
      s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l))

    h = 0
    if (delta > 0) { /* eslint-disable eqeqeq */
      if (max == r && max != g) h += (g - b) / delta
      if (max == g && max != b) h += (2 + (b - r) / delta)
      if (max == b && max != r) h += (4 + (r - g) / delta)
      h /= 6; /* eslint-enable eqeqeq */
    }
    return [
      parseInt(h * 255, 10),
      parseInt(s * 255, 10),
      parseInt(l * 255, 10),
    ]
  }

  getRGB = (color) => {
    return [
      parseInt('0x' + color.substring(1, 3), 16),
      parseInt('0x' + color.substring(3, 5), 16),
      parseInt('0x' + color.substring(5, 7), 16),
    ]
  }

  name = (color) => {
    color = color.toUpperCase()
    if (color.length < 3 || color.length > 7) {
      return ['#000000', `Invalid Color: ${color}`, false]
    }
    if (color.length % 3 === 0) {
      color = `#${color}`
    }
    if (color.length === 4) {
      color = `#${color.substr(1, 1)}${color.substr(1, 1)}${color.substr(2, 1)}${color.substr(2, 1)}${color.substr(3, 1)}${color.substr(3, 1)}`
    }

    this.rgb = this.getRGB(color)
    let r = this.rgb[0]
    let g = this.rgb[1]
    let b = this.rgb[2]

    this.hsl = this.getHSL(color)
    let h = this.hsl[0]
    let s = this.hsl[1]
    let l = this.hsl[2]

    let ndf1 = 0
    let ndf2 = 0
    let ndf = 0
    let cl = -1
    let df = -1

    for (let i = 0; i < names.length; i += 1) {
      if (color === `#${names[i][0]}`) {
        return [`#${names[i][0]}, ${names[i][1]}, true`]
      }

      ndf1 = Math.pow(r - names[i][2], 2) + Math.pow(g - names[i][3], 2) + Math.pow(b - names[i][4], 2)
      ndf2 = Math.pow(h - names[i][5], 2) + Math.pow(s - names[i][6], 2) + Math.pow(l - names[i][7], 2)
      ndf = ndf1 + ndf2 * 2
      if (df < 0 || df > ndf) {
        df = ndf
        cl = i
      }
    }

    return (
      cl < 0
        ? ['#000000', `Invalid Color: ${color}`, false]
        : [`#${names[cl][0]}`, names[cl][1], false]
    );
  }

  init = () => {
    let color
    for (let i = 0; i < this.names.length; i++) {
      color = "#" + this.names[i][0];
      this.rgb = this.getRGB(color);
      this.hsl = this.getHSL(color);
      this.names[i].push(this.rgb[0], this.rgb[1], this.rgb[2], this.hsl[0], this.hsl[1], this.hsl[2]);
    }
    // const loadedNames = this.names.reduce((acc, name, i) => {
    //   const color = `#${name[0]}`
    //   const rgb = this.getRGB(color)
    //   const hsl = this.getHSL(color)
    //   acc.push(rgb[0], rgb[1], rgb[2], hsl[0], hsl[1], hsl[2])
    //   return acc
    // }, [])
    // this.names = loadedNames
    console.log('NAMES END', this.names)
  }


  render() {
    const n_match = this.name('#A11A23')
    const n_rgb = n_match[0]; // This is the RGB value of the closest matching color
    const n_name = n_match[1]; // This is the text string for the name of the match
    const n_exactmatch = n_match[2]; // True if exact color match, False if close-match
    console.log('N MATCH', n_match)
    return (
      <div>
        COLORS:<br />
        LOOKUP: {n_match}<br />
        RGB: {n_rgb}<br />
        NAME: {n_name}<br />
        EXACT? {n_exactmatch.toString()}<br />
      </div>
    )
  }
}

export default ColorSleuth
