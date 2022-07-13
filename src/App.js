import Header from './pages/SharedPages/Header';
import { Routes, Route } from "react-router-dom";
import Login from '../src/pages/Authentication/Login'
import SignUp from '../src/pages/Authentication/SignUp'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
