import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

const ColorBox = ({background, name}) => {

  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied((copied) => !copied);
    setTimeout(() => {
      setCopied((copied) => !copied);
    }, 1000)
  }

  return (
    <CopyToClipboard text={background}>
      <div style={{background}} className="ColorBox" onClick={handleClick}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">{copied ? "COPIED !" : "COPY"}</button>
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox;
