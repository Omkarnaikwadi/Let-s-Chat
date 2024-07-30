// import { Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
// import { Toaster } from "react-hot-toast";
// import { useAuthContext } from "./context/AuthContext";

// function App() {
// 	const { authUser } = useAuthContext();
// 	return (
// 		<div className='p-4 h-screen flex items-center justify-center'>
// 			<Routes>
// 				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
// 				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
// 				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
// 			</Routes>
// 			<Toaster />
// 		</div>
// 	);
// }

// export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; 
import Initialbody from "./components/Initialbody"; 
// style={{ backgroundImage: 'url(/bg.jpg)', background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/bg.jpg")',
// 	backgroundRepeat: 'no-repeat',
// 	backgroundSize: 'cover',
// 	backgroundPosition: 'center'}}
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='h-screen flex flex-col'>
      <Navbar /> {/* Add Navbar */}
      <div className='flex-grow p-4 flex items-center justify-center' >
		{/* <Routes>
 				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
 				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
 				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
 		</Routes> */}
 			
        <Routes>
		      <Route path='/' element={authUser ? <Navigate to='/'/> : <Initialbody/> }/>
          <Route path='/home' element={authUser ? <Home /> : <Navigate to='/' />} />
          <Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />} />
        </Routes>
        <Toaster />
      </div>
	  <Footer />
    </div>
  );
}

export default App;
