import React from 'react'

function DisplayCustomer(props) {
    var arrTrCustomers=props.customers.map(e=>( <tr>
        <td>{e.id}</td><td>{e.name}</td><td>{e.address}</td><td>{e.mobileNo}</td>
    </tr>))
  return (
   <>
   <div className='tab'>
   <h2 className='h2d'>Customer Table 📖</h2>
   <table>
    <thead>
        <tr>
            <th>Id</th><th>Name</th><th>Address</th><th>Mobile No</th>
        </tr>
    </thead>
    <tbody>
    {arrTrCustomers}
    </tbody>
   </table>
   </div>
   </>
  )
}

   
export default DisplayCustomer