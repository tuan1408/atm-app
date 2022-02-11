import React from "react";
import { Atm, UserQueue } from "../../types/typedata";
import NavBar from "../navBar";
import { AtmShowPageStyle } from "./style";
import useGetData from "./useGetData";
import userImage from "../../assets/image/user.png";
import CardCustome from "../../components/CardCustome";
import { HandleTransactionBox } from "../../hooks/useHandleTransactionBox";
import TransactionBox from "../../components/TransactionBox";

function AtmPage() {
  const { atmData, processedClient, queue } = useGetData();
  const { isDataBox } = HandleTransactionBox();

  return (
    <div>
      <NavBar />
      <AtmShowPageStyle>
        <div className="container">
          <div className="atm">
            <div className="card-group">
              {atmData.map((atm: Atm) => (
                <div className="atm-card" key={atm.id}>
                  <CardCustome
                    id={atm.id}
                    atmName={atm.name}
                    userName={atm.client}
                    transactionStatus={atm.status}
                  />
                </div>
              ))}
            </div>
            <div className="orders">
              {queue.slice(0, 3).map((que: UserQueue, index: number) => {
                return (
                  <div className="list-user" key={index}>
                    <div className="user-image">
                      <img src={userImage} alt="userImage" />
                    </div>
                    <div className="user-info">
                      <b>{que.name}</b>
                      <p>Pending Transaction: {que.transaction}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="queue">
            <h4>Queue</h4>
            <div>
              {queue.map((que: UserQueue, index: number) => {
                return (
                  <div className="list-user" key={index}>
                    <div className="user-image">
                      <img src={userImage} alt="userImage" />
                    </div>
                    <div className="user-info">
                      <p>{que.name}</p>
                      <p>{que.transaction}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {isDataBox && <TransactionBox />}
        <div className="sub">
          <h2>Processed client</h2>
          <div>
            {queue.slice(0, 3).map((que: UserQueue, index: number) => {
              return (
                <div key={index} className="sub__user-name">
                  <b>{que.name}:</b>
                  {processedClient.slice(0, 100)}
                </div>
              );
            })}
          </div>
        </div>
      </AtmShowPageStyle>
    </div>
  );
}

export default AtmPage;
