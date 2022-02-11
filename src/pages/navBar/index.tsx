import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HandleTransactionBox } from "../../hooks/useHandleTransactionBox";
import { NavBarStyled } from "./style";

function NavBar() {
  const [isLogOut, setIsLogOut] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.removeItem("data_user_login");
    navigate("/login");
  };

  const showButtonLogOut = () => {
    setIsLogOut(!isLogOut);
  };

  const { displayAddAtm, displayTransactionBox } = HandleTransactionBox();
  const userInfo = window.localStorage.getItem("data_user_login") || "";

  return (
    <NavBarStyled>
      <div className="add-item">
        <button onClick={displayAddAtm}>Add Atm</button>
        <button onClick={displayTransactionBox}>Add Transaction</button>
      </div>
      <div className="user" onClick={showButtonLogOut}>
        <h3>{JSON.parse(userInfo).user.email}</h3>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
        {isLogOut && (
          <button className="btn-logout" onClick={handleLogOut}>
            Log Out
          </button>
        )}
      </div>
    </NavBarStyled>
  );
}

export default NavBar;
