import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const Editor = ({ onChange, initialText }) => {
  const { quill, quillRef, Quill } = useQuill({
    formats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
      "align",
      "color",
    ],
  });

  useEffect(() => {
    if (Quill && quill) {
      import("quill-blot-formatter").then((BlotFormatter) => {
        Quill.register("modules/blotFormatter", BlotFormatter.default);
        quill.getModule("blotFormatter");
      });
    }
  }, [Quill, quill]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (_, oldContents) => {
        const currentContents = quill.getContents();
        const diff = currentContents.diff(oldContents);
        onChange && onChange(quill.root.innerHTML, diff);
      });
    }
  }, [quill, onChange]);

  useEffect(() => {
    if (quill && initialText) {
      quill.root.innerHTML = initialText;
    }
  }, [quill, initialText]);

  return <div ref={quillRef} />;
};

export default Editor;
