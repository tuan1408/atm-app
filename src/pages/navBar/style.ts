import styled from "styled-components";

export const NavBarStyled = styled.div`
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  button {
    margin: 20px 20px;
    padding: 20px;
    cursor: pointer;
    outline: none;
    border: none;
    background: white;
    box-shadow: 1px 2px #888;
    border-radius: 10px;
  }

  button:hover {
    background: rgb(235, 152, 122);
  }

  .btn-logout {
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    margin: 0;
  }

  .user {
    gap: 20px;
    margin-right: 20px;
  }

  .user-icon {
    cursor: pointer;
  }
`;
