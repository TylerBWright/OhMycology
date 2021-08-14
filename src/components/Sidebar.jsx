import Sidelink from "./Sidelink";

const Sidebar = () => {
  return (
    <div>
      <Sidelink href={"/substrate"} name={"Substrate"} />
      <Sidelink href={"/mycorrhizae"} name={"Mycorrhizae"} />
      <Sidelink href={"/herbarium"} name={"Herbarium"} />
    </div>
  );
};

export default Sidebar;
