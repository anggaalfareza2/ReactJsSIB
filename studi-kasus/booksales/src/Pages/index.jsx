import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import Team from "../components/shared/Team";
import Footer from "../components/shared/Footer";
import ProdukList from "../components/shared/ProdukList";
import BookList from "../components/shared/BookList";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <ProdukList />

      <BookList/>

      <Team />

      <Footer />
    </>
  );
}
