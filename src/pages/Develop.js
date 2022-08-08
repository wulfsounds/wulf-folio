import React from "react";
import MenuDeck from "../components/menu/MenuDeck";
import RMLeft from "../components/engine/Readme/RMLeft"
import JRight from "../components/engine/Jate/JRight";

const Develop = () => {
    return (
		<>
					<header>
						<h2 className="menu folio-head">DEVELOPER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<RMLeft />
							<JRight />
						</div>
						<p className="para emptrk-para">
							Employee Tracker is a command-line application built
							using an Express.js server with a content management
							system (CMS) interface.
							<br></br>
							<br></br>
							The application stores basic employee information in
							a SQL database using a CRUD API.
						</p>
						<section className="project-links">
							<a
								className="repo-link"
								href="https://github.com/wulfsounds/sql-employee-tracker"
								target="_blank"
							>
								GITHUB
							</a>
						</section>
					</main>
		</>
	);
}

export default Develop;