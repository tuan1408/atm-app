import { AxiosRequestConfig } from "axios";
import {
  InitialATM,
  InitialTransaction,
  TypeAtmData,
  TypeResponseAddPeoPle,
} from "../types/typedata";
import { httpToken } from "./httpService";

export const atmService = {
  getAtms: async (config?: AxiosRequestConfig) => {
    return httpToken.get<TypeAtmData>(`http://localhost:4001/api/v1/atms`, {
      ...config,
    });
  },

  addTransaction: async (
    data: InitialTransaction,
    config?: AxiosRequestConfig
  ) => {
    return httpToken.post<TypeResponseAddPeoPle>(
      `http://localhost:4001/api/v1/atms/people`,
      data,
      {
        ...config,
      }
    );
  },

  addAtm: async (data: InitialATM, config?: AxiosRequestConfig) => {
    return httpToken.post<TypeResponseAddPeoPle>(
      `http://localhost:4001/api/v1/atms/`,
      data,
      {
        ...config,
      }
    );
  },

  deleteAtm: async (id: string, config?: AxiosRequestConfig) => {
    return httpToken.delete(`http://localhost:4001/api/v1/atms/${id}`, {
      ...config,
    });
  },
};
