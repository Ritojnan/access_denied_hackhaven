import React, { useState } from "react";
import { Flex, Link, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Spacer } from "@chakra-ui/react";
import { MdMenu as MenuIcon } from "react-icons/md";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
 <Flex
  className="bg-black text-gray-300 shadow h-16 items-center gap-4 px-4 border"
  w="100%"
  justifyContent="space-between"
>
  <div className="flex items-center gap-4">
    <Link
      as="a"
      className="flex items-center gap-2"
      href="#"
    >
      <HomeIcon className="h-6 w-6" />
      <span className="font-semibold">Home</span>
    </Link>
  </div>
  <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
    <nav className="flex items-center justify-center gap-4">
      <NavLink href="#" className="hover:text-white">Features</NavLink>
      <NavLink href="#" className="hover:text-white">Pricing</NavLink>
      <NavLink href="#" className="hover:text-white">Contact</NavLink>
      <NavLink href="#" className="hover:text-white">Meet</NavLink>
    </nav>
  </div>
  <div className="flex items-center gap-4 md:hidden">
    <button className="focus:outline-none" onClick={handleDrawerOpen}>
      <MenuIcon className="h-6 w-6" />
    </button>
  </div>
  <Spacer />
  <div className="flex items-center gap-4">
    <Signup />
    <Login />
  </div>

  {/* Sidebar Modal Drawer */}
  <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} placement="left">
    <DrawerOverlay>
      <DrawerContent bg="black" color="purple.500">
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Flex direction="column" alignItems="center">
            <NavLink href="#" className="text-base hover:text-white" style={{ fontSize: "18px", fontWeight: "normal" }}>Features</NavLink>
            <NavLink href="#" className="text-base hover:text-white" style={{ fontSize: "18px", fontWeight: "normal" }}>Pricing</NavLink>
            <NavLink href="#" className="text-base hover:text-white" style={{ fontSize: "18px", fontWeight: "normal" }}>Contact</NavLink>
            <NavLink href="#" className="text-base hover:text-white" style={{ fontSize: "18px", fontWeight: "normal" }}>Video Call</NavLink>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
</Flex>

  );
};

const NavLink = ({ children, href }) => {
  return (
    <Link
      as="a"
      href={href}
      className="text-sm font-medium px-3 py-2 rounded-md hover:font-bold focus:font-bold"
    >
      {children}
    </Link>
  );
};

const HomeIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

export default Navbar;
