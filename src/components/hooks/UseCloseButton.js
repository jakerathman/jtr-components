import React from "react";

const useCloseButton = component => {
	return (
		<div style={{ position: "relative", width: "fit-content" }}>
			<div
				style={{
					position: "absolute",
					top: "0",
					right: "0",
					border: "2px solid black",
					borderRadius: "50%",
					height: "16px",
					width: "16px",
					padding: "2px",
					background: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					textAlign: "center",
					fontWeight: "600",
					cursor: "pointer"
				}}
			>
				x
			</div>
			<div style={{ paddingTop: "10px", paddingRight: "10px" }}>{component}</div>
		</div>
	);
};

export default useCloseButton;
