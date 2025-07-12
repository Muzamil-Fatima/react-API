import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserList() {

  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";
  
  useEffect(() => {
    setLoading(true);
    getUsersData();
  }, []);

  const getUsersData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };
  // console.log(usersData);

  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id,{
        method: "DELETE",
    })
    response = await response.json();
    if (response) {
      alert("User Deleted Successfully!");
      getUsersData();
    } else {
      alert("Failed to del user");
    }
  };

  const editUser=(id)=>{
    navigate("/edit/"+id)

  }
  return (
    <div>
      <h1 className="text-4xl font-bold m-8">
        Integrate JSON Server API and Loader
      </h1>

      <ul className="grid grid-cols-4 gap-4 border-1">
        <li className="px-20 py-1 font-medium text-2xl">FirstName</li>
        <li className="px-20 py-1 font-medium text-2xl">LastName</li>
        <li className="px-20 py-1 font-medium text-2xl">Age</li>
        <li className="px-20 py-1 font-medium text-2xl">Action</li>
      </ul>

      {!loading ? (
        usersData &&
        usersData.map((user) => (
          <ul key={user.name} className="grid grid-cols-4 gap-4 border-1">
            <li className="px-20 py-1">{user.name}</li>
            <li className="px-20 py-1">{user.age}</li>
            <li className="px-20 py-1">{user.email}</li>
            <li className="px-20 py-1">
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-blue-500 px-2 py-1 rounded-xl text-white mx-1 hover:bg-blue-600"
              >
                Delete
              </button>
              <button
                onClick={() => editUser(user.id)}
                className="bg-blue-500 px-2 py-1 rounded-xl text-white hover:bg-blue-600"
              >
                Edit
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data Loading..........</h1>
      )}
    </div>
  );
}
