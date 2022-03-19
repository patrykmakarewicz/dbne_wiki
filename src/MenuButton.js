import "./Menu.css";

function MenuButton({ text, bgImage, icon , bgPosition = "0% 0%", boxShadow }) {
  return (
    <div
      className="menu-button"
      style={{
        backgroundImage: bgImage,
        backgroundPosition: bgPosition,
        boxShadow: boxShadow
      }}
    >
      <span className="icon">{icon}</span>
      {text}
    </div>
  );
}

export default MenuButton;
