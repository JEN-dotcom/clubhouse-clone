import { Link } from "react-router-dom";
import style from '../style/explore.module.css';

const Subheader = ({ pageTitle }) => {
  return (
    <div className={style.head}>
      <Link to="/home"> <img src='/images/arrow.png' alt="" /> </Link>
      <h3>{pageTitle}</h3>
    </div>
  );
};

export default Subheader