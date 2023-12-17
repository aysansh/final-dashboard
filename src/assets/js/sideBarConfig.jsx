import { FiHome } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";

import { FiLayers } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiLayout } from "react-icons/fi";

import { BsTable } from "react-icons/bs";

export const dashboard = [
  {
    icon: <FiHome />,
    title: "Dashboard",
    dropIcon: <IoIosArrowDown />,
    child: [
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Projects",
        url: "/",
      },
    ],
  },
];

export const layoutAndPages = [
  {
    icon: <FiLayers />,
    title: "Pages",
    dropIcon: <IoIosArrowDown />,
    child: [
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Profile",
        url: "/profile",
      },
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Accounts",
        url: "/generalSettings",
      },
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Pricing",
        url: "/pricing",
      },
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Invoice",
        url: "/invoce",
      },

    ],
  },

  {
    icon: <IoLockClosedOutline />,
    title: "Authentication",
    dropIcon: <IoIosArrowDown />,
    child: [
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Signin",
        url: "/signin",
      },
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Signup",
        url: "/signup",
      },
      {
        dotIcon: <LuDot className="text-3xl" />,
        title: "Forget password",
        url: "/forget",
      },
    ],
  },
  {
    icon: <FiLayout />,
    title: "Layouts",
    dropIcon: <IoIosArrowDown />,
    child: [],
  },
];

export const uicomponents = [
  {
    icon: <FiLayers />,
    title: "Cards",
    dropIcon: "",
    child: [],
  },
  {
    icon: <BsTable />,
    title: "Tables",
    dropIcon: "",
    child: [],
  },
  {
    icon: <FiLayers />,
    title: "Components",
    dropIcon: <IoIosArrowDown />,
    child: [],
  },
  {
    icon: <FiLayers />,
    title: "Tables",
    dropIcon: <IoIosArrowDown />,
    child: [],
  },
  {
    icon: <FiLayers />,
    title: "Utilities",
    dropIcon: <IoIosArrowDown />,
    child: [],
  },
  {
    icon: <FiLayers />,
    title: "Components",
    dropIcon: <IoIosArrowDown />,
    child: [],
  },
  {
    icon: <FiHome />,
    title: "Documentation",
    dropIcon: <IoIosArrowDown />,
    child: [],
  },
];
