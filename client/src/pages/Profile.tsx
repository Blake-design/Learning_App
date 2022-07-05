import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UpdateForm } from "../components/forms";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  if (loading) {
    <div>loading</div>;
  }

  return data ? (
    <section className="page-container">
      <h2>{data.me.name}'s profile page</h2>
      <UpdateForm bio={data.me.bio} name={data.me.name} />
      <div>you currently have friends friend s </div>
      <div>your Hi score is currently</div>
    </section>
  ) : (
    <section className="page-container">
      <div>you are not logged in</div>
    </section>
  );
};

export default Profile;
