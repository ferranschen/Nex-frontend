import React from 'react';
import AutomationList from 'ui/interaction/AutomationSection/AutomationList';
import {SectionTitle} from 'ui/titles';
import { SaveProgramButton, ShowHistoryButton } from 'ui/buttons'

export default function AutomationSection() {
  return (
    <div className="w-2/5 bg-white p-4 rounded-lg shadow-lg hover:border-2 hover:border-gray-200 overflow-y-scroll ">
      <SectionTitle title="Automation List" />
      <AutomationList />
      <div className="mt-4 flex flex-row gap-2">
        <SaveProgramButton />
        <ShowHistoryButton />
      </div>
    </div>
  )
}