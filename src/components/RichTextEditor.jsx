import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const editorStyles = {
    height: "calc(100% - 40px)",
    fontSize: "55px",
  };

  return (
    <>
      <div className="w-full h-full text-3xl">
        <ReactQuill
          value={text}
          onChange={handleTextChange}
          style={editorStyles}
          className="h-5/6"
        />
      </div>

      <div className="mt-4 text-left text-lg">
        Word count: {wordCount === 0 ? 0 : wordCount - 1}
      </div>
    </>
  );
};

export default RichTextEditor;
