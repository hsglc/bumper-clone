/** @format */

import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({
  users: [],
  setUsers: () => {},
  //for better auto compilations to work, we need to add the default values to methods and props.
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = localStorage.getItem("users");
    setUsers(JSON.parse(users));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
