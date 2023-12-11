import { useContext } from "react"; 
import { MapContext } from "../utils/Map.provider";
import Hour from "./Hour";
import Clock from "./Clock";

export default function Sidebar() {
    const { state, dispatch } = useContext(MapContext);    

    return <aside className="h-screen w-[300px] bg-slate-900 text-white flex flex-col gap-3">
        <section className="flex items-center px-5 my-5 gap-5">
            <span className="text-2xl">
                🌎
            </span>

            <div className="flex flex-col gap-1">
                <h2 className="flex items-center gap-3 text-xl">

                    Timezone
                </h2>

                <Hour />
            </div>
        </section>

        <section className="relative h-[250px]">
            <Clock />
        </section>

        <section className="flex flex-col flex-1 gap-5">
            <div className="w-full flex flex-col gap-2 px-5">
                <small>Selected country</small>
                <input type="text" disabled className="px-5 cursor-not-allowed py-2 rounded bg-slate-800" placeholder="Select one..." value={ state.country } />
            </div>

            <div className="w-full flex flex-col gap-2 px-5">
                <small>Country code</small>
                <input type="text" disabled className="px-5 cursor-not-allowed py-2 rounded bg-slate-800" placeholder="Select one..." value={ state.code } />
            </div>

            <div className="w-full flex flex-col gap-2 px-5">
                <small>Select timezone</small>

                <select value={ state.currentZone } onChange={(e) => dispatch({
                    type: "SET_TIMEZONE", 
                    payload: e.target.value
                })}  className="px-5 py-2.5 rounded bg-slate-800">
                    <option value=""></option>

                    {
                        state.timezones && state.timezones.map((timezone, index) => {
                            return <option key={ index } value={ timezone }>
                                { timezone }
                            </option>
                        })
                    }
                </select>
            </div>

            <div className="w-full flex flex-col gap-2 px-5">
                <small>Format</small>

                <select value={ state.format } onChange={(e) => dispatch({
                    type: "SET_FORMAT", 
                    payload: e.target.value
                })} className="px-5 py-2.5 rounded bg-slate-800">
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
            </div>
        </section>

        <section className="px-5 py-3 mb-3">
            Xavier Morell
        </section>
    </aside>
}