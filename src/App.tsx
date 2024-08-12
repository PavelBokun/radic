import "./App.css";
import { End } from "./components/end";
import { ImgBlock } from "./components/img";
import { Title } from "./components/title";

function App() {
  return (
    <>
      {/* <h2 className="changeColor">Узнать больше</h2> */}
      <a href="https://ardonix.by/" className="styled-link">
        На сайт ➡
      </a>
      <Title />
      <div><p className="changeColor2">Ардоникс — современная,  развивающаяся торговая компания. Ардоникс осуществляет стабильные поставки конкурентоспособной и качественной запорной арматуры оптовым и розничным торгующим организациям, строительным компаниям и производителям.</p></div>
      <ImgBlock />
      <End />
    </>
  );
}

export default App;
