import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Rooms from "../Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Azure-Nest | Vacation Home</title>
      </Helmet>
      <div className=" w-full h-96 mt-0 ">
        <Banner />
      </div>
      <div>
        <Rooms />
      </div>
    </div>
  );
};

export default Home;
