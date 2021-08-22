require(["esri/Map", "esri/views/SceneView"], (Map, SceneView) => {
  const map = new Map({
    basemap: "oceans"
  });
  const view = new SceneView({
    container: "viewDiv", // Reference to the view div created in step 5
    map: map, // Reference to the map object created before the view
    zoom: 4, // Sets zoom level based on level of detail (LOD)
    center: [15, 65] // Sets center point of view using longitude,latitude
  });
});