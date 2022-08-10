//Import React/Chakra
import React from "react";

//Import Drawer Components, Engines
import DayRight from "../components/engine/DayCtrl/DayRight";

import DesignHead from "../components/end-caps/DesignHead";

const Design = () => {
	return (
		<>
			<div className="dndy">
				<DesignHead />
				<main className="drawer-main dndy vh">
					<div className="btnContainer">
						{/* Button Control */}
						<DayRight />
					</div>
					<p className="para dndy-para">
						DNDY is a project I operated as a front-end designer
						with a handful of really cool dudes during my time as a
						full-stack web dev student.
						<br></br>
						<br></br>
						It’s a web based, full stack application that utilizes
						GraphQL, and a collection of various React packages such
						as Chakra and Parallax.{" "}
					</p>
					<section className="project-links">
						<a
							className="repo-link"
							href="https://github.com/DNDYArt/DNDYArt"
							target="_blank"
						>
							GITHUB
						</a>
						<br></br>
						<a
							className="repo-link"
							href="https://dndyfineart.herokuapp.com/"
							target="_blank"
						>
							DEPLOY
						</a>
					</section>
				</main>
			</div>
		</>
	);
};

export default Design;
