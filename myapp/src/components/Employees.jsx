import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function Employees(){
    let[employees,setEmployees] = useState([]);

   useEffect(()=>{
    axios.get("http://localhost:9000/employees").then((res)=>{
        setEmployees(res.data)
    }).catch((error)=>{alert(error)})
   },[])

   return(
    <React.Fragment>
        <div className="container">
            <section>
                
            <p className="text-teal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quasi totam ea culpa autem, cupiditate cumque, aperiam atque dolorum numquam, in unde animi? Vel magni vitae non, molestias sit, at dolores quas culpa aut doloremque ducimus laborum consequuntur. Autem animi voluptatibus alias corporis molestiae amet, ut fuga, iusto officiis eos sapiente repellat. Cum debitis omnis maiores, aliquid facere hic doloribus.</p>
            <div className="row">
                
                <div className="col-md-8">
                        <a href="#" className="btn btn-primary btn-sm">Add Employee</a>
                </div>
               
               
                <div className="col-md-4">
                    <input type="text" placeholder="Enter your ID/Name/Salary" className="form-control" />
                </div>


            </div>


                
            </section>
            <section>
                {
                    employees.length > 0 ?

                     <table className="table table-bordered text-center ">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th><b>ID</b></th>
                                <th><b>Name</b></th>
                                <th><b>Salary</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((emp)=>{
                                    return(
                                        <tr>
                                            <td><b>{emp.id}</b></td>
                                            <td><b>{emp.name}</b></td>
                                            <td><b>{emp.sal}</b></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                     </table>

                    :
                    <p className="h3 text-center"> Records Not Found</p>
                }
            </section>




        </div>
    </React.Fragment>
   )



}