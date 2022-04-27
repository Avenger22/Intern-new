import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard/DashboardPage'
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"

const App = () => {

  return (

    <BrowserRouter>

      <AppNavigate />

      <Routes>

        <Route path="/dashboard" element={<PrivateRoute isPageLogin><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><LoginPage /></PrivateRoute>} />
        {/* <Route path="/login-new" element={<PrivateRoute isPageLogin><LoginPage /></PrivateRoute>} /> */}
        <Route path="/register" element= {<RegisterPage />} />
        <Route path="/login-new" element= {<TestPage />} />
      
      </Routes>

    </BrowserRouter>

  );

};

export default App;