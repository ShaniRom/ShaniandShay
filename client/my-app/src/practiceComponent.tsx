import React, { useState } from "react";
import axios from "axios";

const PracticeComponent = () => {
  async function handleRegister(ev:any) {
    ev.preventDefault()

    try {

        const password= ev.target.elements.password.value
        const username= ev.target.elements.username.value
        const email= ev.target.elements.email.value
       console.log(password, username, email)

       
      const { data } = await axios.post("/users/addUser",{password, username,email});

      if (!data) throw new Error("didnt get any user to add");

      return data;
    } catch (error) {}
  }
  return (
    <div>
      <form
        onSubmit={(ev) => {handleRegister(ev)}}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password"/>
        <input type="email" placeholder="email" name="email"/>
        <button>submit</button>
      </form>
    </div>
  );
};

export default PracticeComponent;
