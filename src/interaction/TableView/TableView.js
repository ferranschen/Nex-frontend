import React from 'react';
import HandsontableInstance from 'ui/interaction/TableView/HandsonTable';
import {AddFileButton} from 'ui/buttons';
import { SectionTitle } from 'ui/titles';

export default function TableView() {
  return (
    <div className="w-2/5 bg-white p-4 rounded-lg shadow-lg hover:border-2 hover:border-gray-200 overflow-y-scroll flex justify-between space-x-2">
      <div className="flex flex-col h-full overflow-x-scroll">

        <SectionTitle title="Table View" />
        <HandsontableInstance filename="input1.csv" />
        <HandsontableInstance filename="input2.csv" />
        <HandsontableInstance filename="input3.csv" />
        <HandsontableInstance filename="input4.csv" />
        <div className="flex flex-row gap-2 ml-2">
          <AddFileButton />
        </div>
      </div>
    </div>
  )
}