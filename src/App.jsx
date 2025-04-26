import About from "./components/About.jsx"
import Challenges from "./components/Challenges.jsx"
import Faq from "./components/Faq.jsx"
import Home from "./components/Home.jsx"
import Mission from "./components/Mission.jsx"
import Contact from "./components/Contact.jsx"
import Footer from './components/Footer.jsx'
import Solutions from "./components/Solutions.jsx"

function App() {

  return (
    <div className="overflow-x-hidden">
      <Home/>
      <Solutions/>
      <section className='h-full w-full' id='about'>
        <About/>
      </section>
      <Mission/>
      <Challenges/>
      <section className='h-full w-full' id='faq'>
        <Faq/>
      </section>
      <section className='h-full w-full' id='contact'>
        <Contact/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
