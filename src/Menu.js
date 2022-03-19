import MenuButton from "./MenuButton";
import "./Menu.css";

const MENU_BUTTONS = [
  {
    icon: <img src = {require('./images/one-icon.png')} alt = ""/>,
    text: "Dla nowych",
    bgImage: `linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url('http://www.dystryktzero.pl/images/detailed/61/1100x620-db.jpg')`
  },
  {
    icon: <img src = {require('./images/two-icon.png')} alt = ""/>,
    text: "Profesje",
    bgImage: `linear-gradient(to bottom, #782CDA, rgba(126, 94, 162, 0.51)), url("https://downloadwap.com/thumbs2/wallpapers/p2ls/new/43/JqKGVfP6.jpg")`
  },
  {
    icon: <img src = {require('./images/three-icon.png')} alt = ""/>,
    text: "Questy",
    bgImage: `linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url('"https://lh3.googleusercontent.com/vX6ACHR444RGdjjThoGrz4oYixXsWQ3qn9Lcg-IdnIGj35bKQJXJhWo5xxsDNwEkbLDDL4n1pwzi3aKpjurUfZTkTQ=w640-h400-e365-rj-sc0x00ffffff"')`
  },
  {
    icon: <img src = {require('./images/four-icon.png')} alt = ""/>,
    text: "Sagi",
    bgImage: `linear-gradient(to bottom, #782CDA, rgba(126, 94, 162, 0.51)), url("https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-the-breakers/00-page-setup/dbtb-header-mobile.jpg")`
  },
  {
    icon: <img src = {require('./images/five-icon.png')} alt = ""/>,
    text: "Itemy",
    bgImage: `linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url("https://wallpaperdash.com/wp-content/uploads/2021/04/Dragon-ball-wallpaper-phone.png")`
  },
  {
    icon: <img src = {require('./images/six-icon.png')} alt = ""/>,
    text: "Potwory",
    bgImage: `linear-gradient(to bottom, #782CDA, rgba(126, 94, 162, 0.51)), url("https://gamingbolt.com/wp-content/uploads/2020/01/dragon-ball-z-kakarot.jpeg")`
  },
  {
    icon: <img src = {require('./images/seven-icon.png')} alt = ""/>,
    text: "Systemy",
    bgImage: `linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url("https://img.ppe.pl/upload/articles/32/88/17/328817792.jpg")`
  }
];
export default function Menu() {
  return (
    <div className="Menu">
      {MENU_BUTTONS.map(MenuButton)}
    </div>
  );
}
