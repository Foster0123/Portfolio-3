import React from "react"
import Intro from "./Intro"
import Projects from "./Projects"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"

const App = () => {
	return(
		<main>
			<Navbar />
			<Intro />
			<Projects />
			<Footer />
		</main>
	)
}
export default App