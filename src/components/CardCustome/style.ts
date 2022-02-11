import styled from "styled-components";

export const CartStyle = styled.div`
  text-align: center;
  .image-card {
    margin-bottom: 20px;
  }
  .image-card > img {
    width: 100%;
  }
  .transaction-status {
    color: red;
  }

  .delete-button {
    width: 30px;
    height: 30px;
    margin-left: auto;
    cursor: pointer;
  }
  .delete-button > img {
    width: 100%;
    height: 100%;
  }
`;
