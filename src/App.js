
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} Component={Home}></Route>
        <Route path={"/info/:id"} Component={Info}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
