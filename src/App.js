import "./css/App.css";
import Content from "./Content";
import Header from "./Header";
import Image from "./Image";
import Task from "./Task";
import { PRODUCTS } from "./data/products";
import GoodsCard from "./GoodsCard";

function App() {
  return (
    <div className="App">
      <Task taskNumber="1" />
      <Header />
      <Content />
      <Image />
      <Task taskNumber="2" />
      <GoodsCard products={PRODUCTS} />
    </div>
  );
}

export default App;
