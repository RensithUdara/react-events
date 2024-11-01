import './App.css';

function App() {
  const handleClick = () => {
    console.log("Clicked");
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>

    // <>
    // <button onClick={(event) => {
    //   console.log (event)
    // }}>Click me</button>
    // </>
  );
}

export default App;
