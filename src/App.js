import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<main className="main">
			<Navbar />
			<div className="app_section_container">
				<Home />
				<About />
				<Experience />
				<Work />
				<Contact />
			</div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;
