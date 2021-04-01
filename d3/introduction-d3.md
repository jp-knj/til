## SVG vs Canvas

**SVG ( Scalable Vector Graphics )**
- XML Syntax
- each shape is a DOM element
- pro : easy to get started and interactive with
- con : not performant at large scale

**HTML5 (Canvas)**
- JavaScript API
- One Canvas Element, Shape are inaccessable once drawn
- pro : very performance especially for animations
- con : hard to interact with

"SVG like a illustrator and Canvas is like Photoshop"


## What is SVG ?
I like to think of SVG as a window in a world. We can draw shape in the world and they exist beyond the bondary of the window. To be able to see them, we need to specify the width and height of the window.

```
<svg width=800 height=800>
<-- a whole world -->
</svg>
```

With in the SVG world, x increase going right and, y increase going down.  

## About Path Command ?

![IMG_56DB30FB93CB-1](https://user-images.githubusercontent.com/70939128/113280621-7cae5080-931f-11eb-8de6-8c16246b00fc.jpeg)

## Make a Smile face

![IMG_E98E7B3BFC97-1](https://user-images.githubusercontent.com/70939128/113281920-335f0080-9321-11eb-99da-743b083ba8f9.jpeg)

## About API

```html
// wrap SVG element with d3
  const svg = d3.select('#container')

// select the first path in the svg selection
  const select = svg.select('rect')

// select all the paths in the svg selection
  const selectAll = svg.selectAll('rect')

console.log('svg', svg)

// return svg
// return select
// return selectAll
```

## What is Data binding ?

<img width="1039" alt="スクリーンショット 2021-04-02 8 23 14" src="https://user-images.githubusercontent.com/70939128/113363793-caad6d80-938c-11eb-9b3b-c09f7b32dddd.png">
