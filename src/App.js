import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
