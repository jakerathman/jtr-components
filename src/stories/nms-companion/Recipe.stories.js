import React from "react";
import Recipe from "../../components/nms-companion/Recipe";
import Element from "../../components/nms-companion/Element";
import FlexBox from "../../components/common/FlexBox";

export default {
	title: "Library/NMS Companion/Recipe",
	component: Recipe
};

export const Summary = () => {

    const carbonProps = {
        name: "Carbon",
        imageUri: "https://gamepedia.cursecdn.com/nomanssky_gamepedia/5/5b/SUBSTANCE.FUEL.1.png",
        abbrev: "C",
        group: "Organic",
        rarity: "Common",
        units: 12
    };

	const inputs = [
		<Element
			amount={"2"}
			showDetails={false}
			name={carbonProps.name}
			imageUri={carbonProps.imageUri}
			abbrev={carbonProps.abbrev}
			group={carbonProps.group}
			rarity={carbonProps.rarity}
			units={carbonProps.units}
		/>,
		<Element
			amount={"2"}
			showDetails={false}
			name={carbonProps.name}
			imageUri={carbonProps.imageUri}
			abbrev={carbonProps.abbrev}
			group={carbonProps.group}
			rarity={carbonProps.rarity}
			units={carbonProps.units}
		/>,
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
	];

	const output = (
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
	);

	return (
		<FlexBox container width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<Recipe inputElements={inputs} outputElements={output} />
		</FlexBox>
	);
};
