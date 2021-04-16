import * as d3 from 'd3'
import { attrs } from 'd3-selection-multi'


// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// let d = [11, 15, 23, 8, 10]

// let cAttrs = {
//     'cx':(d) => d + (dim.width/2),
//     'cy': 200,
//     'r': (d, i) => 5 * (i+5),
//     'fill': 'gray',
//     'opacity': .2
// }

// svg.selectAll('circles').data(d).enter().append('circle')
//     .attrs(cAttrs)




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

///////////////////////////////////////////////////////////////////////////
// Lesson 13 Scroll Bar with numbers
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400
// }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgray')
//     .attrs(dim)

// let data = d3.range(50, 551, 5)

// let lineAtts = {
//     'x1': (d)=>d,
//     'y1': 200,
//     'x2': (d)=>d,
//     'y2': (d, i) => i % 10 == 0 ? 220 : 210,
//     'stroke': 'red'
// }
// let lines = svg.selectAll('line').data(data)
//     .enter().append('line').attrs(lineAtts)

// let drag = d3.drag()
// drag.on('start', function(){
//         d3.select(this).attrs({
//             'stroke': 'red',
//             'cursor': 'none'
//         })
//     })
//     .on('drag', function(){
//         let el = d3.select(this)
//         let xPos = parseInt(el.attr('cx'))
//         let nPos = xPos + d3.event.dx
//         if (nPos < 50) nPos = 50
//         if (nPos > 550) nPos = 550
//         el.attr('cx', nPos)
//         pushLines()
//     })
//     .on('end', function(){
//         d3.select(this).attrs({
//             'stroke': 'black',
//             'cursor': 'grab'
//         })
//     })

// let slider = svg.append('circle').attrs({
//     'cx': 50,
//     'cy': 200,
//     'r': 20,
//     'fill': 'white',
//     'stroke': 'black',
//     'cursor': 'grab'
// }).call(drag)

// let label = svg.append('text').attrs({
//     'x': 50,
//     'y': 200,
//     'text-anchor': 'middle',
//     'alignment-baseline': 'middle'
// }).text(50).style('pointer-events', 'none')

// function pushLines(){
//     lines.each(function(d, i){
//         let el = d3.select(this)
//         let x = parseInt(el.attr('x1'))
//         let sx = parseInt(slider.attr('cx'))
//         let dx = Math.abs(sx - x)
//         let r = 25
//         if (x >= sx - r && x <= sx + r) {
//             let dy = Math.sqrt(Math.abs(r * r - dx * dx))
//             el.attr('y1', 200 + dy)
//             el.attr('y2', i % 10 == 0 ? 220 + dy : 210 + dy)
//         } else {
//             el.attr('y1', 200)
//             el.attr('y2', i % 10 == 0 ? 220 : 210)
//         }
//         label.text(slider.attr('cx'))
//         label.attr('x', slider.attr('cx'))
//     })
// }

// pushLines()


///////////////////////////////////////////////////////////////////////////
// Lesson 14 Scale and Domain
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 300
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)


// let data = [10, 20, 30, 20, 20, 34, 54, 52, 34, 45, 444, 225, 555, 600]

// let scale = d3.scaleLinear()
//     .domain(d3.extent(data))
//     .range([50, 550] )

// console.log(scale(10)) // produces 50 maps to
// console.log(scale(600))  // produces 550 maps to


///////////////////////////////////////////////////////////////////////////
// Lesson 15 Linear Scale
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 300
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)


// let data = [10, 20, 30, 20, 20, 34, 54, 52, 34, 45, 444, 225, 555, 600]

// // ScaleLinear() converts the min and max in the data set to the domain and range set
// let scale = d3.scaleLinear()
//     .domain(d3.extent(data))
//     .rangeRound([50, 550])


// svg.selectAll('circle').data(data).enter().append('circle')
//     .attrs({
//         'cx': (d)=>scale(d),
//         'cy': 200, 
//         'r': 10,
//         'opacity': 0.5
//     })

// console.log(scale(10)) // produces 50 maps to
// console.log(scale(600))  // produces 550 maps to

///////////////////////////////////////////////////////////////////////////
// Lesson 16 Color Quantize, Quantile, Threshold
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 300
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)


// let data = [10, 12, 14, 17, 19, 20, 34, 54, 52, 34, 45, 444, 225, 555, 600]

// // ScaleLinear() converts the min and max in the data set to the domain and range set
// let scale = d3.scaleLinear()
//     .domain(d3.extent(data))
//     .rangeRound([50, 550])

// // Domain is continuous
// // let color = d3.scaleQuantize()
// //     .domain(d3.extent(data))
// //     .range(['red', 'blue', 'green', 'magenta'])

// // Domain is Discrete
// // let color = d3.scaleQuantile()
// //     .domain(d3.extent(data))
// //     .range(['red', 'blue', 'green'])

// // Domain First number is for all values under 52, next color if for values between 52 and 226 and last is for any values in data abov 226 which are green
// let color = d3.scaleThreshold()
//     .domain([52, 226])
//     .range(['red', 'blue', 'green'])


// svg.selectAll('circle').data(data).enter().append('circle')
//     .attrs({
//         'cx': (d)=>scale(d),
//         'cy': 150, 
//         'r': 10,
//         'opacity': 0.5,
//         'fill': (d)=>color(d)
//     })

///////////////////////////////////////////////////////////////////////////
// Lesson 16 ScaleBand and Bar Chart
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// let data = [10, 20, 30, 45, 55, 67, 70, 88, 90, 130, 150, 200]
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//             'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


// svg.selectAll('line').data([50, 550]).enter().append('line').attrs({
//     'x1': (d)=>d,
//     'x2': (d)=>d,
//     'y1': 50, 
//     'y2': 350,
//     'stroke': 'black'
// })

// let scaleY = d3.scaleLinear([0, d3.max(data)], [350, 50])

// let scaleX = d3.scaleBand()
//     .domain(months)
//     .range([50, 550])
//     .paddingOuter(0)
//     .paddingInner(0.4)

// svg.selectAll('rect').data(months).enter().append('rect').attrs({
//     'x': (d)=>scaleX(d),
//     'y': (d, i)=> scaleY(data[i]),
//     'width': scaleX.bandwidth(),
//     'height': (d, i)=> scaleY(0) - scaleY(data[i]),
//     'fill': 'orange'
// })

// // Scale Ordinal            
// let scale = d3.scaleOrdinal()
//     .domain(months)
//     .range(data)

///////////////////////////////////////////////////////////////////////////
// Lesson 17 ScalePoint
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// // let data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140]
// // let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
// //             'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

// svg.selectAll('line').data([50, 550]).enter().append('line').attrs({
//     'x1': (d)=>d,
//     'x2': (d)=>d,
//     'y1': 50,
//     'y2': 350,
//     'stroke': 'red'
// })

// let scaleY = d3.scaleLinear([0, d3.max(data)], [350, 50])

// let scaleX = d3.scalePoint()
//     .domain(months)
//     .range([50, 550])
//     .padding(0)

// svg.selectAll('circle').data(months).enter().append('circle').attrs({
//     'cx': (d)=>scaleX(d),
//     'cy': (d,i)=> scaleY(data[i]),
//     'r': 5,
//     'fill': 'orange'
// })

// console.log(scaleX.bandwidth())

///////////////////////////////////////////////////////////////////////////
// Lesson 18 Divergent Scale Example
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400,
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// // Domain needs to be 3 values!!!
// let scale = d3.scaleDiverging([0, 200, 600],d3.interpolateOrRd)

// svg.selectAll('line').data(d3.range(0,600,5)).enter().append('line').attrs({
//     'x1': (d)=>d,
//     'x2': (d)=>d,
//     'y1': 0,
//     'y2': 220,
//     'stroke': (d)=>scale(d)
// })

///////////////////////////////////////////////////////////////////////////
// Lesson 19 Scale Time
///////////////////////////////////////////////////////////////////////////


// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// let ts = d3.scaleTime()
//     .domain([new Date(2021, 0, 1),new Date(2021, 11, 31)])
//     .range([50, 350])

// let dFormat = d3.timeFormat('%Y.%m')

// let dates = ts.ticks(d3.timeMonth.every(1))

// // console.log(dates);

// svg.selectAll('text').data(dates).enter().append('text').attrs({
//     'x': 50,
//     'y': (d)=>ts(d)
// }).text((d)=>dFormat(d))

///////////////////////////////////////////////////////////////////////////
// Lesson 20 Time Axis
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600,
//     'height': 400
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// let data = [10, 20, 40, 50, 60, 70, 80, 90, 100, 100, 130, 140]
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//             'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

// let scaleX = d3.scalePoint(months, [50, 550])
// let scaleY = d3.scaleLinear(d3.extent(data), [350, 50])

// let axisX = d3.axisBottom(scaleX)
// let axisY = d3.axisLeft(scaleY)

// svg.append('g').attr('transform', 'translate(0, 350)').call(axisX).style('color', 'red')
// svg.append('g').attr('transform', 'translate(50, 0)').call(axisY).style('color', 'red')


///////////////////////////////////////////////////////////////////////////
// Lesson 21 Axis, Grid, Labels, Ticks!!!
///////////////////////////////////////////////////////////////////////////

let dim = {
    'width': 600,
    'height': 400
}

let svg = d3.select('body').append('svg')
    .style('background', 'floralwhite')
    .attrs(dim)

let data = [100, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500]
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

let scaleX = d3.scalePoint(months, [50, 550])
let scaleY = d3.scaleLinear(d3.extent(data), [350, 50])

let axisX = d3.axisBottom(scaleX)
let axisY = d3.axisLeft(scaleY)
let gridY = d3.axisLeft(scaleY)
axisY.ticks(8)
// axisY.tickValues([d3.min(data), 20, 50, 75, d3.max(data)])
axisY.tickFormat((d)=>'$'+ d)
axisX.tickSize(8)

gridY.tickSize(-505).tickFormat('').tickSizeOuter(0)
    

svg.append('g').attr('transform', 'translate(50, 0)').call(gridY)
    .selectAll('line')
                .attrs({
                    'stroke': 'lightgrey',
                    'stroke-dasharray': '5 3',
                    'opacity': '0.5'
                })

svg.append('g').attr('transform', 'translate(0, 350)').call(axisX).style('color', 'red')
    .selectAll('text')
        .attrs({
            'font-size': 12,
            'transform': 'rotate(-40)',
            'dy': '0.5em',
            'dx': '-1.6em'

        })
svg.append('g').attr('transform', 'translate(50, 0)').call(axisY).style('color', 'red')


///////////////////////////////////////////////////////////////////////////
// Lesson 22 Transitions and Animation, Loops
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600, 
//     'height': 300
// }


// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// let redball = svg.append('circle').attrs({
//     'cx': 100,
//     'cy': 200,
//     'r': 30,
//     'fill': 'orange'
// }).on('click', function(){
//     animate()
// })

// // Animate from large to small and change color
// function animate(){
//     let t = d3.transition()
//         .duration(1000)
//         // .ease(d3.easeElastic)
//     redball.transition(t)
//         .attrs({
//             'cx': 450,
//             'fill': 'blue',
//             'r': '15'
//         })
//         .transition(t)
//         .attrs({
//             'cx': 100,
//             'fill': 'orange',
//             'r': '30'
//         })
//         // Animate by looping
//         .on('end', animate)
// }

///////////////////////////////////////////////////////////////////////////
// Lesson 23 Ease Out Transitions
///////////////////////////////////////////////////////////////////////////

// let dim = {
//     'width': 600, 
//     'height': 300
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// let redball = svg.append('circle').attrs({
//     'cx': 100,
//     'cy': 200,
//     'r': 30,
//     'fill': 'orange'
// }).on('click', function(){
//     animate()
// })

// // Animate from large to small and change color
// function animate(){
//     let t = d3.transition()
//         .duration(1000)
//         .ease(d3.easeExpOut)
//     redball.transition(t)
//         .attrs({
//             'cx': 450,
//             'fill': 'blue',
//             'r': '15'
//         })
//         .transition(t)
//         .attrs({
//             'cx': 100,
//             'fill': 'orange',
//             'r': '30'
//         })
//         // Animate by looping
//         .on('end', animate)
// }

// console.log(d3.easeExpIn(0.5))


///////////////////////////////////////////////////////////////////////////
// Lesson 24 Bubble Chart with Changing Data
///////////////////////////////////////////////////////////////////////////


// let dim = { 
//     'width': 720, 
//     'height': 500
// }

// let svg = d3.select('body').append('svg')
//     .style('background', 'floralwhite')
//     .attrs(dim)

// d3.select('body').append('div').append('button').text('Change data')
// .on('click', changeData)

// let plotArea = {
//     'x': 50,
//     'y': 50,
//     'width': 620,
//     'height': 400
// }
// svg.append('clipPath').attr('id', 'plot-area')
//     .append('rect').attrs(plotArea)

// svg.append('g').attrs({
//     'transform': 'translate(0, 450)',
//     'id': 'x-grid',
//     'class': 'grid'
// })
// svg.append('g').attrs({
//     'transform': 'translate(50, 0)',
//     'id': 'y-grid',
//     'class': 'grid'
// })
// svg.append('g').attrs({
//     'transform': 'translate(0, 450)',
//     'id': 'x-axis'
// })
// svg.append('g').attrs({
//     'transform': 'translate(50, 0)',
//     'id': 'y-axis'
// })

// let container = svg.append('g').attr('clip-path', 'url(#plot-area)')

// svg.append('polyline').attrs({
//     'points': '50,50 670,50 670,450',
//     'stroke': 'black',
//     'fill': 'none'
// })


// let dataset
// changeData()

// function changeData(){
//     // dataset size random number from range 60 to 100
//     let size = Math.round(Math.random() * 40) + 60
//     // generate the data - an array of objects
//     dataset = []
//     for (let i = 0; i < size; i++) {
//         dataset.push({
//             weight: Math.round(Math.random() * 50) + 55,
//             height: Math.round(Math.random() * 30) + 160,
//         })
//     }
//     console.log(dataset)
//     draw()
// }

// function draw(){
//     let t = d3.transition().duration(2000)
//     // Scales
//     let scaleX = d3.scaleLinear(d3.extent(dataset, (d)=>d.weight), [50, 670])
//     let scaleY = d3.scaleLinear(d3.extent(dataset, (d)=>d.height), [450, 50])
//     let scaleS = d3.scaleSqrt()
//         .domain(d3.extent(dataset, (d)=>d.weight / d.height))
//         .range([8, 20])
//     let scaleC = d3.scaleDiverging(d3.interpolateMagma)
//         .domain([
//             d3.max(dataset, (d)=>d.weight / d.height),
//             d3.median(dataset, (d)=>d.weight / d.height),
//             d3.min(dataset, (d)=>d.weight / d.height)
//         ])

//     let gridX = d3.axisBottom(scaleX)
//     gridX.tickFormat('').tickSize(-400).tickSizeOuter(0)
//     d3.select('#x-grid').transition(t).call(gridX)
//     let gridY = d3.axisLeft(scaleY)
//     gridY.tickFormat('').tickSize(-620).tickSizeOuter(0)
//     d3.select('#y-grid').transition(t).call(gridY)
//     d3.selectAll('.grid').selectAll('line').attrs({
//         'stroke': 'lightgray',
//         'stroke-dasharray': '4 3'
//     })

//     let axisX = d3.axisBottom(scaleX)
//     d3.select('#x-axis').transition(t).call(axisX)
//     let axisY = d3.axisLeft(scaleY)
//     d3.select('#y-axis').transition(t).call(axisY)
    

//     // bubbles
//     let cAtts = {
//         'cx': (d)=>scaleX(d.weight),
//         'cy': (d)=>scaleY(d.height),
//         'r': (d)=>scaleS(d.weight / d.height),
//         'fill': (d)=>scaleC(d.weight / d.height),
//         'stroke': 'gray', 'opacity': 0.75
//     }
//     let circles = container.selectAll('circle').data(dataset)
//     circles.enter().append('circle').attrs({
//         'cx': (d)=>scaleX(d.weight),
//         'cy': (d)=>scaleY(d.height),
//         'r': 0 })
//         .transition(t).attrs(cAtts)
//     circles.transition(t).attrs(cAtts)
//     circles.exit().transition(t).attr('r', 0).remove()
// }

///////////////////////////////////////////////////////////////////////////
// Lesson 25 Force Simulation with Nodes
///////////////////////////////////////////////////////////////////////////

// let dim = { 'width': 600, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgrey')
//     .attrs(dim)
//     .on('click', clicked)

// let colors = ['orange', 'teal']
// let dataset = d3.range(100).map(function() {
//     return {
//         'r': Math.round(Math.random() * 10) + 5,
//         'color': colors[Math.round(Math.random())]
//     };
// });

// let sim = d3.forceSimulation(dataset)

// let nodes = svg.append('g').selectAll('circle').data(dataset)
//     .enter().append('circle').attrs({
//         'r': (d)=>d.r,
//         'fill': (d)=>d.color,
//         'stroke': 'black',
//     })

// sim.on('tick', function(d) {
//     nodes.attrs({
//         'cx': (d)=>d.x,
//         'cy': (d)=>d.y
//     })
// })

// sim.force('yForce', d3.forceY(200))
//     .force('center', d3.forceX(300))
//     .force('right', d3.forceX(500).strength(0))
//     .force('left', d3.forceX(100).strength(0))
//     .force('collide', d3.forceCollide().radius((d)=>d.r))

// sim.force('right').initialize(dataset.filter(function (d){
//     return d.color == 'teal'
// }))
// sim.force('left').initialize(dataset.filter(function (d){
//     return d.color == 'orange'
// }))

// sim.alphaDecay(0.08)
// sim.velocityDecay(0.2)

// let allInCenter = true
// function clicked() {
//     allInCenter = !allInCenter
//     if (allInCenter) {
//         sim.force('right').strength(0)
//         sim.force('left').strength(0)
//         sim.force('center').strength(0.1)
//         sim.alpha(1).restart()
//     } else {
//         sim.force('right').strength(0.1)
//         sim.force('left').strength(0.1)
//         sim.force('center').strength(0)
//         sim.alpha(1).restart()
//     }
// }

///////////////////////////////////////////////////////////////////////////
// Lesson 26 Radial Clusters and Transitions
///////////////////////////////////////////////////////////////////////////

// let ix = 0
// let dim = { 'width': 600, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgrey')
//     .attrs(dim)
//     .on('click', function(){
//         if (ix == 0) {
//             ix++
//             verticalCluster()
//         } else if (ix == 1) {
//             ix++
//             horizontalTree()
//         } else if (ix == 2) {
//             ix++
//             horizontalCluster()
//         } else if (ix == 3) {
//             ix++
//             radialTree()
//         } else if (ix == 4) {
//             ix++
//            radialCluster()
//         } else if (ix == 5) {
//             ix = 0
//             verticalTree()
//         }
//     })


// let data = {
//     'name': 'Root', 'child': [
//         {'name': 'A', 'child': [{'name': 'A1'}, {'name': 'A2'}]},
//         {'name': 'B'},
//         {'name': 'C', 'child': [{'name': 'C1'}, {'name': 'C2'}]},
//         {'name': 'D'}
//     ]
// }

// let rootNode = d3.hierarchy(data, d=>d.child)

// console.log(rootNode.links())
// console.log(rootNode.descendants())

// let g = svg.append('g').attr('transform', 'translate(50, 50)')

// let links = g.selectAll('path').data(rootNode.links()).enter()
//     .append('path').attrs({'fill': 'none', 'stroke': 'gray'})
// let dots = g.selectAll('circle').data(rootNode.descendants()).enter()
//     .append('circle').attrs({'fill': 'red', 'stroke': 'gray', 'r': 3})
// let labels = g.selectAll('text').data(rootNode.descendants()).enter()
//     .append('text').attr('text-anchor', 'middle')


// function verticalTree() {
//    g.transition().duration(2000).attr('transform', 'translate(50, 50)')
//    let layout = d3.tree().size([500, 300])
//    layout(rootNode)
//    links.data(rootNode.links()).transition().duration(2000)
//     .attr('d', d3.linkVertical().x(d=>d.x).y(d=>d.y))
//    dots.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'cx': d=>d.x, 'cy': d=>d.y})
//    labels.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'x': d=>d.x, 'y': d=>d.y - 10 }).text(d=>d.data.name)
// }



// function verticalCluster() {
//     g.transition().duration(2000).attr('transform', 'translate(50, 50)')
//    let layout = d3.cluster().size([500, 300])
//    layout(rootNode)
//    links.data(rootNode.links()).transition().duration(2000)
//     .attr('d', d3.linkVertical().x(d=>d.x).y(d=>d.y))
//    dots.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'cx': d=>d.x, 'cy': d=>d.y})
//    labels.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'x': d=>d.x, 'y': d=>d.y - 10 }).text(d=>d.data.name)
// }


// function horizontalTree() {
//     g.transition().duration(2000).attr('transform', 'translate(50, 50)')
//    let layout = d3.tree().size([300, 500])
//    layout(rootNode)
//    links.data(rootNode.links()).transition().duration(2000)
//     .attr('d', d3.linkHorizontal().x(d=>d.y).y(d=>d.x))
//    dots.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'cx': d=>d.y, 'cy': d=>d.x})
//    labels.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'x': d=>d.y, 'y': d=>d.x - 10 }).text(d=>d.data.name)
// }


// function horizontalCluster() {
//     g.transition().duration(2000).attr('transform', 'translate(50, 50)')
//    let layout = d3.cluster().size([300, 500])
//    layout(rootNode)
//    links.data(rootNode.links()).transition().duration(2000)
//     .attr('d', d3.linkHorizontal().x(d=>d.y).y(d=>d.x))
//    dots.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'cx': d=>d.y, 'cy': d=>d.x})
//    labels.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'x': d=>d.y, 'y': d=>d.x - 10 }).text(d=>d.data.name)
// }


// function radialTree() {
//     g.transition().duration(2000).attr('transform', 'translate(300, 200)')
//    let layout = d3.tree().size([Math.PI * 2, 150])
//    layout(rootNode)
//    links.data(rootNode.links()).transition().duration(2000)
//     .attr('d', d3.linkRadial().angle(d=>d.x).radius(d=>d.y))
//    dots.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'cx': d=>radialPt(d.x, d.y)[0], 'cy': d=>radialPt(d.x, d.y)[1]})
//    labels.data(rootNode.descendants()).transition().duration(2000)
//     .attrs({'x': d=>radialPt(d.x, d.y)[0], 'y': d=>radialPt(d.x, d.y)[1] - 10 }).text(d=>d.data.name)
// }


// function radialCluster() {
//     g.transition().duration(2000).attr('transform', 'translate(300, 200)')
//     let layout = d3.cluster().size([Math.PI * 2, 150])
//     layout(rootNode)
//     links.data(rootNode.links()).transition().duration(2000)
//      .attr('d', d3.linkRadial().angle(d=>d.x).radius(d=>d.y))
//     dots.data(rootNode.descendants()).transition().duration(2000)
//      .attrs({'cx': d=>radialPt(d.x, d.y)[0], 'cy': d=>radialPt(d.x, d.y)[1]})
//     labels.data(rootNode.descendants()).transition().duration(2000)
//      .attrs({'x': d=>radialPt(d.x, d.y)[0], 'y': d=>radialPt(d.x, d.y)[1] - 10 }).text(d=>d.data.name)
// }

// verticalTree()

// function radialPt(x, y) {
//     return [y * Math.cos(x -= Math.PI / 2), y * Math.sin(x)]
// }

///////////////////////////////////////////////////////////////////////////
// Lesson 27 Line Generator
///////////////////////////////////////////////////////////////////////////

// let dim = { 'width': 600, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgrey')
//     .attrs(dim)
//     .on('click', function(d) {
//         ix++
//         ix = (ix === curves.length)? 0 : ix
//         lineGenerator.curve(curves[ix][1])
//         svg.select('path').attr('d', lineGenerator(dataset))
//         svg.select('text').text(curves[ix][0])
//     })

// let dataset = [[100, 200], [150, 100], [200, 150], [250, 300],
//                [300, 120], [350, 200], [400, 100], [450, 250]]

// let points = svg.append('g').selectAll('circle').data(dataset).enter()
//     .append('circle').attrs({'r': 5, 'cx': (d)=>d[0], 'cy': (d)=>d[1],
//                              'fill': 'red'})

// svg.append('text').attrs({'x': 20, 'y': 20})

// let lineGenerator = d3.line()
// lineGenerator.x((d)=>d[0])
// lineGenerator.y((d)=>d[1])

// lineGenerator.curve(d3.curveCardinal.tension(0))

// svg.append('path').attrs({
//     'd': lineGenerator(dataset),
//     'stroke': 'black',
//     'stroke-width': 2,
//     'fill': 'none'
// })

// let ix = 0
// let curves = [
//     ['curveBasis', d3.curveBasis],
//     ['curveBasisClosed', d3.curveBasisClosed],
//     ['curveBasisOpen', d3.curveBasisOpen],
//     ['curveBundle', d3.curveBundle],
//     ['curveCardinal', d3.curveCardinal],
//     ['curveCardinalClosed', d3.curveCardinalClosed],
//     ['curveCardinalOpen', d3.curveCardinalOpen],
//     ['curveCatmullRom', d3.curveCatmullRom],
//     ['curveCatmullRomClosed', d3.curveCatmullRomClosed],
//     ['curveCatmullRomOpen', d3.curveCatmullRomOpen],
//     ['curveLinear', d3.curveLinear],
//     ['curveLinearClosed', d3.curveLinearClosed],
//     ['curveMonotoneX', d3.curveMonotoneX],
//     ['curveMonotoneY', d3.curveMonotoneY],
//     ['curveNatural', d3.curveNatural],
//     ['curveStep', d3.curveStep],
//     ['curveStepAfter', d3.curveStepAfter],
//     ['curveStepBefore', d3.curveStepBefore]
// ]


///////////////////////////////////////////////////////////////////////////
// Lesson 28 Area Generator
///////////////////////////////////////////////////////////////////////////

// let dim = { 'width': 600, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgrey')
//     .attrs(dim)
//     .on('click', function(d) {
//         ix++
//         ix = (ix === curves.length)? 0 : ix
//         areaGenerator.curve(curves[ix][1])
//         svg.select('path').attr('d', areaGenerator(dataset))
//         svg.select('text').text(curves[ix][0])
//     })

// let dataset = [[100, 200], [150, 100], [200, 150], [250, 300],
//                [300, 120], [350, 200], [400, 100], [450, 250]]

// let points = svg.append('g').selectAll('circle').data(dataset).enter()
//     .append('circle').attrs({'r': 5, 'cx': (d)=>d[0], 'cy': (d)=>d[1],
//                              'fill': 'red'})

// svg.append('text').attrs({'x': 20, 'y': 20})

// let areaGenerator = d3.area()

// areaGenerator.y0(200)

// areaGenerator.curve(d3.curveCardinal.tension(.5))

// svg.append('path').attrs({
//     'd': areaGenerator(dataset),
//     'fill': 'gray'
// })

// let ix = 0
// let curves = [
//     ['curveBasis', d3.curveBasis],
//     // ['curveBasisClosed', d3.curveBasisClosed],
//     ['curveBasisOpen', d3.curveBasisOpen],
//     ['curveCardinal', d3.curveCardinal],
//     // ['curveCardinalClosed', d3.curveCardinalClosed],
//     ['curveCardinalOpen', d3.curveCardinalOpen],
//     ['curveCatmullRom', d3.curveCatmullRom],
//     // ['curveCatmullRomClosed', d3.curveCatmullRomClosed],
//     ['curveCatmullRomOpen', d3.curveCatmullRomOpen],
//     ['curveLinear', d3.curveLinear],
//     // ['curveLinearClosed', d3.curveLinearClosed],
//     ['curveMonotoneX', d3.curveMonotoneX],
//     ['curveMonotoneY', d3.curveMonotoneY],
//     ['curveNatural', d3.curveNatural],
//     ['curveStep', d3.curveStep],
//     ['curveStepAfter', d3.curveStepAfter],
//     ['curveStepBefore', d3.curveStepBefore]
// ]


///////////////////////////////////////////////////////////////////////////
// Lesson 29 Arc and Pie Generator
///////////////////////////////////////////////////////////////////////////

// let dim = { 'width': 600, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgrey')
//     .attrs(dim)


// let arcGen = d3.arc()
// arcGen.innerRadius(80).outerRadius(120) // .cornerRadius(10)

// let data = [10, 15, 35, 40, 42, 50]
// let colors = d3.schemeOranges[data.length]

// let arcs = d3.pie()(data)
// // arcs = arcs(data)
// console.log(arcs) 

// svg.selectAll('path').data(arcs).enter().append('path')
//     .attrs({
//         'd': arcGen,  // same as 'd': d=>arcGen(d)
//         'stroke': 'black',
//         'fill': (d, i)=>colors[i],
//         'transform': 'translate(300,200)'
//     })

// arcs.forEach((d)=>{
//     console.log(arcGen.centroid(d))
// })


// svg.selectAll('circle').data(arcs).enter().append('circle')
//     .attrs({
//         'r': 2,
//         'cx': (d)=>arcGen.centroid(d)[0],
//         'cy': (d)=>arcGen.centroid(d)[1],
//         'transform': 'translate(300,200)'
//     })


///////////////////////////////////////////////////////////////////////////
// Lesson 30 Stacks
///////////////////////////////////////////////////////////////////////////


// import * as d3 from 'd3'
// import { attrs } from 'd3-selection-multi'
// import { color } from 'd3'


// let dim = { 'width': 600, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     .style('background', 'lightgrey')
//     .attrs(dim)

// let data = [
//     {a: 40, b: 30, c: 10, d: 50},
//     {a: 45, b: 31, c: 10, d: 50},
//     {a: 42, b: 34, c: 0, d: 0},
//     {a: 38, b: 29, c: 15, d: 40},
//     {a: 21, b: 25, c: 20, d: 52},
//     {a: 40, b: 12, c: 18, d: 4},
//     {a: 30, b: 0, c: 16, d: 38},
//     {a: 35, b: 22, c: 22, d: 45},
//     {a: 35, b: 28, c: 64, d: 42},
//     {a: 36, b: 34, c: 30, d: 41},
// ]

// let stack = d3.stack().keys(['a', 'b', 'c', 'd'])
// let stackedData = stack(data)

// console.log(stackedData)

// let minV = d3.min(stackedData, d=>d3.min(d, d=>d3.min(d)))
// let maxV = d3.max(stackedData, d=>d3.max(d, d=>d3.max(d)))

// let scaleX = d3.scaleLinear([0, 9], [0, 600])
// let scaleY = d3.scaleLinear([minV, maxV], [350, 50])
// let colors = d3.schemeSpectral[stackedData.length]

// let area = d3.area()
//     .x((d, i)=>scaleX(i))
//     .y0(d=>scaleY(d[0]))
//     .y1(d=>scaleY(d[1]))
//     .curve(d3.curveBasis)

// svg.selectAll('path').data(stackedData).enter().append('path').attrs({
//     'stroke': 'black',
//     'fill': (d, i)=> colors[i],
//     'd': area
// })

// let order = svg.append('text').attrs({
//     'x': 20,
//     'y': 25,
//     'alignment-baseline': 'middle'
// }).text('order')
//     .on('click', function(){
//         if (order.text() == 'order') {
//             order.text('d3.stackOrderAppearance')
//             stack.order(d3.stackOrderAppearance)
//         } else if (order.text() == 'd3.stackOrderAppearance') {
//             order.text('d3.stackOrderAscending')
//             stack.order(d3.stackOrderAscending)
//         } else if (order.text() == 'd3.stackOrderAscending') {
//             order.text('d3.stackOrderDescending')
//             stack.order(d3.stackOrderDescending)
//         } else if (order.text() == 'd3.stackOrderDescending') {
//             order.text('d3.stackOrderInsideOut')
//             stack.order(d3.stackOrderInsideOut)
//         } else if (order.text() == 'd3.stackOrderInsideOut') {
//             order.text('d3.stackOrderNone')
//             stack.order(d3.stackOrderNone)
//         } else if (order.text() == 'd3.stackOrderNone') {
//             order.text('d3.stackOrderReverse')
//             stack.order(d3.stackOrderReverse)
//         } else if (order.text() == 'd3.stackOrderReverse') {
//             order.text('d3.stackOrderAppearance')
//             stack.order(d3.stackOrderAppearance)
//         }
//         stackedData = stack(data)
//         minV = d3.min(stackedData, d=>d3.min(d, d=>d3.min(d))) 
//         maxV = d3.max(stackedData, d=>d3.max(d, d=>d3.max(d)))
//         scaleX = d3.scaleLinear([0, 9], [0, 600])
//         scaleY = d3.scaleLinear()
//             .domain([minV, maxV]).range([350, 50])
//         svg.selectAll('path').data(stackedData)
//             .transition().duration(2000)
//             .attr('d', area)
//     })

// let offset = svg.append('text').attrs({
//     'x': 20,
//     'y': 375,
//     'alignment-baseline': 'middle'
// }).text('offset')
// .on('click', function(){
//     if (offset.text() == 'offset') {
//         offset.text('d3.stackOffsetExpand')
//         stack.offset(d3.stackOffsetExpand)
//     } else if (offset.text() == 'd3.stackOffsetExpand') {
//         offset.text('d3.stackOffsetDiverging')
//         stack.offset(d3.stackOffsetDiverging)
//     } else if (offset.text() == 'd3.stackOffsetDiverging') {
//         offset.text('d3.stackOffsetNone')
//         stack.offset(d3.stackOffsetNone)
//     } else if (offset.text() == 'd3.stackOffsetNone') {
//         offset.text('d3.stackOffsetSilhouette')
//         stack.offset(d3.stackOffsetSilhouette)
//     } else if (offset.text() == 'd3.stackOffsetSilhouette') {
//         offset.text('d3.stackOffsetWiggle')
//         stack.offset(d3.stackOffsetWiggle)
//     } else if (offset.text() == 'd3.stackOffsetWiggle') {
//         offset.text('d3.stackOffsetExpand')
//         stack.offset(d3.stackOffsetExpand)
//     }
//     stackedData = stack(data)
//     minV = d3.min(stackedData, d=>d3.min(d, d=>d3.min(d))) 
//     maxV = d3.max(stackedData, d=>d3.max(d, d=>d3.max(d)))
//     scaleX = d3.scaleLinear([0, 9], [0, 600])
//     scaleY = d3.scaleLinear()
//         .domain([minV, maxV]).range([350, 50])
//     svg.selectAll('path').data(stackedData)
//         .transition().duration(2000)
//         .attr('d', area)
// })

///////////////////////////////////////////////////////////////////////////
// Lesson 31 Interactive Stacks
///////////////////////////////////////////////////////////////////////////


// let dim = { 'width': 770, 'height': 400 }
// let svg = d3.select('body').append('svg')
//     // .style('background', 'lightgrey')
//     .attrs(dim)

// d3.json('data.json').then(d=>main(d))

// let menu = d3.select('body').append('select')

// let axisContainer = svg.append('g').attrs({
//     'id': 'axis',
//     'transform': 'translate(0, 360)'
// })

// let pathsContainer = svg.append('g')
// let legendContainer = svg.append('g')

// function main(dataset) {
//     let options = menu.selectAll('options').data(Object.keys(dataset))
//     options.enter().append('option').attr('value', d=>d).text(d=>d)
//     options.exit().remove()
//     menu.on('change', function(){
//         draw(dataset[menu.select('option:checked').text()])
//     })
//     draw(dataset[menu.select('option:checked').text()])
// }

// function draw(data) {
//     console.log(data)
//     let t = d3.transition().duration(1000)
//     let stack = d3.stack().keys(Object.keys(data[0]))
//     stack.order(d3.stackOrderReverse)
//     stack.offset(d3.stackOffsetSilhouette)
//     let stackData = stack(data)
//     console.log(stackData)
//     let minV = d3.min(stackData, d=>d3.min(d, d=>d3.min(d)))
//     let maxV = d3.max(stackData, d=>d3.max(d, d=>d3.max(d)))

//     let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750])
//     let scaleY = d3.scaleLinear([minV, maxV], [300, 50])
//     let colors = d3.schemeOrRd[stackData.length]

//     let axis = d3.axisBottom(scaleX)
//     axis.ticks(data.length)
//     axis.tickFormat(d=>`CW${d + 1}`)
//     axis.tickSize(-330)

//     axisContainer.call(axis)
//         .call(d=>d.select('.domain').remove())
//         .selectAll('line').attrs({
//             'stroke': 'gray',
//             'stroke-dasharray': '6 3'
//         })

//     let area = d3.area()
//         .x((d, i)=>scaleX(i))
//         .y0(d=>scaleY(d[0]))
//         .y1(d=>scaleY(d[1]))
//         .curve(d3.curveCatmullRom)

//     let paths = pathsContainer.selectAll('path').data(stackData)
//     let attributes = {
//         'd': area,
//         'stroke': 'gray',
//         'fill': (d, i)=>colors[i],
//         'fill-opacity': 0.75,
//         'id': (d, i)=>Object.keys(data[0])[i]
//     }
//     paths.enter().append('path').attrs(attributes)
//         .on('mousemove', updateLabels)
//         .on('mouseleave', resetLabels)
//     paths.transition(t).attrs(attributes)
//     paths.on('mousemove', updateLabels)
//         .on('mouseleave', resetLabels)
//     paths.exit().remove()

//     let markers = svg.selectAll('circle')
//         .data(d3.range(stackData.length + 1))
//     markers.enter().append('circle').attrs({
//         'cx': -10, 'cy': -10, 'r': 3, 'fill': 'darkred'
//     })

//     function updateLabels() {
//         let ix = Math.round(scaleX.invert(d3.event.x))
//         let txt = Object.keys(data[ix])
//         let markerNodes = d3.selectAll('circle').nodes()
//         for (let i = 0; i < txt.length; i++) {
//             d3.select('#label' + txt[i])
//                 .text(txt[i] + ': ' + data[ix][txt[i]])
//             // markers update
//             d3.select(markerNodes[i]).attrs({
//                 'cx': scaleX(ix),
//                 'cy': scaleY(stackData[i][ix][0])
//             })
//         }
//         d3.select(markerNodes[txt.length]).attrs({
//             'cx': scaleX(ix),
//             'cy': scaleY(stackData[0][ix][1])
//         })
//     }

//     function resetLabels() {
//         let txt = Object.keys(data[0])
//         for (let i = 0; i < txt.length; i++) {
//             d3.select('#label' + txt[i]).text(txt[i])
//         }
//         d3.selectAll('circle').attrs({ 'cx': -10, 'cy': -10 })
//     }

//     let rects = legendContainer.selectAll('rect').data(Object.keys(data[0]))
//     attributes = {
//         'stroke': 'gray',
//         'fill': (d, i)=>colors[i],
//         'fill-opacity': 0.75,
//         'width': 12,
//         'height': 12,
//         'x': 10
//     }
//     rects.enter().append('rect').attrs(attributes)
//         .attr('y', (d, i)=>100 + i * 22)
//     rects.exit().remove()

//     let legend = legendContainer.selectAll('text').data(Object.keys(data[0]))
//     attributes = {
//         'fill': 'gray', 'alignment-baseline': 'hanging',
//         'x': 26
//     }
//     legend.enter().append('text').attrs(attributes)
//         .attr('y', (d, i)=>100 + i * 22 ).text(d=>d)
//         .attr('id', (d)=>'label' + d)
//     legend.text(d=>d)
// }