import React from "react";
import "./CommentCollection.css";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import LoaderComment from "./loaders/LoaderComment";
import faker from "faker";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

class CommentCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    // this.setState({
    //   comments: await getComments(),
    //   loading: false,
    // });
  }

  componentDidUpdate() {
    if (this.props.visibility && !this.state.isLoaded && !this.props.loading) {
      this.loadComments();
    }
  }

  async loadComments() {
    this.props.setLoading(true);
    // this.setState({
    //   loading: true,
    // });

    // async function getComments() {
    //   let data = [];

    //   for (let i = 0; i < 5; i++) {
    //     data.push({
    //       id: faker.random.number(),
    //       body: faker.lorem.sentences(),
    //       like_count: faker.random.number(),
    //       comment_count: faker.random.number(),
    //       user: {
    //         id: faker.random.number(),
    //         name: faker.name.firstName(),
    //         timestamp: faker.date.past(),
    //         avatar: `${faker.image.nature()}?random=${
    //           Date.now() + Math.random()
    //         }`,
    //       },
    //     });
    //   }

    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(data), 2500);
    //   });
    // }

    fetch('http://localhost:3001/comments')
      .then(res => res.json())
      .then((data) => {
        this.props.setComments(data);
        this.setState((state, props) => ({
          isLoaded: true,
        }));
        this.props.setLoading(false);
      });
  }

  commentChanged(event) {
    console.log(event.target.value);
  }

  render() {
    let bgShadow = null;
    let emptyResponse = null;
    let containerClass =
      "bg-white top-0 overflow-auto fixed h-full z-50 slide-effect shadow-lg px-4 py-4";

    if (this.props.visibility) {
      bgShadow = (
        <div
          className="w-full h-full bg-gray-600 fixed top-0 left-0 opacity-25 absorb-effect"
          style={{ zIndex: 510 }}
          onClick={() => this.props.hideComments()}
        ></div>
      );
    }

    if (this.props.loading && this.props.comments.length) {
      emptyResponse = (
        <p className="text-center my-auto text-gray-600 font-sans">
          There are currenly no response
        </p>
      );
    }

    return (
      <div>
        {bgShadow}
        <div
          className={`${containerClass} ${
            this.props.visibility ? "transition" : ""
          }`}
          style={{ width: "414px", left: "100%", zIndex: 520 }}
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
          <CommentInput commentChanged={this.commentChanged} />
          {this.props.loading ? <LoaderComment /> : null}
          {this.props.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
          {emptyResponse}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    comments: state.comments,
    loading: state.loading,
  };
};

// let mapDispatchToProps = bindActionCreators(function setLoading(status) {
//   return { type: "SET_LOADING", payload: { data: status } };
// }, dispatch);

let mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (status) =>
      dispatch({ type: "SET_LOADING", payload: { data: status } }),
    setComments: (comments) => {
      dispatch({ type: "SET_COMMENTS", payload: { data: comments } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCollection);
