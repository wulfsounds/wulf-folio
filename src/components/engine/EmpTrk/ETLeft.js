// Button Ecosystem for the Designer Folio
import React from "react";
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	IconButton,
	DrawerCloseButton
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const ETLeft = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("left");
	const [size, setSize] = React.useState("full");

	return (
		<>
			<IconButton
				onClick={onClose}
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

export default ETLeft;
