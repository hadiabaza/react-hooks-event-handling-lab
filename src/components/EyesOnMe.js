function EyesOnMe() {
  function FocusHandler() {
    console.log("Good!");
  }
  function BlurHandler() {
    console.log("Hey! Eyes on me!");
  }
  return (
    <button onFocus={FocusHandler} onBlur={BlurHandler}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
