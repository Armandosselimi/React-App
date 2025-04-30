import Accordian from "./components/accordian";
import "./App.css";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeViewMenu from "./components/recursive-navigation-menu";
import menus from "./components/recursive-navigation-menu/data";
import QrCodeGEnerator from "./components/QR-code-generator";
import SwitchTheme from "./components/theme-switch";

export default function App() {
  return (
    <div className='App'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeViewMenu menus={menus} /> */}
      {/* <QrCodeGEnerator /> */}
      <SwitchTheme />
    </div>
  );
}
