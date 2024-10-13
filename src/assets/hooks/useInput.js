import { useState } from "react";

function useInput(initialValue, validationFn) {
  const [enteredInput, setEnteredInput] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const inputIsInvalid = didEdit && (validationFn(enteredInput));

  function handleChange(event) {
    setEnteredInput(event.target.value);
    setDidEdit(false);
  }

  function handleBlur() {
    setDidEdit(true);
  }

  function resetField() {
    setEnteredInput("");
    setDidEdit(false);    
  }

  return {
    enteredInput,
    handleChange,
    handleBlur,
    resetField,
    hasError: inputIsInvalid
  }
  
}

export default useInput;