import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_SINGLE_USER } from "../utils/queries";
import { UpdateForm } from "../components/forms";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username },
  });
  if (loading) {
    <div>loading</div>;
  }
  console.log(data);
  return data ? (
    <section className="page-container">
      <h2>{data.user.name}</h2>
      <UpdateForm bio={data.user.bio} name={data.user.name} />
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
