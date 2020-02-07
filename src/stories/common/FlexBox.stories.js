import React from "react";
import FlexBox from "../../components/common/FlexBox";

export default {
	title: "Library/Common/Flex Box",
	component: FlexBox,
	parameters: {
		componentSubtitle: "Interactive Documentation"
	}
};

const style = {
	height: "50px",
	width: "100px",
	margin: "8px",
	padding: "8px",
	border: "2px black solid"
};

export const DefaultView = () => {

	return (
		<div>
			<FlexBox>
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

export const Column = () => {

	return (
		<div>
			<FlexBox flexDirection={"column"}>
				<div style={style}>First div here.</div>
				<div style={style}>Second div here.</div>
				<div style={style}>Third div here.</div>
			</FlexBox>
		</div>
	);
};