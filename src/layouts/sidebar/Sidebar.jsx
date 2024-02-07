import {AppstoreOutlined, MailOutlined, ScheduleOutlined} from "@ant-design/icons";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children) {
  // sidebar sub menu item
  // getItem("Submenu", "sub1-2", null, [
  //   getItem("Option 5", "5"),
  //   getItem("Option 6", "6"),
  // ]),
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to={"/dashboard"}>Dashboard</Link>, "1", <MailOutlined />),
  getItem("User", "users", <AppstoreOutlined />, [
    getItem(<Link to={"/user"}>List</Link>, "3"),
    getItem(<Link to={"/user/detail"}>Detail</Link>, "4"),
  ]),
    getItem(<Link to={"/lessons"}>Lessons</Link> , "lessons", <ScheduleOutlined />, ),
];
const Sidebar = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Menu
      style={{ padding: 10, position: "sticky", width: 240 }}
      defaultSelectedKeys={["sub1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme={theme}
      items={items}
    />
  );
};
export default Sidebar;
