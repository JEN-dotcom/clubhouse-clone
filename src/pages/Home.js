import { useState } from 'react';
import data from '../data/roomCard.json';
import Header from '../components/Header';
import style from '../style/home.module.css';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";
import newRoomData from "../data/newRoom.json";
import BottomSheet from '../components/BottomSheet';
import RoomInfoCard from '../components/RoomInfoCard';
import DailyInfoCard from '../components/DailyInfoCard';


const Home = () => {
  const [cardId, setCardId] = useState(1);
  const [items, setItemVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);

  return (
    <>
      {loaderVisibility ? (
        <div style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src="/images/loader.gif" alt="" />
        </div>
      ) : ""
      }

      <Header />

      <div className={style.home_container} >
        <DailyInfoCard />
        <RoomInfoCard />
      </div>

      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className='mr-2' />
          Start a room
        </button>

        <button>
          <BsGrid3X3Gap />
        </button>
      </div>

      <BottomSheet
        sheetTitle="start room"
        sheetVisible={sheetVisible}
        setSheetCreateRoom={item => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false)
          }, 1000)
        }}
        setItemVisible={setItemVisible}
        setSheetVisible={setSheetVisible}
        cardDetail={data.find(item => item.id == cardId)}
      />

      <BottomSheet
        sheetTitle="new room"
        cardDetail={newRoomData}
        sheetVisible={sheetCreateRoom}
        setItemVisible={setItemVisible}
        setSheetVisible={setSheetVisible}
        setSheetCreateRoom={setSheetCreateRoom}
      />
    </>
  );
};

export default Home