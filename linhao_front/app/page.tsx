import HeroVideo from '@/components/sections/HeroVideo'
import Navbar from '@/components/Navbar'
import SchoolHeader from '@/components/sections/SchoolHeader'
import Teachers from '@/components/sections/Teachers'
import Programs from '@/components/sections/Programs'
import Students from '@/components/sections/Students'
import AboutSection from '@/components/sections/AboutSection'
import AboutCSCA from '@/components/sections/AboutCSCA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SchoolHeader />  
      <HeroVideo />
      <AboutSection/>
      <AboutCSCA/>
      <Teachers/>
      <Programs/>
      <Students/>
            
    </>
  )
}