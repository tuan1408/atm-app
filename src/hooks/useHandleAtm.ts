import { AxiosResponse } from "axios";
import { atmService } from "../services/atmService";

export default function useHandleAtm() {
  async function deleteAtm(id: string, transactionStatus: string) {
    if (transactionStatus.toLocaleLowerCase() === "bussy") {
      alert("Atm is bussy");
    } else {
      const resp: AxiosResponse = await atmService.deleteAtm(id);

      if (resp.status === 200 && resp.data.remove) {
        alert("delete successfully");
      }
    }
  }
  return { deleteAtm };
}
