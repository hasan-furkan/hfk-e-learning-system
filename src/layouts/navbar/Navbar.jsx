import { useState } from "react";
import { Menu, Switch, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../../redux/components/theme/index.js";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import {
  GlobalOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import sun from "../../assets/svgs/sun.svg";
import moon from "../../assets/svgs/moon.svg";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const themeDefault = useSelector((state) => state.theme);
  const [current, setCurrent] = useState("mail");
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(themeDefault);

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
    dispatch(themeChange(value ? "dark" : "light"));
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to={"/dashboard"}>{t("sideMenu.management")}</Link>,
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: (
        <Switch
          onClick={changeTheme}
          checked={theme === "dark"}
          checkedChildren={`Dark`}
          unCheckedChildren={`Light`}
        />
      ),
      key: "theme",
    },
    {
      label: "",
      key: "language",
      icon: <GlobalOutlined />,
      children: [
        {
          type: "group",
          label: "",
          children: [
            {
              label: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                  onClick={() => {
                    i18n.changeLanguage("tr");
                  }}
                >
                  <ReactCountryFlag
                    countryCode="tr"
                    style={{
                      fontSize: "2em",
                      cursor: "pointer",
                    }}
                  />
                  Turkish
                </div>
              ),
              key: "setting:1",
            },
            {
              label: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  <ReactCountryFlag
                    countryCode="us"
                    style={{
                      fontSize: "2em",
                      cursor: "pointer",
                    }}
                  />
                  English
                </div>
              ),
              key: "setting:2",
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme={theme}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 20px",
        position: "sticky",
        transition: "all 0.3s ease",
        width: "100%",
        top: 0,
        borderRadius: 10,
        zIndex: 1,
        height: "10vh",
      }}
    />
  );
};
export default Navbar;
