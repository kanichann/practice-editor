import React from "react";
import paths from "routes/paths";
import { useNavigate } from "react-router-dom";
const CodeEditorButton = () => {
  const navgate = useNavigate();
  const onClick = () => {
    navgate(paths.codeEditor);
  };
  return (
    <button
      className=" border border-cyan-500 text-cyan-500 py-2 px-4"
      onClick={onClick}
    >
      CodeEditorButton
    </button>
  );
};

export default CodeEditorButton;
