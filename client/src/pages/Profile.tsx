import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import auth from "../utils/auth";
import { UpdateForm } from "../components/forms";
import { userInfo } from "os";

const Profile = () => {
  const { loading, data: me } = useQuery(QUERY_ME);

  if (loading) {
    <div>loading</div>;
  }

  return me ? (
    <section className="page-container">
      <h2>{me.name} profile page</h2>
      <UpdateForm bio={me.bio} name={me.name} />
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
