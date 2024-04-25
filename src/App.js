import { Route, Routes } from "react-router";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import Layouts from "./Layouts/Layouts";
import SignUp from "./pages/Auth/SignUp";
import Diet from "./pages/Diet";
import Workout from "./pages/Workout";
import Body from "./pages/Body";
import Food from "./pages/Food";
import Error404 from "./errors/Error404";


function App() {
  return (
    <Routes>
    <Route element={<Layouts/>}>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route index element={<Home/>}/>
      <Route path="diet" element={<Diet/>}/>
      <Route path="workout" element={<Workout/>}/>
      <Route path="body" element={<Body/>}/>
      <Route path="food" element={<Food/>}/>
      <Route path="*" element={<Error404/>}/>
    </Route>
    </Routes>
  );
}

export default App;
