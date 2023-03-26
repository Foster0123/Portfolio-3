import React from "react"

import Home from "./Home"
import Intro from "./Intro"
import Projects from "./Projects"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"
import Skills from "./Skills"
import Upcoming from "./Upcoming"

const App = () => {
	return(
		<main>
			<Navbar />
			<Home />
			<Intro />
			<Projects />
			<Skills />
			<Upcoming />
			<Footer />
		</main>
	)
}
export default App