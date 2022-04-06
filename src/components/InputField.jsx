// NPM packages


export default function InputField({ setup, state }) {
  // safeguard
  if (setup === undefined) throw new Error("The setup prop is missing");
  if (state === undefined) throw new Error("The state prop is missing");

  const { autofocus, label, placeholder, required, type, min, max } = setup;
  const [getter, setter] = state;

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
      />
    </label>
  );
}
