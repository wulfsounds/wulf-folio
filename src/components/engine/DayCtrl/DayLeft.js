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
import Daytrip from "../../../pages/folio/design/Daytrip";

const DayLeft = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState("left");
	const [size, setSize] = React.useState("full");

	return (
		<>
			{/* <IconButton
				onClick={onOpen}
				as="ctrlBtns"
				variant="outline"
				colorScheme="black"
				aria-label="Back"
				icon={<ArrowLeftIcon />}
			/> */}
			<IconButton
				onClick={onClose}
				as={DrawerCloseButton}
				variant="outline"
				colorScheme="black"
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
				<Daytrip />
			</Drawer>
		</>
	);
};

export default DayLeft;
