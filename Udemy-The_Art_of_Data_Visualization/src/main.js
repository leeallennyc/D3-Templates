import * as d3 from 'd3'


let d = [1, 2, 3, 4, 5]

let body = d3.select('body');

let s = body.selectAll('p').data(d).text((d)=>"I'm the paragraph no. " + d);
console.log(s)

s.enter().append('p').text((d)=>"I'm the paragraph no. " + d);


d = [10, 20, 30]

s = body.selectAll('p').data(d).text((d)=>"I'm the paragraph no. " + d);
s.exit().remove();


