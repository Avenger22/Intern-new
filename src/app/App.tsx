import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard'
import LoginPage from "../pages/login/LoginPage"

const App = () => {

  return (

    <BrowserRouter>

      <AppNavigate />

      <Routes>

        <Route path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><TestPage /></PrivateRoute>} />
        <Route path="/login-new" element={<PrivateRoute isPageLogin><LoginPage /></PrivateRoute>} />
      
      </Routes>

    </BrowserRouter>

  );

};

export default App;