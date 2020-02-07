import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const ACTIONS = {
	SET_VALUE: "SET_VALUE"
};

const Store = createContext();
const Dispatch = createContext();

const applicationStoreReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_VALUE:
			return { ...state, [action.field]: action.value };
		default:
			return state;
	}
};


/**
 * 
 * Wrap your component in an `ApplicationContextProvider` to provide a shared store and dispatch object to its children.
 * 
 * To access the `store`, import `useContext` hook and pass `ApplicationContext.Store` as a parameter.
 * 
 * `import ApplicationContext.Store from "jtr-components/dist/common/ApplicationContext"`
 * `const store = useContext(ApplicationContext.Store);`
 * 
 * To access the `dispatch`, import `useContext` hook and pass `ApplicationContext.Dispatch` as a parameter.
 * 
 * `import ApplicationContext.Dispatch from "jtr-components/dist/common/ApplicationContext"`
 * `const dispatch = useContext(ApplicationContext.Dispatch)`
 * `dispatch({type: "SET_VALUE", field: "fieldKey", value: "updatedValue"})`
 * 
 */
export const ApplicationContextProvider = ({ children, initialState }) => {
	const [applicationStore, dispatch] = useReducer(applicationStoreReducer, initialState);

	return (
		<Store.Provider value={applicationStore}>
			<Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
		</Store.Provider>
	);
};

ApplicationContextProvider.defaultProps = {
	initialState: { default: "Add your own state object silly!" }
};

ApplicationContextProvider.propTypes = {
	children: PropTypes.element,
	initialState: PropTypes.object
};

const ApplicationContext = {
	Dispatch: Dispatch,
	Store: Store
};

export default ApplicationContext;
