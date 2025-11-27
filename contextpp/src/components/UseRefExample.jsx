import React,{useRef} from "react";

export default function UseRefExmple(){

    let inputRef = useRef()
    function submit(){
        inputRef.current.focus()
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white text-center" >
                                <p className="h2">UseRef Example</p>
                            </div>
                            <div className="card-body">
                                <input type="text" ref={inputRef}  className="form-control" />
                                <button className="btn btn-primary btn-sm" onClick={submit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}