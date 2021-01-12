import React from "react";
import "./CommentCollection.css";

class CommentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      comments: [],
    };
  }

  render() {
    let dropShadow = null;
    let containerClass =
      "bg-white top-0 overflow-auto fixed h-full z-50 slide-effect shadow-lg px-4 py-4";

    if (this.props.visibility) {
      dropShadow = (
        <div
          className="w-full h-full bg-gray-600 fixed top-0 left-0 opacity-25 absorb-effect"
          style={{ "zIndex": 510 }}
          onClick={() => this.props.hideComments()}
        ></div>
      );
    }

    return (
      <div>
        {dropShadow}
        <div
          className={`${containerClass} ${(this.props.visibility ? 'transition' : '')}`}
          style={{ width: "414px", left: "100%", "zIndex": 520 }}
        >
          <div className="px-2 flex items-center justify-between">
            <h3 className="font-bold text-left">Responses</h3>
            <button
              className="text-right text-gray-500"
              onClick={() => this.props.hideComments()}
            >
              X
            </button>
          </div>
          <p>This is some content</p>
        </div>
      </div>
    );
  }
}

export default CommentCollection;
