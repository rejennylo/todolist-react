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
            onSave={({ id, title }) => onSave?.({ id, title })}
            onDelete={({ id }) => onDelete?.({ id })}
            onTaggleDone={(id) => onTaggleDone?.(id)}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
