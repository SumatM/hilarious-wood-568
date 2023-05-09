

import React, { useEffect, useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getIncomeData } from '../redux/budgetReducer/action';
import { IncomeForm } from './IncomeForm';
import { IncomeItem } from './IncomeItem';
import styled from 'styled-components';



export function IncomeMain() {
   const [update,setUpdate]=useState(false);


   const updateFunc=()=>{
       setUpdate((prev)=>!prev);
   }

const dispatch=useDispatch();

    useEffect(() =>{
        dispatch(getIncomeData())
    }, [update])




let {loading,incomeData,error}=useSelector((store)=>{
    return {
        loading:store.budgetReducer.isLoading,
        incomeData:store.budgetReducer.userIncome,
        error:store.budgetReducer.isError,
    }
},shallowEqual);



const totalIncome=()=>{
    let totalAmount=0;
      if(incomeData.income!=undefined){
        incomeData.income.forEach((item)=>{
totalAmount=totalAmount+item.amount;
        })
      }
      return totalAmount;
}

    return (
        <DIV>
                <div className='title'>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: ₹<span>{totalIncome()}</span></h2>
                </div>
                <div className="income-contents">
                <div className="income-content">
                        <IncomeForm  update={updateFunc}/>
                </div>
                <div className="incomes">
                <div className='itemShow'>
                <h2>Name</h2>
                <h2>Amount</h2>
                <h2>Category</h2>
                <h2>Description</h2>
                <h2>Remove</h2>
                </div>
                        {incomeData?.income?.map((income) => {
                            const {id, title, amount, date, category, description} = income;
                            return <IncomeItem
                                key={id}
                                id={id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                category={category}
                                update={updateFunc}
                            />
                        })}
                </div>
                </div>
        </DIV>
    )
}


const DIV = styled.div`
    margin-top:75px;

    .title{
        text-align:center;
    }
    .title >h1{
        letter-spacing:3px;
        font-size:45px;
        margin-bottom:0px
    }

    .title > h2{
        margin-top:0px
    }

    .income-contents{
        display:flex;
    }

    .income-content{  
        width:50%
    }


    .incomes{
        width:50%;
        background-color:whitesmoke;
        padding:15px;
    }

    .itemShow{
        display:flex;
        justify-content:space-around
    }
    .itemShow >h2{
        border:1px solid gray;
        padding:7px;
        margin: 0 10px;
        background-color: gray;
        color:white;
        font-weight:500;
    }

`;



