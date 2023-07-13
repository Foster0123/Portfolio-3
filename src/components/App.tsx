import React from "react"

import Home from "./Home"
import Intro from "./Intro"
import Projects from "./Projects"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"
import Skills from "./Skills"
import Upcoming from "./Upcoming"
import Summary from "./Summary"

const App = () => {
	return(
		<main>
			<Navbar />
			<Home />
			<Intro />
			<Summary />
			<Projects />
			<Skills />
			<Upcoming />
			<Footer />
		</main>
	)
}
export default App