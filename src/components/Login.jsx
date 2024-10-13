import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  

  function handleSubmit(event) {
    event.preventDefault();

    const isEmailValid = enteredEmail.current.value.includes("@");

    if (!isEmailValid) {
      setEmailIsInvalid(true);
      console.log("Entered invaid email!");
      return;
    }
    setEmailIsInvalid(false);
    console.log(enteredEmail.current.value);
    console.log(enteredPassword.current.value);
    event.target.reset();
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={enteredEmail}
            id="email"
            type="email"
            name="email"
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={enteredPassword}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
