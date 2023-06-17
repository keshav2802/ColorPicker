import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./helper";
import "./App.css";

const App = () => {
  return (
    <div>
      <Palette palette={generatePalette(seedColors)} />
    </div>
  )
}

export default App;
