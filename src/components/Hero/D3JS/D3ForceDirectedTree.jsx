import React, { useEffect, useRef, useContext } from 'react';
import { MyContext } from '../../../MyContext';
import * as d3 from 'd3';

const ForceDirectedTree = ({ data, mouseStrength }) => {
    const { isMobile } = useContext(MyContext);
    const svgRef = useRef();
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    useEffect(() => {
        const width = isMobile ? window.innerWidth + 10 : 800; // Taille initiale du SVG
        const height = isMobile ? window.innerHeight + 20 : 800; // Taille initiale du SVG
        const rootWH = isMobile ? 80 : 160;
        const centerWH = isMobile ? 7 : 15;
        const nodeWH = isMobile ? 10 : 20;
        const force = isMobile ? -600 : -300;
        const linkDist = isMobile ? 100 : 10;

        // Clear previous SVG content
        d3.select(svgRef.current).selectAll('*').remove();

        // Find the root node
        const rootNode = data.nodes.find(node => node.group === 'root');

        // Create the simulation
        const simulation = d3.forceSimulation(data.nodes)
            .force('link', d3.forceLink(data.links).id(d => d.id).distance(linkDist))
            .force('charge', d3.forceManyBody().strength(force))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('gravity', d3.forceRadial(0.1, rootNode.x, rootNode.y).strength(d => {
                return d.group === 'center' ? 0.2 : 0.18;
            }))
            .force('mouse', d3.forceRadial(100, width / 2, height / 2).strength(mouseStrength));

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        // Définition des clipPaths pour les cercles
        const defs = svg.append('defs');

        defs.selectAll('clipPath')
            .data(data.nodes)
            .enter().append('clipPath')
            .attr('id', d => `clip-${d.id}`)
            .append('circle')
            .attr('r', d => {
                if (d.group === 'root') {
                    return rootWH; 
                } else if (d.group === 'center') {
                    return centerWH; 
                } else {
                    return nodeWH; 
                }
            }); // Rayon du cercle pour clipPath

        // Draw the links
        const link = svg.append('g')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .selectAll('line')
            .data(data.links)
            .enter().append('line')
            .attr('stroke-width', d => Math.sqrt(d.value));

        // Draw the nodes
        const node = svg.append('g')
            .selectAll('g')
            .data(data.nodes)
            .enter().append('g')
            .call(drag(simulation));

        // Add circles to nodes
        const circles = node.append('circle')
            .attr('r', d => {
                if (d.group === 'root') {
                    return rootWH; 
                } else if (d.group === 'center') {
                    return centerWH; 
                } else {
                    return nodeWH; 
                }
            }) // Définit le rayon de 80 pour la racine, 20 pour les autres
            .attr('fill', '#1e2937') // Couleur différente pour la racine
            .attr('stroke', '#1e2937')
            .attr('class', d => {
                if (d.group === 'center') {
                    return 'center';
                }
            })
            .attr('id', d => `node-${d.id}`)
            .attr('stroke-width', 1.5)
            .attr('style', 'transition: all 0.3s ease-in-out;');

        // Add images to nodes inside circles using clipPath
        const images = node.append('image')
            .attr('xlink:href', d => d.img)
            .attr('x', d => {
                if (d.group === 'root') {
                    return (rootWH * -1); 
                } else if (d.group === 'center') {
                    return (centerWH * -1 / 1.35); 
                } else {
                    return (nodeWH * -1.50 / 2); 
                }
            })
            .attr('y', d => {
                if (d.group === 'root') {
                    return (rootWH * -1); 
                } else if (d.group === 'center') {
                    return (centerWH * -1 / 1.35); 
                } else {
                    return (nodeWH * -1.50 / 2); 
                }
            })
            .attr('height', d => {
                if (d.group === 'root') {
                    return (rootWH * 2); 
                } else if (d.group === 'center') {
                    return (centerWH * 1.5); 
                } else {
                    return (nodeWH * 1.5); 
                }
            })
            .attr('width', d => {
                if (d.group === 'root') {
                    return (rootWH * 2); 
                } else if (d.group === 'center') {
                    return (centerWH * 1.5); 
                } else {
                    return (nodeWH * 1.5); 
                }
            })
            .attr('clip-path', d => `url(#clip-${d.id})`); // Applique le clipPath correspondant

        // Simulation tick function
        simulation.on('tick', () => {
            // Update links
            link.attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            // Update nodes
            node.attr('transform', d => `translate(${d.x}, ${d.y})`);
        });

        // Drag functionality
        function drag(simulation) {
            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            return d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended);
        }

        // Mouse move handler for entire document
        function handleMouseMove(event) {
            // Calculate mouse position relative to the SVG
            const svgRect = svg.node().getBoundingClientRect();
            mouseX.current = event.clientX - svgRect.left;
            mouseY.current = event.clientY - svgRect.top;

            // Update radial force center
            simulation.force('mouse', d3.forceRadial(200, mouseX.current, mouseY.current).strength(mouseStrength));
            simulation.alpha(1).restart();
        }

        // Attach mouse move event listener to document
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            // Remove mouse move event listener on component unmount
            document.removeEventListener('mousemove', handleMouseMove);
        };

    }, [data, mouseStrength]);

    return (
        <div className='relative top-[-100px] left-[-20px] w-full h-fit flex justify-center'>
            <svg className='relative' ref={svgRef}></svg>
        </div>
    );
};

export default ForceDirectedTree;
