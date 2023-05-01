import { React } from "react";
import Hero from '../components/indexComponents/hero'
import Categories from '../components/indexComponents/categories'
import CarSlider from '../components/indexComponents/carSlider'
import Reviews from '../components/indexComponents/reviews'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <CarSlider />
      <Reviews />
      <Footer />
    </>
  )
}