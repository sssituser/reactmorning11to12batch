import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
export default function Register(){
 
 let {register,handleSubmit,formState:{errors}} = useForm();
 
 function save(data){
 
    axios.post('http://localhost:9000/users',data)
    .then((res)=>{
        alert("Registration success..."+res)
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
                                <p className="h2">Register Here</p>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit(save)}>
                                <div className="form-group">
                            <input    { ...register('username',
                                        {
                                            required:{value:true,message:'User Name Must'},
                                            minLength:{value:3,message:'Minimum 3 Characters Must'},
                                            maxLength:{value:50,message:'Maximum 20 characers Must'}
                                        }
                                        )
                                    }
                                    className='form-control'
                                    placeholder='User Name'
                                    />
                                    {errors.username && <span className='text-danger'>{errors.username.message}</span>}
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
                            <input    { ...register('email',
                                        {
                                            required:{value:true,message:'Emailid Must'},
                                            minLength:{value:3,message:'Minimum 15 Characters Must'},
                                            maxLength:{value:50,message:'Maximum 20 characers Must'}
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
                            <input    { ...register('mobile',
                                        {
                                            required:{value:true,message:'Mobile No Must'},
                                            minLength:{value:3,message:'Minimum 6 Characters Must'},
                                            maxLength:{value:20,message:'Maximum 20 characers Must'}
                                        }
                                        )
                                    }
                                    type='mobile'
                                    className='form-control'
                                    placeholder='Enter Mobile No'
                                    />
                                    {errors.mobile && <span className='text-danger'>{errors.mobile.message}</span>}
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-outline-secondary btn-sm'>Register</button>
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