// src/D3Cloud.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Cloud = ({ data }) => {
  const svgRef = useRef(null);
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const width = 800;
    const height = 800;
    const radius = 15;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', 'black')
      .on('mousemove', (event) => {
        const [x, y] = d3.pointer(event);
        cursorPosition.current = { x, y };
      });

    const center = { x: width / 2, y: height / 2 };

    // Initialize positions with random angles
    data.forEach(d => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 200;
      d.x = center.x + distance * Math.cos(angle);
      d.y = center.y + distance * Math.sin(angle);
    });

    const drag = d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    const simulation = d3.forceSimulation(data)
      .force('center', d3.forceCenter(center.x, center.y))
      .force('charge', d3.forceManyBody().strength(5))
      .force('collision', d3.forceCollide().radius(radius + 5))
      .on('tick', () => {
        // Apply rotation
        const alpha = simulation.alpha() * 0.1; // Adjust this value to control rotation speed
        data.forEach(d => {
          const dx = d.x - center.x;
          const dy = d.y - center.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) + alpha;
          d.x = center.x + distance * Math.cos(angle);
          d.y = center.y + distance * Math.sin(angle);
        });

        // Apply repel force
        data.forEach(d => {
          const dx = d.x - cursorPosition.current.x;
          const dy = d.y - cursorPosition.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const strength = 0.5; // Adjust this value for more repel
            d.vx += strength * (dx / distance);
            d.vy += strength * (dy / distance);
          }
        });

        ticked();
      });

    function ticked() {
      const lines = svg.selectAll('line')
        .data(data)
        .join('line')
        .attr('x1', center.x)
        .attr('y1', center.y)
        .attr('x2', d => d.x)
        .attr('y2', d => d.y)
        .attr('stroke', 'white')
        .attr('stroke-dasharray', '4 2');

      const circles = svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', radius)
        .attr('fill', 'white')
        .attr('stroke', 'white')
        .call(drag);

      const images = svg.selectAll('image')
        .data(data)
        .join('image')
        .attr('xlink:href', d => d.image)
        .attr('width', radius * 2)
        .attr('height', radius * 2)
        .attr('x', d => d.x - radius)
        .attr('y', d => d.y - radius)
        .attr('clip-path', `circle(${radius}px at ${radius}px ${radius}px)`)
        .on('mouseover', (event, d) => {
          d3.select('#tooltip')
            .style('left', `${event.pageX + 5}px`)
            .style('top', `${event.pageY + 5}px`)
            .style('opacity', 1)
            .text(d.description);
        })
        .on('mouseout', () => {
          d3.select('#tooltip')
            .style('opacity', 0);
        })
        .call(drag);
    }
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div id="tooltip" style={{
        position: 'absolute',
        textAlign: 'center',
        width: 'auto',
        padding: '5px',
        font: '12px sans-serif',
        background: 'lightsteelblue',
        border: '0px',
        borderRadius: '8px',
        pointerEvents: 'none',
        opacity: 0,
      }}></div>
    </div>
  );
};

export default D3Cloud;
