import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Fun extends Component {
    componentDidMount() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const svg = d3.select('.fun')
            .append('svg')
                .attr('width', width)
                .attr('height', height);

        svg.on('click', () => {
            const x = Math.random() * width;
            const y = Math.random() * height;
            svg.append('svg:image')
                .attr('x', x)
                .attr('y', y)
                .attr('width', '50')
                .attr('height', '50')
                .attr('xlink:href', 'burger.png')
                .attr('opacity', 0)
                .transition()
                    .duration(Math.random() * 700)
                    .ease(d3.easeBounceIn)
                    .attr('opacity', 1)
        })

        svg.append('text')
            .attr('x', width/2)
            .attr('y', height/2)
            .text("Click to add a burger! 🍔")
            .attr('text-anchor', 'middle')
    }
    
    render() {
        return (
            <div className='fun'>
                
            </div>
        )
    }
}
