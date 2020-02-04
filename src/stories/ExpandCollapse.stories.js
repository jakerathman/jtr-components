import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import ExpandCollapse from "../components/ExpandCollapse";

export default {
	title: "components/Expand Collapse",
	component: ExpandCollapse,
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: "Interactive Documentation"
	}
};

export const Interactive = () => {
	return (
		<ExpandCollapse showContentProp={boolean("Show Content", false)} expandedText={text("Expanded Text", "Collapse")} collapsedText={text("Collapsed Text", "Expand")}>
			<div style={{ margin: "16px" }}>{text("Content", "This is the inner content wrapped in a div with 16 pixels of padding.")}</div>
		</ExpandCollapse>
	);
};

export const NoChildProvided = () => {
	return (
		<ExpandCollapse>
		</ExpandCollapse>
	);
}

export const ReallyLongTitles = () => {
	return (
		<ExpandCollapse expandedText={"This is an example where you provide way too much text to the component and the button text will probably spread across two lines on a mobile device. -"} collapsedText={"This is an example where you provide way too much text to the component and the button text will probably spread across two lines on a mobile device. +"}>
		</ExpandCollapse>
	);
}

export const ReallyShortTitles = () => {
	return (
		<ExpandCollapse expandedText={"-"} collapsedText={"+"}>
		</ExpandCollapse>
	);
}