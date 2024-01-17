// eslint-disable-next-line react/prop-types
function TodoInput({ inputName, inputValue, updateCurrentTodo }) {
  return (
    <div className="col-auto">
      <label className="visually-hidden" htmlFor={inputName}>
        {inputName}
      </label>
      <input
        type="text"
        className="form-control"
        id={inputName}
        placeholder={inputName}
        value={inputValue}
        onChange={(event) => updateCurrentTodo(inputName, event.target.value)}
      />
    </div>
  );
}
export default TodoInput;
