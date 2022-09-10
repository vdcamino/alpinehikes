import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img
            src="./logo.png"
            alt="Alpine Hikes logo"
            width="220px"
            height="auto"
          />
        </Link>
      </div>
      <nav>
        <ul>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/sign-up">Sign Up</Link>
          </Button>
          <Button>
            <Link to="/add-new-hike">Add New Hike</Link>
          </Button>
          <Button>
            <Link to="/my-hikes">My Hikes</Link>
          </Button>
          <Button>
            <Link to="/hike ">Hike Page</Link>
          </Button>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
