import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import about from "./markdown_about/about.md";
import remarkMath from "remark-math";
import Container from "react-bootstrap/Container";
import "./css/About.css";
import { BlockMath, InlineMath } from "react-katex";
class About extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }

  componentWillMount() {
    fetch(about)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ about: text });
      });
  }

  render() {
    return (
      <Container className="about-container mt-5">
        <ReactMarkdown
          className="markdown"
          children={this.state.about}
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

export default About;
