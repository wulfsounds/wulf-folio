//Import React/Chakra
import React from "react";

//Import Drawer Components, Engines
import MenuDeck from "../components/menu/MenuDeck";
import ThymeLeft from "../components/engine/ThymeCtrl/ThymeLeft";
import DayRight from "../components/engine/DayCtrl/DayRight";

const Design = () => {
    return (
        <>
        <body className="dndy">
            <header>
						<h2 className="menu folio-head">DESIGNER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<ThymeLeft />
							<DayRight />
						</div>
						<p className="para dndy-para">
							DNDY is a project I operated as a front-end designer
							with a handful of really cool dudes during my time
							as a full-stack web dev student.
							<br></br>
							<br></br>
							It’s a web based, full stack application that
							utilizes GraphQL, and a collection of various React
							packages such as Chakra and Parallax.{" "}
						</p>
						<section className="project-links">
							<a
								className="repo-link"
								href="https://github.com/DNDYArt/DNDYArt"
								target="_blank"
							>
								GITHUB</a>
							<br></br>
							<a
								className="repo-link"
								href="https://dndyfineart.herokuapp.com/"
								target="_blank"
							>
								DEPLOY</a>
						</section>
					</main>
        </body>
        </>
    )
}

export default Design;