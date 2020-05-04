const div1 = d3.select('body')
const div2 = d3.select('body')
const div3 = d3.select('body')
const margin = {top: 100, right: 100, bottom: 100, left: 100}
const width = window.innerWidth - margin.right - margin.left
const height = window.innerHeight - margin.top - margin.bottom

const svg1 = div1.append('svg')
    .attr('width', width +  margin.left +  margin.right)
    .attr('height', height + margin.top  + margin.bottom)
    .style('background-color', "black")
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.bottom})`)
     
const svg2 = div2.append('svg')
    .attr('width', width +  margin.left +  margin.right)
    .attr('height', height + margin.top  + margin.bottom)
    .style('background-color', "black")
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.bottom})`)

const svg3 = div3.append('svg')
    .attr('width', width +  margin.left +  margin.right)
    .attr('height', height + margin.top  + margin.bottom)
    .style('background-color', "black")
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.bottom})`)

const data1 = Array(5).fill().map(() => d3.randomUniform(1)())
const data2 = Array(20).fill().map(() => d3.randomUniform(1)())
const data3 = Array(100).fill().map(() => d3.randomUniform(1)())


const curves = [
    'curveLinear',
    'curveBasis',
    'curveBundle',
    'curveCardinal',
    'curveCatmullRom',
    'curveMonotoneX',
    'curveMonotoneY',
    'curveNatural',
    'curveStep',
    'curveStepAfter',
    'curveStepBefore',
    'curveBasisClosed',
]

const xScale = d3.scaleLinear()
    .domain([0, data1.length -1])
    .range([0, width])

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data1)])
    .range([height, 0])

const xScale2 = d3.scaleLinear()
    .domain([0, data2.length -1])
    .range([0, width])

const yScale2 = d3.scaleLinear()
    .domain([0, d3.max(data2)])
    .range([height, 0])

const xScale3 = d3.scaleLinear()
    .domain([0, data3.length -1])
    .range([0, width])

const yScale3 = d3.scaleLinear()
    .domain([0, d3.max(data3)])
    .range([height, 0])


const line1 = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3[curves[4]])

const line2 = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3[curves[2]])

const line3 = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3[curves[8]])

const line4 = d3.line()
    .x((d, i) => xScale2(i))
    .y(d => yScale2(d))
    .curve(d3[curves[4]])

const line5 = d3.line()
    .x((d, i) => xScale2(i))
    .y(d => yScale2(d))
    .curve(d3[curves[2]])

const line6 = d3.line()
    .x((d, i) => xScale2(i))
    .y(d => yScale2(d))
    .curve(d3[curves[8]])

const line7 = d3.line()
    .x((d, i) => xScale3(i))
    .y(d => yScale3(d))
    .curve(d3[curves[4]])

const line8 = d3.line()
    .x((d, i) => xScale3(i))
    .y(d => yScale3(d))
    .curve(d3[curves[2]])

const line9 = d3.line()
    .x((d, i) => xScale3(i))
    .y(d => yScale3(d))
    .curve(d3[curves[8]])

const path = svg1.append ('path')
    .datum(data1)
    .style('stroke', "red")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line1)

const path2 = svg1.append ('path')
    .datum(data1)
    .style('stroke', "white")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line2)

const path3 = svg1.append ('path')
    .datum(data1)
    .style('stroke', "grey")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line3)

const path4 = svg2.append ('path')
    .datum(data2)
    .style('stroke', "red")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line4)

const path5 = svg2.append ('path')
    .datum(data2)
    .style('stroke', "white")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line5)

const path6 = svg2.append ('path')
    .datum(data2)
    .style('stroke', "grey")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line6)

const path7 = svg3.append ('path')
    .datum(data3)
    .style('stroke', "red")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line7)

const path8 = svg3.append ('path')
    .datum(data3)
    .style('stroke', "white")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line8)

const path9 = svg3.append ('path')
    .datum(data3)
    .style('stroke', "grey")
    .style('stroke-width', 2)
    .style('fill', 'none')
    .attr('d', line9)

const totalLength = path.node().getTotalLength()
path
    .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
    .attr('stroke-dashoffset', totalLength)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength2 = path2.node().getTotalLength()
path2
    .attr('stroke-dasharray', `${totalLength2} ${totalLength2}`)
    .attr('stroke-dashoffset', totalLength2)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength3 = path3.node().getTotalLength()
path3
    .attr('stroke-dasharray', `${totalLength3} ${totalLength3}`)
    .attr('stroke-dashoffset', totalLength3)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength4 = path4.node().getTotalLength()
path4
    .attr('stroke-dasharray', `${totalLength4} ${totalLength4}`)
    .attr('stroke-dashoffset', totalLength4)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength5 = path5.node().getTotalLength()
path5
    .attr('stroke-dasharray', `${totalLength5} ${totalLength5}`)
    .attr('stroke-dashoffset', totalLength5)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength6 = path6.node().getTotalLength()
path6
    .attr('stroke-dasharray', `${totalLength6} ${totalLength6}`)
    .attr('stroke-dashoffset', totalLength6)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength7 = path7.node().getTotalLength()
path7
    .attr('stroke-dasharray', `${totalLength7} ${totalLength7}`)
    .attr('stroke-dashoffset', totalLength7)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)

const totalLength8 = path8.node().getTotalLength()
path8
    .attr('stroke-dasharray', `${totalLength8} ${totalLength8}`)
    .attr('stroke-dashoffset', totalLength8)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)


const totalLength9 = path9.node().getTotalLength()
path9
    .attr('stroke-dasharray', `${totalLength9} ${totalLength9}`)
    .attr('stroke-dashoffset', totalLength9)
    .transition().duration(5000)
    .ease(d3.easeQuad)
    .attr('stroke-dashoffset', 0)