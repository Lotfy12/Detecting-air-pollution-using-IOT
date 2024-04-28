import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa6";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import styles from "./Descriptions.module.css";
import { BiHappy } from "react-icons/bi";

function Descriptions({ weather }) {
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: "°C",
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: "°C",
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: "°C",
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure.toFixed(),
      unit: "°C",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.temp_min,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed ",
      data: weather.speed.toFixed(),
      unit: "°C",
    },
  ];

  return (
    <div className={styles.section_descriptions}>
      {cards.map(({ id, icon, title, data }) => (
        <div key={id} className={styles.card}>
          <div className={styles.description_card_icon}>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} °C `}</h2>
        </div>
      ))}
    </div>
  );
}

export default Descriptions;
