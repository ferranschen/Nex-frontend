import React, { useState } from 'react';
import { IconButton, Button } from '@material-tailwind/react';
import CellEditor from 'ui/interaction/TestPlayground/CellEditor';
import { Resizable } from 'react-resizable';
import { Chip } from "@material-tailwind/react";

// Import the CSS for react-resizable
import 'react-resizable/css/styles.css';

const Cell = () => {
    // Use state to manage width and height dynamically
    const [size, setSize] = useState({ width: "100%", height: 96 }); // Initial height 96px approximates Tailwind's h-24

    const onResize = (event, { element, size }) => {
        setSize({ width: size.width, height: size.height });
    };

    return (
        <>
            <Resizable size={size} onResize={onResize} height={size.height} width={size.width}>
                <div>
                    <div className="flex flex-row my-2 resize-none" style={{ width: size.width, height: size.height }}>
                        <div className="flex h-full w-2 bg-indigo-50 rounded-l-lg">
                        </div>
                        <div className="flex h-full w-12">
                            <div className="flex flex-col items-center h-full">
                                <IconButton className="text-gray-500 hover:text-gray-700 rounded-full mx-auto" size="regular" onClick={() => { }} variant="text">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 01 0 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                                    </svg>
                                </IconButton>
                            </div>
                        </div>
                        <div className="flex-grow h-full p-2  border rounded-lg border-gray-200 overflow-auto relative">
                            <CellEditor code="print('Hello, World!')" />
                            <Chip
                                variant="ghost"
                                color="green"
                                size="sm"
                                value="Data Exploration"
                                icon={
                                    <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                                }
                                className='absolute top-2 right-10'
                            />
                        </div>
                    </div>

                </div>
            </Resizable>
            <Button className=" hover:border-gray-700 hover:text-gray-900 border-gray-300 rounded-full py-1 ml-14 text-gray-500" size="regular" onClick={() => { }} variant="outlined">
                <div className='flex flex-row items-center gap-2'>
                    <p className="text-sm">+ Code</p>
                </div>
            </Button>
            <Button className=" hover:border-gray-700 hover:text-gray-900 border-gray-300 rounded-full py-1 ml-2 text-gray-500" size="regular" onClick={() => { }} variant="outlined">
                <div className='flex flex-row items-center gap-2'>
                    <p className="text-sm">+ Markdown</p>
                </div>
            </Button>

        </>
    );
};

export default Cell;
