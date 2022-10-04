import NewRoom from './bottom_sheets/NewRoom';
import StartRoom from './bottom_sheets/StartRoom';
import style from '../style/bottomSheet.module.css';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

const BottomSheet = (props) => {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setItemVisible(true);
        props.setSheetVisible(!props.sheetVisible);
      }}
      fullScreen={props.sheetTitle == "room detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{ backgroundColor: props.sheetTitle == "profile" ? 'transparent' : '' }}
      >
        {props.sheetTitle == "new room" ?
          <NewRoom
            cardDetail={props.cardDetail}
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={props.setSheetVisible}
          />
          : props.sheetTitle == "start room" ? 
          <StartRoom setSheetCreateRoom={props.setSheetCreateRoom} setSheetVisible={props.setSheetVisible}/>
          : ""
        }
      </div>
    </SwipeableBottomSheet>
  );
};

export default BottomSheet