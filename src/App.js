import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";


const App = () => {
  const [userList, setUserList] = useState([]);
  const getNewUserName = (name)=>{
    setUserList([...userList,name]);
  }
  return (
    <div className="">
      <h1>User List</h1>
      <hr />
      <div>
        <Form getNewUserName={getNewUserName}/>
        <List userList={userList}/>
      </div>
    </div>
  );
};

export default App;