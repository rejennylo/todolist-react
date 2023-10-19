import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react';
import { getTodos, createTodo } from '../api/todos';

const TodoPage = () => {
  // 新增變數 儲存使用者 input
  const [inputValue, setInputValue] = useState('');
  // 新增變數 儲存 todos 資料
  const [todos, setTodos] = useState([]);

  const todoNums = todos.length;

  // 將輸入的文字放入變數
  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }

    try {
      // 從 craateTodo 取得資料
      const data = await createTodo({ title: inputValue, isDone: false });

      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });

      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDone = async () => {
    if (inputValue.length === 0) {
      return;
    }

    try {
      // 從 craateTodo 取得資料
      const data = await createTodo({ title: inputValue, isDone: false });

      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          },
        ];
      });

      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  // 監聽點擊事件, 觸發 isDone 改變, 進而修改樣式
  const handleTaggleDone = (id) => {
    setTodos((prevtodos) => {
      // 查看所有的 todo
      return prevtodos.map((todo) => {
        // 如果 todo id 和 props 傳入的 id 相同, 則反轉 isDone 當前值
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  };

  // 監聽雙點擊事件, 觸發 isEdit, 可修改 input
  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return {
          ...todo,
          isEdit: false,
        };
      });
    });
  };

  // 更新 todo 狀態
  const handleSave = ({ id, title }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
            isEdit: false,
          };
        }
        return todo;
      });
    });
  };

  // 監聽點擊事件, 移除 todo
  const handleDelete = ({ id }) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  // 從資料庫取得 todos 進行初次渲染
  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDone}
        onAddTodo={handleAddTodo}
      />
      <TodoCollection
        todos={todos}
        onSave={handleSave}
        onDelete={handleDelete}
        onTaggleDone={handleTaggleDone}
        onChangeMode={handleChangeMode}
      />
      <Footer todoNums={todoNums} />
    </div>
  );
};

export default TodoPage;
