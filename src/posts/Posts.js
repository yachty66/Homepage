import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/Archive.css";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch(
        `https://www.googleapis.com/storage/v1/b/archive_homepage/o/data_index.json?alt=media`
      );
      const jsonData = await response.json();
      const fileData = [];
      const files = jsonData.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileInfo = {
          name: file.name.slice(0, -3),
          date: new Date(file.timestamp),
        };

        fileData.push(fileInfo);
      }
      fileData.sort((a, b) => b.date - a.date);

      setFiles(fileData);
    };

    fetchFiles();
  }, []);

  const handleClick = (fileName) => {
    navigate(`/${fileName}`);
  };

  return (
    <Container className="archive-container mt-5">
      {files.map((file) => (
        <div key={file.name} onClick={() => handleClick(file.name)}>
          <span className="date">
            {String(file.date.getMonth() + 1).padStart(2, "0")}-
            {String(file.date.getDate()).padStart(2, "0")}-
            {file.date.getFullYear().toString().slice(-2)}
          </span>
          <span className="file-name">{file.name}</span>
        </div>
      ))}
    </Container>
  );
};

export default Posts;
