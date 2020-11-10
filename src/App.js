import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import PorfilPhoto from "./image/profilPhoto.jpg";

const handleName = (name) => {
  alert(name);
};
const bio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia turpis in  condimentum sem, per inceptos himenaeos.";
const style = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  marginTop: "5%",
  objectFit: "cover",
  objectPosition: "0 -8px",
};

function App() {
  return (
    <React.Fragment>
      <Profile
        fullName="khalil harizi"
        bio={bio}
        profession="fullStack js"
        handleName={handleName}
      >
        <img src={PorfilPhoto} alt="logo" style={style} />
      </Profile>
      </React.Fragment>
    
  );
}

export default App;
