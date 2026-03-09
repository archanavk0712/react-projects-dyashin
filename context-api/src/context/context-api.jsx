import { createContext } from "react";

const context=createContext();
const Provider=context.Provider;
const Consumer=context.Consumer;

export {Provider, Consumer};