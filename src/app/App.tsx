import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard/DashboardPage'
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"
import ErrorPage from "../pages/error/ErrorPage"
import ProductItemPage from "../pages/productItem/ProductItemPage"
import "../app/App.css"

const App = () => {

  return (

    <BrowserRouter>

      <AppNavigate />

      <Routes>

        <Route index element={<Navigate replace to="/login" />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />

        <Route path="/login" element={<PrivateRoute isPageLogin><LoginPage /></PrivateRoute>} />        
        <Route path="/register" element= {<PrivateRoute><RegisterPage /></PrivateRoute>} />
        <Route path="/products/:id" element= {<PrivateRoute><ProductItemPage /></PrivateRoute>} />
      
      </Routes>

    </BrowserRouter>

  );

};

export default App;