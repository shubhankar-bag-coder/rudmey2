import React,{useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = () => {

    const [enteredTitle,setenteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const [userInput, SetUserInput]=useState
    (
        {
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        }
    )


let titleChangeHandler=(event)=>
{
    SetUserInput({
        ...userInput,
        enteredTitle:event.target.value,
    })

    // setenteredTitle(event.target.value)
    // ( (prevState)=>
    // {
    //     return {...prevState, enteredTitle:event.target.value};
    // });
};

let amountChangeHandler=(event)=>
{
    setEnteredAmount
    ( (prevState)=>
    {
        return {...prevState, enteredAmount:event.target.value};
    });
};

let dateChangeHandler=(event)=>
{
    setEnteredDate
    ( (prevState)=>
    {
        return {...prevState, enteredDate:event.target.value};
    });
};






const submitHandler=(event)=>
{
    event.preventDeafult();
    const expenseDate={
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };

    console.log(expenseDate);
    setenteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
};

return(
<>
<div className='new-expense__controls'>

<form onSubmit={submitHandler}>

   <div className='new-expense__control'>
    <label>Title</label>
    <input 
    type='text' onChange= { titleChangeHandler } value={enteredTitle}
    />
   </div>


   <div className='new-expense__control'>
    <label>Amount</label>
    <input 
    type='number' min='0.01' step='0.01' 
    onChange={amountChangeHandler} value={enteredAmount}  
    />
   </div>


   <div className='new-expense__control'>
    <label>Date</label>
    <input 
    type='date' min='2022-01-01' max='2022-12-31' 
    onChange={dateChangeHandler}  value={enteredDate}/>
   </div>


   <div>
    <button type='submit' className='new-expense__actions'>Add Expense</button> 
   </div>


</form>
</div>
</>   
)
}

export default ExpenseForm
