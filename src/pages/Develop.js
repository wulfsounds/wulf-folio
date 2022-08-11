//Import React/Chakra
import React from "react";
import DevHead from "../components/end-caps/DevHead";
//Import Drawer Components, Engines
import JRight from "../components/engine/Jate/JRight";

const Develop = () => {
	return (
		<>
		<div className="emptrk background">
			<DevHead />
			<main className="drawer-main vh">
				<div className="btnContainer2">
					{/* Button Control */}
					<JRight />
				</div>
				<p className="para emptrk-para">
					Employee Tracker is a command-line application built using
					an Express.js server with a content management system (CMS)
					interface.
					<br></br>
					<br></br>
					The application stores basic employee information in a SQL
					database using a CRUD API.
				</p>
				<section className="project-links dev-link">
					<a
						className="repo-link"
						href="https://github.com/wulfsounds/sql-employee-tracker"
						target="_blank"
						rel="noreferrer"
					>
						GITHUB
					</a>
				</section>
			</main>
			</div>
		</>
	);
};

export default Develop;
