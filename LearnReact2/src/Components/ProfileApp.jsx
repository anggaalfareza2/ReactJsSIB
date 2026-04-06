import React, { createContext, useContext } from 'react';
const userContext = createContext();

function ProfileApp() {
  return (
    <userContext.Provider value={{name: "John Doe"}}>
        <UserProfile />
    </userContext.Provider>
  );
}
function UserProfile (){
    const user = useContext(userContext);
    return <p>Welcome, {user.name}!</p>;
}

export default ProfileApp;
