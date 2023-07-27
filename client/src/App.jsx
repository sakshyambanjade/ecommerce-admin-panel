import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Register from './Auth/Register';
import { Login } from './Auth/Login';
import Dashboard from './pages/Dashboard';
import { Delivery } from './pages/Delivery';
import { Products } from './pages/Products';
import { Return } from '../src/pages/Return';
import { Transaction } from '../src/pages/Transaction';
import { useState } from 'react';
import Error from './pages/Error';

function App() {
  const [user, setLoginUser] = useState({});

  const renderContent = () => {
    if (user && user._id) {
      return (
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="Return" element={<Return />} />
            <Route path="Transaction" element={<Transaction />} />
          </Routes>
        </>
      );
    } else {
      return <Login setLoginUser={setLoginUser}/>;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderContent()} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
