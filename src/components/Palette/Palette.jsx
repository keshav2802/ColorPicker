import { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import "./Palette.css";

const Palette = ({palette}) => {

  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");

  const changeFormat = (colorFormat) => {
    setColorFormat(colorFormat);
  }
  
  const colorBoxes = palette[level].map((color) => (
    <ColorBox background={color[colorFormat]} name={color.name} />
  ))
  return (
    <div className="Palette">
      <Navbar level={level} setLevel={setLevel} changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  )
}

export default Palette;
