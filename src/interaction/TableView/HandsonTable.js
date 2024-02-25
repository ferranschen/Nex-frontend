import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
// TODO: refer to the card design to recreate the table information.
registerAllModules();


const HandsontableInstance = React.memo(({ filename }) => {
    const data = [
        ['', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Mazda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Mazda', 'Ford', 'Volvo', 'Toyota', 'Honda', 'Mazda'],
        ['2016', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2017', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2018', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2019', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2020', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2021', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2022', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2023', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2024', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],
        ['2025', 10, 11, 12, 13, 15, 10, 11, 12, 13, 15, 1, 2, 3, 4, 5],

    ];
  return (
        <div className='m-2 w-full '>
          <Typography variant="small" color="blue-gray" className="mb-1">
            <div className="flex flex-row gap-2 text-align-center">
                <div className="flex">
                    {filename}
                </div>

                      <IconButton variant="text" className="h-5 w-5 text-blue-gray-300 hover:text-blue-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      </IconButton>

            </div>
                
          </Typography>
          <HotTable
              data={ data }
              colHeaders={true}
              rowHeaders={true}
              contextMenu={true}
              height={300}
              width="100%"
              licenseKey="non-commercial-and-evaluation"
              
          className='z-0 '
          />
         
      </div>
  );
});

export default  HandsontableInstance;