import * as d3 from 'd3'
import { attrs } from 'd3-selection-multi'

let dim = {
    'width': 600,
    'height': 400
}

let svg = d3.select('body').append('svg')
    .style('background', 'lightgray')
    .attrs(dim)













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