// Chakra Accordion Package
import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";

const MenuItems = () => {
	return (
		<section className="menu-section">
			{/* Home */}
			<Accordion allowToggle>
				<a href="/" className="menu-item">
					<h2 className="menu-item home-link">HOME</h2>
				</a>
				{/* Folio */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item folio">FOLIO</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a className="link" href="/design">
								DESIGNER
							</a>
							<a className="link" href="/develop">
								DEVELOPER
							</a>
						</div>
					</AccordionPanel>
				</AccordionItem>
				{/* Contact */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item">HIRE ME</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a
								className="link"
								href="mailto: dev@wulfsounds.com"
							>
								EMAIL
							</a>
						</div>
					</AccordionPanel>
				</AccordionItem>
				{/* Socials */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item">SOCIALS</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a
								className="link"
								href="https://www.linkedin.com/in/devwulf/"
								target="_blank"
								rel="noreferrer"
							>
								LINKEDIN
							</a>
							<a
								className="link"
								href="http://www.instagram.com/wulfsounds"
								target="_blank"
								rel="noreferrer"
							>
								INSTAGRAM
							</a>
							<a
								className="link"
								href="https://github.com/wulfsounds"
								target="_blank"
								rel="noreferrer"
							>
								GITHUB
							</a>
							<a
								className="link"
								href="https://dribbble.com/wulfsounds"
								target="_blank"
								rel="noreferrer"
							>
								DRIBBBLE
							</a>
						</div>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</section>
	);
};

export default MenuItems;
