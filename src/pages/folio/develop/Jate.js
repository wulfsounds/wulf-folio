//Import React/Chakra
import React from "react";
import { DrawerBody, DrawerContent } from "@chakra-ui/react";

//Import Drawer Components, Engines
import ETLeft from "../../../components/engine/EmpTrk/ETLeft";
import RMRight from "../../../components/engine/Readme/RMRight";
import DevHead from "../../../components/end-caps/DevHead";

const Jate = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body jate background">
					<DevHead />
					<main className="drawer-main">
						<div className="btnContainer">
							{/* Button Control */}
							<ETLeft />
						</div>
						<div className="btnContainer2">
							<RMRight />
						</div>
						<p className="para jate-para">
							JATE is a progressive web-based application (PWA)
							that utilizes IndexedDB for storage and uses a data
							persistence technique that allows the program to run
							offline.
							<br></br>
							<br></br>
							This appplication is downloaded using Google Chrome
							cards.
						</p>
						<section className="project-links dev-link">
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
