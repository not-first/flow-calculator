import { Handle, Position, useHandleConnections, useNodesData, useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import type { NodeType } from ".";

type calculationTypes = "add" | "subtract" | "multiply" | "divide";
type PropTypes = {
  data: { value: number; type: calculationTypes };
  id: string;
  calculationType: calculationTypes;
};

export function CalculationNode({ data, id, calculationType }: PropTypes) {
  const { updateNodeData } = useReactFlow();
  const connections = useHandleConnections({
    type: "target",
  });

  const [sourceList, setSourceList] = useState<string[]>([]);
  useEffect(() => {
    console.log(connections);
    const sources = connections.map((connection) => connection.source);
    console.log("sources", sources);
    setSourceList(sources);
  }, [connections]);

  const nodeData = useNodesData(sourceList);

  useEffect(() => {
    let calculation = 0;
    switch (calculationType) {
      case "add":
        calculation =
          nodeData.length > 0
            ? nodeData.slice(1).reduce((acc, node) => acc + node.data.value, nodeData[0].data.value)
            : 0;
        break;
      case "subtract":
        calculation =
          nodeData.length > 0
            ? nodeData.slice(1).reduce((acc, node) => acc - node.data.value, nodeData[0].data.value)
            : 0;
        break;
      case "multiply":
        calculation =
          nodeData.length > 0
            ? nodeData.slice(1).reduce((acc, node) => acc * node.data.value, nodeData[0].data.value)
            : 1;
        break;
      case "divide":
        calculation =
          nodeData.length > 0
            ? nodeData
                .slice(1)
                .reduce((acc, node) => (node.data.value !== 0 ? acc / node.data.value : acc), nodeData[0].data.value)
            : 1;
        break;
    }
    updateNodeData(id, { value: calculation });
  }, [sourceList, nodeData]);

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className="flex h-11 w-32 flex-col gap-0 rounded-lg border border-black bg-white p-0 text-center shadow-lg">
        <Equation nodeData={nodeData} calculationType={calculationType} />
        <h1 className="font-bold text-xl">{data.value || 0}</h1>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

function Equation({ nodeData, calculationType }: { nodeData: NodeType[]; calculationType: calculationTypes }) {
  const firstNumber = nodeData[0]?.data.value || 0;
  const secondNumber = nodeData[1]?.data.value || 0;
  let text: string;
  switch (calculationType) {
    case "add":
      text = `${firstNumber} + ${secondNumber} =`;
      break;
    case "subtract":
      text = `${firstNumber} - ${secondNumber} =`;
      break;
    case "multiply":
      text = `${firstNumber} * ${secondNumber} =`;
      break;
    default:
      text = "-";
      break;
  }

  return <p className="text-[10px] text-muted-foreground">{text}</p>;
}

export function AddNode(props: PropTypes) {
  return <CalculationNode {...props} calculationType="add" />;
}

export function SubtractNode(props: PropTypes) {
  return <CalculationNode {...props} calculationType="subtract" />;
}

export function MultiplyNode(props: PropTypes) {
  return <CalculationNode {...props} calculationType="multiply" />;
}
