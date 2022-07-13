import Header from './pages/SharedPages/Header';
import { Routes, Route } from "react-router-dom";
import Login from '../src/pages/Authentication/Login'
import SignUp from '../src/pages/Authentication/SignUp'
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
