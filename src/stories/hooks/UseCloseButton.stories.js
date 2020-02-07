import React from "react";
import useCloseButton from "../../components/hooks/UseCloseButton";
import Element from "../../components/nms-companion/Element";
import FlexBox from "../../components/common/FlexBox";

export default {
	title: "Library/Hooks/useCloseButton",
	component: useCloseButton,
	parameters: {
		componentSubtitle: "Interactive Documentation"
	}
};

export const DefaultView = () => {
	return useCloseButton(<div>Add a close button to this div!</div>);
};

const carbonProps = {
	name: "Carbon",
	imageUri: "https://gamepedia.cursecdn.com/nomanssky_gamepedia/5/5b/SUBSTANCE.FUEL.1.png",
	abbrev: "C",
	group: "Organic",
	rarity: "Common",
	units: 12
};

export const WithElement = () => {
	return useCloseButton(<Element {...carbonProps} />);
};
