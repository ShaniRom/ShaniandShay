import React, { useState } from "react";
import axios from "axios";

export enum UserTypeSchema {
  STUDENT = "student",
  INSTRUCTOR = "instructor",
}

const PracticeComponent = () => {
  async function handleRegister(ev: any) {
    ev.preventDefault();

    try {
      const username = ev.target.elements.username.value;
      const password = ev.target.elements.password.value;
      const email = ev.target.elements.email.value;
      const typeOfUser = ev.target.elements.typeOfUser.value;
      console.log(username, password, email,typeOfUser);

      const { data } = await axios.post("/users/addUser", {
        username,
        password,
        email,
        typeOfUser
      });

      if (!data) throw new Error("didnt get any user to add");

      return data;
    } catch (error) {}
  }
  return (
    <div>
      <form
        onSubmit={(ev) => {
          handleRegister(ev);
        }}
      >
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <input type="email" placeholder="email" name="email" />
        <select name="typeOfUser" id="typeOfUser" >
          <option value={UserTypeSchema.STUDENT}>student</option>
          <option value={UserTypeSchema.INSTRUCTOR}>instructor</option>
        
        </select>

        <button>submit</button>
      </form>
    </div>
  );
};

export default PracticeComponent;
