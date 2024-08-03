import React, { useState } from 'react'
import { addCustomer, getCustomerArray, searchCustomerByFind, modifycustomerByID, deletecustomerByFind } from '../BLL/CustomerBll';
import DisplayCustomer from './DisplayCustomer';

function Customer(e) {
const [id,setId]=useState("");
const[name,setName]=useState("");
const[address,setAddress]=useState("")
const [mobileNo,setMobileNo]=useState("")
const[arrCustomers,setArrCustomers]=useState([])

function id_OnChange(e){
    setId(e.target.value);
}
function name_OnChange(e){
    setName(e.target.value);
}
function address_OnChange(e){
    setAddress(e.target.value);
}
function mobilNo_OnChange(e){
    setMobileNo(e.target.value);
}
function add_Click(e){
    var cus={id:id,name:name,address:address,mobileNo:mobileNo};
    addCustomer(cus);
    setArrCustomers(getCustomerArray());
   alert('Customer Added Successfully')
}
function search_Click(e){
    var cus=searchCustomerByFind(id);
    if(cus){
    setName(cus.name)
    setAddress( cus.address)
    setMobileNo(cus.mobileNo);
    }
    else{
        alert('id not found')
    }
}

    // function modify_Click(e){
    //     if(!id){
    //         alert("enter the Valid ID")
    //     }
    //     const i = getElementById(id, arrCustomers);

    //     if(i==-1){
    //         alert("ID not found");
    //         return;
    //     }
    //     const newCus = {id: id, name: name, address: address, mobileNo: mobileNo};
    //     const updateCustomer = [...arrCustomers];

    //     updateCustomer[i] = newCus;
    //     setArrCustomers(updateCustomer)
    //     alert("customer modified successfully");

    // }

    function modify_Click(e){
        modifycustomerByID(id, name)
        setArrCustomers(getCustomerArray());
    }

    function delete_Click(e){
        deletecustomerByFind(id);
        setArrCustomers(getCustomerArray());
    }
    // function delete_Click(){
    //     if(!id){
    //         alert("enter the  valid ID")
    //     }
    //     const i = getElementById(id, arrCustomers);

    //     if(i===-1){
    //         alert("ID not found");
    //         return;
    //     }
    //     setArrCustomers(arrCustomers.filter(e=>e.id!==id))
    //     alert("customer deleted successfully")
    // }

    

    return (
   <>
   <h1>Customer Management System </h1>
   <table>
    <tbody>
        <tr>
            <td colSpan={2} className='td1'>Id:</td>
            <td onChange={id_OnChange} colSpan={2}><input type="text" value={id} id='inp1'  /></td>
        </tr>
        <tr>
            <td colSpan={2} className='td1'>Name:</td>
            <td onChange={name_OnChange} colSpan={2}><input type="text" value={name} id='inp2' /></td>
        </tr>
        <tr>
            <td colSpan={2} className='td1'>Address:</td>
            <td  onChange={address_OnChange}colSpan={2}><input type="text" value={address} id='inp3'  /></td>
        </tr>
        <tr>
            <td colSpan={2} className='td1'>Mobile No:</td>
            <td onChange={mobilNo_OnChange} colSpan={2}><input type="text" value={mobileNo} id='inp4' /></td>
        </tr>
        <div className='Btn1'>
        <tr>
            <td><input onClick={add_Click} type="button" value="Add Customer" /></td>
            <td><input onClick={search_Click} type="button" value="Search Customer" /></td>
            <td><input onClick={modify_Click} type="button" value="Modify Customer" /></td>
            <td><input onClick={delete_Click} type="button" value="Delete Customer" /></td>
        </tr>
        <tr>
            <td><input type="button" value="First" /></td>
            <td><input type="button" value="Prev" /></td>
            <td><input type="button" value="Next" /></td>
            <td><input type="button" value="Last" /></td>
        </tr>
        </div>
        
    </tbody>
   </table>
   <DisplayCustomer customers={arrCustomers}/>
   </>
  )
}
    export default Customer