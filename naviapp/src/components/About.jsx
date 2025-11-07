import axios from "axios";
import React,{useEffect, useState} from "react";

export default function About(){


  const  [users,setUsers]=useState([]);
  const  [search,setSearch] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data);
        }).catch((error)=>{
            alert(error);
        })
    },[])

    const filteredUsers = users.filter((user)=>`${user.id}${user.name}${user.username}`.toLowerCase().includes(search.toLowerCase()));

    return(
        <React.Fragment>
          <section>
            <div className="container">
                <p className="lead mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque delectus ea maxime nihil, ut veritatis dolorem, provident corporis eveniet voluptatum nemo non corrupti obcaecati, totam ex perspiciatis inventore? Cupiditate natus quaerat delectus? Iure, laborum tempore! Totam, vero ea minus deleniti recusandae, vitae quidem id quo atque mollitia possimus repudiandae, eum nesciunt. Totam illo voluptatum asperiores, voluptates illum quas sed.</p>
                <div className="row mb-3">
                    <div className="col-md-8">
                    <button className="btn btn-success btn-md">Add User</button>
                    </div>
                    <div className="col-md-4">
                        <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="form-control" placeholder="Enter ur Data" />
                    </div>
                </div>
           
            </div>
          </section>
          





          <section>
 <div className="row">
            <div className="col">
                {
                    filteredUsers.length >0 ?
                    <div className="container">
                        <table className="table table-bordered table-striped table-hover">
                        <thead className="text-center bg-danger text-white">
                            <tr>
                                <th><b>ID</b></th>
                                <th><b>Name</b></th>
                                <th><b>User Name</b></th>
                                <th><b>Email</b></th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                filteredUsers.map((user)=>{
                                    return(
                                        <tr>
                                            <td><b>{user.id}</b></td>
                                            <td><b>{user.name}</b></td>
                                            <td><b>{user.username}</b></td>
                                            <td><b>{user.email}</b></td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    :
                    <p className="h3 text-center text-danger">Records Not found</p>
                }
            </div>
           </div>

          </section>
           
         
           
        </React.Fragment>
    )
}