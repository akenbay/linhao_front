import HeroVideo from '@/components/sections/HeroVideo'
import Navbar from '@/components/Navbar'
import SchoolHeader from '@/components/sections/SchoolHeader'
import Teachers from '@/components/sections/Teachers'
import Programs from '@/components/sections/Programs'
import Students from '@/components/sections/Students'
import AboutSection from '@/components/sections/AboutSection'
import AboutCSCA from '@/components/sections/AboutCSCA'
import StudentFeedback from '@/components/sections/StudentsFeedback'
import Benefits from '@/components/sections/Benefits'
import Mandarine3 from '@/components/sections/Mandarine3'
import CSCAPrices from '@/components/sections/CSCAPrices'
import Footer from '@/components/sections/Footer'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <SchoolHeader />  
      <HeroVideo />
      <AboutSection/>
      <Benefits/>
      <AboutCSCA/>
      <Teachers/>
      <CSCAPrices/>
      <StudentFeedback/>
      <Mandarine3/>
      <Programs/>
      <Footer/>    
    </>
  )
}