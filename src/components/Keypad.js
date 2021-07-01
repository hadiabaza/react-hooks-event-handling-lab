// Code Keypad Component Here
function Keypad() {
  function eventHandler() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={eventHandler} />;
}

export default Keypad;
