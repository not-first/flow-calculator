import type { NodeType, types } from "@/nodes";
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
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
    id: "2",
    type: "valueDisplay",
    data: { value: 5 },
    position: { x: 300, y: 100 },
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
  selectedNodeType: types | null;
  onNodeMouseEnter: (event: React.MouseEvent, node: NodeType) => void;
  draggedItem: types | null;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
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
  selectedNodeType: null,
  onNodeMouseEnter: (event, node) => {
    set({ selectedNodeType: node.type });
  },
  draggedItem: null,
  handleDragStart: (event) => {
    set({ draggedItem: event.active.id });
  },
  handleDragEnd: (event) => {
    set({ draggedItem: null });

    const nodes = get().nodes;
    const setNodes = get().setNodes;

    if (event.over) {
      console.log("Dropped over:", event.over.id);

      const nodeType = event.active.id as types;
      const position = {
        x: 100,
        y: 100,
      };
      const newNode: NodeType = {
        id: "new-node",
        type: nodeType,
        position: position,
        data: { value: 0 },
      };

      setNodes([...nodes, newNode]);
      console.log("New node:", newNode);
    }
  },
}));

export default useFlowStore;
