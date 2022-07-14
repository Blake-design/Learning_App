import { UsersQueryProp } from "../types";
const Home = ({ users, activeUsers }: UsersQueryProp) => {

  return (
    <section className="page-container">
      <h1>Welcome to the Learning app!</h1>

      <p>Join the already {users?.length} users by signing up today! </p>

      { activeUsers?.length 
        ? activeUsers.map(u => <div>{u.username}</div>) 
        : <h4>There are no active users</h4>
      }
    </section>
  );
};

export default Home;
