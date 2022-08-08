//Import React/Chakra
import React from "react";
import { DrawerBody, DrawerContent } from "@chakra-ui/react";

//Import Drawer Components, Engines
import MenuDeck from "../../../components/menu/MenuDeck";
import DNDYLeft from "../../../components/engine/DNDYCtrl/DndyLeft";
import ThymeRight from "../../../components/engine/ThymeCtrl/ThymeRight";

const Daytrip = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body daytrip">
					<header>
						<h2 className="menu folio-head">DESIGNER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<DNDYLeft />
							<ThymeRight />
						</div>
						<p className="para daytrip-para">
							Daytripper is a single-day scheduler that stores
							inputed save data locally. It’s design and name is
							inspired by the Beatles tune when the world started
							to live in color.
							<br></br>
							<br></br>
							Created using Semantic HTML, CSS, Moment.js and
							jQuery.
						</p>
						<section className="project-links">
							<a
								className="repo-link"
								href="https://github.com/wulfsounds/daytripper"
								target="_blank"
							>
								GITHUB
							</a>
							<br></br>
							<a
								className="repo-link"
								href="https://wulfsounds.github.io/daytripper/"
								target="_blank"
							>
								DEPLOY
							</a>
						</section>
					</main>
					{/* <Footer /> */}
				</DrawerBody>
			</DrawerContent>
		</>
	);
};

export default Daytrip;
