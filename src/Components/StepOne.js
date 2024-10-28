import React,{useState} from "react";
function StepOne(){
    const [firstName, setFirstName] = useState('');
    const handleFirstNameChanged = (event)=> {
        setFirstName(event.target.value);
      }
    return(
        <>
        <div>
        <div className="row">
          <div className="six columns">
            <label>First Name</label>
            <input
              className="u-full-width"
              placeholder="First Name"
              type="text"
              onChange={(e)=>{handleFirstNameChanged(e)}}
              value={firstName}
              autoFocus
            />
          </div>
        </div>
      </div>
        </>
    )
}
export default StepOne;