import React from "react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import FlexBox from "../components/FlexBox";

export default {
	title: "components/Flex Box",
	component: FlexBox,
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: "Interactive Documentation"
	}
};

export const Interactive = () => {
	const properties = {
		flexDirection: select("Flex Direction", { Row: "row", Column: "column", "Row Reverse": "row-reverse", "Column Reverse": "column-reverse" }, "row"),
		flexWrap: select("Flex Wrap", { "No Wrap": "nowrap", Wrap: "wrap", "Wrap Reverse": "wrap-reverse" }, "wrap"),
		height: select("Height", { "Fit Content": "fit-content", "500 px": "500px", "100%": "100%" }, "fit-content"),
		width: select("Width", { "Fit Content": "fit-content", "500 px": "500px", "100%": "100%" }, "fit-content"),
		justifyContent: select(
			"Justify Content",
			{
				Center: "center",
				Start: "start",
				End: "end",
				"Flex Start": "flex-start",
				"Flex End": "flex-end",
				Left: "left",
				Right: "right",
				Normal: "normal",
				"Space Between": "space-between",
				"Space Around": "space-around",
				"Space Evenly": "space-evenly",
				Stretch: "stretch",
				"Safe Center": "safe center",
				"Unsafe Center": "unsafe center"
			},
			"normal"
		),
		alignItems: select(
			"Align Items",
			{
				Normal: "normal",
				Stretch: "stretch",
				Center: "center",
				Start: "start",
				End: "end",
				"Flex Start": "flex-start",
				"Flex End": "flex-end",
				Baseline: "baseline",
				"First Baseline": "first baseline",
				"Lase Baseline": "last baseline",
				"Safe Center": "safe center",
				"Unsafe Center": "unsafe center"
			},
			"normal"
		),
		style: select("Style", { "No Background": { background: "none" }, "Grey Background": { background: "grey" } }, { background: "none" })
	};

	const style = {
		height: "50px",
		width: "100px",
		margin: "8px",
		padding: "8px",
		border: "2px black solid"
	};

	return (
		<div>
			<FlexBox {...properties}>
				<div style={style}>First div here.</div>
				<div style={style}>Second div here.</div>
				<div style={style}>Third div here.</div>
				<div style={style}>Fourth div here.</div>
				<div style={style}>Fifth div here.</div>
				<div style={style}>Sixth div here.</div>
				<div style={style}>Seventh div here.</div>
				<div style={style}>Eighth div here.</div>
				<div style={style}>Ninth div here.</div>
				<div style={style}>Tenth div here.</div>
				<div style={style}>Eleventh div here.</div>
				<div style={style}>Twelvth div here.</div>
			</FlexBox>
		</div>
	);
};
