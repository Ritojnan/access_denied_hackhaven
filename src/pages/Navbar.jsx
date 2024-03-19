import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Image,
  HStack,
  useColorMode
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  // if link ends with dashboard return nothing else
  if (window.location.pathname.includes("dashboard")) {
    console.log("dashboard");
    return <></>;
  }
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      boxShadow="lg"
    >
      <Flex
        bg={useColorModeValue("black", "gray.800")}
        color="gray.800" // Change text color to gray.800
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to={"/"}>
            <HStack>
              <Image src="logo.png" w={10} h={10} alt="streamy" />
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontWeight={"bold"}
                color={useColorModeValue("white", "black")}
              >
                Streamy
              </Text>
            </HStack>
          </Link>
          <Spacer />
          

          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center" // Vertically center items
            justifyContent="center" // Horizontally center items
            ml={10}
          >
            <DesktopNav />
          </Flex>
          <Spacer />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={Link}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            to={"/authenticate"}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color="white"
            bg={"purple.400"}
            to={"/authenticate"}
            _hover={{
              bg: "purple.500",
            }}
          >
            Sign Up
          </Button>
          <IconButton onClick={toggleColorMode} pl={2} colorScheme="purple" bg="purple.400" leftIcon={useColorModeValue(<FiMoon />, <FiSun />)}/>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
const DesktopNav = () => {
  const linkColor = useColorModeValue("purple.600", "purple.200");
  const linkHoverColor = useColorModeValue("purple.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "purple.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, ind) => (
        <Box key={ind}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                to={navItem.to ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Box
      as={Link}
      to={to}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "gray.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem, ind) => (
        <MobileNavItem key={ind} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        to={to ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          // color={''}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child, ind) => (
              <Box as={Link} py={2} to={child.to} key={ind}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    label: "Stock Trading",
    to: "/dashboard/stock",
  },
  {
    label: "Test Your Knowledge",
    to: "/dashboard/quiz",
  },

  {
    // label: 'Resource Library',
    // to:'/resources',
    // children: [
    //   {
    //     label: 'Learn and Study',
    //     subLabel: 'Take a quiz and get Study material required',
    //     to: '#',
    //   },
    //   {
    //     label: 'Video Explanations',
    //     subLabel: 'Elaborate videos tailored to your learning',
    //     to: '#',
    //   },
    // ],
  },
];

export default WithSubnavigation;
