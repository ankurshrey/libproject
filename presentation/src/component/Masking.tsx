import React, { useState } from "react";
import InputMask from "react-input-mask";

const Masking = () => {
  const [formData, setFormData] = useState({
    date: "",
    phone: "",
    time: "",
    card: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date : </label>
        <InputMask
          mask="99/99/9999"
          maskChar="_"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        >
          {/* {(inputProps: any) => <input {...inputProps} type="text" />} */}
        </InputMask>
        <br />
      </div>
      <div>
        <label>Phone : </label>
        <InputMask
          mask="+1 (999) 999-9999"
          maskChar="_"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        >
          {/* {(inputProps: any) => <input {...inputProps} type="text" />} */}
        </InputMask>
        <br />
        <label>Time : </label>
        <InputMask
          mask="99:99 AM"
          maskChar="_"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        >
          {/* {(inputProps: any) => <input {...inputProps} type="text" />} */}
        </InputMask>
        <br />
        <label>Card Number : </label>
        <InputMask
          mask="9999-9999-9999-9999"
          maskChar="_"
          name="card"
          value={formData.card}
          onChange={handleInputChange}
        >
          {/* {(inputProps: any) => <input {...inputProps} type="text" />} */}
        </InputMask>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Masking;
