import { useEffect, useState } from "react"
import { useContext } from "react";
import { MapContext } from "../utils/Map.provider";

export default function Hour() {
    const { state } = useContext(MapContext);
    const [ time, setTime ] = useState("");

    useEffect(() => {
        const interval = setInterval(() => { 
            const date = new Date();

            if(state.code && state.currentZone) {
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();

                setTime(date.toLocaleString(state.code.toLowerCase() + '-' + state.code.toUpperCase(), {
                    timeZone: state.currentZone,
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: state.format == "12"
                }) + ", " + day + "/" + month + "/" + year)
            } else {
                setTime(date.toLocaleString())
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [state])

    return <small className="text-gray-400">
        { time }
    </small>
}