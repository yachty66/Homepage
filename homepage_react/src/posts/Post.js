import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import Container from "react-bootstrap/Container";
import { BlockMath, InlineMath } from "react-katex";
import rehypeRaw from "rehype-raw";
import "../css/Markdown.css";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = { post: null };
  }

  componentWillMount() {
    const fetchFile = async (fileName) => {
      const path = window.location.pathname.slice(1);
      const fileN = `${path}.md`;
      console.log(fileN);
      const metadataResponse = await fetch(
        `https://www.googleapis.com/storage/v1/b/archive_homepage/o/archive%2F${fileN}`
      );
      
      const metadata = await metadataResponse.json();
      const contentsResponse = await fetch(metadata.mediaLink);
      const contents = await contentsResponse.text();
      
      console.log(contents);
      this.setState({ post: contents });
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
