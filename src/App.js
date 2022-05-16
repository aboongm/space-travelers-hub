import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myProfile" element={<MyProfile />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
