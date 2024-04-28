import { GiFire, GiGasMask, GiPollenDust, GiSmokeBomb } from "react-icons/gi";
import { MdOutlineAir, MdOutlineWaterDrop } from "react-icons/md";
import { FaTemperatureHalf } from "react-icons/fa6";
import styles from "./Descriptions.module.css";

function ArdunioDescriptions() {
  const cards = [
    {
      id: 1,
      icon: <FaTemperatureHalf />,
      title: "temperature",
      data: `x`,
      unit: "°C",
    },
    {
      id: 2,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: `x`,
      unit: "%",
    },
    {
      id: 3,
      icon: <GiFire />,
      title: "LPG",
      data: `x`,
      unit: "kg",
    },
    {
      id: 4,
      icon: <MdOutlineAir />,
      title: "AQI",
      data: `x`,
      unit: "o3",
    },
    {
      id: 5,
      icon: <GiPollenDust />,
      title: "Dust",
      data: `x`,
      unit: "g",
    },
    { id: 6, icon: <GiSmokeBomb />, title: "smoke", data: `x`, unit: "%" },
    { id: 7, icon: <GiGasMask />, title: "CO", data: `x`, unit: "g" },
  ];

  return (
    <div className={styles.section_descriptions}>
      {cards.map(({ id, icon, title, unit, data }) => (
        <div key={id} className={styles.card}>
          <div className={styles.description_card_icon}>
            {icon}
            <small className={styles.title}>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
}

export default ArdunioDescriptions;
