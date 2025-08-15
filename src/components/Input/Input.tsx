import "./Input.scss";

type ActionType = {
  type: "name" | "email" | "phoneNumber";
  value: string;
};
type props = {
  name: string;
  placeholder: string;
  action: "name" | "email" | "phoneNumber";
  value: string;
  handleChange: React.ActionDispatch<[ActionType]>;
  error: string;
};

function Input({
  name,
  placeholder,
  action,
  value,
  handleChange,
  error,
}: props) {
  return (
    <div className="input">
      <div className="input_labels">
        <p>{name}</p>
        <p className={error !== '' ? "error_label" : "no_error_label"}>
          {error}
        </p>
      </div>
      <input
        className={`input_box  ${error != '' ? 'error_border':''}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange({ type: action, value: e.target.value })}
      />
    </div>
  );
}

export default Input;
