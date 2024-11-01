import './App.css';
import MyButton from './MyButton';

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  const handleMyButtonClick = () => {
    console.log("My Buton Clicked");
  };



  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <MyButton onClick={handleMyButtonClick} />
    </>

    // <>
    // <button onClick={(event) => {
    //   console.log (event)
    // }}>Click me</button>
    // </>
  );
}

export default App;
