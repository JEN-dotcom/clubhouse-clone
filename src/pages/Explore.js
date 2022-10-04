import { Input } from "antd";
import data from "../data/explore.json";
import style from '../style/explore.module.css';
import Subheader from '../components/Subheader';
import { DownOutlined, FireOutlined } from "@ant-design/icons";

const Explore = () => {
    const { people, conversation } = data;

    return (
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <Subheader pageTitle="Explore" />
                <Input
                    size="large"
                    style={{
                        border: "none",
                        boxShadow: "none",
                        padding: "0.3em 1em",
                        borderRadius: "0.8em",
                        backgroundColor: "#f4f4f4"
                    }}
                    placeholder='Find People and Clubs'
                    prefix={<img src='images/search.png' width="15px" />}
                />
            </div>

            <h6>PEOPLE TO FOLLOW</h6>

            <div className={style.peopleContainer}>
                {people.map(item => (
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src="/images/user-img.jpg" />
                            <div className='ms-2'>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>

                        <button>Follow</button>
                    </div>
                ))}

                <button className={style.showMore}> Show more people  <DownOutlined /> </button>
            </div>

            <h6>FIND CONVERSATIONS ABOUT...</h6>

            <div className='row mx-0'>
                {conversation.map(item => (
                    <div className='col-6 px-2 mb-3'>
                        <div className={style.conversationCard}>
                            <h6> <FireOutlined /> {item.title} </h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore