import Head from 'next/head'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { Box } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat App</title>
      </Head>
    <Box h='100vh'>
    <Sidebar/>

    </Box>
    
      
    </div>
  )
}
