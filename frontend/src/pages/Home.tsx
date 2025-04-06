import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/settings">
      <Button>Settings</Button>
    </Link>
  );
};

export default Home;
