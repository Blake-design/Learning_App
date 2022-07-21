import { UsersQueryProp } from "../types/types";

const Home = ({ users, activeUsers }: UsersQueryProp) => {
  return (
    <section className="page-container">
      <h1>Welcome to the Learning app!</h1>
      <p>
        unfortunately full functionality is not ready. Feel free to login as
        these two users to check out the messenger
      </p>{" "}
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
      <p>
        I also recommend you check out the
        <a href="https://github.com/Blake-design/Learning_app"> github Repo</a>
      </p>
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
