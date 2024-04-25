import { LiaGreaterThanSolid } from "react-icons/lia";

import Page1 from "./components/Page1";
import { Route, Routes } from "react-router";
import Page2 from "./components/Page2";
import Signup from "./components/Signup";
import { ProgressProvider } from "./context/Progress";
import Goals from "./components/Goals";
import Login from "./components/Login";
import Tracker from "./components/Tracker";
import Calender from "./components/Calender";
function App() {
  return (
  <div>
    <ProgressProvider>

   <Routes>
    <Route path="/" element={<Page1/>}/>
    <Route path='/page-2' element={<Page2 />}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/goals" element={<Goals/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/tracker" element={<Tracker/>}/>
    <Route path="/calender" element={<Calender/>}/>
   </Routes>

   </ProgressProvider>
  </div>
  );
}

export default App;
