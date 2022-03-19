import "./Menu.css";

function MenuButton({ text, bgImage, icon }) {
  return (
    <div
      className="menu-button"
      style={{
        backgroundImage: bgImage
      }}
    >
      <span className="icon">{icon}</span>
      {text}
    </div>
  );
}

export default MenuButton;
