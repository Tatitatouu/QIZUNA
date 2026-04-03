import {
  heroData,
  philosophyData,
  certificationData,
  navLinks,
  services,
  values,
  testimonials,
  pillars,
  references,
  contactInfo,
  footerData,
} from '@/lib/data'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Philosophy from '@/components/sections/Philosophy'
import Values from '@/components/sections/Values'
import Certification from '@/components/sections/Certification'
import References from '@/components/sections/References'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content">
        <Hero data={heroData} />
        <Philosophy data={philosophyData} pillars={pillars} />
        <Values values={values} />
        <Services services={services} />
        <Certification data={certificationData} />
        <Testimonials testimonials={testimonials} />
        <References references={references} />
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
    </div>
  )
}
