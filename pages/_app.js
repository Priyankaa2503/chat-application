import Login from '../components/Login'
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';


export default function App({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return(
      <ChakraProvider>
        <Center h='100vh'>
      <Spinner size='xl'/>
        </Center>

    </ChakraProvider>

    )
   
  }
  if(!user)
  {
    return(
      <ChakraProvider>
        <Login/>
      </ChakraProvider>
    )
  }

  return (
  <ChakraProvider>
  {/* <Login/> */}
  <Component {...pageProps} />
  </ChakraProvider>
  )
  
}
