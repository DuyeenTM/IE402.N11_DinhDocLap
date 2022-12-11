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

  const json_options = {
    query: {
      f: "json",
    },
    responseType: "json",
  };

  // request json

  // detail in front of the building
  esriRequest(
    "http://localhost:3000/api/v1/bodyComp/getAll",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest("http://localhost:3000/api/v1/curve/getAll", json_options).then(
    function (response) {
      var graphicsLayer = new GraphicsLayer();
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
      });
      map.add(graphicsLayer);
    }
  );
  // esriRequest("./Json/curve2.json", json_options).then(function (response) {
  //   var graphicsLayer = new GraphicsLayer();
  //   response.data.forEach(function (data) {
  //     graphicsLayer.add(createGraphic(data));
  //   });
  //   map.add(graphicsLayer);
  // });
  // esriRequest("./Json/curve3.json", json_options).then(function (response) {
  //   var graphicsLayer = new GraphicsLayer();
  //   response.data.forEach(function (data) {
  //     graphicsLayer.add(createGraphic(data));
  //   });
  //   map.add(graphicsLayer);
  // });
  // esriRequest("./Json/curve4.json", json_options).then(function (response) {
  //   var graphicsLayer = new GraphicsLayer();
  //   response.data.forEach(function (data) {
  //     graphicsLayer.add(createGraphic(data));
  //   });
  //   map.add(graphicsLayer);
  // });

  // point
  esriRequest("http://localhost:3000/api/v1/point/getAll", json_options).then(
    function (response) {
      var graphicsLayer = new GraphicsLayer();
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
      });
      map.add(graphicsLayer);
    }
  );

  // doors, windown, walls and floors
  esriRequest("http://localhost:3000/api/v1/polygon/getAll", json_options).then(
    function (response) {
      var graphicsLayer = new GraphicsLayer();
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
      });
      map.add(graphicsLayer);
    }
  );

  // // the polygon of the special detail in front
  // esriRequest("./Json/polygon2.json", json_options).then(function (response) {
  //   var graphicsLayer = new GraphicsLayer();
  //   response.data.forEach(function (data) {
  //     graphicsLayer.add(createGraphic(data));
  //   });
  //   map.add(graphicsLayer);
  // });

  // // the polygon of the special detail in behind
  // esriRequest("./Json/polygon3.json", json_options).then(function (response) {
  //   var graphicsLayer = new GraphicsLayer();
  //   response.data.forEach(function (data) {
  //     graphicsLayer.add(createGraphic(data));
  //   });
  //   map.add(graphicsLayer);
  // });

  // // the polygon of the special detail in left and right
  // esriRequest("./Json/polygon4.json", json_options).then(function (response) {
  //   var graphicsLayer = new GraphicsLayer();
  //   response.data.forEach(function (data) {
  //     graphicsLayer.add(createGraphic(data));
  //   });
  //   map.add(graphicsLayer);
  // });

  // the line around the windown
  esriRequest(
    "http://localhost:3000/api/v1/line/getPolyline",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  //geojson layer

  // flag

  async function fetchCylinder1(link) {
    const res = await fetch(link)
      .then((response) => response.json())
      .then((data) => data);
    console.log(res);
    return res;
  }
  const urlCylinder1 = fetchCylinder1(
    "http://localhost:3000/api/v1/cylinder/getByRAndHAndColor?r=0.13&h=7.63&color=rgb(204, 204, 204)"
  );
  const cylinder1 = new GeoJSONLayer({
    url: urlCylinder1,
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

  // // buttress
  // const cylinder2 = new GeoJSONLayer({
  //   url: "./Geojson/cylinder2.geojson",
  // });
  // cylinder2.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "point-3d",
  //     symbolLayers: [
  //       {
  //         type: "object",
  //         width: 0.5,
  //         height: 5,
  //         depth: 0.5,
  //         resource: { primitive: "cylinder" },
  //         material: { color: "rgb(59, 59, 59)" },
  //       },
  //     ],
  //   },
  // };
  // const cylinder3 = new GeoJSONLayer({
  //   url: "./Geojson/cylinder3.geojson",
  // });
  // cylinder3.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "point-3d",
  //     symbolLayers: [
  //       {
  //         type: "object",
  //         width: 0.1,
  //         height: 5,
  //         depth: 0.1,
  //         resource: { primitive: "cylinder" },
  //         material: { color: "rgb(112, 112, 112)" },
  //       },
  //     ],
  //   },
  // };

  // // gate
  // const cylinder4 = new GeoJSONLayer({
  //   url: "./Geojson/cylinder4.geojson",
  // });
  // cylinder4.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "point-3d",
  //     symbolLayers: [
  //       {
  //         type: "object",
  //         width: 0.02621809744,
  //         height: 3.97,
  //         depth: 0.02621809744,
  //         resource: { primitive: "cylinder" },
  //         material: { color: "rgb(204, 204, 204)" },
  //       },
  //     ],
  //   },
  // };

  // stairs in front
  async function fetchPrism1(link) {
    const res = await fetch(link)
      .then((response) => response.json())
      .then((data) => data);

    console.log(res);
    return res;
  }
  const urlPrism1 = fetchPrism1(
    "http://localhost:3000/api/v1/prism/getByColorAndH?color=rgb(204, 204, 204)&h=0.3"
  );
  const prism1 = new GeoJSONLayer({
    url: urlPrism1,
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

  // strairs in left and right
  // const prism2 = new GeoJSONLayer({
  //   url: "./GeoJson/prism2.geojson",
  // });
  // prism2.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.23,
  //         material: {
  //           color: "rgb(204, 204, 204)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the prism in the way
  // const prism3 = new GeoJSONLayer({
  //   url: "./Geojson/prism3.geojson",
  // });
  // prism3.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.1,
  //         material: {
  //           color: "rgb(255, 255, 255)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // window in front
  // const prism4 = new GeoJSONLayer({
  //   url: "./Geojson/prism4.geojson",
  // });
  // prism4.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.11,
  //         material: {
  //           color: "rgb(150, 148, 129)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism5 = new GeoJSONLayer({
  //   url: "./Geojson/prism5.geojson",
  // });
  // prism5.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 2.85,
  //         material: {
  //           color: "rgb(150, 148, 129)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // railing
  // const prism6 = new GeoJSONLayer({
  //   url: "./Geojson/prism6.geojson",
  // });
  // prism6.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.75,
  //         material: {
  //           color: "rgb(150, 148, 129)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // crossbar
  // const prism7 = new GeoJSONLayer({
  //   url: "./Geojson/prism7.geojson",
  // });
  // prism7.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.75,
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // pillar
  // const prism8 = new GeoJSONLayer({
  //   url: "./Geojson/prism8.geojson",
  // });
  // prism8.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 4.35,
  //         material: {
  //           color: "rgb(100, 100, 100)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // rafters
  // const prism9 = new GeoJSONLayer({
  //   url: "./Geojson/prism9.geojson",
  // });
  // prism9.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 1.33,
  //         material: {
  //           color: "rgb(154, 154, 148)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // Vertical column
  // const prism10 = new GeoJSONLayer({
  //   url: "./Geojson/prism10.geojson",
  // });
  // prism10.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 12.44,
  //         material: {
  //           color: "rgb(133, 132, 122)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism11 = new GeoJSONLayer({
  //   url: "./Geojson/prism11.geojson",
  // });
  // prism11.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 9.97,
  //         material: {
  //           color: "rgb(133, 132, 122)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // wall in the floor 2
  // const prism12 = new GeoJSONLayer({
  //   url: "./Geojson/prism12.geojson",
  // });
  // prism12.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 8.33,
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism13 = new GeoJSONLayer({
  //   url: "./Geojson/prism13.geojson",
  // });
  // prism13.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 1.04,
  //         material: {
  //           color: "rgb(168, 149, 101)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism14 = new GeoJSONLayer({
  //   url: "./Geojson/prism14.geojson",
  // });
  // prism14.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.95,
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // frame
  // const prism15 = new GeoJSONLayer({
  //   url: "./GeoJson/prism15.geojson",
  // });
  // prism15.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 4.17,
  //         material: {
  //           color: "rgb(166, 163, 149)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // edges of frame
  // const prism16 = new GeoJSONLayer({
  //   url: "./GeoJson/prism16.geojson",
  // });
  // prism16.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.25,
  //         material: {
  //           color: "rgb(255, 255, 255)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // inner wall
  // const prism17 = new GeoJSONLayer({
  //   url: "./GeoJson/prism17.geojson",
  // });
  // prism17.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 5.68,
  //         material: {
  //           color: "rgb(166, 163, 153)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the floor 2
  // const prism18 = new GeoJSONLayer({
  //   url: "./GeoJson/prism18.geojson",
  // });
  // prism18.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.6,
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the frame of special detail
  // const prism19 = new GeoJSONLayer({
  //   url: "./GeoJson/prism19.geojson",
  // });
  // prism19.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.1,
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // glass of windown
  // const prism20 = new GeoJSONLayer({
  //   url: "./GeoJson/prism20.geojson",
  // });
  // prism20.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 1.88,
  //         material: {
  //           color: "rgba(66, 65, 57, 0.8)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the wall
  // const prism21 = new GeoJSONLayer({
  //   url: "./Geojson/prism21.geojson",
  // });
  // prism21.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 5.1,
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // special detail
  // const prism22 = new GeoJSONLayer({
  //   url: "./Geojson/prism22.geojson",
  // });
  // prism22.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.89,
  //         material: {
  //           color: "rgb(159, 159, 147)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // glass of windown
  // const prism23 = new GeoJSONLayer({
  //   url: "./Geojson/prism23.geojson",
  // });
  // prism23.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 7.78,
  //         material: {
  //           color: "rgba(46, 45, 37, 0.7)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // column over stair
  // const prism24 = new GeoJSONLayer({
  //   url: "./Geojson/prism24.geojson",
  // });
  // prism24.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 4.71,
  //         material: {
  //           color: "rgb(196, 201, 207)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism25 = new GeoJSONLayer({
  //   url: "./Geojson/prism25.geojson",
  // });
  // prism25.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 3.14,
  //         material: {
  //           color: "rgb(196, 201, 207)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the yellow roof
  // const prism26 = new GeoJSONLayer({
  //   url: "./Geojson/prism26.geojson",
  // });
  // prism26.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.2,
  //         material: {
  //           color: "rgb(219, 184, 116)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the stairs in behind
  // const prism27 = new GeoJSONLayer({
  //   url: "./Geojson/prism27.geojson",
  // });
  // prism27.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.25,
  //         material: {
  //           color: "rgb(204, 204, 204)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // // the wall
  // const prism28 = new GeoJSONLayer({
  //   url: "./Geojson/prism28.geojson",
  // });
  // prism28.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 7,
  //         material: {
  //           color: "rgb(204, 204, 204)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism29 = new GeoJSONLayer({
  //   url: "./Geojson/prism29.geojson",
  // });
  // prism29.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.03,
  //         material: {
  //           color: "rgb(204, 204, 204)",
  //         },
  //       },
  //     ],
  //   },
  // };
  // const prism30 = new GeoJSONLayer({
  //   url: "./Geojson/prism30.geojson",
  // });
  // prism30.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "polygon-3d",
  //     symbolLayers: [
  //       {
  //         type: "extrude",
  //         size: 0.15,
  //         material: {
  //           color: "rgb(204, 204, 204)",
  //         },
  //       },
  //     ],
  //   },
  // };

  // the stairs in behind
  const line1 = new GeoJSONLayer({
    url: "http://localhost:3000/api/v1/line/getLineByWandHandColor?w=0.2&h=1&color=rgb(192, 187, 158)",
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

  // // the stairs in behind
  // const line2 = new GeoJSONLayer({
  //   url: "./Geojson/line2.geojson",
  // });
  // line2.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "line-3d",
  //     symbolLayers: [
  //       {
  //         type: "path",
  //         profile: "quad",
  //         material: {
  //           color: "rgb(255, 255, 255)",
  //         },
  //         width: 1.04,
  //         height: 0.6,
  //         anchor: "bottom",
  //         profileRotation: "heading",
  //       },
  //     ],
  //   },
  // };
  // const line3 = new GeoJSONLayer({
  //   url: "./Geojson/line3.geojson",
  // });
  // line3.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "line-3d",
  //     symbolLayers: [
  //       {
  //         type: "path",
  //         profile: "quad",
  //         material: {
  //           color: "rgb(186, 186, 180)",
  //         },
  //         width: 0.21,
  //         height: 0.75,
  //         anchor: "bottom",
  //         profileRotation: "heading",
  //       },
  //     ],
  //   },
  // };
  // const line4 = new GeoJSONLayer({
  //   url: "./Geojson/line4.geojson",
  // });
  // line4.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "line-3d",
  //     symbolLayers: [
  //       {
  //         type: "path",
  //         profile: "quad",
  //         material: {
  //           color: "rgb(255, 255, 255)",
  //         },
  //         width: 0.89,
  //         height: 0.63,
  //         anchor: "bottom",
  //         profileRotation: "heading",
  //       },
  //     ],
  //   },
  // };
  // const line5 = new GeoJSONLayer({
  //   url: "./Geojson/line5.geojson",
  // });
  // line5.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "line-3d",
  //     symbolLayers: [
  //       {
  //         type: "path",
  //         profile: "quad",
  //         material: {
  //           color: "rgb(192, 187, 158)",
  //         },
  //         width: 0.15,
  //         height: 2.91,
  //         anchor: "bottom",
  //         profileRotation: "heading",
  //       },
  //     ],
  //   },
  // };
  // const line6 = new GeoJSONLayer({
  //   url: "./Geojson/line6.geojson",
  // });
  // line6.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "line-3d",
  //     symbolLayers: [
  //       {
  //         type: "path",
  //         profile: "quad",
  //         material: {
  //           color: "rgb(192, 187, 158)",
  //         },
  //         width: 1.7,
  //         height: 0.15,
  //         anchor: "bottom",
  //         profileRotation: "heading",
  //       },
  //     ],
  //   },
  // };

  // //
  // const line7 = new GeoJSONLayer({
  //   url: "./Geojson/line7.geojson",
  // });
  // line7.renderer = {
  //   type: "simple",
  //   symbol: {
  //     type: "line-3d",
  //     symbolLayers: [
  //       {
  //         type: "path",
  //         profile: "quad",
  //         width: 0.05,
  //         height: 0.02,
  //         material: { color: "rgb(204, 204, 204)" },
  //         cap: "round",
  //         profileRotation: "all",
  //       },
  //     ],
  //   },
  // };
  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
    layers: [
      cylinder1,
      // cylinder2,
      // cylinder3,
      // cylinder4,
      // line1,
      // line2,
      // line3,
      // line4,
      // line5,
      // line6,
      // line7,
      // prism1,
      // prism2,
      // prism3,
      // prism4,
      // prism5,
      // prism6,
      // prism7,
      // prism8,
      // prism9,
      // prism10,
      // prism11,
      // prism12,
      // prism13,
      // prism14,
      // prism15,
      // prism16,
      // prism17,
      // prism18,
      // prism19,
      // prism20,
      // prism21,
      // prism22,
      // prism23,
      // prism24,
      // prism25,
      // prism26,
      // prism27,
      // prism28,
      // prism29,
      // prism30,
    ], //end layers
  });
  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [106.69565140222676, 10.778448137494399, 105],
      heading: 910,
      tilt: 60,
    },
  });

  view.popup.defaultPopupTemplateEnabled = true;
});
