import React from "react";
import {useForm} from 'react-hook-form'
export default  function App(){
  let {register,handleSubmit,formState:{errors}} = useForm()
  
  function save(data){
    alert(JSON.stringify(data))
  }
  return(
    <React.Fragment>
      <div className="container text-center">
          <p className="h1 text-secondary">App Component</p>
           <div className="row">
            <div className="col-md-5">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <p className="h3">React-Hook-Form Example</p>
                  </div>
                  <div className="card-body">
                    <form action="" onSubmit={handleSubmit(save)}>
                     <div className="form-group">
                     <input
                       {...register('firstName',
                        {
                          required:{value:true,message:"firstName is must"},
                          minLength:{value:3,message:"min 3 letters"},
                          maxLength:{value:10,message:"max 10 letters"}

                        })}
                       className="form-control"
                       />
                       {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}

                     
                       
                     
                     </div>
                   
                     <button className="btn btn-primary btn-sm">Register</button>
                    </form>
                  </div>
                </div>
            </div>
           </div>

      </div>
    </React.Fragment>
  )
}