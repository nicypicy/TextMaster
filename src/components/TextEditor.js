import React from "react";
import "./TextEditor.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextEditor(){
    
    const [text, setText] = React.useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };

    function handleUppercase(){
        const upperText = text.toUpperCase();
        setText(upperText);
        // toast.success("Converted to UpperCase!")
    }

    function handleLowerCase(){
        const lowerText = text.toLowerCase();
        setText(lowerText);
    }

    function handleClear(){
        setText("");
    }

    function handleCopy(){
        if (text.trim()){
            navigator.clipboard.writeText(text);
            toast.success("Copied to Clipboard!")
        } else {
            toast.error("There is no text to copy")
        }
    }

    function handleRemoveSpaces(){
        const newText = text.split(/\s+/).join("");
        setText(newText.trim());
        toast.success("Extra spaces removed!")
    }

    function handleSpeech(){
        if (text.trim()){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
            toast.success("Speaking your text");
        } else {
            toast.error("No text to speak")
        }
    }

    return(
        <div className="text-editor">
            <h2 className="title">Try TextMaster: Smart Text Counter & Manipulator</h2>
            <textarea
            value={text}
            onChange= {handleChange}
            placeholder= "Type your text here..."
            className = "text-area"
            />
            <div className="button-group">
                <button className="btn" onClick={handleUppercase}>UpperCase</button>
                <button className="btn" onClick={handleLowerCase}>Lowercase</button>
                <button className="btn" onClick={handleClear}>Clear All</button>
                <button className="btn" onClick={handleCopy}>Copy Text</button>
                <button className="btn" onClick={handleRemoveSpaces}>Remove extra spaces</button>
                <button className="btn" onClick={handleSpeech}>Speak</button>
            </div>
            <div className="summary">
        <h3>Text Summary</h3>
        <p>Word Count: <span className="summary-word-count">0</span></p>
        <p>Character Count: <span className="summary-char-count">0</span></p>
        <p>Estimated Reading Time: <span className="summary-read-time">0</span> minute(s)</p>
      </div>
      <ToastContainer />
        </div>
    )
}