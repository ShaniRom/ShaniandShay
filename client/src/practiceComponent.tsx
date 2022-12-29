import React, { useState ,useEffect} from "react";
import axios from "axios";

export enum UserTypeSchema {
  STUDENT = "student",
  INSTRUCTOR = "instructor",
}



const PracticeComponent = () => {
  const [countryArray, setCountryArray] = useState([]);

  async function getCountries() {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    const countries = data.sort((a: any, b: any) =>
      a.name.common.localeCompare(b.name.common)
    );

    setCountryArray(data);
  }
  useEffect(() => {
    getCountries()
  }, [])

  async function handleRegister(ev: any) {
    ev.preventDefault();

    try {
      const username = ev.target.elements.username.value;
      const password = ev.target.elements.password.value;
      const email = ev.target.elements.email.value;
      const typeOfUser = ev.target.elements.typeOfUser.value;
      const firstName = ev.target.elements.firstName.value;
      const lastName = ev.target.elements.lastName.value;
      const description = ev.target.elements.description.value;
      const birthYear = ev.target.elements.birthYear.value;
      const country = ev.target.elements.country.value;
      const phoneNum=ev.target.elements.phoneNum.value;
      const language=ev.target.elements.language.value;
      const facebookLink=ev.target.elements.facebookLink.value;
      const twitterLink=ev.target.elements.twitterLink.value;
      const linkedinLink=ev.target.elements.linkedinLink.value;
      const youtubeLink=ev.target.elements.youtubeLink.value;
      const otherLink=ev.target.elements.otherLink.value;
      console.log(
        username,
        password,
        email,
        typeOfUser,
        firstName,
        lastName,
        description,
        birthYear,country,phoneNum,language,
        facebookLink,
        twitterLink,
        linkedinLink,
        youtubeLink,
        otherLink,
      );
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let joinedDate = `${month}-${day}-${year}`;

      const { data } = await axios.post("/users/addUser", {
        username,
        password,
        email,
        typeOfUser,
        joinedDate,
        firstName,
        lastName,
        description,
        birthYear,
        country,
        phoneNum,
        language,
        facebookLink,
        twitterLink,
        linkedinLink,
        youtubeLink,
        otherLink,
      });

      if (!data) throw new Error("didnt get any user to add");

      return data;
    } catch (error) {
      console.error({ error });
    }
  }
  return (
    <div>
      <form
        onSubmit={(ev) => {
          handleRegister(ev);
        }}
      >
        <input type="text" placeholder="firstName" name="firstName" />
        <input type="text" placeholder="lastName" name="lastName" />
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <input type="email" placeholder="email" name="email" />

        <select name="typeOfUser" id="typeOfUser">
          <option value={UserTypeSchema.STUDENT}>student</option>
          <option value={UserTypeSchema.INSTRUCTOR}>instructor</option>
        </select>
        <input
          type="text"
          placeholder="write about yourself"
          name="description"
        />
        <label htmlFor="birthYear">birth date:</label>
        <input
          type="number"
          id="birthYear"
          name="birthYear"
          min={1950}
          defaultValue={2023}
        />
            <div className="form__text">Country</div>
                    <select name="country">
                      <option hidden></option>
                      {countryArray.map((country: any, i) => {
                        return (
                          <option key={i}  value={`${country.name.common}`}>
                            {country.name.common}
                          </option>
                        );
                      })}
                    </select>

        <input type='text' name='phoneNum' id='phoneNum'/>  
        <label htmlFor="language">language</label>
          <select name="language" id="language">
          <option value='hebrew'>עברית</option>
          <option value='english'>English</option>
        </select> 
                    
        <input type='link' placeholder='twitter' name='twitterLink'/>
        <input type='link' placeholder='facebook' name='facebookLink'/>
        <input type='link' placeholder='linkedin' name='linkedinLink'/>
        <input type='link' placeholder='youtube' name='youtubeLink'/>
        <input type='link' placeholder='other' name='otherLink'/>
        <button>submit</button>
      </form>
    </div>
  );
};

export default PracticeComponent;
