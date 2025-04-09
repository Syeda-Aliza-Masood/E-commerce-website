import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Footer />
      
    </main>
  )
}

