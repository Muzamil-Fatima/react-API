import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
export default function App() {
  return (
    <div>
      <ul className="flex justify-center m-3">
        <li>
          <NavLink to="/list" className="underline text-blue-600 text-xl m-1.5">
            List
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className="underline text-blue-600 text-xl m-1.5">
            Add User
          </NavLink>
        </li>
      </ul>
      <h1 className="text-4xl font-bold m-8">
        Make Routes and Pages for Add User List UI
      </h1>
      {/* <UserList /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}
