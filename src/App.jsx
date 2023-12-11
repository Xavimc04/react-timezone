import GlobalMap from "./components/Map";
import Sidebar from "./components/Sidebar";
import { MapContext, defaultContext } from "./utils/Map.provider";
import Reducer from "./utils/Reducer";
import { useReducer } from "react";

export default function App() { 
    const [ state, dispatch ] = useReducer(Reducer, defaultContext);

    return (
        <main className="flex h-screen">
            <MapContext.Provider value={{
                state, 
                dispatch
            }}>
                <Sidebar />

                <section className="flex-1 flex items-center justify-center">
                    <GlobalMap />
                </section>
            </MapContext.Provider>
        </main>
    )
}