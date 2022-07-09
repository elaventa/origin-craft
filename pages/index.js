import Banner from "../components/Banner/Banner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import HomePage from "../components/Home/HomePage";
import Review from "../components/Review/Review";

export default function Home() {
  return (
    <div >
      <HomePage  />
      <FeaturedProducts />
      <Banner />
      <Review />
    </div>
  )
}
