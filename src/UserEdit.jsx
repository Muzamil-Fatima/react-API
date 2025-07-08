import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setAge(data.age);
    };

    getUserData();
  }, [url]);

  const updateUserData = async () => {
    console.log(name, email, age);
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("User data updated");
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col w-80 mx-auto  p-4 rounded">
      <h1 className="text-2xl">Edit User Details</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="m-1.5 p-1.5 w-3xs border-1 border-gray-300 "
        type="text"
        placeholder="User Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="m-1.5 p-1.5 w-3xs border-1 border-gray-300 "
        type="email"
        placeholder="User Email"
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className="m-1.5 p-1.5 w-3xs border-1 border-gray-300 "
        type="number"
        placeholder="User Age"
      />
      <button
        disabled={!name || !email || !age}
        onClick={updateUserData}
        className="bg-blue-500 text-white p-1.5 w-3xs m-1.5"
      >
        Update User
      </button>
    </div>
  );
}
