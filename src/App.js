import './App.css';
import MyButton from './MyButton';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState('');
  const [focused, setFocused] = useState(false);
  const [dragged, setDragged] = useState(false);

  const handleClick = () => console.log("Button Clicked");
  const handleMyButtonClick = () => console.log("My Button Clicked");
  const handleDoubleClick = () => console.log("Button Double-Clicked");
  const handleContextMenu = () => console.log("Context Menu Opened");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log("Input Changed:", event.target.value);
  };

  const handleKeyPress = (event) => {
    setKeyPressed(event.key);
    console.log(`Key Pressed: ${event.key}`);
  };

  const handleFocus = () => {
    setFocused(true);
    console.log("Input Focused");
  };

  const handleBlur = () => {
    setFocused(false);
    console.log("Input Blurred");
  };

  const handleMouseEnter = () => console.log("Mouse Entered");
  const handleMouseLeave = () => console.log("Mouse Left");
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleCopy = () => console.log("Content Copied");
  const handleCut = () => console.log("Content Cut");
  const handlePaste = () => console.log("Content Pasted");

  const handleDrag = () => {
    setDragged(true);
    console.log("Dragging");
  };

  const handleDragEnd = () => {
    setDragged(false);
    console.log("Drag Ended");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="app-container" onMouseMove={handleMouseMove}>
      <h1 className="header">Comprehensive React Event Examples</h1>

      <button onClick={handleClick} onDoubleClick={handleDoubleClick} onContextMenu={handleContextMenu}>
        Click / Double-Click / Right-Click Me
      </button>

      <br />

      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
      />

      <br />

      <MyButton onClick={handleMyButtonClick} />

      <br />

      <div
        className={`hover-box ${focused ? 'focused' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        draggable
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        Drag or Hover over me
      </div>

      <form onSubmit={handleFormSubmit}>
        <button type="submit">Submit Form</button>
      </form>

      <p className="mouse-position">Mouse Position: ({mousePosition.x}, {mousePosition.y})</p>
      <p className="key-pressed">Last Key Pressed: {keyPressed}</p>
      <p className={`drag-status ${dragged ? 'dragging' : ''}`}>{dragged ? "Currently Dragging" : "Drag Stopped"}</p>

      {/* Added your commented part */}
      <button onClick={(event) => {
        console.log(event);
      }}>Click me (Logs Event Object)</button>
    </div>
  );
}

export default App;
