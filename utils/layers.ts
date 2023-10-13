const satelliteLayers = {
  // Google open layer to use without data and markers
  satellite: "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  // Ign's layer. Public government data
  topographic:
    "https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_topo@EPSG%3A3857@png/{z}/{x}/{-y}.png",
};

export default satelliteLayers;
