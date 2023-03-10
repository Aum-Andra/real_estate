import  Link  from "next/link";
import { Menu,MenuButton,MenuItem,MenuList,IconButton,Flex,Box,Spacer } from "@chakra-ui/react";
import {FcMenu,FcHome,FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'



const Navbar = () => {
  return (
    <Flex p='2' borderBottom='1px'  backgroundColor='blackAlpha.900' borderColor='whiteAlpha.900'>
        <Box fontSize='3xl' color='whiteAlpha.900' fontWeight='bold'>

            <Link href='/' paddingLeft='2'>
            Resplendency

            </Link>

        </Box>
        <Spacer/>
        <Box>
            <Menu>
<MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='whiteAlpha.900'></MenuButton>

<MenuList>
    <Link href='/' passHref>
    <MenuItem icon={<FcHome/>}>Home</MenuItem>
    </Link>

    <Link href='/search' passHref>
    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
    </Link>

    <Link href='/search?purpose=for-sale' passHref>
    <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
    </Link>

    <Link href='/search?purpose=for-rent' passHref>
    <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
    </Link>

</MenuList>
            </Menu>
        </Box>

    </Flex>
  )
}

export default Navbar
