import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <section className="bg-gradient-to-b from-black to-red-900">
          <Navbar />
          <Hero />
        </section>
        <Features />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
