import { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const createUser = async() => {
    console.log(name, age, email);
    const url="http://localhost:3000/users";
    let response = await fetch(url,{
        method:"Post",
        body:JSON.stringify({name, email, age})
    });
    response = await response.json();
    if(response){
        alert("new User Added")
    }

  };
  return (
    <div className="flex flex-col w-80 mx-auto  p-4 rounded">
      <h1 className="text-2xl">Add New User</h1>
      <input
        onChange={(event) => setName(event.target.value)}
        className="m-1.5 p-1.5 w-3xs border-1 border-gray-300 "
        type="text"
        placeholder="Enter Name"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        className="m-1.5 p-1.5 w-3xs border-1 border-gray-300 "
        type="email"
        placeholder="Enter Email"
      />
      <input
        onChange={(event) => setAge(event.target.value)}
        className="m-1.5 p-1.5 w-3xs border-1 border-gray-300 "
        type="number"
        placeholder="Enter Age"
      />
      <button
        onClick={createUser}
        className="bg-blue-500 text-white p-1.5 w-3xs m-1.5"
      >
        Add User
      </button>
    </div>
  );
}
