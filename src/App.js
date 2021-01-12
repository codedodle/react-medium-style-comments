import { useState, useEffect } from "react";
import CommentCollection from "./components/CommentCollection";
import "./App.css";

const AppStyle = {
  margin: "0px auto",
  padding: "50px",
};

function App() {
  let [visibility, setVisibility] = useState(false);

  function hideComments() {
    setVisibility(false);
  }

  return (
    <div id="app" style={AppStyle}>
      <button
        className="border-0 bg-green-400 p-2 rounded shadow text-white"
        onClick={() => setVisibility(!visibility)}
      >
        Show Comments
      </button>
      <CommentCollection
        visibility={visibility}
        hideComments={hideComments}
      ></CommentCollection>
    </div>
  );
}

export default App;
