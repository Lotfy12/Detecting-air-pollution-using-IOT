import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li className={styles.button}>
            <NavLink to="/WeatherAPI">WeatherAPI</NavLink>
          </li>
          <li className={styles.button}>
            <NavLink to="/arduino"> Arduino</NavLink>
          </li>
          <li className={styles.button}>
            <NavLink to="/charts"> Charts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
