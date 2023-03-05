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
      const path = window.location.pathname.slice(1).replace(/%20/g, ' ');
      const fileN = `${path}.md`;
      const metadataResponse = await fetch(
        `https://www.googleapis.com/storage/v1/b/archive_homepage/o/archive%2F${fileN}`
      );

      const metadata = await metadataResponse.json();
      const contentsResponse = await fetch(metadata.mediaLink);
      const contents = await contentsResponse.text();

      this.setState({ post: contents });

      const { title, date } = this.setTitleAndDate(fileN);
      this.setState({ title, date });
      console.log(this.title);
    };
    fetchFile(this.props.fileN);
  }

  setTitleAndDate = (fileName) => {
    //const date = "";
    //const title = "";

    fetch(
      "https://www.googleapis.com/storage/v1/b/archive_homepage/o/data_index.json?alt=media"
    )
      .then((response) => response.json())
      .then((data) => {
        const files = data.files;
        const file = files.find((file) => file.name === fileName);
        if (file) {
          const fileDate = new Date(file.timestamp);
          const date =
            fileDate.toLocaleString("default", { month: "short" }) +
            " " +
            fileDate.getDate() +
            ", " +
            fileDate.getFullYear();
          const title = fileName.slice(0, -3);
          this.setState({ title, date });
        }
      });
  };

  render() {
    const { title, date } = this.state;
    return (
      <Container className="post-container mt-5">
        <h1 style={{ fontSize: "20px", color: "white" }}>{title}</h1>
        <p style={{ fontSize: "14px", color: "#d1d5da" }}>{date}</p>
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
