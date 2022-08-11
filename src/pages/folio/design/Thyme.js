//Import React/Chakra
import React from "react";
import {
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";

//Import Drawer Components, Engines
import DayLeft from "../../../components/engine/DayCtrl/DayLeft";
import DesignHead from "../../../components/end-caps/DesignHead";

const Thyme = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body thyme background">
				<DesignHead />
					<main className="drawer-main">
						<div className="btnContainer">
							<DayLeft />
						</div>
						<p className="para thyme-para">
							Thyme is a conceptual note-taking application
							designed with an incredible all-female cast with the
							exception of myself included. The future is indeed
							female.
							<br></br>
							<br></br>
							Created using Express, Node, CSS, HTML, and jQuery.
						</p>
						<section className="project-links">
						<a
								className="repo-link"
								href="https://github.com/wulfsounds/g2p-thyme"
								target="_blank"
								rel="noreferrer"
							>
								GITHUB</a>
							<br></br>
							<a
								className="repo-link"
								href="https://thyme-calendar.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								DEPLOY</a>
						</section>
					</main>
					{/* <Footer /> */}
				</DrawerBody>
			</DrawerContent>
		</>
	);
};

export default Thyme;
