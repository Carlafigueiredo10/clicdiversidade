import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Manifesto from '../components/Manifesto'
import Pillars from '../components/Pillars'
import Outcomes from '../components/Outcomes'
import Example from '../components/Example'
import Principles from '../components/Principles'
import Audience from '../components/Audience'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Manifesto />
        <Pillars />
        <Outcomes />
        <Example />
        <Principles />
        <Audience />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
