// Chakra Accordion Package
import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	useDisclosure,
	Box,
} from "@chakra-ui/react";

const MenuItems = () => {
	const { isOpen, onOpen, onClose } = useDisclosure(); 
	const [placement, setPlacement] = React.useState("bottom");
	const [size, setSize] = React.useState("full");
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
							<h2 className="menu-item folio">
								FOLIO
							</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a className="link" href="/design">DESIGNER</a>
							<a className="link" href="/develop">DEVELOPER</a>
						</div>
					</AccordionPanel>
				</AccordionItem>
				{/* Contact */}
				<AccordionItem>
					<AccordionButton className="acc-btn">
						<Box flex="1" textAlign="left">
							<h2 className="menu-item">CONTACT</h2>
						</Box>
					</AccordionButton>
					<AccordionPanel pb={4}>
						<div className="menu-links">
							<a className="link" href="mailto: dev@wulfsounds.com">
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
							<a className="link" href="https://www.linkedin.com/in/devwulf/">
								LINKEDIN
							</a>
							<a className="link" href="http://www.instagram.com/wulfsounds">
								INSTAGRAM
							</a>
							<a className="link" href="https://github.com/wulfsounds">
								GITHUB
							</a>
							<a className="link" href="https://dribbble.com/wulfsounds">
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
