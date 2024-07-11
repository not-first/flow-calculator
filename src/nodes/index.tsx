import type React from "react";
import type { Node, NodeTypes } from "@xyflow/react";
import {
  TextCursorInputIcon,
  SlidersHorizontalIcon,
  PlusIcon,
  MinusIcon,
  EyeIcon,
  XIcon,
  DivideIcon,
  ChevronUpIcon,
  RadicalIcon,
  UnfoldVerticalIcon,
  Repeat2Icon,
} from "lucide-react";

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
  icon?: React.JSX.Element;
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
    icon: <TextCursorInputIcon />,
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
    icon: <SlidersHorizontalIcon />,
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
    icon: <EyeIcon />,
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
    icon: <PlusIcon />,
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
    icon: <MinusIcon />,
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
    icon: <XIcon />,
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
    icon: <DivideIcon />,
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
    icon: <ChevronUpIcon />,
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
    icon: <RadicalIcon />,
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
    icon: <PlusIcon />,
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
    icon: <MinusIcon />,
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
    icon: <UnfoldVerticalIcon />,
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
    icon: <Repeat2Icon />,
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
