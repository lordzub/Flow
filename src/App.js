import { useCallback } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import MessageNode from "./MessageNode";
import defaultNodes from "./nodes.js";
import defaultEdges from "./edges.js";

import "./button.css";
import "./test.css";
const edgeOptions = {
  animated: true,
  style: {
    stroke: "blue"
  }
};
const nodeTypes = { textUpdater: MessageNode };

const connectionLineStyle = { stroke: "white" };

let nodeId = 0;

function Flow() {
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      type: "textUpdater",
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500
      },
      data: {
        label: `Node ${id}`
      }
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        nodeTypes={nodeTypes}
        fitView
        style={{
          backgroundColor: "#f6f6f6"
        }}
        connectionLineStyle={connectionLineStyle}
      />
      <button onClick={onClick} className="btn-add">
        add node
      </button>
    </>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
