import { ReactFlow, Background, MarkerType } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import useFlowStore, { type FlowStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { nodeTypes } from "@/nodes";
import { useDroppable } from "@dnd-kit/core";

const selector = (state: FlowStore) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  isValidConnection: state.isValidConnection,
  selectedNodeType: state.selectedNodeType,
  onNodeMouseEnter: state.onNodeMouseEnter,
});

export default function Flow() {
  const { setNodeRef } = useDroppable({
    id: "flow-droppable",
  });
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    isValidConnection,
    onNodeMouseEnter,
  } = useFlowStore(useShallow(selector));

  return (
    <div className="h-full" ref={setNodeRef}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        isValidConnection={isValidConnection}
        onNodeMouseEnter={onNodeMouseEnter}
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
