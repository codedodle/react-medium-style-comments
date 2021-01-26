import { useState, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import "./App.css";
//import LoaderComment from "./components/loaders/LoaderComment";
import CommentErrorBoundary from "./components/CommentErrorBoundary";
import store from "./store/index";
const CommentCollection = lazy(() => import("./components/CommentCollection"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <CommentErrorBoundary>
          <Provider store={store}>
            <CommentCollection
              visibility={visibility}
              hideComments={hideComments}
            ></CommentCollection>
          </Provider>
        </CommentErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
