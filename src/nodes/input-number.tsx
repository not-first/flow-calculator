import { Handle, Position, useReactFlow } from "@xyflow/react";
import { useState } from "react";
import { Input, Slider } from "@/components/ui";
import type { PropTypes } from ".";

export function InputNumberNode({ data, id }: PropTypes) {
  const { updateNodeData } = useReactFlow();
  const [currentValue, setCurrentValue] = useState(0);

  const updateValue = (value: number) => {
    const cappedValue = Math.max(0, Math.min(10, value));

    setCurrentValue(cappedValue);
    updateNodeData(id, { value: cappedValue });
  };

  return (
    <>
      <Handle type="source" position={Position.Right} />
      <div className="flex items-center justify-between gap-2 rounded-lg border border-black bg-white p-4 shadow-lg">
        <Input
          type="number"
          value={currentValue}
          max={10}
          min={0}
          onChange={(e) => updateValue(Number(e.target.value))}
        />
      </div>
    </>
  );
}

export function SliderNumberNode({ data, id }: PropTypes) {
  const { updateNodeData } = useReactFlow();
  const [currentValue, setCurrentValue] = useState(data.value);

  const updateValue = (value: number[]) => {
    setCurrentValue(value[0]);
    updateNodeData(id, { value: value[0] });
  };

  return (
    <>
      <Handle type="source" position={Position.Right} />
      <div className="flex flex-row items-center justify-between gap-2 rounded-lg border border-black bg-white p-2 shadow-lg">
        <div className="w-5 font-bold text-xl">{currentValue}</div>
        <Slider
          defaultValue={[5]}
          max={10}
          min={0}
          step={1}
          className="w-32"
          onValueChange={updateValue}
        />
      </div>
    </>
  );
}
