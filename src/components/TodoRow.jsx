// eslint-disable-next-line react/prop-types
function TodoRow({ index, todo, deleteTodo }) {
  // eslint-disable-next-line react/prop-types
  const { id, name, mobile, email } = todo;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{name}</td>
      <td>{mobile}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoRow;
