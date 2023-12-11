import WorldMap from "react-svg-worldmap";
import { useCallback } from "react";
import { useContext } from "react";
import { MapContext } from "../utils/Map.provider";

import { getCountry } from "countries-and-timezones";

export default function GlobalMap() {
    const { dispatch } = useContext(MapContext);

    const clickAction = useCallback(({ 
        countryName, 
        countryCode
    }) => {
        dispatch({
            type: "SET_COUNTRY",
            payload: {
                country: countryName, 
                code: countryCode,
                timezones: getCountry(countryCode).timezones
            }
        });
    }, []);

    return <WorldMap 
        size="xxl"
        data={[]}
        onClickFunction={ clickAction }
    />
}