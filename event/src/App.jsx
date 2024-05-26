import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Agenda from './components/agenda/Agenda';
import Contact from './components/contact/Contact';
import Registration from './components/registration/registration';
import AdminDashboard from './components/registration/AdminDashboard';
import PrivateRoute from './components/registration/PrivateRoute';
import Login from './components/registration/Login'; 
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <Header />
      <Router >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}
export default App;
