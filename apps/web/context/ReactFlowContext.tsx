import {
  addEdge,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { createContext, useCallback, useContext, useState } from "react";
import { initialEdges, initialNodes } from "@/utils/constants";

//
interface ReactFlowContext {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: OnNodesChange<Node>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange<Edge>;
  onConnect: (params: any) => void;
}

const ReactFlowContext = createContext<ReactFlowContext | null>(null);

export const ReactFlowContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlowContext.Provider
      value={{
        openModal,
        setOpenModal,
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        onConnect,
      }}
    >
      {children}
    </ReactFlowContext.Provider>
  );
};

export const useReactFlowContext = () => {
  const context = useContext(ReactFlowContext)!;
  return context;
};
