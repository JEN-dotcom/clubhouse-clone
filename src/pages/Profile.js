import { Link } from "react-router-dom";
import style from '../style/profile.module.css';
import exploreStyle from '../style/explore.module.css';
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';

const Profile = () => {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-end mb-0`}>
                        <Link to="/home"> <img src="/images/arrow.png" alt='' className={exploreStyle.arrow_icon} /> </Link>

                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>

                <img src='/images/user-img.jpg' alt="" className={style.profile_image} />
                <h4>Rafeh Qazi</h4>
                <p>@cleverqazi</p>

                <div className={style.follow}>
                    <p> <span>0</span> followers</p>
                    <p><span>51</span> following</p>
                </div>

                <button>Add a bio</button>

                <div className='mb-4'>
                    <button className='mb-0'> <AiOutlineTwitter /> Add Twitter </button>
                    <button className='mb-0'> <AiOutlineInstagram /> Add Instagram </button>

                    <div className={style.nominated}>
                        <img src="/images/user-img.jpg" alt="" />
                        <div>
                            <p>Joined 14-July-2022</p>
                            <p> Nominated by <span>Anton Alarcon</span> </p>
                        </div>
                    </div>

                    <p>Member of</p>
                    <button className={style.addMemberBtn}> <BsPlus /></button>
                </div>
            </div>
        </>
    );
};

export default Profile