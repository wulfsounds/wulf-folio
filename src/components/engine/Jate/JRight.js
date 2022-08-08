// Button Ecosystem for the Designer Folio

import React from "react";
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	IconButton,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Jate from "../../../pages/folio/develop/Jate";

const JRight = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement] = React.useState("right");
	const [size] = React.useState("full");

	return (
		<>
			<IconButton
				onClick={onOpen}
				as="ctrlBtns"
				variant="outline"
				colorScheme="black"
				aria-label="Next"
				icon={<ArrowRightIcon />}
			/>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
				<Jate />
			</Drawer>
		</>
	);
};

export default JRight;
