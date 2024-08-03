var arrCustomers=[];
export function addCustomer(customer){
    arrCustomers.push(customer)

}
// export function searchCustomerByLoop(id){
// for(var e of arrCustomers){
//     if(e.id==id){
//         return e
//     }
// }

// export function getElementById(id,arr){
//     return arr.findIndex(e=>e.id==id);
// }

// export function deleteCustomer(customerID, arrTrCustomers){

// }

export function searchCustomerByFind(id){
var cus=arrCustomers.find(e=>e.id==id);
return cus;

}
export function modifycustomerByID(id,name){
    var cus = arrCustomers.find(e=>e.id==id);
    cus.name = name;
}

export function deletecustomerByFind(id){
    var i = arrCustomers.findIndex(e=>e.id==id);
    arrCustomers.splice(i,1);
}

export function getCustomerArray(){
    return [...arrCustomers]
}