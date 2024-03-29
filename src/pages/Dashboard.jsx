import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading,
  useToast,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiBell,
  FiChevronDown,
  FiBarChart,
  FiPlay,
} from "react-icons/fi";
import { IoLogoWhatsapp, IoMail, IoNewspaper } from "react-icons/io5";
import { MdOutlineUTurnRight } from "react-icons/md";
import { Link, Outlet ,useNavigate,Navigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";


const LinkItems = [
  { name: "Zone", icon: FiBarChart,to:"/dashboard" },
  // { name: "Pivots", icon: MdOutlineUTurnRight,to:"/dashboard/pivots" },
  { name: "Simulator", icon: FiPlay ,to:"/dashboard/stock"},
  { name: "Test your Knowledge", icon: IoNewspaper ,to:"/dashboard/quiz"},
  // { name: "Home", icon: FiHome },
  // { name: "Trending", icon: FiTrendingUp },
  // { name: "Explore", icon: FiCompass },
  // { name: "Favourites", icon: FiStar },
  // { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("teal.300", "teal.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to={"/"}>
          {/* <Heading fontSize="2xl" fontWeight="bold">
          Streamy
        </Heading> */}
          <Text fontFamily={"heading"} fontWeight={"bold"}>
            Streamy
          </Text>
        </Link>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} as={Link} to={link.to}>
          {link.name}
        </NavItem>
      ))}
      <NavItem icon={IoLogoWhatsapp} as="a" href="https://wa.me/+919999999999" target="_blank">
        Whatsapp
        </NavItem>
        <NavItem icon={IoMail} as={"a"} href="mailto:theStreamy@gmail.com" target="_blank">
          Email
        </NavItem>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const toast = useToast();
  const navigate =useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  const showToast = (message, status) => {
    toast({
      title: {message},
      description: {message},
      status: {status}, // success, error, warning, info
      duration: 3000, // Display duration in milliseconds
      isClosable: true, // Whether the toast is closable by the user
    });
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("teal.300", "teal.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        as={"h2"}
        fontSize="xl"
        fontWeight="bold"
      >
        Streamy
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={user.photoURL}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{user.displayName}</Text>
                  {/* <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text> */}
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={async() => {
                  try {
                    await signOut(auth);
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    navigate("/authenticate")
                    window.location.reload();
                    showToast("Signed out", "success");
                  } catch (err) {
                    showToast("Error signing out", "error");
                  }
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const token = localStorage.getItem("token")

  return (
    token ?
    
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>

: <Navigate to="/authenticate" />
  );
};

export default SidebarWithHeader;