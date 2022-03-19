import MenuButton from "./MenuButton";
import "./Menu.css";

const MENU_BUTTONS = [
  {
    icon: <img src = {require('./images/one-icon.png')} alt = ""/>,
    text: "Dla nowych",
    bgImage: `webkit-linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url('http://www.dystryktzero.pl/images/detailed/61/1100x620-db.jpg')`,
    bgImage: `linear-gradient(to bottom, #E48A3C, rgba(222, 135, 61, 0.24)), url('http://www.dystryktzero.pl/images/detailed/61/1100x620-db.jpg')`,
    bgPosition: '0% 60%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #782CDA'
  },
  {
    icon: <img src = {require('./images/two-icon.png')} alt = ""/>,
    text: "Profesje",
    bgImage: `webkit-linear-gradient(to bottom, #782CDA, rgba(126, 94, 162, 0.51)), url("https://downloadwap.com/thumbs2/wallpapers/p2ls/new/43/JqKGVfP6.jpg")`,
    bgImage: `linear-gradient(to bottom, #782CDA, rgba(126, 94, 162, 0.51)), url("https://downloadwap.com/thumbs2/wallpapers/p2ls/new/43/JqKGVfP6.jpg")`,
    bgPosition: '0% 50%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #E48A3C'

  },
  {
    icon: <img src = {require('./images/three-icon.png')} alt = ""/>,
    text: "Questy",
    bgImage: '-webkit-gradient(linear, left top, left bottom, from(#36C176), to(rgba(86, 202, 139, 0.18))), url("https://lh3.googleusercontent.com/vX6ACHR444RGdjjThoGrz4oYixXsWQ3qn9Lcg-IdnIGj35bKQJXJhWo5xxsDNwEkbLDDL4n1pwzi3aKpjurUfZTkTQ=w640-h400-e365-rj-sc0x00ffffff")',
    bgImage: 'linear-gradient(to bottom, #36C176, rgba(86, 202, 139, 0.18)), url("https://lh3.googleusercontent.com/vX6ACHR444RGdjjThoGrz4oYixXsWQ3qn9Lcg-IdnIGj35bKQJXJhWo5xxsDNwEkbLDDL4n1pwzi3aKpjurUfZTkTQ=w640-h400-e365-rj-sc0x00ffffff")',
    bgPosition: '0% 10%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #36C176'
  },
  {
    icon: <img src = {require('./images/four-icon.png')} alt = ""/>,
    text: "Sagi",
    bgImage: '-webkit-gradient(linear, left top, left bottom, from(#02d6fc), to(rgba(36, 155, 155, 0.24))), url("https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-the-breakers/00-page-setup/dbtb-header-mobile.jpg")',
    bgImage: 'linear-gradient(to bottom, #02d6fc, rgba(161, 245, 245, 0.24)), url("https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-the-breakers/00-page-setup/dbtb-header-mobile.jpg")',
    bgPosition: '0% 20%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #02d6fc'
  },
  {
    icon: <img src = {require('./images/five-icon.png')} alt = ""/>,
    text: "Itemy",
    bgImage: '-webkit-gradient(linear, left top, left bottom, from(#DE3964), to(rgba(154, 40, 87, 0.24))), url("https://wallpaperdash.com/wp-content/uploads/2021/04/Dragon-ball-wallpaper-phone.png")',
    bgImage: 'linear-gradient(to bottom, #DE3964, rgba(154, 40, 87, 0.24)), url("https://wallpaperdash.com/wp-content/uploads/2021/04/Dragon-ball-wallpaper-phone.png")',
    bgPosition: '0% 40%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px #DE3964'
  },
  {
    icon: <img src = {require('./images/six-icon.png')} alt = ""/>,
    text: "Potwory",
    bgImage: '-webkit-gradient(linear, left top, left bottom, from(darkblue), to(rgba(222, 135, 61, 0.24))), url("https://gamingbolt.com/wp-content/uploads/2020/01/dragon-ball-z-kakarot.jpeg")',
    bgImage: 'linear-gradient(to bottom, darkblue, rgba(222, 135, 61, 0.24)), url("https://gamingbolt.com/wp-content/uploads/2020/01/dragon-ball-z-kakarot.jpeg")',
    bgPosition: '0% 40%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px darkblue'
  },
  {
    icon: <img src = {require('./images/seven-icon.png')} alt = ""/>,
    text: "Systemy",
    bgImage: '-webkit-gradient(linear, left top, left bottom, from(rgb(139, 137, 0)), to(rgba(222, 135, 61, 0.24))), url("https://img.ppe.pl/upload/articles/32/88/17/328817792.jpg")',
    bgImage: 'linear-gradient(to bottom, rgb(139, 137, 0), rgba(222, 135, 61, 0.24)), url("https://img.ppe.pl/upload/articles/32/88/17/328817792.jpg")',
    bgPosition: '0% 30%',
    boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px rgb(139, 137, 0)'
  }
];
export default function Menu() {
  return (
    <div className="Menu">
      {MENU_BUTTONS.map(MenuButton)}
    </div>
  );
}
