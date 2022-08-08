//Import React/Chakra
import React from "react";
import {
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";

//Import Drawer Components, Engines
import MenuDeck from "../../../components/menu/MenuDeck";
import DNDYRight from "../../../components/engine/DNDYCtrl/DndyRight";
import DayLeft from "../../../components/engine/DayCtrl/DayLeft";

const Thyme = () => {
	return (
		<>
			<DrawerContent>
				<DrawerBody className="drawer drawer-body thyme">
					{/* <Box backgroundImage={DNDY} /> */}
					<header>
						<h2 className="menu folio-head">DESIGNER</h2>
						<MenuDeck />
					</header>
					<main className="drawer-main">
						<div className="btnContainer">
							<DayLeft />
							<DNDYRight />
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
							>
								GITHUB</a>
							<br></br>
							<a
								className="repo-link"
								href="https://thyme-calendar.herokuapp.com/"
								target="_blank"
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