import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import Element from "../components/nms-companion/Element";
import FlexBox from "../components/FlexBox";

export default {
	title: "components/NMS Companion/Element",
	component: Element,
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: "Interactive Documentation"
	}
};

const carbonProps = {
	name: "Carbon",
	imageUri: "https://gamepedia.cursecdn.com/nomanssky_gamepedia/5/5b/SUBSTANCE.FUEL.1.png",
	abbrev: "C",
	group: "Organic",
	rarity: "Common",
	units: 12
};

export const Summary = () => {
	return (
		<FlexBox width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<Element {...carbonProps} />
			<Element showDetails={false} {...carbonProps} />
			<Element amount={"2"} {...carbonProps} />
			<Element amount={"2"} showDetails={false} {...carbonProps} />
		</FlexBox>
	);
};

export const DefaultView = () => {
	return (
		<FlexBox width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<Element
				name={carbonProps.name}
				imageUri={carbonProps.imageUri}
				abbrev={carbonProps.abbrev}
				group={carbonProps.group}
				rarity={carbonProps.rarity}
				units={carbonProps.units}
			/>
		</FlexBox>
	);
};

export const CondensedView = () => {
	return (
		<FlexBox width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<Element
				showDetails={false}
				name={carbonProps.name}
				imageUri={carbonProps.imageUri}
				abbrev={carbonProps.abbrev}
				group={carbonProps.group}
				rarity={carbonProps.rarity}
				units={carbonProps.units}
			/>
		</FlexBox>
	);
};

export const DefaultViewWithAmount = () => {
	return (
		<FlexBox width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<Element
				amount={"2"}
				name={carbonProps.name}
				imageUri={carbonProps.imageUri}
				abbrev={carbonProps.abbrev}
				group={carbonProps.group}
				rarity={carbonProps.rarity}
				units={carbonProps.units}
			/>
		</FlexBox>
	);
};

export const CondensedViewWithAmount = () => {
	return (
		<FlexBox width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<Element
				amount={"2"}
				showDetails={false}
				name={carbonProps.name}
				imageUri={carbonProps.imageUri}
				abbrev={carbonProps.abbrev}
				group={carbonProps.group}
				rarity={carbonProps.rarity}
				units={carbonProps.units}
			/>
		</FlexBox>
	);
};