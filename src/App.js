import './App.css';
import { Route, Routes } from 'react-router-dom';
import Intercom from './Intercom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path="/:email/:name" element={<Intercom/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

