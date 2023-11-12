// src/PublicKeyPattern.js
import React from 'react';
import Identicon from 'identicon.js';

const PublicKeyPattern = ({ hash, size = 420 }) => {
  // If no hash is provided, don't display anything
  if (!hash) return null;

  // Options for the identicon
  const options = {
    foreground: [0, 0, 0, 255], // rgba black for the foreground color
    background: [255, 255, 255, 255], // rgba white for the background color
    margin: 0.1, // 10% margin around the identicon
    size: size, // size of the image
    format: 'svg' // SVG format for better scaling and clarity
  };

  // Create a base64 encoded data URI for the identicon
  const data = new Identicon(hash, options).toString();
  const imageUrl = `data:image/svg+xml;base64,${data}`;

  // Render an image element with the identicon as the source
  return <img src={imageUrl} alt="Public Key Pattern" style={{ height: size, width: size }} />;
};

export default PublicKeyPattern;
