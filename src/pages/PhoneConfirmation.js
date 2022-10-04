import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-number-input";
import style from '../style/phoneConfirm.module.css';

const PhoneConfirmation = () => {
    const [value, setValue] = useState();

    return (
        <div className={style.phoneConfirmContainer}>

            <Link to="/" className={style.backBtn}> <img alt='' src='/images/arrow.png' /> </Link>

            <h1>Enter your phone</h1>

            <PhoneInput international defaultCountry='US' onChange={setValue} />

            <p>
                By entering your number, you're agreeing to our <span>
                    Terms of Service and Privacy Policy.
                </span>
                Thanks!
            </p>

            <Link to='/code_confirm' className="primaryBtn d-flex align-items-center">
                Next <img src="/images/nextArrowIcon.svg" className='ml-1' />
            </Link>
        </div>
    );
};

export default PhoneConfirmation