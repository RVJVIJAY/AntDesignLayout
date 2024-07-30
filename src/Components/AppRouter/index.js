import { Routes, Route} from 'react-router-dom'
import { Dashboard } from '../../Pages/Dashboard';
import { Customers } from '../../Pages/Customers';
import { Inventory } from '../../Pages/Inventory';
import { Orders } from '../../Pages/Orders';
export const AppRouter=()=>{
    return(
    <div>
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/customers' element={<Customers/>}></Route>
            <Route path='/inventory' element={<Inventory/>}></Route>
            <Route path='/orders' element={<Orders />}></Route>
        </Routes>
    </div>
    )
}
