import Input from "./Input";
import { isEmail, hasMinLength } from "../util/validation";
import useInput from "../assets/hooks/useInput";

export default function Login() {
  const {
    enteredInput: enteredEmail,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
    hasError: emailHasError,
    resetField: resetEmail,
  } = useInput(
    "",
    (value) => !(isEmail(value) && hasMinLength(value.trim(), 4))
  );

  const {
    enteredInput: enteredPassword,
    handleBlur: handlePasswordBlur,
    handleChange: handlePasswordChange,
    hasError: passwordHasError,
    resetField: resetPassword,
  } = useInput("", (value) => !hasMinLength(value.trim(), 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      console.log("input error");
      return;
    }
    console.log(enteredEmail);
    console.log(enteredPassword);
    resetEmail();
    resetPassword();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailHasError && "please enter a valid email!"}
          type="email"
          name="email"
          value={enteredEmail}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredPassword}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={
            passwordHasError && "password should be at least 6 characters!"
          }
        />
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
