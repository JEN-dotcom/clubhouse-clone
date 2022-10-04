import data from "../data/dailyCard.json";
import style from '../style/dailyInfoCard.module.css';

const DailyInfoCard = () => {
  return (
    <div className={style.dailyCard}>
      {data.map(item => (
        <div key={item.title}>
          <span className=''>{item.time}</span>
          <div> <span>{item.title}</span> <p>{item.description}</p> </div>
        </div>
      ))}
    </div>
  );
};

export default DailyInfoCard