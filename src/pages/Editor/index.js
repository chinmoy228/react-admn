import React, { useState, useCallback, useMemo, useEffect } from "react";
import "./Editor.scss";

import JoditEditor from "jodit-react";

const Editor = () => {
  const [content, setContent] = useState("");
  const [logs, setLogs] = useState([]);

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );

  const appendLog = useCallback(
    (message) => {
      console.log("logs = ", logs);
      const newLogs = [...logs, message];
      setLogs(newLogs);
    },
    [logs, setLogs]
  );

  const onChange = useCallback(
    (newContent) => {
      appendLog(`onChange triggered with ${newContent}`);
    },
    [appendLog]
  );

  const onBlur = useCallback(
    (newContent) => {
      appendLog(`onBlur triggered with ${newContent}`);
      setContent(newContent);
    },
    [appendLog, setContent]
  );

  useEffect(() => {
    console.log("onChange = ", onChange);
  }, [onChange]);

  return (
    <div className="p-3 shadow-md rounded bg-white">
      <div className="table-box">
        <div data-testid="jodit-editor">
          <JoditEditor
            value={content}
            config={config}
            tabIndex={1}
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
        <h3 data-testid="log-text">Logs</h3>
        <div>
          {logs.map((log, index) => (
            <p key={index} data-testid={`logs-${index}`}>{log}</p>
          ))}
        </div>
        <button onClick={() => appendLog("hello")}>Add</button>
      </div>
    </div>
  );
};

export default Editor;
