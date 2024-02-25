import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
export function AddFileButton({ onClick }) {
    return (
      <div>
        <Button
          variant="outlined"
          className="flex items-center gap-1 px-3 py-2 hover:scale-105
                  active:scale-100
                  shadow-md
                  text-gray-800
                  font-semibold
                  border
                  border-gray-300
                  my-2"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          Add File
        </Button>
      </div>
    )
}

export function SaveProgramButton() {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center gap-1 px-3 py-2 hover:scale-105
                  active:scale-100
                  shadow-md
                  text-gray-800
                  font-semibold
                  border
                  border-gray-300
                  my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
        Save Program
      </Button>
    </div>
  )
}

export function ShowHistoryButton() {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center gap-1 px-3 py-2 hover:scale-105
                  active:scale-100
                  shadow-md
                  text-gray-800
                  font-semibold
                  border
                  border-gray-300
                  my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Show History
      </Button>
    </div>
  )
}


export function UploadFileButton() {
  return (
    <Button
      variant="outlined"
      className="flex items-center gap-1 px-3 py-2 hover:scale-105
                  active:scale-100
                  shadow-md
                  text-gray-800
                  font-semibold
                  border
                  border-gray-300
                  my-2
                  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
        />
      </svg>
      Upload Files
    </Button>
  )
}

export function SendChatMessageButton({onClick}){
  return (
    <div>
      <Button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white px-4 py-1 flex-shrink-0 h-10" onClick={onClick}>
        <span>Send</span>
        <span className="ml-2">
          <svg
            className="w-4 h-4 transform rotate-45 -mt-px"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </span>
      </Button>
    </div>
  )
}

export function GenerateCodeButton() {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center gap-1 px-3 py-2 hover:scale-105
                  active:scale-100
                  shadow-md
                  font-semibold
                  border
                  border-gray-300
                  my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        Generate Code
      </Button>
    </div>
  )
}

export function RefreshChatRoomButton({onClick}) {
  return (
    <div>
      <button className="flex items-center justify-center text-gray-400 hover:text-gray-600" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  )
}