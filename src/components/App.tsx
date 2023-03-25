import React from "react"
import Info from "./Info"
import Intro from "./Intro"
import Projects from "./Projects"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"

const App = () => {
	return(
		<main>
			<Navbar />
			<Intro />
			<Info />
			<Projects />
			<Footer />
		</main>
	)
}
export default App