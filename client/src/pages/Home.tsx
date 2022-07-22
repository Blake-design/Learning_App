import { UsersQueryProp } from "../types/types";
import { Link } from "react-router-dom";
import "./home.css";
const Home = ({ users, activeUsers }: UsersQueryProp) => {
  return (
    <section className="page-container">
      <div className="split">
        <div className="dashboard">
          <div className="temp-message">
            <h1>Welcome to the Learning app!</h1>
            <p>Unfortunately full functionality is not ready. </p>
            <p>
              Feel free to test functionality of login, signup and the messenger
              app.
            </p>
            <div className="login-info">
              <h4>Credentials:</h4>
              <p>
                <b>email:</b> dev1@app.dev
              </p>
              <p>
                <b>password:</b> password01
              </p>
              <p>
                <b>email:</b> dev2@app.dev
              </p>
              <p>
                <b>password:</b> password01
              </p>
            </div>
            <p>
              I also recommend you check out the
              <a href="https://github.com/Blake-design/Learning_app">
                {" "}
                github Repo
              </a>
            </p>
          </div>
        </div>
        <div className="users">
          <h2>Current Users</h2>
          <hr />
          <ul>
            {users.map((user) => (
              <li>
                <Link to={`/${user.username}`}>{user.username}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <p>Join the already {users?.length} users by signing up today! </p>
      {activeUsers?.length ? (
        activeUsers.map((u) => <div key={u.username}>{u.username}</div>)
      ) : (
        <h4>There are no active users</h4>
      )} */}
    </section>
  );
};

export default Home;
