import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Azure-Nest | Vacation Home</title>
      </Helmet>
      <div className="h-96">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
