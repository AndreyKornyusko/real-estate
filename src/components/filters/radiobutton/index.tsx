import {FiltersEnum} from '../../../interfaces/data.interaface'
import styles from "./radiobutton.module.scss";
import checkImg from '../../../assets/images/check.png'
interface IRadiobutton {
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>, id: FiltersEnum) => void;
  label: string;
  id: FiltersEnum
}
const Radiobutton = ({ checked, onClick, label, id }: IRadiobutton) => {
  return (
    <div className={styles.radiobutton} onClick={(e)=>onClick(e,id)}>
      <div className={styles.checkbox}>{checked ? <img src={checkImg} alt=""/> : null}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
export default Radiobutton;
