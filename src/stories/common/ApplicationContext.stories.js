import React from "react";
import { ApplicationContextProvider } from "../../components/common/ApplicationContext";

export default {
	title: "Library/Common/Application Context",
	component: ApplicationContextProvider
};

export const Interactive = () => {

    const initialState = {
        init: true
    }

	return (
		<ApplicationContextProvider initialState={initialState}>
			<div style={{ margin: "16px" }}>{"Application here. Click show code!"}</div>
		</ApplicationContextProvider>
	);
};
