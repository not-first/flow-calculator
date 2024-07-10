import type React from "react";
import type { Node, NodeTypes } from "@xyflow/react";

type NodeData = { value: number; type?: string };
export type NodeType = Node<NodeData, types>;
const customNodes: NodeTypes = {
  //   inputNumber: InputNumberNode,
  //   valueDisplay: ValueDisplayNode,
  //   sliderNumber: SliderNumberNode,
  //   add: AddNode,
  //   subtract: SubtractNode,
  //   multiply: MultiplyNode,
  //   divide: DivideNode,
  //   powerOf: PowerOfNode,
  //   rootOf: RootOfNode,
  //   makePositive: MakePositiveNode,
  //   makeNegative: MakeNegativeNode,
  //   round: RoundNode,
  //   flipNumber: FlipNumberNode,
};
export type PropTypes = { data: NodeData; id: string };

type categories = "inputs" | "outputs" | "calculations" | "actions" | "misc";
export type types =
  | "inputNumber"
  | "sliderNumber"
  | "valueDisplay"
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "powerOf"
  | "rootOf"
  | "makePositive"
  | "makeNegative"
  | "round"
  | "flipNumber";
export interface NodeDefinition {
  reference?: (props: PropTypes) => React.JSX.Element;
  type: types;
  name: string;
  description: string;
  keywords: string[];
  category: categories;
}

export const nodes: NodeDefinition[] = [
  {
    type: "inputNumber",
    name: "Number Input",
    description: "A simple number input field.",
    keywords: ["input", "number", "value"],
    category: "inputs",
  },
  {
    type: "sliderNumber",
    name: "Number Slider",
    description: "A slider to select a number value.",
    keywords: ["input", "number", "value", "slider"],
    category: "inputs",
  },
  {
    type: "valueDisplay",
    name: "Value Display",
    description: "Displays a number value, for usage inside flows.",
    keywords: ["number", "value", "display", "show"],
    category: "misc",
  },
  {
    type: "add",
    name: "Add",
    description: "Adds two numbers together.",
    keywords: ["add", "plus", "sum", "addition"],
    category: "calculations",
  },
  {
    type: "subtract",
    name: "Subtract",
    description: "Subtracts one number from another.",
    keywords: ["subtract", "minus", "difference"],
    category: "calculations",
  },
  {
    type: "multiply",
    name: "Multiply",
    description: "Multiplies two numbers together.",
    keywords: ["multiply", "times", "product"],
    category: "calculations",
  },
  {
    type: "divide",
    name: "Divide",
    description: "Divides one number by another.",
    keywords: ["divide", "division", "quotient"],
    category: "calculations",
  },
  {
    type: "powerOf",
    name: "Power Of",
    description: "Raises a number to the power of another number.",
    keywords: ["power", "exponent", "power of"],
    category: "calculations",
  },
  {
    type: "rootOf",
    name: "Root Of",
    description: "Finds the root of a number.",
    keywords: ["root", "radical", "root of"],
    category: "calculations",
  },
  {
    type: "makePositive",
    name: "Make Positive",
    description: "Converts a number to a positive value.",
    keywords: ["make", "positive", "make positive"],
    category: "actions",
  },
  {
    type: "makeNegative",
    name: "Make Negative",
    description: "Converts a number to a negative value.",
    keywords: ["make", "negative", "make negative"],
    category: "actions",
  },
  {
    type: "round",
    name: "Round",
    description: "Rounds a number to the nearest whole number.",
    keywords: ["round", "rounding"],
    category: "actions",
  },
  {
    type: "flipNumber",
    name: "Flip Number",
    description: "Reverses the sign of a number.",
    keywords: ["flip", "reverse", "flip number"],
    category: "actions",
  },
];

export { customNodes as nodeTypes };
