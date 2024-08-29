"use client";
import React from "react";
import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { CustomModal } from "./CustomModal";
import { useReactFlowContext } from "@/context/ReactFlowContext";
import { CustomEdge } from "./CustomEdge";
import { CustomNode } from "./CustomNode";

export const edgeTypes = {
  "custom-edge": CustomEdge,
};
//
export const nodesTypes = {
  "custom-node": CustomNode,
};

export function ZapEditor() {
  const { openModal, setOpenModal, nodes, edges, onConnect } =
    useReactFlowContext();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F7F5F1]">
      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        component={
          <div className="w-[400px] h-[500px] bg-[#F7F5F1] rounded-md"></div>
        }
      />
      <ReactFlow
        className="w-full h-full flex justify-center items-center"
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodesTypes}
        edgeTypes={edgeTypes}
        zoomOnScroll={false}
        minZoom={0.5}
        maxZoom={1.2}
        fitView
        nodesDraggable={false}
        panOnDrag={true}
        panOnScroll={true}
      >
        <Background
          id="1"
          gap={10}
          size={1}
          variant={BackgroundVariant.Dots}
          color="#DDDBD7"
        />
      </ReactFlow>
    </div>
  );
}
