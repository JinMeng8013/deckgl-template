import "./styles.css";
import { BaseMap } from "./components/BaseMap";
import { initialViewState } from "./utils/consts";

export default function App() {
  return (
    <div className="App">
      <div className={"map-wrapper"}>
        <BaseMap initialViewState={initialViewState} />
      </div>
    </div>
  );
}
