import * as timeago from "timeago.js";

function UserProfile(props) {
  function formatTimestamp(timestamp) {
    return timeago.format(timestamp);
  }

  return (
    <div className="mb-2">
      <div className="flex">
        <div className="pr-3">
          <img className="w-8 h-8 rounded-full" src={props.user.avatar} />
        </div>
        <div className="flex flex-col items-start text-sm">
          <h3 className="font-semibold">{props.user.name}</h3>
          <span className="text-gray-600">
            {formatTimestamp(props.user.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
