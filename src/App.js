import Header from "./Components/Header";
import Expenses from "./Components/Expenses/Expenses";

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import NewExpense from "./Components/NewExpense/NewExpense";


var style=
{ 
    backgroundColor:'rgb(28, 28, 28)',
    borderRadius:'12px',
    boxShadow:'0 1px 8px rgba(0, 0, 0, 0.25)'
}

const App=()=> {
 
   const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 5, 24),
    },

    { 
    id: 'e2', 
    title: 'New TV', 
    amount: 7990.49, 
    date: new Date(2021, 2, 12) 
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2950.67,
      date: new Date(2021, 2, 28),
    },

    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.55,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Notebook (Brown)',
      amount: 50.55,
      date: new Date(2021, 5, 19),
    },
  ]

return (
<>

<div style={style} >

{/* <Header/> */}
<NewExpense/>
<div>
 <Expenses items={expenses}/>
</div>  


</div>

</>
);
}


export default App;




// More from Dive in and learn React.js from scratch! Learn Reactjs, 
// Hooks, Redux, React Routing, Animations, Next.js and way more! Total 48.5 hours > 
// 39. Splitting Components Into Multiple Components
// Start from 6:55


// Foot Notes. We are passing data to Expenseitems via props,
// then Expense items is displaying some data from ExpenseDate.js & expenseitems is displayingsome data
// We are also forwarding our data with the helps of props through multiple Components.
