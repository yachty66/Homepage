import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/Archive.css";

const Posts = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch(
        "https://www.googleapis.com/storage/v1/b/archive_homepage/o?fields=items(name,timeCreated)"
      );
      const data = await response.json();

      const fileData = data.items.map((item) => ({
        name: item.name,
        date: new Date(item.timeCreated),
      }));

      setFiles(fileData);
    };

    fetchFiles();
  }, []);

  return (
    <Container className="archive-container mt-5">
      {files.map((file) => (
        <div key={file.name}>
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
