// src/components/DownloadButton.jsx
import React from "react";
import { toBlob } from "html-to-image";
import { saveAs } from "file-saver";

const DownloadButton = () => {
  const handleDownload = () => {
    const node = document.getElementById("alpaca-container");
    if (!node) return;
    toBlob(node)
      .then(function (blob) {
        saveAs(blob, "alpaca.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <button className="preview-button" onClick={handleDownload}>
      Download
    </button>
  );
};

export default DownloadButton;
