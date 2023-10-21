import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { register, isAuthenticated } = useAuth(); // 從 useAuth 中取得需要的方法

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    const success = await register({
      username,
      email,
      password,
    });
    if (success) {
      Swal.fire({
        position: 'top',
        title: '註冊成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    Swal.fire({
      position: 'top',
      title: '註冊失敗',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todo')
    }
  }, [navigate,isAuthenticated]);

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

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
          label="email"
          value={email}
          placeholder="請輸入email"
          onChange={(emailInputValue) => setEmail(emailInputValue)}
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
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <AuthLinkText onClick={() => navigate('/login')}>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;
