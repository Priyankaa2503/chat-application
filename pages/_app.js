import Login from '../components/Login'
import { ChakraProvider } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar'
export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
  <ChakraProvider>
  {/* <Login/> */}
  <Component {...pageProps} />
  </ChakraProvider>
  )
  
}
