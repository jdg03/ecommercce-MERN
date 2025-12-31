import BestSeller from "../components/home/BestSeller"
import Hero from "../components/home/Hero"
import LatestCollection from "../components/home/LatestCollection"
import NewsletterBox from "../components/home/NewsletterBox"
import OurPolicy from "../components/home/OurPolicy"

const Home = () => {
  return (
    <>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </>
  )
}

export default Home