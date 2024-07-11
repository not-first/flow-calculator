import {
    Handle,
    Position,
    useHandleConnections,
    useNodesData,
    useReactFlow,
  } from "@xyflow/react";
  import { useEffect, useState } from "react";
  import type { PropTypes } from ".";
  
  export default function ValueDisplayNode({ data, id }: PropTypes) {
    const { updateNodeData } = useReactFlow();
    const [isConnectable, setIsConnectable] = useState(true);
    const connections = useHandleConnections({
      type: "target",
    });
  
    const nodeData = useNodesData(connections[0]?.source);
    useEffect(() => {
      updateNodeData(id, { value: nodeData?.data.value });
    }, [nodeData]);
  
    useEffect(() => {
      setIsConnectable(connections.length === 0);
    }, [connections]);
  
    return (
      <>
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
        />
        <Handle type="source" position={Position.Right} />
        <div className="w-32 rounded-lg border border-black bg-white p-2 text-center shadow-lg">
          <h1 className="font-bold text-xl">{data.value || 0}</h1>
        </div>
      </>
    );
  }
  