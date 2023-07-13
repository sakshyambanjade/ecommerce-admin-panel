import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import {Register} from './Auth/Register'
import {Login} from './Auth/Login'

import Dashboard from './pages/Dashboard'

import {Delivery} from './pages/Delivery'
import {Products} from './pages/Products'
import {Return} from '../src/pages/Return'
import { Transaction } from '../src/pages/Transaction'

import Error  from './pages/Error'

// import Alert from './Alert/Alert'

function App() {
    return (
        <Router>
            <Routes>
        {/* <Alert> */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route  path="delivery" element={<Delivery />} />
                    <Route  path="Return" element={<Return />} />
                    <Route  path="Transaction" element={<Transaction />} />

                </Route>
                <Route path="*" element={<Error/>} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* </Alert> */}
            </Routes>
        </Router>
    )
}

export default App
