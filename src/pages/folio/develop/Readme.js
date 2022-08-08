//Import React/Chakra
import React from "react";
import {
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";

//Import Drawer Components, Engines
import MenuDeck from "../../../components/menu/MenuDeck";
import JLeft from '../../../components/engine/Jate/JLeft';
import ETRight from '../../../components/engine/EmpTrk/ETRight';

const Readme = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body readme">
					{/* <Box backgroundImage={EmpTrk} /> */}
					<header>
						<h2 className="menu folio-head">DEVELOPER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<JLeft />
							<ETRight />
						</div>
						<p className="para readme-para">
							JATE is a progressive web-based application (PWA)
							that utilizes IndexedDB for storage and uses a data
							persistence technique that allows the program to run
							offline.
						</p>
						<section className="project-links">
						<a
								className="repo-link"
								href="https://github.com/wulfsounds/readme-generator"
								target="_blank"
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
