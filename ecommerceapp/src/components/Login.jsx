import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
export default function Login(){
 
 let {register,handleSubmit,formState:{errors}} = useForm();
 
 function login(data){
    axios.get(`http://localhost:9000/users?email=${data.email}`)
    .then((res)=>{
       const user = res.data[0]
       if(data.password==user.password){
        alert('Login Success')
       }else{
        alert('Login Failed')
       }
    })
    .catch((error)=>{
        alert(error)
    })
 }
 
 return(
    <React.Fragment>
        <div className="container text-center">
            <div className="row mt-5">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">
                                <p className="h2">Login Here</p>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit(login)}>
                              <div className="form-group">
                            <input    { ...register('email',
                                        {
                                            required:{value:true,message:'Emailid Must'},
                                            minLength:{value:3,message:'Minimum 15 Characters Must'},
                                            maxLength:{value:50,message:'Maximum 50 characers Must'}
                                        }
                                        )
                                    }
                                    type='email'
                                    className='form-control'
                                    placeholder='Email id'
                                    />
                                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                                </div>

                            <div className="form-group">
                            <input    { ...register('password',
                                        {
                                            required:{value:true,message:'Password Must'},
                                            minLength:{value:3,message:'Minimum 6 Characters Must'},
                                            maxLength:{value:20,message:'Maximum 20 characers Must'}
                                        }
                                        )
                                    }
                                    type='password'
                                    className='form-control'
                                    placeholder='Password'
                                    />
                                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                                </div>
                                

                                <div className="form-group">
                                    <button style={{borderRadius:10}} className='btn btn-outline-secondary btn-sm'>SignIn</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
 )


}