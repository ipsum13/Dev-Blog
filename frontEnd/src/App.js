import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import HeadMetaData from "./headMetaData";

function App() {
  return (
    <div className="layout-wrapper">
      <HeadMetaData
        title="Coding Blog"
        metaDescription="Samiul Lesum is a full stack software developer that also writes about modern NodeJS and JavaScript."
      />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
