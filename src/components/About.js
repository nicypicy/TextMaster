// About.js
import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-section" id="about">
      <h2>About TextMaster</h2>
      <p>
        TextMaster is a versatile text manipulation tool designed to make text editing tasks quick and easy. Whether you need to format text for a document, clean up text data, or simply play around with words, TextMaster has you covered. Here are some key features:
      </p>
      <ul>
        <li><strong>Text Case Conversion:</strong> Instantly convert your text to uppercase, lowercase, or even capitalize each word.</li>
        <li><strong>Text Cleaning:</strong> Remove extra spaces or unwanted formatting to make your text neat and readable.</li>
        <li><strong>Text-to-Speech:</strong> Listen to your text being read aloud, perfect for proofreading or multitasking.</li>
        <li><strong>Word and Character Count:</strong> Quickly get statistics on the number of words, characters, and even the estimated reading time for your text.</li>
        <li><strong>Clear and Copy Features:</strong> Easily clear the entire text area or copy the processed text to your clipboard with a single click.</li>
      </ul>
      <h2>Why Use TextMaster?</h2>
      <p>
        TextMaster is designed for anyone who deals with text regularly, including students, writers, content creators, and developers. The tool's intuitive interface and comprehensive features make it suitable for various use cases:
      </p>
      <ul>
        <li><strong>Writers and Bloggers:</strong> Quickly format drafts, check word count, and listen to your writing to catch mistakes.</li>
        <li><strong>Students and Academics:</strong> Clean up copied text from different sources, count words for assignments, or format notes.</li>
        <li><strong>Developers and Coders:</strong> Use text manipulation functions for code comments or documentation.</li>
        <li><strong>Content Creators:</strong> Prepare social media posts, captions, or scripts with easy formatting tools.</li>
      </ul>
      {/* <h3>How It Works</h3>
      <ol>
        <li><strong>Enter or Paste Text:</strong> Type in your text or paste it directly into the text area.</li>
        <li><strong>Choose an Action:</strong> Select any of the available features such as converting to uppercase, removing extra spaces, or listening to the text.</li>
        <li><strong>Get Instant Results:</strong> Your text is immediately processed, and the results are displayed in real-time.</li>
        <li><strong>View the Summary:</strong> See the word count, character count, and estimated reading time for your text.</li>
      </ol> */}
      <p>
        With TextMaster, text manipulation is just a few clicks away, helping you to save time and boost productivity.
      </p>
    </div>
  );
}
