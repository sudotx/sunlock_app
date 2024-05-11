import { useAuth } from '@/contexts/AuthContext'
import { lockDoor, ping, pong, takeAPicture, unlockDoor } from '@/pages/api/pingEsp'
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function Navbar() {
  const { loginGoogle, currentUser, logout } = useAuth()
  const handleLogin = () => loginGoogle()
  const handleLogout = () => logout()
  return (
    <nav className='h-16 bg-[#FFF9F3] border-b box-s shadow-md	'>
      <div className="container mx-auto grid h-full grid-cols-2">
        <Link href={"/"} className="self-center">
          <div className="flex gap-2">
            <h1 className='text-xl font-bold'>Solar Powered Lock</h1>
          </div>
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem className="border-2 border-[#20B298]  w-max self-center px-2 py-1 rounded-xl justify-self-end text-[#20B298]" onClick={() => {
              return currentUser ? handleLogout() : handleLogin()
            }}>{currentUser ? "Logout" : "Login"}</MenuItem>
            <MenuItem onClick={ping}>Ping DoorLock</MenuItem>
            <MenuItem onClick={pong}>Pong DoorLock</MenuItem>
            <MenuItem onClick={takeAPicture}>Take Image</MenuItem>
            <MenuItem onClick={unlockDoor}>Unlock Door</MenuItem>
            <MenuItem onClick={lockDoor}>Lock Door</MenuItem>
          </MenuList>
        </Menu>

      </div>
    </nav>
  )
}

export default Navbar