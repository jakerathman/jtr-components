import React from "react";
import ExpandCollapse from "../../components/common/ExpandCollapse";

export default {
	title: "Library/Common/Expand Collapse",
	component: ExpandCollapse,
	parameters: {
		componentSubtitle: "Interactive Documentation"
	}
};

export const Interactive = () => {
	return (
		<ExpandCollapse>
			<div style={{ margin: "16px" }}>{"This is the inner content wrapped in a div with 16 pixels of padding."}</div>
		</ExpandCollapse>
	);
};

export const NoChildProvided = () => {
	return <ExpandCollapse></ExpandCollapse>;
};

export const ReallyLongTitles = () => {
	return (
		<ExpandCollapse
			expandedText={
				"This is an example where you provide way too much text to the component and the button text will probably spread across two lines on a mobile device. -"
			}
			collapsedText={
				"This is an example where you provide way too much text to the component and the button text will probably spread across two lines on a mobile device. +"
			}
		></ExpandCollapse>
	);
};

export const ReallyShortTitles = () => {
	return <ExpandCollapse expandedText={"-"} collapsedText={"+"}></ExpandCollapse>;
};
