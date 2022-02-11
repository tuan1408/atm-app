import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api_get_all_atm } from "../../action/actionCreator";
import { RootState } from "../../reducers/rootReducer";
import { atmService } from "../../services/atmService";
import { TypeAtmData } from "../../types/typedata";

export default function useGetData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    atm: atmData,
    processedClient,
    queue,
  }: TypeAtmData = useSelector((state: RootState) => state.atm) || [];

  const callATM = async () => {
    const resp = await atmService.getAtms();
    dispatch(api_get_all_atm(resp.data));
  };
  useEffect(() => {
    const dataUserLogin = window.localStorage.getItem("data_user_login") || "";
    if (dataUserLogin) {
      const atmTime = setInterval(() => {
        callATM();
      }, 2000);
      // callATM();

      return () => {
        clearInterval(atmTime);
      };
    } else {
      navigate("/login");
    }
  }, []);
  return { atmData, processedClient, queue };
}
