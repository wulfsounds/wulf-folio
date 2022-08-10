// Button Ecosystem for the Designer Folio
import React from "react";
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	IconButton,
	DrawerCloseButton
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

const JLeft = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("left");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<IconButton
				onClick={onOpen}
				as={DrawerCloseButton}
				variant="outline"
				aria-label="Back"
				icon={<ArrowLeftIcon />}
			/>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				size={size}
			>
				<DrawerOverlay />
			</Drawer>
		</>
	);
};

export default JLeft;
