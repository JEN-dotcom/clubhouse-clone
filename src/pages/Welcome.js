import { Link } from 'react-router-dom';
import style from '../style/welcome.module.css';

const Welcome = () => {
    return (
        <div className={style.WelcomeContainer} >
            <h1>Welcome!</h1>

            <div className={style.WelcomeInfo}>
                <p>
                    This is clubhouse UI clone project I undertook to get better at react ! You can navigate through the pages by
                    clicking on the button below.
                </p>
                <p>
                    This project was built with ant-design, react-router-dom v6, bootstrap, react-icons,
                    react-phone-number-input, and react-swipeable-bottom-sheet.
                </p>
                <p>
                    Thank you for visiting.
                </p>
            </div>

            <div className={style.actionBtn}>
                <Link to="/invite" className='primaryBtn d-flex align-items-center mb-3'> Get your username {""} </Link>
                <Link> Have an invite text? Sign in </Link>
            </div>
        </div>
    );
};

export default Welcome