import dynamic from "next/dynamic";
import Field from "./Field/Field";

const Map = dynamic(() => import("./Map/Map"), { ssr: false });
const DrawControls = dynamic(() => import("./DrawControls/DrawControls"));

export { Map, DrawControls, Field };
