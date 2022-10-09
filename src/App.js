import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Education} from './components/Education'
import { Skills } from './components/Skills';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Education/>
			<Skills />
			<CompetitiveProgramming />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
