import Header from "./components/Header/Header";
import Snippets from "./components/Snippets/Snippets";
import Access from "./components/Access/Access";
import Clients from "./components/Clients/Clients";
import Download from "./components/Download/Download";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";

const App = () => (
  <>
    <Header />
    <Snippets />
    <Access />
    <Workflow />
    <Clients />
    <Download />
    <Footer />
  </>
);

export default App;