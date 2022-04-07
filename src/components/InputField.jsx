// NPM packages
import {useState} from "react"

export default function InputField({ setup, state, validation }) {
  // Safeguard
  if (setup === undefined) throw new Error("The setup prop is missing");
  if (state === undefined) throw new Error("The state prop is missing");

  const { autofocus, label, placeholder, required, type, min, max } = setup;
  const [getter, setter] = state;

  // Local state
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  function onValidate(validation, setter, setErrorMessage) {
    // Safeguard
    if (validation === undefined) return;

    const result = validation(getter);

    setter(result.data);
    setErrorMessage(result.error);
  }


  return (
    <label className="input-field">
      {label}:
      <input
        autoFocus={autofocus}
        placeholder={placeholder}
        type={type}
        required={required}
        value={getter}
        min={min}
        max={max}
        onChange={(event) => setter(event.target.value)}
        onBlur={() => onValidate(validation, setter, setErrorMessage)}
      />
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </label>
  );
}
