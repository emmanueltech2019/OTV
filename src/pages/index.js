import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Section1/>
        <Section2 text={"Best Red wine"} color={"#fff"} pt={'500'}/>
        <Section2 text={"Best White wine"} color={"#000"} pt={'100'}/>
        <Section2 text={"Best Desert wine"} color={"#000"} pt={'100'}/>
        <Section2 text={"Best Rosé wine"} color={"#000"} pt={'100'}/>
      </div>
      <Footer/>
    </>
  )
}
