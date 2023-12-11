import { createContext } from "react";

export const defaultContext = {
    country: null, 
    code: null,
    format: 12, 
    timezones: [], 
    currentZone: null
}; 

export const MapContext = createContext(defaultContext);