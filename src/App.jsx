import { useEffect, useState } from "react";

export default function App() {
  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const url = "http://localhost:5000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };
  // console.log(usersData);
  return (
    <div>
      <h1 className="text-4xl font-bold m-8">
        Integrate JSON Server API and Loader
      </h1>

      <ul className="grid grid-cols-3 gap-4 border-1">
        <li className="px-34 py-1 font-medium text-2xl">FirstName</li>
        <li className="px-34 py-1 font-medium text-2xl">LastName</li>
        <li className="px-34 py-1 font-medium text-2xl">Age</li>
      </ul>

      {!loading ? (
        usersData &&
        usersData.map((user) => (
          <ul key={user.name} className="grid grid-cols-3 gap-4 border-1">
            <li className="px-34 py-1">{user.name}</li>
            <li className="px-34 py-1">{user.age}</li>
            <li className="px-34 py-1">{user.email}</li>
          </ul>
        ))
      ) : (
        <h1>Data Loading..........</h1>
      )}
    </div>
  );
}
