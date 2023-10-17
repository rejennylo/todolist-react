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
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onTaggleDone={(id) => onTaggleDone?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
