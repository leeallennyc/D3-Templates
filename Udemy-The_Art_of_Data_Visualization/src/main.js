import * as d3 from 'd3'
import { attrs } from 'd3-selection-multi'

let dim = {
    'width': '600',
    'height': '300'
}

let svg = d3.select('body').append('svg')
    .style('background', 'floralwhite')
    .attrs(dim)


let data = d3.range(50, 501, 5)

let lineAttrs = {
    'x1': (d)=>d,
    'y1': 200,
    'x2': (d)=>d,
    'y2': (d, i)=> i%10 == 0 ? 220 : 210,
    'stroke': 'gray'
}

let lines = svg.selectAll('line').data(data)
    .enter().append('line').attrs(lineAttrs)

let slider = svg.append('circle').attrs({
    'cx': '50',
    'cy': '200',
    'r': '20',
    'fill': 'white',
    'stroke': 'black',
    'cursor': 'grab'
})

function pushLines(){
    
}


// let c = svg.append('circle').attrs({
//     'cx': '300',
//     'cy': '150',
//     'r': '25',
//     'fill': 'red'
// })
//     .on('click', function(){
//         d3.select(this).attr('fill', 'orange')
//     })

// let drag = d3.drag()
// drag.clickDistance(0)

    
// drag.on('click', function(){
//     d3.selection(this).attr('stroke', 'black')
// })

// drag.on('drag', function(){
//     let el = d3.select(this)
//     el.attr('cx', parseInt(el.attr('cx')) + d3.event.dx)
//     el.attr('cy', parseInt(el.attr('cy')) + d3.event.dy)
// })

// drag.on('end', function(){
//     d3.select(this).attr('stroke', 'none')
// })
    

// c.call(drag)
    




























///////////////////////////////////////////////////////////////////////////
// Lesson 1  Element Selection and Binding
///////////////////////////////////////////////////////////////////////////

// // Lesson 1
// let d = [1, 2, 3, 4, 5]
// let body = d3.select('body');
// let s = body.selectAll('p').data(d).text((d)=>"I'm the paragraph no. " + d);
// console.log(s)

// s.enter().append('p').text((d)=>"I'm the paragraph no. " + d);

// d = [10, 20, 30]
// s = body.selectAll('p').data(d).text((d)=>"I'm the paragraph no. " + d);
// s.exit().remove();

///////////////////////////////////////////////////////////////////////////
// Lesson 2  Data and Selections
///////////////////////////////////////////////////////////////////////////

// // Lesson 2
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgray')
//     .attr('width', 600)
//     .attr('height', 400)

// let d = [100, 200, 300, 400, 500]

// svg.selectAll('circle').data(d).enter().append('circle')
//     .attr('cx', (d)=>d)
//     .attr('cy', 200)
//     .attr('r', (d, i)=> 10 * (i+1))


///////////////////////////////////////////////////////////////////////////
// Lesson 3 Atts through d3-selection-multi
///////////////////////////////////////////////////////////////////////////

// import { attrs } from 'd3-selection-multi'

// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgray')
//     .attrs(dim)

// let d = [100, 200, 300, 400, 500]

// let cAttrs = {
//     'cx':(d) => d,
//     'cy': 200,
//     'r': (d, i) => 10 * (i+1),
//     'fill': 'gray'
// }

// svg.selectAll('circle').data(d).enter().append('circle')
//     .attrs(cAttrs);

///////////////////////////////////////////////////////////////////////////
// Lesson 3 Basic SVG Shapes
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgray')
//     .attrs(dim)

// let attributes = {
//     'cx': 100,
//     'cy': 100,
//     'r': 40
// }
// svg.append('circle').attrs(attributes)

// attributes = {
//     'cx': 300,
//     'cy': 100,
//     'rx': 40,
//     'ry': 30
// }
// svg.append('ellipse').attrs(attributes)

// attributes = {
//     'x1': 450,
//     'y1': 100,
//     'x2': 550,
//     'y2': 50,
//     'stroke': 'red'
// }
// svg.append('line').attrs(attributes)

// attributes = {
//     'points': '50,250 100,350 150,300 150,350',
//     'stroke': 'black',
//     'fill': 'none'
// }
// svg.append('polygon').attrs(attributes)

// attributes = {
//     'points': '250,250 300,350 350,300 350,350',
//     'stroke': 'black',
//     'fill': 'none'
// }
// svg.append('polyline').attrs(attributes)

// attributes = {
//     'x': 450,
//     'y': 200,
//     'width': 100,
//     'height': 100,
//     'fill': 'none',
//     'stroke': 'black',
//     'rx': 10
// }
// svg.append('rect').attrs(attributes)



///////////////////////////////////////////////////////////////////////////
// Lesson 4 Paths
///////////////////////////////////////////////////////////////////////////

// let attributes = {
//     'd': `M 100,300 
//     l 0,-200
//     L 300,200,
//     l 200,-100,
//     L 500,300
//     C 400,350 400,250 500,300
//     z`, 
//     'stroke': 'black',
//     'fill': 'none'
// }
// svg.append('path').attrs(attributes);


///////////////////////////////////////////////////////////////////////////
// Lesson 5 Attrs cont'd
///////////////////////////////////////////////////////////////////////////

// let attributes = {
//     'points': '100,300 300,100 500,300 300,200',
//     'stroke': 'white',
//     'fill': 'red',
//     'stroke-width': 10,
//     'stroke-opacity': .9,
//     'opacity': 0.8,
//     'stroke-dasharray': '20, 5, 5, 5',
//     'cursor': 'crosshair'
// }

// svg.append('polygon').attrs(attributes);


///////////////////////////////////////////////////////////////////////////
// Lesson 6 Text Attributes
///////////////////////////////////////////////////////////////////////////

// svg.append('line').attrs({
//     'x1': 0,
//     'x2': 600,
//     'y1': 200,
//     'y2': 200,
//     'stroke': '#bbb'
// })

// svg.append('line').attrs({
//     'x1': 300,
//     'x2': 300,
//     'y1': 0,
//     'y2': 400,
//     'stroke': '#bbb'
// })

// let attributes = {
//     'x': 300,
//     'y': 200,
//     'textLength': 200,
//     'lengthAdjust': 'spacingAndGlyphs',
//     'font-size': 40,
//     // 'rotate': 20,
//     'font-family': 'Verdana',
//     'font-style': 'Italic',
//     'font-weight': 'bold',
//     'alignment-baseline': 'middle',
//     'text-anchor': 'middle',
//     'letter-spacing': '5'
// }

// svg.append('text').attrs(attributes).text('1, 2, 3, 4, 5');



///////////////////////////////////////////////////////////////////////////
// Lesson 7 Text on Path
///////////////////////////////////////////////////////////////////////////

// let pth = `M 200,200
//             Q300,150
//             400,200`

// svg.append('path').attrs({'d': pth, 'fill': 'none', 'stroke': 'red', 'id': 'pth'})

// let attributes = {
//     'href': '#pth',
//     'font-size': 32,
//     'text-anchor': 'middle',
//     'startOffset': '50%'

// }

// svg.append('text').append('textPath').attrs(attributes).text('Text on Path')

///////////////////////////////////////////////////////////////////////////
// Lesson 8 Data Functions
///////////////////////////////////////////////////////////////////////////

// import { attrs } from 'd3-selection-multi'

// let data = [3, 4, 5, 23, 5, 23, 4, 23, 5, 34, 56, 34, 21, 11, 15]

// // data = [{a:2, b:4}, 
// //         {a:-2, b:6}, 
// //         {a:1, b:-5}]

// d3.select('body').append('p').style('font-size', '24px')
//     .text(data.join(', '))
// d3.select('body').append('hr')

// let p = d3.select('body').append('p').style('font-size', '24px')
// let d

// // statistical functions using d3.min, d3.max, d3. extent (accessor function is d.a)
// // d = d3.min(data, (d)=>d.a)
// // d = d3.max(data, (d)=>d.a)

// // Using extent. The extent method returns the min and max. 
// // d = d3.extent(data)

// // Sum funciton -- Returns the Sum of elements
// // d = d3.sum(data)

// // Returns the mean
// // d = d3.mean(data)

// // Median Value
// // d = d3.median(data)

// // Quantile Value -- Shows the wrong result unless it is sorted in ascending order first!!
// // d = d3.quantile(data.sort(d3.ascending), 0.50)

// // Variance Value 
// // d = d3.variance(data)

// // Standard Deviation
// // d = d3.deviation(data)

// // Shuffling The Data, Adds a random order
// // d = d3.shuffle(data)

// // Merge the Data Set
// // d = d3.merge([data, [0]])

// if (Array.isArray(d)){
//     p.text(d.join(', '))
// } else {
//     p.text(d)
// }

///////////////////////////////////////////////////////////////////////////
// Lesson 9  Bins and Histograms
///////////////////////////////////////////////////////////////////////////

// let data = [5, 67, 2, 6, 3, 2, 32, 64, 23, 6, 23, 23, 53, 23]

// let hist = d3.histogram()

// // Calling the accessor function for more complicated cases, used for array of objects or nested arrays
// // hist.value((d)=>d)

// // hist.domain(d3.extent(data))  // Returns the array of min and max [2, 67]
// // hist.domain([0,30])
// hist.thresholds([5, 10, 15, 20, 25, 30, 35, 40])

// let bins = hist(data)
// console.log(bins)


///////////////////////////////////////////////////////////////////////////
// Lesson 10  Data Versus Datum 
///////////////////////////////////////////////////////////////////////////

// let d = [1, 2, 3, 4, 5, 6, 7]

// // data() has access to enter, update, exit function -- more dynamic
// let p = d3.select('body').selectAll('p').data(d).enter()
//     .append('p').text((d)=>`I'm paragraph number ${d}`)

// // This data variable will get added to every p selection
// // d = 0;

// // Data versus Datum difference
// // Datum is used for less dynamic updates
// // Here, the entire data set is bound to each element in the data set
// p.datum(d).text((d)=>`I'm paragraph number ${d}`)

///////////////////////////////////////////////////////////////////////////
// Lesson 11  Click and Drag
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'gray')
//     .attrs(dim)

// let c = svg.append('circle').attrs({
//     'cx': 300,
//     'cy': 200,
//     'r': 50,
//     'fill': 'blue'
// })
//     .on('click', function(){
//         d3.select(this).attr('fill', 'black')
//     })

// let drag = d3.drag()
// drag.clickDistance(0)

// drag.on('start', function() {
//     d3.select(this).attr('stroke', 'black')
// })

// drag.on('drag', function() {
//     let el = d3.select(this)
//     el.attr('cx', parseInt(el.attr('cx')) + d3.event.dx)
//     el.attr('cy', parseInt(el.attr('cy')) + d3.event.dy)
// })

// drag.on('end', function() {
//     d3.select(this).attr('stroke', 'none')
// })

// c.call(drag)

///////////////////////////////////////////////////////////////////////////
// Lesson 12  Events and Onclick, Mouseover, etc.
///////////////////////////////////////////////////////////////////////////

// let dim ={
//     'width': '600',
//     'height': '300'
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)


// let c = svg.append('circle').attrs({
//     'cx': '300',
//     'cy': '150',
//     'r': '50',
//     'fill': 'red'
// })

// c.on('mouseenter', function (d){
//     d3.select(this).attr('fill', 'orange')
// })
//     .on('mouseleave', function (e){
//         d3.select(this).attr('fill', 'red')
//     })
//     .on('click', function (e){
//         d3.select(this).attr('fill', 'blue')
//         console.log(d3.mouse(this))
//     })
//     .on('dblclick', function (e){
//         d3.select(this).attr('fill', 'green')
//     })