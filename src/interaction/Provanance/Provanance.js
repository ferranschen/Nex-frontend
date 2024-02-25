import React from 'react'
import 'reactflow/dist/base.css'
import ReactFlowWrapper from 'ui/interaction/Provanance/ReactFlowWrapper'
import {SectionTitle} from 'ui/titles'

export default function Provanance() {
  return (
    <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg hover:border-2 hover:border-gray-200 overflow-y-scroll">
      <SectionTitle title="Data Provenance View" />
      <ReactFlowWrapper />
    </div>
  )
}
