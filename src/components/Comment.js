import IconClap from "./icons/IconClap";
import IconComment from "./icons/IconComment";
import UserProfile from "./UserProfile";
import "./Comment.css";

function Comment(props) {
  return (
    <div className="pt-8 pb-4 border-b border-solid border-gray-300">
      <UserProfile user={props.comment.user}></UserProfile>
      <div className="p-2 shadow rounded border border-solid">
        <p className="text-sm text-left text-gray-800">{props.comment.body}</p>
      </div>
      <div className="pt-4 flex justify-start">
        <button className="action-btn">
          <IconClap />
        </button>
        <button className="action-btn">
          <IconComment />
        </button>
      </div>
    </div>
  );
}

export default Comment;