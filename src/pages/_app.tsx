import Layout from '@/components/layout/Layout'
import { AuthProvider } from '@/contexts/AuthContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider >
  )
}
