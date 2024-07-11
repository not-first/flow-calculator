import type { NodeType } from "@/nodes";
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
  {
    id: "1",
    type: "inputNumber",
    data: { value: 5 },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "sliderNumber",
    data: { value: 5 },
    position: { x: 100, y: 200 },
  },
];

const initialEdges: Edge[] = [
  {
    id: "a->b",
    source: "a",
    target: "b",
  },
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
