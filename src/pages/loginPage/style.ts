import styled from "styled-components";

export const LoginPageShow = styled.div`
  text-align: center;
  height: 100vh;

  form {
    width: 50vw;
    margin: 200px auto;
    background: rgb(126, 143, 133);
    padding: 40px;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    margin: 10px;
    padding: 10px;
  }
  input {
    width: 100%;
    display: inline-block;
    padding: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
  }
  .btn {
    display: inline-block;
    margin: 10px 20px;
  }
  .btn-signup,
  .btn-signin {
    padding: 20px 30px;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 20px;
  }

  .btn-signup:hover,
  .btn-signin:hover {
    background: rgb(235, 152, 122);
  }
`;
