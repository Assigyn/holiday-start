import Header from "./components/Header";
import Nav from "./components/Nav";
import List from "./components/List";
import {useState} from "react";

function App() {
  const [buttons, setButtons] = useState([
      {id: 1, text: 'All stays', active: true},
      {id: 2, text: 'Norway', active: false},
      {id: 3, text: 'Finland', active: false},
      {id: 4, text: 'Sweden', active: false},
      {id: 5, text: 'Switzerland', active: false},
  ])

  const [filter, setFilter] = useState(null);
  const [superHost, setSuperhost] = useState(false);

  return (
    <div className="appContainer">
      <Header />
        <div className="appContainerBody">
            <Nav buttons={buttons} setButtons={setButtons} setFilter={setFilter} setSuperhost={setSuperhost}/>
            <List buttons={buttons} filter={filter} superHost={superHost} />
        </div>
    </div>
  );
}

export default App;
