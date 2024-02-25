import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const initialNodes = [
    { x: 100, y: 100, radius: 30, color: "#69b3a2" },
    { x: 200, y: 200, radius: 20, color: "#69b3a2" },
    { x: 300, y: 100, radius: 25, color: "#69b3a2" },
    // Add more nodes as needed
];

const WhiteCanvas = () => {
    const containerRef = useRef(null);
    const svgRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 500, height: 500 }); // Set default or dynamic sizes
    const [nodes, setNodes] = useState(initialNodes);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', dimensions.width)
            .attr('height', dimensions.height);

        // Initialize the force simulation
        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(-50))
            .force("center", d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
            .on("tick", ticked);

        function ticked() {
            const circles = svg.selectAll("circle")
                .data(nodes, d => d.id)
                .join("circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", d => d.radius)
                .attr("fill", d => d.color)
                .attr("stroke", "#69a2b2")
                .attr("stroke-width", 4)
                .on('mouseover', function (event, d) {
                    d3.select(this).attr('fill', d3.rgb(d.color).darker());
                    d3.select(this).transition().duration(300).attr('r', d.radius * 1.2);
                })
                .on('mouseout', function (event, d) {
                    d3.select(this).attr('fill', d.color);
                    d3.select(this).transition().duration(300).attr('r', d.radius);
                });

            // Apply drag behavior to circles to interact with the force simulation
            circles.call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }
        }
    }, [dimensions, nodes]); // Re-run the effect if dimensions or nodes change


    return (
        <div ref={containerRef} className="flex justify-center items-center w-full h-full">
            <svg
                ref={svgRef}
                className="bg-white border-gray-200 border rounded-lg"
            ></svg>
        </div>
    );
};

export default WhiteCanvas;
