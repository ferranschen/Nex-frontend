import { Select, Option } from "@material-tailwind/react";
import { DocumentTextIcon, ViewColumnsIcon } from '@heroicons/react/24/outline'

export default function AutomationList() {
  return (
    <div>
    <div className="w-full">
      <Select color="blue" label="Select an option">
        <Option>Automation 1</Option>
        <Option>Automation 2</Option>
      </Select>
    </div>
    <div className="flex flex-col space-y-4 p-6 h-64 border overflow-x-scroll text-gray-800 mt-2">
          <ol className="list-decimal space-y-2 p-2">
            <li className="hover:rounded-md hover:shadow-lg hover:border hover:cursor-default p-2">
              Extract{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <ViewColumnsIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">Column2</span>
              </span>{' '}
              from{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <DocumentTextIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">input1.csv</span>
              </span>{' '}
              to{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <DocumentTextIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">output1.csv</span>
              </span>
            </li>
            <li className="hover:rounded-md hover:shadow-lg hover:border hover:cursor-default p-2">
              Filter out number that is{' '}
              <span className=" rounded-sm px-1 underline cursor-pointer decoration-blue-300 decoration-2 hover:bg-blue-200">
                less than 100
              </span>{' '}
              in{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <ViewColumnsIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">Column2</span>
              </span>{' '}
              of{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <DocumentTextIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">output1.csv</span>
              </span>
            </li>
            <li className="hover:rounded-md hover:shadow-lg hover:border hover:cursor-default p-2">
              Remove duplicates in{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <ViewColumnsIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">Column2</span>
              </span>{' '}
              of{' '}
              <span
                className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
              >
                <DocumentTextIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                <span className="mr-1">output1.csv</span>
              </span>{' '}
            </li>
          </ol>
        </div>
    </div>
  )
}