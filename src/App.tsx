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
    </div>
  );
}

export default App;
