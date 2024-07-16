// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Cards from './components/Cards';
import ChooseUs from './components/ChooseUs';
import OurProject from './components/OurProject';
import CompanyGrowth from './components/CompanyGrowth';
import Feedback from './components/Feedback';
import Clients from './components/Clients';
import ContactForm from './components/TalkToUsForm';
// import HoverCard from './components/HoverCard';

function App() {
  return (
    <div className="">
      <HomePage/>
      <Cards/>
      <ChooseUs/>
      <OurProject/>
      <CompanyGrowth/>
      <Feedback/>
      <Clients/>
      {/* <ContactForm/> */}
      {/* <HoverCard/> */}
    </div>
  );
}

export default App;
