import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import {Delivery} from './pages/Delivery'
import {Products} from './pages/Products'
import {Return} from '../src/pages/Return'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route  path="delivery" element={<Delivery />} />
                    <Route  path="Return" element={<Return />} />
                </Route>
                <Route path="/register" element={<Register />} />

            </Routes>
        </Router>
    )
}

export default App
