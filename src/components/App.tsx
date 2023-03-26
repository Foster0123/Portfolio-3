import React from "react"

import Home from "./Home"
import Intro from "./Intro"
import Projects from "./Projects"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"
import Skills from "./Skills"

const App = () => {
	return(
		<main>
			<Navbar />
			<Home />
			<Intro />
			<Projects />
			<Skills />
			<Footer />
		</main>
	)
}
export default App