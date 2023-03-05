import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import Container from "react-bootstrap/Container";
import { BlockMath, InlineMath } from "react-katex";
import rehypeRaw from "rehype-raw";

import "../css/Projects.css"

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { projects: null };
  }

  componentWillMount() {
    fetch(
      "https://www.googleapis.com/storage/v1/b/archive_homepage/o/projects.md?alt=media"
    )
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split("\n");
        let toc = "";
        let inCodeBlock = false;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (!inCodeBlock && line.startsWith("#")) {
            const level = line.lastIndexOf("#") + 1;
            const title = line.slice(level).trim();
            const slug = title.toLowerCase().replace(/[^\w]+/g, "-");
            const id = `toc-${slug}`;
            toc += `${"  ".repeat(level - 1)}- [${title}](#${id})\n`;
            lines[i] = `${line} <a id="${id}"></a>`;
          } else if (line.startsWith("```")) {
            inCodeBlock = !inCodeBlock;
          }
        }
        const markdownWithToc = `${toc}\n${lines.join("\n")}`;
        this.setState({ projects: markdownWithToc });
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
