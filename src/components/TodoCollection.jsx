import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onTaggleDone,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  );
};

export default TodoCollection;
