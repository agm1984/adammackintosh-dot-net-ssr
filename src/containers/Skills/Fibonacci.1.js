import React, { Component } from 'react'

class Fibonacci extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          width: '100%',
          // paddingBottom: `${(8 / 13) * 100}%`,
          verticalAlign: 'middle',
          overflow: 'hidden',
          backgroundColor: 'lightpink',
          padding: 0,
          margin: 0,
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1697 1087">
          <title>Fibonacci Folge</title>
          <desc>16 Zahlen der Fibonacci Folge</desc>
          <defs>
            <view id="fibo14" viewBox="50 50 610 377" />
            <view id="fibo12" viewBox="427 283 233 144" />
            <view id="fibo10" viewBox="427 283 89 55" />
            <view id="fibo8" viewBox="482 317 34 21" />
            <view id="fibo6" viewBox="482 317 13 8" />
            <view id="fibo4" viewBox="490 322 5 3" />
          </defs>
          <a xlinkHref="fibonacci.svg#fibo14" xlinkTitle="Fibonacci Folge 14">
          <a xlinkHref="fibonacci.svg#fibo12" xlinkTitle="Fibonacci Folge 12">
          <a xlinkHref="fibonacci.svg#fibo10" xlinkTitle="Fibonacci Folge 10">
          <a xlinkHref="fibonacci.svg#fibo8" xlinkTitle="Fibonacci Folge 8">
          <a xlinkHref="fibonacci.svg#fibo6" xlinkTitle="Fibonacci Folge 6">
          <a xlinkHref="fibonacci.svg#fibo4" xlinkTitle="Fibonacci Folge 4">
          <rect x="491" y="322" width="1" height="1" fill="#dddd88" />
          <rect x="490" y="322" width="1" height="1" fill="#dddddd" />
          <rect x="490" y="323" width="2" height="2" fill="#eeee99" />
          <rect x="492" y="322" width="3" height="3" fill="#eeeeee" />
          </a>
          <rect x="490" y="317" width="5" height="5" fill="#cccc77" />
          <rect x="482" y="317" width="8" height="8" fill="#cccccc" />
          </a>
          <rect x="482" y="325" width="13" height="13" fill="#dddd88" />
          <rect x="495" y="317" width="21" height="21" fill="#dddddd" />
          </a>
          <rect x="482" y="283" width="34" height="34" fill="#eeee99" />
          <rect x="427" y="283" width="55" height="55" fill="#eeeeee" />
          </a>
          <rect x="427" y="338" width="89" height="89" fill="#cccc77" />
          <rect x="516" y="283" width="144" height="144" fill="#cccccc" />
          </a>
          <rect x="427" y="50" width="233" height="233" fill="#dddd88" />
          <rect x="50" y="50" width="377" height="377" fill="#dddddd" />
          </a>
          <rect x="50" y="427" width="610" height="610" fill="#eeee99" />
          <rect x="660" y="50" width="987" height="987" fill="#eeeeee" />
          <g font-family="Arial" text-anchor="middle">
          <text x="505" y="327" dominant-baseline="middle" font-size="0.7rem">21</text>
          <text x="499" y="300" dominant-baseline="middle" font-size="0.9rem">34</text>
          <text x="455" y="310" dominant-baseline="middle" font-size="1.2rem">55</text>
          <g font-size="2.0rem"><text x="471" y="382" dominant-baseline="middle">89</text>
          <text x="588" y="355" dominant-baseline="middle">144</text>
          <text x="543" y="166" dominant-baseline="middle">233</text>
          <text x="239" y="239" dominant-baseline="middle">377</text>
          <text x="355" y="732" dominant-baseline="middle">610</text>
          <text x="1153" y="543" dominant-baseline="middle">987</text>
          </g></g>
          <path d="M1647 50 a987,987 0 0,1 -987,987 a610,610 0 0,1 -610,-610 a377,377 0 0,1 377,-377 a233,233 0 0,1 233,233 a144,144 0 0,1 -144,144 a89,89 0 0,1 -89,-89 a55,55 0 0,1 55,-55 a34,34 0 0,1 34,34 a21,21 0 0,1 -21,21 a13,13 0 0,1 -13,-13 a8,8 0 0,1 8,-8 a5,5 0 0,1 5,5 a3,3 0 0,1 -3,3 a2,2 0 0,1 -2,-2 a1,1 0 0,1 1,-1 a1,1 0 0,1 1,1" stroke="black" stroke-width="0.25" fill="none" />
          </svg>
      </div>
    )
  }
}

export default Fibonacci
