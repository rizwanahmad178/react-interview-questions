import React, { useState } from 'react'
import OtpInput from './OtpInput';

function PhoneOtpForm() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate Phone Number
        const regex = /[^0-9]/;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }
        // call backend API for OTP

        setShowOtpInput(true);
    }
    const onOtpSubmit = (otp) => {
        console.log("Verified otp : ",otp);
    }
  return (
    <div>
      {!showOtpInput ?(
        <form onSubmit={handleSubmit}>
        <input type="text"
        value={phoneNumber}
        onChange={handlePhoneNumber}
        placeholder='Enter Mobiel Number'/>
        <button type='submit'>Submit</button>
  </form>
      ):(
        <div>
            <p>Enter Otp sent to: {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      ) 

      }
    </div>
  )
}

export default PhoneOtpForm
