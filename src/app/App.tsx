import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard/DashboardPage'
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"
import ErrorPage from "../pages/error/ErrorPage"

const App = () => {

  return (

    <BrowserRouter>

      <AppNavigate />

      <Routes>

        {/* <Route index element={<Navigate replace to="/login" />} /> */}
        <Route path="*" element={<ErrorPage/>} />

        {/* <Route path="/" element={<PrivateRoute isPageLogin><DashboardPage/></PrivateRoute>} /> */}
        {/* <Route path="/dashboard" element={<DashboardPage/>} /> */}
        <Route path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />

        <Route path="/login" element={<PrivateRoute isPageLogin><LoginPage /></PrivateRoute>} />
        {/* <Route path="/login-new" element={<PrivateRoute isPageLogin><LoginPage /></PrivateRoute>} /> */}
        
        <Route path="/register" element= {<PrivateRoute isPageLogin><RegisterPage /></PrivateRoute>} />
        {/* <Route path="/login-new" element= {<TestPage />} /> */}
      
      </Routes>

    </BrowserRouter>

  );

};

export default App;