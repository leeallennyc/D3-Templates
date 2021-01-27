import * as d3 from 'd3'









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


if (Array.isArray(d)){
    p.text(d.join(', '))
} else {
    p.text(d)
}