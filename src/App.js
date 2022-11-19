import "./css/App.css";
import Content from "./Content";
import Header from "./Header";
import Image from "./Image";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <Task taskNumber="1" />
      <Header />
      <Content />
      <Image />
      <Task taskNumber="2" />
    </div>
  );
}

export default App;
