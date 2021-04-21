var APP_DATA = {
  "scenes": [
    {
      "id": "0-nejjarine-square",
      "name": "Nejjarine Square",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7281197751043447,
          "pitch": -0.13309257293033916,
          "rotation": 0,
          "target": "1-seffarine-square"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.18499552245421214,
          "pitch": -0.0213064074835021,
          "title": "Nejjarine Wood Museum",
          "text": "This has wood in it."
        }
      ]
    },
    {
      "id": "1-seffarine-square",
      "name": "Seffarine Square",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5227586566256015,
          "pitch": 0.03433985107150406,
          "rotation": 0,
          "target": "0-nejjarine-square"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ITM Fes Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
