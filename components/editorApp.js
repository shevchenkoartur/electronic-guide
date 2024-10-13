'use client';
import Editor from "./editor";
import {useState} from 'react';

const EditorApp = () => {
  const [js, setJs] = useState("");
  return (
    <>
      <div>
        <Editor
          className="px-2 py-3 md:w-1/3 md:pl-1 md:pr-3"
          language="javascript"
          editorTitle="JS"
          value={js}
          onChange={setJs}
        />
      </div>
    </>
  )
};

export default EditorApp;
