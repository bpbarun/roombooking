import React from "react";
import MultiStep from "react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import "./multiform.css";
import "./multiform-step.css";
 function MultiForm(){
    const steps = [
        { name: "Name A", component: <StepOne /> },
        { name: "Email", component: <StepTwo /> },
        { name: "test", component: <StepOne /> },
        { name: "last", component: <StepTwo /> }

      ];
    return(
        <>
        <div>
            <MultiStep steps={steps} />
        </div>
        </>
    )
 }
 export default MultiForm;