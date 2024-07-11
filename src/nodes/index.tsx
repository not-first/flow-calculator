import type React from "react";
import type { Node, NodeTypes } from "@xyflow/react";
import { InputNumberNode, SliderNumberNode } from "./input-number";
import ValueDisplayNode from "./value-display";

type NodeData = { value: number; type?: string };
export type NodeType = Node<NodeData, types>;
const customNodes: NodeTypes = {
  inputNumber: InputNumberNode,
  sliderNumber: SliderNumberNode,
  valueDisplay: ValueDisplayNode,
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
  details: {
    description: string;
    input: string;
    output: string;
  };
  keywords: string[];
  category: categories;
}

export const nodes: NodeDefinition[] = [
  {
    type: "inputNumber",
    name: "Number Input",
    details: {
      description: "A simple number input field.",
      input: "",
      output: "",
    },
    keywords: ["input", "number", "value"],
    category: "inputs",
  },
  {
    type: "sliderNumber",
    name: "Number Slider",
    details: {
      description: "A slider to select a number value.",
      input: "",
      output: "",
    },
    keywords: ["input", "number", "value", "slider"],
    category: "inputs",
  },
  {
    type: "valueDisplay",
    name: "Value Display",
    details: {
      description: "Displays a number value, for usage inside flows.",
      input: "",
      output: "",
    },
    keywords: ["number", "value", "display", "show"],
    category: "misc",
  },
  {
    type: "add",
    name: "Add",
    details: {
      description: "Adds two numbers together.",
      input: "",
      output: "",
    },
    keywords: ["add", "plus", "sum", "addition"],
    category: "calculations",
  },
  {
    type: "subtract",
    name: "Subtract",
    details: {
      description: "Subtracts one number from another.",
      input: "",
      output: "",
    },
    keywords: ["subtract", "minus", "difference"],
    category: "calculations",
  },
  {
    type: "multiply",
    name: "Multiply",
    details: {
      description: "Multiplies two numbers together.",
      input: "",
      output: "",
    },
    keywords: ["multiply", "times", "product"],
    category: "calculations",
  },
  {
    type: "divide",
    name: "Divide",
    details: {
      description: "Divides one number by another.",
      input: "",
      output: "",
    },
    keywords: ["divide", "division", "quotient"],
    category: "calculations",
  },
  {
    type: "powerOf",
    name: "Power Of",
    details: {
      description: "Raises a number to the power of another number.",
      input: "",
      output: "",
    },
    keywords: ["power", "exponent", "power of"],
    category: "calculations",
  },
  {
    type: "rootOf",
    name: "Root Of",
    details: {
      description: "Finds the root of a number.",
      input: "",
      output: "",
    },
    keywords: ["root", "radical", "root of"],
    category: "calculations",
  },
  {
    type: "makePositive",
    name: "Make Positive",
    details: {
      description: "Converts a number to a positive value.",
      input: "",
      output: "",
    },
    keywords: ["make", "positive", "make positive"],
    category: "actions",
  },
  {
    type: "makeNegative",
    name: "Make Negative",
    details: {
      description: "Converts a number to a negative value.",
      input: "",
      output: "",
    },
    keywords: ["make", "negative", "make negative"],
    category: "actions",
  },
  {
    type: "round",
    name: "Round",
    details: {
      description: "Rounds a number to the nearest whole number.",
      input: "",
      output: "",
    },
    keywords: ["round", "rounding"],
    category: "actions",
  },
  {
    type: "flipNumber",
    name: "Flip Number",
    details: {
      description: "Reverses the sign of a number.",
      input: "",
      output: "",
    },
    keywords: ["flip", "reverse", "flip number"],
    category: "actions",
  },
];

export { customNodes as nodeTypes };
