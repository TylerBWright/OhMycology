import { Link } from "react-router-dom";

const Sidelink = ({ href, name }) => {
  return (
    <div className="sidebar">
      <Link to={href}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default Sidelink;
