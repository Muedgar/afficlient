"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  left_profileurl: string;
  right_profileurl: string;
  fullname: string;
  address: string;
  paraOne: string;
  paraTwo: string;
  paraThree: string;
  paraFour: string;
  paraFive: string;
  date: string;
  affiCode: string;
  fromlanguage: string;
  tolanguage: string;
  feepaid: string;
  signature: string;
  qrCode: string;
  beforeMe: string;
};

type ActionType = {
  type: string;
  payload: string
};


const initialState: StateType = {
  left_profileurl: "",
  right_profileurl: "",
  fullname: "",
  address: "",
  paraOne: "",
  paraTwo: "",
  paraThree: "",
  paraFour: "",
  paraFive: "",
  date: "",
  affiCode: "",
  fromlanguage: "",
  tolanguage: "",
  feepaid: "",
  signature: "",
  qrCode: "",
  beforeMe: ""
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_LEFT_PROFILE":
      return { ...state, left_profileurl: action.payload };
    case "SET_RIGHT_PROFILE":
      return { ...state, right_profileurl: action.payload };
    case "SET_FULLNAME":
      return { ...state, fullname: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_PARAONE":
      return { ...state, paraOne: action.payload };
    case "SET_PARATWO":
      return { ...state, paraTwo: action.payload };
    case "SET_PARATHREE":
      return { ...state, paraThree: action.payload };
    case "SET_PARAFOUR":
      return { ...state, paraFour: action.payload };
    case "SET_PARAFIVE":
      return { ...state, paraFive: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_AFFI_CODE":
      return { ...state, affiCode: action.payload };
    case "SET_QR_CODE":
      return { ...state, qrCode: action.payload };
    case "SET_BEFORE_ME":
      return { ...state, beforeMe: action.payload };
    case "SET_FROMLANGUAGE":
      return { ...state, fromlanguage: action.payload };
    case "SET_TOLANGUAGE":
      return { ...state, tolanguage: action.payload };
    case "SET_FEEPAID":
      return { ...state, feepaid: action.payload };
    case "SET_SIGNATURE":
      return { ...state, signature: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
