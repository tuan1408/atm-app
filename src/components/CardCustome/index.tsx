import { FC } from "react";
import { CartStyle } from "./style";
import atmImage from "../../assets/image/atm.png";
import deleteImage from "../../assets/image/delete.jpg";
import useHandleAtm from "../../hooks/useHandleAtm";

interface ICardCustome {
  id: string;
  atmName: string;
  userName: string;
  transactionStatus: string;
}

const CardCustome: FC<ICardCustome> = ({
  id,
  atmName,
  userName,
  transactionStatus,
}) => {
  const { deleteAtm } = useHandleAtm();

  return (
    <CartStyle>
      <div
        className="delete-button"
        onClick={() => deleteAtm(id, transactionStatus)}
      >
        <img src={deleteImage} alt="delete" />
      </div>

      <div className="image-card">
        <img src={atmImage} alt="atm" />
      </div>

      <h2 className="transaction-status">{transactionStatus}</h2>
      <h3 className="atm-name">{atmName}</h3>
    </CartStyle>
  );
};

export default CardCustome;
