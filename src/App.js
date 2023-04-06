import * as React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./components/index.css";
import Checkbox from "./components/Checkbox";

function App() {
  let name = "To-Do Liste";
  // const [hacken, setHacken] = useState(toBeChecked);

  return (
    <div className="center container paper">
      <Header name={name} />

      <Main nummer inhalt="Frühstück" />
      <Main inhalt="Duschen" />
      <Main inhalt="Call mit Eric" />
      <Main inhalt="Erstelle eine To-Do Liste" />
      <Main inhalt="Verstehe was du machst" />
      <Main inhalt="Um 17:30 Call mit Eric" />
    </div>
  );
}

export default App;
