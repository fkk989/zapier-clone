import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

export function CustomNode() {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: "transparent",
          border: "none",
        }}
        isConnectable={false}
      />

      <div className="w-[260px] h-[50px] bg-[#FFFDF8] p-[10px] rounded-md cursor-pointer shadow-lg"></div>
      <Handle
        style={{
          background: "transparent",
          border: "none",
        }}
        type="source"
        position={Position.Bottom}
        isConnectable={false}
      />
    </>
  );
}
