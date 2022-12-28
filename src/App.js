import { useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {products.map((product) => (
        <ul
          className="list-group w-25 mx-auto"
          key={product.id}
        >
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">{product.name}</div>
            <span className="badge bg-primary rounded-pill">
              {product.price}
            </span>
          </li>
        </ul>
      ))}
      {users.map((user) => (
        <>
        <div className="container mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          </tbody>
        </table>
        </div>
        </>
      ))}
      <Register />
      {user ? (
        <Logout />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
