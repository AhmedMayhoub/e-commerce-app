import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import Newsletters from "../components/Newsletters"
import Privacy from "../components/Privacy"

const Home = () => {
  return (
      <div>
          <Hero />
      <LatestCollection />
      <BestSeller />
      <Privacy />
      <Newsletters />
   
     </div>
  )
}

export default Home