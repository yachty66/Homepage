import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import Container from "react-bootstrap/Container";
import { BlockMath, InlineMath } from "react-katex";
import rehypeRaw from "rehype-raw";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = { post: null };
  }

  componentWillMount() {
    const fetchFile = async (fileName) => {
        console.log(fileName)
      const response = await fetch(
        `https://www.googleapis.com/storage/v1/b/archive_homepage/o/${fileName}`
      );
      const file = await response.text();
      this.setState({ post: file });
    };
    fetchFile(this.props.fileName);
  }

  render() {
    return (
      <Container className="post-container mt-5">
        <ReactMarkdown
          className="markdown"
          children={this.state.post}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkMath]}
          components={{
            math: ({ value }) => <BlockMath math={value} />,
            inlineMath: ({ value }) => <InlineMath math={value} />,
          }}
        />
      </Container>
    );
  }
}

export default Post;
