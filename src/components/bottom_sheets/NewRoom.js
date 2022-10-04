import { useState } from "react";
import style from '../../style/roomDetail.module.css';
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";

const NewRoom = ({ setSheetVisible, setSheetCreateRoom, cardDetail }) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const card = cardDetail;

    return (
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className="d-flex align-items-center">
                        <a href="#" onClick={() => { setSheetVisible(false) }}>
                            <img src="/images/arrow.png" alt="" className={style.arrow_icon} />
                        </a>
                        <span>Hallway</span>
                    </div>

                    <div>
                        <AiOutlineFile />
                        <img src="/images/user-img.jpg" alt="" className={style.profile_img} />
                    </div>
                </div>

                <div className={style.roomDetailCard}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap" style={{ padding: "0.5em" }}>
                        {card.members.map(item => (
                            <div className={style.memberContainer}>
                                {micMuteVisible ? <div className={style.audio_icon}> <BsMicMuteFill /> </div> : ""}
                                <img src="/images/user-img.jpg" alt="" className={style.profile_img} />
                                <p> <span>*</span> {item.first_name} </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.footer}>
                    <button
                        onClick={() => {
                            setSheetVisible(false)
                            setSheetCreateRoom(false)
                        }}>
                        <img src="/images/hand-peace.png" alt="" />
                        Leave Quietly
                    </button>

                    <div>
                        <button> <AiOutlinePlus /> </button>
                        <button> <img src="/images/stopHandIcon.png" alt="" /> </button>
                        <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewRoom