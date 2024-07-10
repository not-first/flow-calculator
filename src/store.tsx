import type { NodeType, types } from "@/nodes";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
} from "@xyflow/react";
import { create } from "zustand";

const initialNodes = [
    { id: 'a', position: { x: 0, y: 0 } },
    { id: 'b', position: { x: 0, y: 100 } }
];

const initialEdges: Edge[] = [
  // {
  //   id: "1->2",
  //   source: "1",
  //   target: "2",
  // },
];

export interface FlowStore {
  nodes: NodeType[];
  edges: Edge[];
  setNodes: (nodes: NodeType[]) => void;
  setEdges: (edges: Edge[]) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  isValidConnection: (connection: Edge | Connection) => boolean;
}

const useFlowStore = create<FlowStore>()((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  setNodes: (nodes: NodeType[]) => {
    set({ nodes });
  },
  setEdges: (edges: Edge[]) => {
    set({ edges });
  },
  onNodesChange: (changes: NodeChange<NodeType>[]) => {
    set({
      nodes: applyNodeChanges<NodeType>(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  isValidConnection: (connection: Edge | Connection) => {
    if (connection.source === connection.target) {
      return false;
    }
    return true;
  },
}));

export default useFlowStore;
