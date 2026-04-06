import Header from "../../components/shared/Header";
import ProdukList from "../../components/shared/ProdukList";
import Footer from "../../components/shared/Footer";
import BookList from "../../components/shared/BookList";

export default function Books() {
  return (
    <>
      <Header />

      <ProdukList />

      <BookList />
      
      <Footer />
    </>
  );
}
