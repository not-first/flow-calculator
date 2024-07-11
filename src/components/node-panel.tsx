import { FilterIcon } from "lucide-react";
import { Button, Input, ScrollArea } from "@/components/ui";
import { type NodeDefinition, nodes, type types } from "@/nodes";
import { useDraggable } from "@dnd-kit/core";

export default function SidePanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b px-4 py-3">
        <div className="relative flex-1">
          <div className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md bg-muted pl-10"
          />
        </div>
        <Button variant="outline" size="icon" className="ml-2">
          <FilterIcon className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea>
        <div className="grid flex-1 gap-4 p-4">
          {nodes.map((node) => (
            <NodeItem key={node.name} nodeType={node.type} icon={node.icon} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function NodeItem({
  nodeType,
  icon,
}: { nodeType: types; icon?: React.JSX.Element }) {
  const node: NodeDefinition = nodes.find((n) => n.type === nodeType);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: node.type,
  });

  return (
    <div key={node.name} ref={setNodeRef} {...listeners} {...attributes}>
      <div className="flex h-10 flex-row items-center justify-center gap-2 rounded-md border bg-white$">
        {icon}
        {node.name}
      </div>
    </div>
  );
}
