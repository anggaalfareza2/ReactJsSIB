import "./App.css";

/**
 * Membuat component Header
 * Component Header menampilkan navigasi.
 */

function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Content
 * Component Content menampilkan konten utama.
 *
 */
function Content() {
  return <h1>Content</h1>;
}

/**
 * Membuat component Footer
 * Component Footer menampilkan informasi hak cipta.
 *
 */

function Footer() {
  return (
    <footer>
      <h2>NF Academy</h2>
      <p>Created By React JS</p>
    </footer>
  );
}

function Hello() {
  const nama = "Fikri";
  return (
    <div>
      <h2>Hello React</h2>
      <p>Saya {nama} Seorang FrontEnd Developer </p>
    </div>
  );
}

function Greeting(props) {
  return (
    <>  
    <h2>{props.name}</h2>
    <p>Age: {props.age}</p>
    <p>Country: {props.country}</p>
    </>
  )
}



function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <Hello />
      <Greeting name="Alice" age={22} Country="Texas" />
      <Footer />
    </>
  );
}

export default App;
