import React from "react";

class CommentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {hasError: true};
  }


  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return '<strong>Something went wrong</strong>';
    }

    return this.props.children;
  }
}

export default CommentErrorBoundary;