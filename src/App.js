import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import Toolbar from './components/Toolbar';
import Frame from './components/Frame';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Toolbar/>
      <Frame/>
    </div>
  );
}

export default App;
