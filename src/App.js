import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Accountform } from './CreateAccount';
import { Loginpage } from './Loginpage';
import { Homepage } from './Mainpage';
import { Viewaccountdetails } from './Showaccount';
import { Transactionform } from './CreateTransaction';
import { AllTransactions } from './Listalltransaction';

function App() {
  return (
    <>
      {
        (sessionStorage.getItem("loginuser")) ?
          <>
            <BrowserRouter>
              <Homepage />
              <Routes>
                <Route path='createaccount' exact element={<Accountform />} />
                <Route path='yourinfo' exact element={<Viewaccountdetails />} />
                <Route path='createtransaction' exact element={<Transactionform />} />
                <Route path='yourtransactiondetails' exact element={<AllTransactions />} />
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
            <Loginpage />
          </>
      }
    </>
  );
}

export default App;
