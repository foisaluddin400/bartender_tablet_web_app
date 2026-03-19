import { LuBell } from "react-icons/lu";
import profilee from "../../../src/assets/header/profileLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { useRef, useState } from "react";
import { Drawer, Radio, Space } from "antd";

import dashboard from "../../assets/routerImg/dashboard.png";
import categorie from "../../assets/routerImg/categorie.png";
import create from "../../assets/routerImg/create.png";
import settings from "../../assets/routerImg/settings.png";
import subscription from "../../assets/routerImg/subscription.png";
import user from "../../assets/routerImg/user.png";
import logo from "../../assets/header/logo.png";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { FaChevronRight, FaHome } from "react-icons/fa";

import { IoIosLogIn } from "react-icons/io";
import DashboardIco from "../icon/DashboardIco";
import BarProfileIco from "../icon/BarProfileIco";
import SupportIco from "../icon/SupportIco";
import ShiftsIco from "../icon/ShiftsIco";
import ProfileIco from "../icon/ProfileIco";


const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardIco />,
    link: "/",
  },
  {
    key: "shifts",
    label: "shifts",
    icon: <ShiftsIco color={'white'}></ShiftsIco>,
    link: "/dashboard/shifts",
  },
  {
    key: "venueProfile",
    label: "Venue Profile",
    icon: <ProfileIco color={'white'}></ProfileIco>,
    link: "/dashboard/VenueProfile",
  },
  {
    key: "helpSupport",
    label: "Help & Support",
    icon: <SupportIco />,
    link: "/dashboard/HelpSupport",
  },
];

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const navigate = useNavigate();

  const contentRef = useRef({});

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const onClick = (key) => {
    setSelectedKey(key);
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="bg-[#0F0B1A] border-b border-[#2A2448] text-white pt-3">
      <div className="flex justify-between pt-2 px-3">
        <div> <img src={logo} alt="Logo" className="w-[115px]" /></div>
        <div className="flex gap-8 ">
          <div className="relative">
            <div className=" ">
              <div className="">
                <div onClick={showDrawer} className="text-xl border border-[#2A2448] p-2 rounded-xl text-[#822CE7]">
                  <FaBars />
                </div>
              </div>
            </div>

            <Space>
              <Radio.Group value={placement} onChange={onChange}></Radio.Group>
            </Space>
            <Drawer
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <div className="bg-[#0F0B1A] h-screen -m-6 px-3">
                <div className="custom-sidebar-logo flex justify-center ">
                  <img src={logo} alt="Logo" className="w-[130px] py-5" />
                </div>

                <div className="menu-items">
                  {items.map((item) => (
                    <div key={item.key}>
                      <Link
                        to={item.link}
                        className={`my-4 py-[10px] px-4 flex items-center cursor-pointer ${
                          selectedKey === item.key
                            ? "bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md mx-3 rounded-full "
                            : "hover:bg-gradient-to-tr hover:from-[#822CE7] mx-3 rounded-full text-white bg-[#822CE71A] "
                        }`}
                        onClick={(e) => {
                          if (item.children) {
                            e.preventDefault();
                            onParentClick(item.key);
                          } else {
                            setSelectedKey(item.key);
                          }
                        }}
                      >
                        <span className="w-5 mr-2 text-lg">{item.icon}</span>
                        <span className="w-full">{item.label}</span>

                        {item.children && (
                          <FaChevronRight
                            className={`ml-auto text-[10px] transition-transform duration-300 ${
                              expandedKeys.includes(item.key) ? "rotate-90" : ""
                            }`}
                          />
                        )}
                      </Link>

                      {item.children && (
                        <div
                          className="ml-6 mx-2 overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: expandedKeys.includes(item.key)
                              ? `${contentRef.current[item.key]?.scrollHeight}px`
                              : "0",
                          }}
                          ref={(el) => (contentRef.current[item.key] = el)}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.key}
                              to={child.link}
                              className={`p-2 flex items-center ${
                                selectedKey === child.key
                                  ? "text-red-500"
                                  : "hover:bg-gradient-to-r hover:from-[#470e0e]"
                              }`}
                              onClick={() => setSelectedKey(child.key)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
