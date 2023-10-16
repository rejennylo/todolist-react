import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, TodoPage, LoginPage, SignUpPage } from './pages';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
