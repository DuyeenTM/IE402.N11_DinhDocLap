require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
  "esri/symbols/WebStyleSymbol",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) {
  var createGraphic = function (data) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
    });
  };

  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
  });

  const json_options = {
    query: {
      f: "json",
    },
    responseType: "json",
    timeout: 12000000,
  };

  //geojson layer
  const cylinder1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder1",
  });
  cylinder1.renderer = {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width: 0.13,
          height: 7.63,
          depth: 0.13,
          resource: { primitive: "cylinder" },
          material: { color: "rgb(204, 204, 204)" },
        },
      ],
    },
  };

  let cylinder2_Renderer = {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width: 0.5,
          height: 5,
          depth: 0.5,
          resource: { primitive: "cylinder" },
          material: { color: "rgb(59, 59, 59)" },
        },
      ],
    },
  };
  const cylinder2_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder2_1",
  });
  cylinder2_1.renderer = cylinder2_Renderer;
  const cylinder2_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder2_2",
  });
  cylinder2_2.renderer = cylinder2_Renderer;
  const cylinder2_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder2_3",
  });
  cylinder2_3.renderer = cylinder2_Renderer;
  const cylinder2_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder2_4",
  });
  cylinder2_4.renderer = cylinder2_Renderer;
  const cylinder2_5 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder2_5",
  });
  cylinder2_5.renderer = cylinder2_Renderer;
  const cylinder2_6 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder2_6",
  });
  cylinder2_6.renderer = cylinder2_Renderer;

  let cylinder3_Renderer = {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width: 0.1,
          height: 5,
          depth: 0.1,
          resource: { primitive: "cylinder" },
          material: { color: "rgb(112, 112, 112)" },
        },
      ],
    },
  };
  const cylinder3_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_1",
  });
  cylinder3_1.renderer = cylinder3_Renderer;
  const cylinder3_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_2",
  });
  cylinder3_2.renderer = cylinder3_Renderer;
  const cylinder3_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_3",
  });
  cylinder3_3.renderer = cylinder3_Renderer;
  const cylinder3_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_4",
  });
  cylinder3_4.renderer = cylinder3_Renderer;
  const cylinder3_5 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_5",
  });
  cylinder3_5.renderer = cylinder3_Renderer;
  const cylinder3_6 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_6",
  });
  cylinder3_6.renderer = cylinder3_Renderer;
  const cylinder3_7 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_7",
  });
  cylinder3_7.renderer = cylinder3_Renderer;
  const cylinder3_8 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_8",
  });
  cylinder3_8.renderer = cylinder3_Renderer;
  const cylinder3_9 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_9",
  });
  cylinder3_9.renderer = cylinder3_Renderer;
  const cylinder3_10 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_10",
  });
  cylinder3_10.renderer = cylinder3_Renderer;
  const cylinder3_11 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_11",
  });
  cylinder3_11.renderer = cylinder3_Renderer;
  const cylinder3_12 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_12",
  });
  cylinder3_12.renderer = cylinder3_Renderer;
  const cylinder3_13 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_13",
  });
  cylinder3_13.renderer = cylinder3_Renderer;
  const cylinder3_14 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_14",
  });
  cylinder3_14.renderer = cylinder3_Renderer;
  const cylinder3_15 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_15",
  });
  cylinder3_15.renderer = cylinder3_Renderer;
  const cylinder3_16 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_16",
  });
  cylinder3_16.renderer = cylinder3_Renderer;
  const cylinder3_17 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_17",
  });
  cylinder3_17.renderer = cylinder3_Renderer;
  const cylinder3_18 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_18",
  });
  cylinder3_18.renderer = cylinder3_Renderer;
  const cylinder3_19 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_19",
  });
  cylinder3_19.renderer = cylinder3_Renderer;
  const cylinder3_20 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_20",
  });
  cylinder3_20.renderer = cylinder3_Renderer;
  const cylinder3_21 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_21",
  });
  cylinder3_21.renderer = cylinder3_Renderer;
  const cylinder3_22 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_22",
  });
  cylinder3_22.renderer = cylinder3_Renderer;
  const cylinder3_23 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_23",
  });
  cylinder3_23.renderer = cylinder3_Renderer;
  const cylinder3_24 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_24",
  });
  cylinder3_24.renderer = cylinder3_Renderer;
  const cylinder3_25 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_25",
  });
  cylinder3_25.renderer = cylinder3_Renderer;
  const cylinder3_26 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_26",
  });
  cylinder3_26.renderer = cylinder3_Renderer;
  const cylinder3_27 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_27",
  });
  cylinder3_27.renderer = cylinder3_Renderer;
  const cylinder3_28 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_28",
  });
  cylinder3_28.renderer = cylinder3_Renderer;
  const cylinder3_29 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_29",
  });
  cylinder3_29.renderer = cylinder3_Renderer;
  const cylinder3_30 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_30",
  });
  cylinder3_30.renderer = cylinder3_Renderer;
  const cylinder3_31 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_31",
  });
  cylinder3_31.renderer = cylinder3_Renderer;
  const cylinder3_32 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_32",
  });
  cylinder3_32.renderer = cylinder3_Renderer;
  const cylinder3_33 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_33",
  });
  cylinder3_33.renderer = cylinder3_Renderer;
  const cylinder3_34 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_34",
  });
  cylinder3_34.renderer = cylinder3_Renderer;
  const cylinder3_35 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_35",
  });
  cylinder3_35.renderer = cylinder3_Renderer;
  const cylinder3_36 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_36",
  });
  cylinder3_36.renderer = cylinder3_Renderer;
  const cylinder3_37 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_37",
  });
  cylinder3_37.renderer = cylinder3_Renderer;
  const cylinder3_38 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_38",
  });
  cylinder3_38.renderer = cylinder3_Renderer;
  const cylinder3_39 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_39",
  });
  cylinder3_39.renderer = cylinder3_Renderer;
  const cylinder3_40 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder3_40",
  });
  cylinder3_40.renderer = cylinder3_Renderer;

  let cylinder4_Renderer = {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width: 0.02621809744,
          height: 3.97,
          depth: 0.02621809744,
          resource: { primitive: "cylinder" },
          material: { color: "rgb(204, 204, 204)" },
        },
      ],
    },
  };
  const cylinder4_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder4_1",
  });
  cylinder4_1.renderer = cylinder4_Renderer;
  const cylinder4_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder4_2",
  });
  cylinder4_2.renderer = cylinder4_Renderer;
  const cylinder4_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder4_3",
  });
  cylinder4_3.renderer = cylinder4_Renderer;
  const cylinder4_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/cylinder/getByName?name=cylinder4_4",
  });
  cylinder4_4.renderer = cylinder4_Renderer;

  const line1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line1",
  });
  line1.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "rgb(192, 187, 158)",
          },
          width: 0.2,
          height: 1,
          anchor: "bottom",
          profileRotation: "heading",
        },
      ],
    },
  };
  const line2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line2",
  });
  line2.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "rgb(255, 255, 255)",
          },
          width: 1.04,
          height: 0.6,
          anchor: "bottom",
          profileRotation: "heading",
        },
      ],
    },
  };
  const line3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line3",
  });
  line3.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "rgb(186, 186, 180)",
          },
          width: 0.21,
          height: 0.75,
          anchor: "bottom",
          profileRotation: "heading",
        },
      ],
    },
  };
  const line4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line4",
  });
  line4.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "rgb(255, 255, 255)",
          },
          width: 0.89,
          height: 0.63,
          anchor: "bottom",
          profileRotation: "heading",
        },
      ],
    },
  };
  let line5_Renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "rgb(192, 187, 158)",
          },
          width: 0.15,
          height: 2.91,
          anchor: "bottom",
          profileRotation: "heading",
        },
      ],
    },
  };
  const line5_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line5_1",
  });
  line5_1.renderer = line5_Renderer;
  const line5_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line5_2",
  });
  line5_2.renderer = line5_Renderer;
  let line6_Renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "rgb(192, 187, 158)",
          },
          width: 1.7,
          height: 0.15,
          anchor: "bottom",
          profileRotation: "heading",
        },
      ],
    },
  };
  const line6_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line6_1",
  });
  line6_1.renderer = line6_Renderer;
  const line6_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line6_2",
  });
  line6_2.renderer = line6_Renderer;
  let line7_Renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          width: 0.05,
          height: 0.02,
          material: { color: "rgb(204, 204, 204)" },
          cap: "round",
          profileRotation: "all",
        },
      ],
    },
  };
  const line7_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line7_1",
  });
  line7_1.renderer = line7_Renderer;
  const line7_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line7_2",
  });
  line7_2.renderer = line7_Renderer;
  const line7_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line7_3",
  });
  line7_3.renderer = line7_Renderer;
  const line7_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line7_4",
  });
  line7_4.renderer = line7_Renderer;
  const line7_5 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getByName?name=line7_5",
  });
  line7_5.renderer = line7_Renderer;

  const prism1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism1",
  });
  prism1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.3,
          material: {
            color: "rgb(204, 204, 204)",
          },
        },
      ],
    },
  };
  const prism2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism2",
  });
  prism2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.23,
          material: {
            color: "rgb(204, 204, 204)",
          },
        },
      ],
    },
  };
  const prism3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism3",
  });
  prism3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.1,
          material: {
            color: "rgb(255, 255, 255)",
          },
        },
      ],
    },
  };
  let prism4_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.11,
          material: {
            color: "rgb(150, 148, 129)",
          },
        },
      ],
    },
  };
  const prism4_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism4_1",
  });
  prism4_1.renderer = prism4_Renderer;
  const prism4_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism4_2",
  });
  prism4_2.renderer = prism4_Renderer;
  let prism5_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.85,
          material: {
            color: "rgb(150, 148, 129)",
          },
        },
      ],
    },
  };
  const prism5_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism5_1",
  });
  prism5_1.renderer = prism5_Renderer;
  const prism5_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism5_2",
  });
  prism5_2.renderer = prism5_Renderer;
  const prism6 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism6",
  });
  prism6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.75,
          material: {
            color: "rgb(150, 148, 129)",
          },
        },
      ],
    },
  };
  const prism7 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism7",
  });
  prism7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.75,
          material: {
            color: "rgb(186, 186, 180)",
          },
        },
      ],
    },
  };
  let prism8_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.35,
          material: {
            color: "rgb(100, 100, 100)",
          },
        },
      ],
    },
  };
  const prism8_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism8_1",
  });
  prism8_1.renderer = prism8_Renderer;
  const prism8_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism8_2",
  });
  prism8_2.renderer = prism8_Renderer;

  let prism9_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.33,
          material: {
            color: "rgb(154, 154, 148)",
          },
        },
      ],
    },
  };
  const prism9_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism9_1",
  });
  prism9_1.renderer = prism9_Renderer;
  const prism9_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism9_2",
  });
  prism9_2.renderer = prism9_Renderer;
  const prism9_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism9_3",
  });
  prism9_3.renderer = prism9_Renderer;
  const prism9_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism9_4",
  });
  prism9_4.renderer = prism9_Renderer;
  let prism10_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 12.44,
          material: {
            color: "rgb(133, 132, 122)",
          },
        },
      ],
    },
  };
  const prism10_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism10_1",
  });
  prism10_1.renderer = prism10_Renderer;
  const prism10_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism10_2",
  });
  prism10_2.renderer = prism10_Renderer;
  const prism10_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism10_3",
  });
  prism10_3.renderer = prism10_Renderer;
  let prism11_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 9.97,
          material: {
            color: "rgb(133, 132, 122)",
          },
        },
      ],
    },
  };
  const prism11_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism11_1",
  });
  prism11_1.renderer = prism11_Renderer;
  const prism11_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism11_2",
  });
  prism11_2.renderer = prism11_Renderer;
  let prism12_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 8.33,
          material: {
            color: "rgb(186, 186, 180)",
          },
        },
      ],
    },
  };
  const prism12_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_1",
  });
  prism12_1.renderer = prism12_Renderer;
  const prism12_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_2",
  });
  prism12_2.renderer = prism12_Renderer;
  const prism12_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_3",
  });
  prism12_3.renderer = prism12_Renderer;
  const prism12_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_4",
  });
  prism12_4.renderer = prism12_Renderer;
  const prism12_5 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_5",
  });
  prism12_5.renderer = prism12_Renderer;
  const prism12_6 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_6",
  });
  prism12_6.renderer = prism12_Renderer;
  const prism12_7 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_7",
  });
  prism12_7.renderer = prism12_Renderer;
  const prism12_8 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism12_8",
  });
  prism12_8.renderer = prism12_Renderer;
  let prism13_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.04,
          material: {
            color: "rgb(168, 149, 101)",
          },
        },
      ],
    },
  };
  const prism13_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism13_1",
  });
  prism13_1.renderer = prism13_Renderer;
  const prism13_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism13_2",
  });
  prism13_2.renderer = prism13_Renderer;
  const prism13_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism13_3",
  });
  prism13_3.renderer = prism13_Renderer;
  const prism13_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism13_4",
  });
  prism13_4.renderer = prism13_Renderer;
  let prism14_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.95,
          material: {
            color: "rgb(186, 186, 180)",
          },
        },
      ],
    },
  };
  const prism14_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism14_1",
  });
  prism14_1.renderer = prism14_Renderer;
  const prism14_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism14_2",
  });
  prism14_2.renderer = prism14_Renderer;
  const prism15 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism15",
  });
  prism15.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.17,
          material: {
            color: "rgb(166, 163, 149)",
          },
        },
      ],
    },
  };
  const prism16 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism16",
  });
  prism16.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.25,
          material: {
            color: "rgb(255, 255, 255)",
          },
        },
      ],
    },
  };
  const prism17 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism17",
  });
  prism17.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 5.68,
          material: {
            color: "rgb(166, 163, 153)",
          },
        },
      ],
    },
  };
  let prism18_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "rgb(186, 186, 180)",
          },
        },
      ],
    },
  };
  const prism18_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism18_1",
  });
  prism18_1.renderer = prism18_Renderer;
  const prism18_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism18_2",
  });
  prism18_2.renderer = prism18_Renderer;
  const prism19 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism19",
  });
  prism19.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.1,
          material: {
            color: "rgb(186, 186, 180)",
          },
        },
      ],
    },
  };
  const prism20 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism20",
  });
  prism20.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.88,
          material: {
            color: "rgba(66, 65, 57, 0.8)",
          },
        },
      ],
    },
  };
  const prism21 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism21",
  });
  prism21.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 5.1,
          material: {
            color: "rgb(186, 186, 180)",
          },
        },
      ],
    },
  };
  let prism22_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.89,
          material: {
            color: "rgb(159, 159, 147)",
          },
        },
      ],
    },
  };
  const prism22_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_1",
  });
  prism22_1.renderer = prism22_Renderer;
  const prism22_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_2",
  });
  prism22_2.renderer = prism22_Renderer;
  const prism22_3 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_3",
  });
  prism22_3.renderer = prism22_Renderer;
  const prism22_4 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_4",
  });
  prism22_4.renderer = prism22_Renderer;
  const prism22_5 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_5",
  });
  prism22_5.renderer = prism22_Renderer;
  const prism22_6 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_6",
  });
  prism22_6.renderer = prism22_Renderer;
  const prism22_7 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_7",
  });
  prism22_7.renderer = prism22_Renderer;
  const prism22_8 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_8",
  });
  prism22_8.renderer = prism22_Renderer;
  const prism22_9 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_9",
  });
  prism22_9.renderer = prism22_Renderer;
  const prism22_10 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_10",
  });
  prism22_10.renderer = prism22_Renderer;
  const prism22_11 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_11",
  });
  prism22_11.renderer = prism22_Renderer;
  const prism22_12 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_12",
  });
  prism22_12.renderer = prism22_Renderer;
  const prism22_13 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_13",
  });
  prism22_13.renderer = prism22_Renderer;
  const prism22_14 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_14",
  });
  prism22_14.renderer = prism22_Renderer;
  const prism22_15 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_15",
  });
  prism22_15.renderer = prism22_Renderer;
  const prism22_16 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism22_16",
  });
  prism22_16.renderer = prism22_Renderer;
  const prism23 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism23",
  });
  prism23.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 7.78,
          material: {
            color: "rgba(46, 45, 37, 0.7)",
          },
        },
      ],
    },
  };
  const prism24 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism24",
  });
  prism24.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.71,
          material: {
            color: "rgb(196, 201, 207)",
          },
        },
      ],
    },
  };
  const prism25 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism25",
  });
  prism25.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.14,
          material: {
            color: "rgb(196, 201, 207)",
          },
        },
      ],
    },
  };
  const prism26 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism26",
  });
  prism26.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.2,
          material: {
            color: "rgb(219, 184, 116)",
          },
        },
      ],
    },
  };
  let prism27_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.25,
          material: {
            color: "rgb(204, 204, 204)",
          },
        },
      ],
    },
  };
  const prism27_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism27_1",
  });
  prism27_1.renderer = prism27_Renderer;
  const prism27_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism27_2",
  });
  prism27_2.renderer = prism27_Renderer;
  let prism28_Renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 7,
          material: {
            color: "rgb(204, 204, 204)",
          },
        },
      ],
    },
  };
  const prism28_1 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism28_1",
  });
  prism28_1.renderer = prism28_Renderer;
  const prism28_2 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism28_2",
  });
  prism28_2.renderer = prism28_Renderer;
  const prism29 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism29",
  });
  prism29.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.03,
          material: {
            color: "rgb(204, 204, 204)",
          },
        },
      ],
    },
  };
  const prism30 = new GeoJSONLayer({
    url: "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/prism/getByName?name=prism30",
  });
  prism30.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.15,
          material: {
            color: "rgb(204, 204, 204)",
          },
        },
      ],
    },
  };
  // request json

  const add1 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/bodyComp/getByName?name=body_comp1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });

      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/curve/getByName?name=curve1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 105000);
  };
  add1();

  const add1a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/curve/getByName?name=curve2",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/curve/getByName?name=curve3",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 110000);
  };
  add1a();

  const add2 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/curve/getByName?name=curve4",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });

      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/point/getAll",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 115000);
  };
  add2();

  const add2a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon1_1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon1_2",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 120000);
  };
  add2a();

  const add3 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon1_3",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon1_4",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 125000);
  };
  add3();

  const add3a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon1_5",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 130000);
  };
  add3a();
  //
  const add4 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_2",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_3",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 275000);
  };
  add4();

  const add4a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_4",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_5",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 280000);
  };
  add4a();

  const add5 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_6",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_7",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 205000);
  };
  add5();

  const add5a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_8",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_9",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 210000);
  };
  add5a();

  const add6 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_10",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_11",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 215000);
  };
  add6();

  const add6a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_12",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_13",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 220000);
  };
  add6a();

  const add7 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_14",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_15",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 225000);
  };
  add7();

  const add8 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_16",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_17",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 230000);
  };
  add8();

  const add9 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_18",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_19",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 235000);
  };
  add9();

  const add9a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_20",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_21",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 240000);
  };
  add9a();

  const add10 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_22",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_23",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 245000);
  };
  add10();

  const add10a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_24",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_25",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 250000);
  };
  add10a();

  const add11 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_26",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_27",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 255000);
  };
  add11();

  const add11a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_28",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_29",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 260000);
  };
  add11a();

  const add12 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_30",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_31",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 265000);
  };
  add12();

  const add12a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_32",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon2_33",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 270000);
  };
  add12a();

  const add13 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_2",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 420000);
  };
  add13();

  const add13a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_3",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_4",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 425000);
  };
  add13a();

  const add14 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_5",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_6",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 285000);
  };
  add14();

  const add14a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_7",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_8",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 290000);
  };
  add14a();

  const add15 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_9",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_10",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 295000);
  };
  add15();

  const add15a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_11",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_12",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 300000);
  };
  add15a();

  const add16 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_13",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_14",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 305000);
  };
  add16();

  const add16a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_15",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_16",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 310000);
  };
  add16a();

  const add17 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_17",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_18",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 315000);
  };
  add17();

  const add17a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_19",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_20",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 320000);
  };
  add17a();

  const add18 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_21",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_22",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 325000);
  };
  add18();

  const add18a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_23",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon3_24",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 330000);
  };
  add18a();

  const add19 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_2",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 335000);
  };
  add19();

  const add19a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_3",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_4",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 340000);
  };
  add19a();

  const add20 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_5",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_6",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 345000);
  };
  add20();

  const add20a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_7",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_8",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 350000);
  };
  add20a();

  const add21 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_9",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_10",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 355000);
  };
  add21();

  const add21a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_11",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_12",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 360000);
  };
  add21a();

  const add22 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_13",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_14",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 365000);
  };
  add22();

  const add22a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_15",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_16",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 370000);
  };
  add22a();

  const add23 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_17",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_18",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 375000);
  };
  add23();

  const add23a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_19",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_20",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 380000);
  };
  add23a();

  const add24 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_21",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_22",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 385000);
  };
  add24();

  const add24a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_23",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_24",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 390000);
  };
  add24a();

  const add25 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_25",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_26",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 395000);
  };
  add25();

  const add25a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_27",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_28",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 400000);
  };
  add25a();

  const add26 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/polygon/getByName?name=polygon4_29",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 405000);
  };
  add26();

  const add27 = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getPolylineByName?name=polyline1_1",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getPolylineByName?name=polyline1_2",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 410000);
  };
  add27();

  const add27a = () => {
    setTimeout(async () => {
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getPolylineByName?name=polyline1_3",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
      esriRequest(
        "https://ie-402-dinh-doc-954kxw01e-duyeentm.vercel.app/api/v1/line/getPolylineByName?name=polyline1_4",
        json_options
      ).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }, 415000);
  };
  add27a();

  // request geojson
  const addJeojson1 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder1);
      await map.layers.add(cylinder2_1);
      await map.layers.add(cylinder2_2);
      await map.layers.add(cylinder2_3);
    }, 0);
  };
  addJeojson1();

  const addJeojson2 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder2_4);
      await map.layers.add(cylinder2_5);
      await map.layers.add(cylinder2_6);
      await map.layers.add(cylinder4_1);
    }, 5000);
  };
  addJeojson2();

  const addJeojson3 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder4_2);
      await map.layers.add(cylinder4_3);
      await map.layers.add(cylinder4_4);
      await map.layers.add(cylinder3_1);
    }, 10000);
  };
  addJeojson3();

  const addJeojson4 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_2);
      await map.layers.add(cylinder3_3);
      await map.layers.add(cylinder3_4);
      await map.layers.add(cylinder3_5);
    }, 15000);
  };
  addJeojson4();

  const addJeojson5 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_6);
      await map.layers.add(cylinder3_7);
      await map.layers.add(cylinder3_8);
      await map.layers.add(cylinder3_9);
    }, 20000);
  };
  addJeojson5();

  const addJeojson6 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_10);
      await map.layers.add(cylinder3_11);
      await map.layers.add(cylinder3_12);
      await map.layers.add(cylinder3_13);
    }, 25000);
  };
  addJeojson6();

  const addJeojson7 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_14);
      await map.layers.add(cylinder3_15);
      await map.layers.add(cylinder3_16);
      await map.layers.add(cylinder3_17);
    }, 30000);
  };
  addJeojson7();

  const addJeojson8 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_18);
      await map.layers.add(cylinder3_19);
      await map.layers.add(cylinder3_20);
      await map.layers.add(cylinder3_21);
    }, 35000);
  };
  addJeojson8();

  const addJeojson9 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_22);
      await map.layers.add(cylinder3_23);
      await map.layers.add(cylinder3_24);
      await map.layers.add(cylinder3_25);
    }, 40000);
  };
  addJeojson9();

  const addJeojson10 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_26);
      await map.layers.add(cylinder3_27);
      await map.layers.add(cylinder3_28);
      await map.layers.add(cylinder3_29);
    }, 45000);
  };
  addJeojson10();

  const addJeojson11 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_30);
      await map.layers.add(cylinder3_31);
      await map.layers.add(cylinder3_32);
      await map.layers.add(cylinder3_33);
    }, 50000);
  };
  addJeojson11();

  const addJeojson12 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_34);
      await map.layers.add(cylinder3_35);
      await map.layers.add(cylinder3_36);
      await map.layers.add(cylinder3_37);
    }, 55000);
  };
  addJeojson12();

  const addJeojson13 = () => {
    setTimeout(async () => {
      await map.layers.add(cylinder3_38);
      await map.layers.add(cylinder3_39);
      await map.layers.add(cylinder3_40);
      await map.layers.add(line1);
    }, 60000);
  };
  addJeojson13();

  const addJeojson14 = () => {
    setTimeout(async () => {
      await map.layers.add(line2);
      await map.layers.add(line3);
      await map.layers.add(line4);
      await map.layers.add(line5_1);
    }, 65000);
  };
  addJeojson14();

  const addJeojson15 = () => {
    setTimeout(async () => {
      await map.layers.add(line5_2);
      await map.layers.add(line6_1);
      await map.layers.add(line6_2);
      await map.layers.add(line7_1);
    }, 70000);
  };
  addJeojson15();

  const addJeojson16 = () => {
    setTimeout(async () => {
      await map.layers.add(line7_2);
      await map.layers.add(line7_3);
      await map.layers.add(line7_4);
      await map.layers.add(line7_5);
    }, 75000);
  };
  addJeojson16();

  const addJeojson17 = () => {
    setTimeout(async () => {
      await map.layers.add(prism1);
      await map.layers.add(prism2);
      await map.layers.add(prism3);
      await map.layers.add(prism4_1);
    }, 80000);
  };
  addJeojson17();

  const addJeojson18 = () => {
    setTimeout(async () => {
      await map.layers.add(prism4_2);
      await map.layers.add(prism5_1);
      await map.layers.add(prism5_2);
      await map.layers.add(prism6);
    }, 85000);
  };
  addJeojson18();

  const addJeojson19 = () => {
    setTimeout(async () => {
      await map.layers.add(prism7);
      await map.layers.add(prism8_1);
      await map.layers.add(prism8_2);
      await map.layers.add(prism9_1);
    }, 90000);
  };
  addJeojson19();

  const addJeojson20 = () => {
    setTimeout(async () => {
      await map.layers.add(prism9_2);
      await map.layers.add(prism9_3);
      await map.layers.add(prism9_4);
      await map.layers.add(prism10_1);
    }, 95000);
  };
  addJeojson20();

  const addJeojson21 = () => {
    setTimeout(async () => {
      await map.layers.add(prism10_2);
      await map.layers.add(prism10_3);
      await map.layers.add(prism11_1);
      await map.layers.add(prism11_2);
    }, 100000);
  };
  addJeojson21();
  //
  const addGeojson22 = () => {
    setTimeout(async () => {
      await map.layers.add(prism12_1);
      await map.layers.add(prism12_2);
      await map.layers.add(prism12_3);
      await map.layers.add(prism12_4);
    }, 135000);
  };
  addGeojson22();

  const addGeojson23 = () => {
    setTimeout(async () => {
      await map.layers.add(prism12_5);
      await map.layers.add(prism12_6);
      await map.layers.add(prism12_7);
      await map.layers.add(prism12_8);
    }, 141000);
  };
  addGeojson23();

  const addGeojson24 = () => {
    setTimeout(async () => {
      await map.layers.add(prism13_1);
      await map.layers.add(prism13_2);
      await map.layers.add(prism13_3);
      await map.layers.add(prism13_4);
    }, 147000);
  };
  addGeojson24();

  const addGeojson25 = () => {
    setTimeout(async () => {
      await map.layers.add(prism14_1);
      await map.layers.add(prism14_2);
      await map.layers.add(prism15);
      await map.layers.add(prism16);
    }, 153000);
  };
  addGeojson25();

  const addGeojson26 = () => {
    setTimeout(async () => {
      await map.layers.add(prism17);
      await map.layers.add(prism18_1);
      await map.layers.add(prism18_2);
      await map.layers.add(prism19);
    }, 159000);
  };
  addGeojson26();

  const addGeojson27 = () => {
    setTimeout(async () => {
      await map.layers.add(prism20);
      await map.layers.add(prism21);
      await map.layers.add(prism23);
      await map.layers.add(prism24);
    }, 165000);
  };
  addGeojson27();

  const addGeojson28 = () => {
    setTimeout(async () => {
      await map.layers.add(prism25);
      await map.layers.add(prism26);
      await map.layers.add(prism27_1);
      await map.layers.add(prism27_2);
    }, 171000);
  };
  addGeojson28();

  const addGeojson29 = () => {
    setTimeout(async () => {
      await map.layers.add(prism28_1);
      await map.layers.add(prism28_2);
      await map.layers.add(prism29);
      await map.layers.add(prism30);
    }, 176000);
  };
  addGeojson29();

  const addGeojson30 = () => {
    setTimeout(async () => {
      await map.layers.add(prism22_1);
      await map.layers.add(prism22_2);
      await map.layers.add(prism22_3);
      await map.layers.add(prism22_4);
    }, 182000);
  };
  addGeojson30();

  const addGeojson31 = () => {
    setTimeout(async () => {
      await map.layers.add(prism22_5);
      await map.layers.add(prism22_6);
      await map.layers.add(prism22_7);
      await map.layers.add(prism22_8);
    }, 188000);
  };
  addGeojson31();

  const addGeojson32 = () => {
    setTimeout(async () => {
      await map.layers.add(prism22_9);
      await map.layers.add(prism22_10);
      await map.layers.add(prism22_11);
      await map.layers.add(prism22_12);
    }, 194000);
  };
  addGeojson32();

  const addGeojson33 = () => {
    setTimeout(async () => {
      await map.layers.add(prism22_13);
      await map.layers.add(prism22_14);
      await map.layers.add(prism22_15);
      await map.layers.add(prism22_16);
    }, 200000);
  };
  addGeojson33();
  async function viewMap() {
    const view = await new SceneView({
      container: "viewDiv",
      map: map,
      camera: {
        position: [106.69565140222676, 10.778448137494399, 105],
        heading: 910,
        tilt: 60,
      },
    });
    view.popup.defaultPopupTemplateEnabled = true;
  }
  viewMap();
});
