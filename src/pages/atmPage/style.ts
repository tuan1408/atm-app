import styled from "styled-components";

export const AtmShowPageStyle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 20px 20px;
  .card-group {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-shrink: 0;
    flex-wrap: wrap;

    margin: 0 auto;
  }
  .atm {
    flex: 1 1 70%;
  }

  .atm-card {
    width: 33.3333%;
    padding: 30px;
    box-sizing: border-box;
  }

  .user-image {
    width: 40px;
    display: inline-block;
  }

  .user-image > img {
    width: 100%;
  }

  .user-info {
    display: inline-block;
    margin: 20px 20px;
  }

  .user-info > p {
    overflow-x: hidden;
    margin: 0;
  }
  .queue {
    background: rgb(191, 186, 186);
    flex: 1 1 30%;
    text-align: center;
    height: 80vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 20px;
    overflow-x: hidden;
  }

  .processd {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
  .list-user {
    background: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .orders {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
