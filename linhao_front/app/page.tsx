import HeroVideo from '@/components/sections/HeroVideo'
import Navbar from '@/components/Navbar'
import SchoolHeader from '@/components/sections/SchoolHeader'
import Teachers from '@/components/sections/Teachers'
import Programs from '@/components/sections/Programs'
import Students from '@/components/sections/Students'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SchoolHeader />  
      <HeroVideo />
      <Teachers/>
      <Programs/>
      <Students/>
            
    </>
  )
}