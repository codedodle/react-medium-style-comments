function CommentInput(props) {
  return (
    <div className="pt-6">
      <textarea
        className="border rounded p-2 w-full shadow h-12 text-sm"
        placeholder="What are your thoughts?"
        onChange={props.commentChanged}
      ></textarea>
    </div>
  );
}

export default CommentInput;