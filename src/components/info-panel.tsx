import { Badge, ScrollArea, Separator } from "@/components/ui";
import useFlowStore from "@/store";
import { useEffect, useMemo, useState } from "react";
import { type NodeDefinition, nodes } from "@/nodes";

export default function InfoPanel() {
  const selectedNodeType = useFlowStore((state) => state.selectedNodeType);
  const [matchingNodeObject, setMatchingNodeObject] =
    useState<NodeDefinition | null>(null);

  const nodeTypeObject = useMemo(() => {
    return nodes.find((node) => node.type === selectedNodeType) || null;
  }, [selectedNodeType]);

  useEffect(() => {
    setMatchingNodeObject(nodeTypeObject);
  }, [selectedNodeType]);

  return (
    <div className="flex h-full flex-col">
      {matchingNodeObject !== null ? (
        <NodeInfo nodeObject={matchingNodeObject} />
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">
            Hover a node to view its details
          </p>
        </div>
      )}
    </div>
  );
}

function NodeInfo({ nodeObject }: { nodeObject: NodeDefinition }) {
  return (
    <ScrollArea>
      <div className="flex flex-col items-center justify-center p-3">
        <div className="grid gap-2 p-3 max-w-64">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xl">{nodeObject?.name}</h3>
            <Badge>
              {nodeObject?.category.charAt(0).toUpperCase() +
                nodeObject?.category.slice(1)}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {nodeObject?.details.description}
          </p>
          <h4 className="font-medium text-base">
            Inputs: {nodeObject?.details.input}
          </h4>
          <h4 className="font-medium text-base">
            Outputs: {nodeObject?.details.output}
          </h4>
        </div>
      </div>
    </ScrollArea>
  );
}
