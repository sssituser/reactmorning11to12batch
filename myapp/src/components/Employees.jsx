import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Employees(){
    let[employees,setEmployees] = useState([]);
    let navigate=useNavigate();
   useEffect(()=>{
   getEmployees()
   },[])

   function getEmployees(){
     axios.get("http://localhost:9000/employees").then((res)=>{
        setEmployees(res.data)
    }).catch((error)=>{alert(error)})
   }
   function del(id){
    axios.delete("http://localhost:9000/employees/"+id)
    .then(()=>{
        alert("Record deleted")
        getEmployees()

    }).catch((error)=>{
        alert(error)
    })
   }









   return(
    <React.Fragment>
        <div className="container">
            <section>
                
            <p className="text-teal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quasi totam ea culpa autem, cupiditate cumque, aperiam atque dolorum numquam, in unde animi? Vel magni vitae non, molestias sit, at dolores quas culpa aut doloremque ducimus laborum consequuntur. Autem animi voluptatibus alias corporis molestiae amet, ut fuga, iusto officiis eos sapiente repellat. Cum debitis omnis maiores, aliquid facere hic doloribus.</p>
            <div className="row">
                
                <div className="col-md-8">
                        <Link to="/add" className="btn btn-primary btn-sm">Add Employee</Link>
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
                                 <th><b>Operations</b></th>
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
                                            <td>

                                            <Link to='/edit' className="mr-3">
                                                <i className="fa fa-pen text-primary fa-1x"/>
                                            </Link>
                                           
                                                <i className="fa fa-trash  text-danger mr-3"
                                                 onClick={()=>{del(emp.id)}}
                                                />
                                            
                                            <Link to='/view'>
                                             <i className="fa fa-eye text-info"/>
                                            </Link>

                                            </td>
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