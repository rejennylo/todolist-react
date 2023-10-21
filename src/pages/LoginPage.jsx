import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth(); // 從 useAuth 中取得需要的方法

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const success = await login({ username, password });
    if (success) {
      Swal.fire({
        position: 'top',
        title: '登入成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    Swal.fire({
      position: 'top',
      title: '登入失敗',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todo');
    }
  }, [navigate, isAuthenticated]);

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          value={username}
          placeholder="請輸入帳號"
          onChange={(usernameInputValue) => setUsername(usernameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <AuthLinkText onClick={() => navigate('/signup')}>註冊</AuthLinkText>
    </AuthContainer>
  );
};

export default LoginPage;
