import { Link } from 'react-router-dom';
import style from '../style/header.module.css';


const Header = () => {
    return (
        <div className={style.Header}>
            <Link to="/explore" > <img src="/images/search.png" /> </Link>

            <div className={style.nav_items}>
                <Link to="/friends_invite" > <img src="/images/invite.png" /> </Link>
                <Link to="/upcoming" > <img src="/images/calendar.png" /> </Link>
                <Link to="/activity" > <img src="/images/noti.png" /> </Link>
                <Link to="/profile" > <img src="/images/b1.png" /> </Link>
            </div>
        </div>
    );
};

export default Header