import React, { Component } from 'react'

class Fibonacci extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        viewBox="113 128 972
         600"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="test0r">
          <g id="squares">
            <path id="path4" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M114.036,128.611v599.338" />
            <path id="path6" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M114.036,727.949h599.343" />
            <path id="path8" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M713.379,727.949V128.611" />
            <path id="path10" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M713.379,128.611H114.036" />
            <path id="path12" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M713.379,727.949h370.411" />
            <path id="path14" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M713.379,128.611h370.411" />
            <path id="path16" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M1083.79,128.611v599.338" />
            <path id="path18" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M713.379,499.021h370.411" />
            <path id="path20" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M854.858,499.021v228.929" />
            <path id="path22" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M713.379,586.467h141.479" />
            <path id="path24" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M800.829,499.021v87.446" />
            <path id="path26" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M800.829,553.055h54.029" />
            <path id="path28" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M821.451,553.055v33.412" />
            <path id="path30" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M800.829,565.843h20.622" />
            <path id="path32" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M813.613,553.055v12.788" />
            <path id="path34" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M813.613,560.891h7.838" />
            <path id="path36" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M816.501,560.891v4.952" />
            <path id="path38" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M813.613,562.957h2.888" />
            <path id="path40" fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M815.68,560.891v2.066" />
          </g>
          <g id="spiral">
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M114.09,727.949c0-330.974,268.311-599.284,599.289-599.284" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M1083.776,499.058c0-204.56-165.832-370.393-370.397-370.393" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M854.931,727.969c126.388,0,228.846-102.458,228.846-228.847" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M854.867,727.958c-78.117,0-141.444-63.325-141.444-141.443" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M800.846,499.094c-48.282,0-87.423,39.14-87.423,87.421" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M854.872,553.105c0-29.829-24.183-54.012-54.012-54.012" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M854.858,553.1c0,18.417-14.93,33.348-33.348,33.348" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M800.899,565.836c0,11.383,9.228,20.611,20.611,20.611" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M813.634,553.099c-7.033,0-12.734,5.701-12.734,12.734" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M813.581,553.081c4.358,0,7.892,3.533,7.892,7.891" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M816.595,565.85c2.694,0,4.878-2.185,4.878-4.878" />
            <path fill="none" stroke="#E2001A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" d="M813.58,562.836c0,1.665,1.35,3.014,3.014,3.014" />
          </g>
        </g>
      </svg>
    )
  }
}

export default Fibonacci
