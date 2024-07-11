import Flow from "./components/flow";
import NodePanel, { NodeItem } from "./components/node-panel";
import InfoPanel from "./components/info-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useShallow } from "zustand/react/shallow";
import useFlowStore, { type FlowStore } from "./store";

const selector = (state: FlowStore) => ({
  draggedItem: state.draggedItem,
  handleDragStart: state.handleDragStart,
  handleDragEnd: state.handleDragEnd,
});

function App() {
  const { draggedItem, handleDragStart, handleDragEnd } = useFlowStore(
    useShallow(selector),
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={80} minSize={70} maxSize={80}>
            <Flow />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20} minSize={20} maxSize={30}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={65} minSize={60} maxSize={75}>
                <NodePanel />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={35} minSize={25} maxSize={40}>
                <InfoPanel />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
        <DragOverlay>
          {draggedItem ? (
            <div className="shadow-md">
              <NodeItem nodeType={draggedItem} />
            </div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

export default App;
