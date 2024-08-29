import { CustomEdge, CustomNode } from "@/components/editor";
import { Edge, Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom-node",
    position: { x: 50, y: 0 },
    data: { label: "1" },
  },
  {
    id: "2",
    type: "custom-node",
    position: { x: 50, y: 130 },
    data: { label: "4" },
  },
];
export const initialEdges: Edge[] = [
  {
    id: "jlkdjf",
    type: "custom-edge",
    source: "1",
    target: "2",
    style: {
      strokeWidth: 2,
      stroke: "#FF0072",
    },
  },
];
//
