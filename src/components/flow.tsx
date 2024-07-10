import { ReactFlow, Background, MarkerType } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import useFlowStore, { type FlowStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { nodeTypes } from "@/nodes";

const selector = (state: FlowStore) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  isValidConnection: state.isValidConnection,
});

export default function Flow() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    isValidConnection,
  } = useFlowStore(useShallow(selector));

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        isValidConnection={isValidConnection}
        defaultEdgeOptions={{
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        }}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
