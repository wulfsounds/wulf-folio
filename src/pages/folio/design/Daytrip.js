//Import React/Chakra
import React from "react";
import { DrawerBody, DrawerContent } from "@chakra-ui/react";

//Import Drawer Components, Engines
import DNDYLeft from "../../../components/engine/DNDYCtrl/DndyLeft";
import ThymeRight from "../../../components/engine/ThymeCtrl/ThymeRight";
import DesignHead from "../../../components/end-caps/DesignHead";

const Daytrip = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body daytrip background">
				<DesignHead />
					<main className="drawer-main">
						<div className="btnContainer">
							<DNDYLeft />
						</div>
						<div className="btnContainer2">
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
								rel="noreferrer"
							>
								GITHUB
							</a>
							<br></br>
							<a
								className="repo-link"
								href="https://wulfsounds.github.io/daytripper/"
								target="_blank"
								rel="noreferrer"
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
