import React, { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  ControlButton,
} from 'reactflow'
import CustomNode from 'ui/interaction/Provanance/CustomNode'
import { UploadFileButton } from 'ui/buttons'
import { Tooltip } from '@material-tailwind/react'

const nodeTypes = {
  custom_1: CustomNode,
}

const initNodes = [
  {
    id: '1',
    type: 'custom_1',
    data: { name: 'input.csv (v0)', job: 'CEO', emoji: '😎' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'custom_1',
    data: { name: 'input.csv (v1)', job: 'Designer', emoji: '🤓' },

    position: { x: -200, y: 200 },
  },
  {
    id: '3',
    type: 'custom_1',
    data: { name: 'output.csv (v0)', job: 'Developer', emoji: '🤩' },
    position: { x: 200, y: 200 },
  },
]

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
]

export default function ReactFlowWrapper() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  return (
    <div
      style={{ width: '100%', height: '85%' }}
      className="border-solid border rounded-lg"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls>
          <ControlButton
            onClick={() => alert('Something magical just happened. ✨')}
          >
            <Tooltip
              content="Material Tailwind"
              placement="right"
              className="ml-2 border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            </Tooltip>
          </ControlButton>
        </Controls>
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <UploadFileButton />
    </div>
  )
}
