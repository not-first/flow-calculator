import Flow from "./components/flow";
import NodePanel from "./components/node-panel";
import InfoPanel from "./components/info-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";

function App() {
  return (
    <div className="flex h-screen w-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={80} minSize={50} maxSize={80}>
          <Flow />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20} minSize={20} maxSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={65} minSize={50} maxSize={80}>
              <NodePanel />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={35} minSize={20} maxSize={50}>
              <InfoPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
