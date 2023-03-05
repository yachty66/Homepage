import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import Container from "react-bootstrap/Container";
import { BlockMath, InlineMath } from "react-katex";
import rehypeRaw from "rehype-raw";

import "../css/Projects.css";
import markdownToc from 'markdown-toc';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { projects: null };
  }

  componentWillMount() {
    fetch(
      "https://www.googleapis.com/storage/v1/b/archive_homepage/o/home.md?alt=media"
    )
      .then((response) => response.text())
      .then((text) => {
        const toc = markdownToc(text).content;
        this.setState({ projects: `${toc}\n${text}` });
      });
  }

  render() {
    return (
      <Container className="projects-container mt-5">
        <ReactMarkdown
          className="markdown"
          children={this.state.projects}
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

export default Projects;
