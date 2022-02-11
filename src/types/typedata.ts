export interface Atm {
  client: string;
  id: string;
  name: string;
  remove: boolean;
  status: string;
  transaction: number;
}
export interface UserQueue {
  name: string;
  transaction: string;
}

export interface TypeAtmData {
  atm: Atm[];
  processedClient: string;
  queue: UserQueue[];
}
export interface InitialTransaction {
  namePeople: string;
  transaction: string;
}
export interface InitialATM {
  name: string;
}
export interface TypeResponseAddPeoPle {
  message: string;
  success: string;
}
export interface ActionTransactionReducer {
  type: string;
  payload: boolean;
}
export interface ActionAddAtmReducer {
  type: string;
  payload: boolean;
}
