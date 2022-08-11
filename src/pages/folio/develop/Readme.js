//Import React/Chakra
import React from "react";
import {
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";

//Import Drawer Components, Engines
import JLeft from '../../../components/engine/Jate/JLeft';
import DevHead from "../../../components/end-caps/DevHead";

const Readme = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body readme background">
				<DevHead />
					<main className="drawer-main">
						<div className="btnContainer">
							<JLeft />
						</div>
						<p className="para readme-para">
						The README Generator is a simple tool that allows the user to create a professional README file. This application is created, maintained, and operational using Node.js.
						</p>
						<section className="project-links dev-link">
						<a
								className="repo-link"
								href="https://github.com/wulfsounds/readme-generator"
								target="_blank"
								rel="noreferrer"
							>
								GITHUB</a>
						</section>
					</main>
					{/* <Footer /> */}
				</DrawerBody>
			</DrawerContent>
		</>
	);
};

export default Readme;
