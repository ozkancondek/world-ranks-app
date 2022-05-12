import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";
import styles from "./CountriesTable.module.css";
import Link from "next/link";
//order countries
const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }
  return countries;
};

//Arrow component for sort countries
const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};
const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  //arrow switch function
  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  //set Value and Direction states in oe time
  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };
  //take ordered countries
  const orderedCountries = orderBy(countries, value, direction);
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name} onClick={setValueAndDirection}>
          <div>Name</div>
          <SortArrow direction={direction} />
        </button>
        <button
          className={styles.heading_population}
          onClick={setValueAndDirection}
        >
          <div>Population</div>
          <SortArrow direction={direction} />
        </button>
      </div>
      {orderedCountries.map((country, index) => (
        <Link href={`/country/${country.alpha3Code}`} key={index}>
          <div>
            <div className={styles.row}>
              <div className={styles.name}> {country.name}</div>
              <div className={styles.population}>{country.population}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;
