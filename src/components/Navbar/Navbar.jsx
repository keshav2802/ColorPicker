import { useState } from "react";
import Slider from "rc-slider";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({level, setLevel, changeFormat}) => {

  const [colorFormat, setColorFormat] = useState("hex");

  const handleChange = (e) => {
    setColorFormat(e.target.value);
    changeFormat(e.target.value);
  }

  return (
    <nav className="Navbar">
      <div className="logo">
        UI Color Picker
      </div>
      <div className="slider-container">
        <span>Level : {level}</span>
        <div className="slider">
          <Slider 
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={(level) => setLevel(level)}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={colorFormat} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
    </nav>
  )
}

export default Navbar;
