//Import React/Chakra
import React from "react";
import { DrawerBody, DrawerContent } from "@chakra-ui/react";

//Import Drawer Components, Engines
import MenuDeck from "../../../components/menu/MenuDeck";
import ETLeft from "../../../components/engine/EmpTrk/ETLeft";
import RMRight from "../../../components/engine/Readme/RMRight";

const Jate = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body jate">
					{/* <Box backgroundImage={EmpTrk} /> */}
					<header>
						<h2 className="menu folio-head">DEVELOPER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<ETLeft />
							<RMRight />
						</div>
						<p className="para jate-para">
							JATE is a progressive web-based application (PWA)
							that utilizes IndexedDB for storage and uses a data
							persistence technique that allows the program to run
							offline.
						</p>
						<section className="project-links">
							<a
								className="repo-link"
								href="https://github.com/wulfsounds/pwa-jate"
								target="_blank"
								rel="noreferrer"
							>
								GITHUB
							</a>
						</section>
					</main>
					{/* <Footer /> */}
				</DrawerBody>
			</DrawerContent>
		</>
	);
};

export default Jate;
