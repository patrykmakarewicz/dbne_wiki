import Menu from './Menu.js'
import Header from './Header.js'
import LastEvents from './LastEvents.js'
import './App.css';

function App() {
  return (
    <div id="root">
      <Header />
      <Menu />
      <LastEvents />
      <div className="Content">
        Content <br />
      </div>
    </div>
    
  );
}

export default App;
