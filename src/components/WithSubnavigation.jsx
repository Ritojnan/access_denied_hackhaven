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
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  
  function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
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
          bg={useColorModeValue('teal.300', 'teal.800')}
          color="teal.800" // Change text color to teal.800
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to={'/'}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontWeight={'bold'}
            >
              Financy
            </Text>
            </Link>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} >
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color="white"
              bg={'teal.800'}
              href={'#'}
              _hover={{
                bg: 'teal.500',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Box>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
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
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'teal.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'teal.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Box
          py={2}
          as="a"
          href={href ?? '#'}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}>
          <Text fontWeight={600}
          color={'white'}
          //  color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Box>
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Box as="a" key={child.label} py={2} href={child.href}>
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
      label: 'Stock Trading',
      href: '/dashboard/stock',
    },
    {
      label: 'Investment Insights ',
      href: '/dashboard/display',
   
    },
    {
      label: 'Quiz Game',
      href: '#',
    },
   
    {
      label: 'Resource Library',
      children: [
        {
          label: 'Learn and Study',
          subLabel: 'Take a quiz and get Study material required',
          href: '#',
        },
        {
          label: 'Video Explanations',
          subLabel: 'Elaborate videos tailored to your learning',
          href: '#',
        },
      ],
    },
  ];
  
  export default WithSubnavigation;
  