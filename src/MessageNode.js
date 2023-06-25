import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import MessageBox from "./MessageBox";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }) {
  const [title, setTitle] = useState("");
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
    setTitle(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Right}
        isConnectable={isConnectable}
      />
      {/* <div style={{ with: "85%" }}>
        <label htmlFor="text">Title:{title}</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
        <button>Add title</button>
      </div> */}
      <MessageBox />
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
