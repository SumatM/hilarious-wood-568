import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Expense from "../Pages/DashBoard/Expense/Expense";
import { IncomeMain } from "../Income/IncomeMain";
import { Landingpage } from "../Pages/Landingpage";


function AllRoutes(){

    return (
        <Routes>
        <Route path="/" element={<Landingpage/>}></Route>
        </Routes>
    )
}


export default AllRoutes;