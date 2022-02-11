import styled from "styled-components";

export const TransactionBoxStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #bfbaba8a;
  .box {
    z-index: 100;
    width: 50%;
    margin: 200px auto;
    text-align: center;
    background: #79bd9a;
    padding: 20px;
    z-index: 100;
    width: 50%;
    margin: 200px auto;
    text-align: center;
  }
  .box-heading {
    color: #000;
    text-transform: uppercase;
    font-size: 20px;
  }
  .box-image {
    width: 100%;
  }

  .box-image img {
    max-width: 200px;
  }
  form {
    padding: 10px 30px;
  }

  form input {
    padding: 15px 20px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    margin: 10px 0;
  }

  .btn-group {
    display: inline-block;
  }

  .btn {
    padding: 20px 30px;
    margin: 10px 20px;
    outline: none;
    border: navajowhite;
    cursor: pointer;
    border-radius: 10px;
  }

  .btn-cancle:hover,
  .btn-create:hover {
    background: rgb(235, 152, 122);
  }
`;
