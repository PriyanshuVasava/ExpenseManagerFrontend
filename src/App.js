// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { AddExpense } from './components/userComponents/AddExpense';
import { ExpenseList } from './components/userComponents/ExpenseList';
import { Signup } from './components/Signup';
import { UpdateExpense } from './components/userComponents/UpdateExpense';
import { ProtectedRoutes } from './components/hooks/ProtectedRoutes';
import { AddGoal } from './components/userComponents/AddGoal';
import { UpdateGoal } from './components/userComponents/UpdateGoal';
import Dashboard from './components/Dashboard';
import { ForgotPassword } from './components/ForgotPassword';
import { ResetPassword } from './components/userComponents/ResetPassword';

function App() {

  const path = document.location.pathname;
  //console.log('url path=', path);

  return (
    <div>

      <div className="wrapper">
      <Sidebar />
        


        {
          path === "/" || path === "/signup" || path === "" ? null : <Sidebar /> 
        }



        <div className='main-panel'>
        

          <div className='content'>
          
            {/* {
              path === "/" || path === "/signup" || path === "" ? null : <NavBar />
            } */}

            <Routes>

              <Route path='/' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/resetpassword' element={<ForgotPassword/>}></Route>
              <Route path='/setnew' element={<ResetPassword/>}></Route>

              <Route element={<ProtectedRoutes />}>
                <Route path='/user/dashboard' element={<Dashboard />}></Route>
                <Route path='/user/addExpense' element={<AddExpense />}></Route>
                <Route path='/user/expenseList' element={<ExpenseList />}></Route>
                <Route path='/user/updateExpense/:id' element={<UpdateExpense />}></Route>
                <Route path='/user/addGoal' element={<AddGoal />}></Route>
                <Route path='/user/updateGoal/:id' element={<UpdateGoal />}></Route>
              </Route>

              <Route path='/*' element={<div><h1>404</h1><p>page not found</p></div>}></Route>

            </Routes>
            
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;