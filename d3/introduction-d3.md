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

## About style and attr

<img width="859" alt="スクリーンショット 2021-04-02 8 40 21" src="https://user-images.githubusercontent.com/70939128/113364753-40b2d400-938f-11eb-948f-69be97deb4f1.png">

## Create a petal for each movie
we've been able to bind our data to existing DOM elements and set attributes on them.  
But we can't possibly go around manually creating SVG elements for every data point we have—our movies dataset has 135 movies, none of us are gonna sit and copy paste 135 paths!

```html
d3.select(svg).selectAll('rect')
  .data(data).enter().append('rect')
```

**How to work "selectAll"**
<img width="884" alt="スクリーンショット 2021-04-04 9 55 47" src="https://user-images.githubusercontent.com/70939128/113496823-7e9f2c00-9538-11eb-83e3-50c23a4bccd1.png">

**How to work "selectAll('rect').data(data)"**
<img width="907" alt="スクリーンショット 2021-04-04 9 56 08" src="https://user-images.githubusercontent.com/70939128/113496878-008f5500-9539-11eb-8456-ab8201a19820.png">

**How to work ".enter()"**
<img width="890" alt="スクリーンショット 2021-04-04 10 04 54" src="https://user-images.githubusercontent.com/70939128/113496893-2583c800-9539-11eb-8cfc-66889c077fcc.png">

**How to work ".append()"**
<img width="869" alt="スクリーンショット 2021-04-04 10 05 21" src="https://user-images.githubusercontent.com/70939128/113496897-33d1e400-9539-11eb-9c53-93818e34acb4.png">

## About Scales and Sizes
We use D3.js scales to translate raw data into visual channels.

**And some common visual channels:**
- position
  ( x, y)

- size
  ( width, height, radius, scale)

- color
  ( sequential, diverging)

- shape
  ( dots, squares, letters)

- color
  ( categorical)

## translate and scale
When we set scale() on an SVG element, we're scaling the whole coordinate system.

## selection
- enter()
新しい要素を生成する
- update()
既存の要素を更新する
- exit()
不要な要素を扱う

- merge()
 enter() + update()

## What's benefit for Data to learning

custom data visualizations can be categorized into two broad categories:

`EXPOSITORY VS. EXPLORATORY`

### EXPOSITORY
- static dataset
- explore data for story
- communicate story to audience

### EXPLORATORY
- dynamic dataset
- interview stakeholders
- build tool for stakeholders to explore the data

## Data Exploration: Data types
- Categorical ( movie genres )
- Ordinal ( T-shirt sizes )
- Quantitative ( rating / score )
- Temporal ( dates )
- Spatial (cities )

## Translate from date to design
Concentrate on the takeaways to communicate across
What does that mean in terms of the data?  (Individual or aggregate elements? Which attributes?)
Map the relevant data to visual elements

- Design : Marks & Channels
Map individual or aggregate data elements to marks.
Map data attributes to channels.

<img width="703" alt="スクリーンショット 2021-04-07 19 44 11" src="https://user-images.githubusercontent.com/70939128/113854548-f049d500-97d9-11eb-8044-b3c41ffb2721.png">

**For Example**
<img width="787" alt="スクリーンショット 2021-04-07 20 10 26" src="https://user-images.githubusercontent.com/70939128/113857410-74518c00-97dd-11eb-8a2d-b0ad2702f06b.png">

- Design : Channels
**Quantitative**
- Position
- Size
- Color

**Categorical**
- Shape
- Texture
- Color

**Temporal**
- Animation

<img width="441" alt="スクリーンショット 2021-04-07 19 48 33" src="https://user-images.githubusercontent.com/70939128/113854877-559dc600-97da-11eb-8613-e766fb8a3102.png">

- Design : Channels Effectiveness
