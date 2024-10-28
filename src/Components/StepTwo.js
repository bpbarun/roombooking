import React,{useState} from "react";
function StepTwo(){
    const [firstName, setFirstName] = useState('');
    const handleFirstNameChanged = (event)=> {
        setFirstName(event.target.value);
      }
    return(
        <>
        <div>
        <div className="row">
          <div className="six columns">
            <label>Last Name</label>
            <input
              className="u-full-width"
              placeholder="Last Name"
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
export default StepTwo;