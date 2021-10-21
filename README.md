# motorcortex-banners

## Demo

[Check it out here](https://kissmybutton.github.io/motorcortex-banners/demo/index.html)

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-banners
# OR
$ yarn add @kissmybutton/motorcortex-banners
```

## Loading

```javascript
const MotorCortex = require("@kissmybutton/motorcortex");
const BannersDefinition = require("@kissmybutton/motorcortex-banners");
const Plugin = MotorCortex.loadPlugin(BannersDefinition);
```

# Create incident

## BannerA

```javascript
const BannerA = new Plugin.BannerA(
  {
    width: 400,
    height: 700,
    bgUrl: "./bg2.jpg",
    overlayColor,
    imgWidth: 1002,
    imgHeight: 1280,
    txtGroup: "MOTORCORTEX",
    txtGroupSize: 40,
    strokeText: "WE WIN THE GAME IN THE CSS",
    mainColor: "#ffff00",
    centerText: "Yeyey",
  },
  {
    selector: ".container1",
  }
);
```

### BannerA Attrs

| Name         |               Are                | Values |
| ------------ | :------------------------------: | -----: |
| width        |        width of incident         |    num |
| height       |        height of incident        |    num |
| bgUrl        |       url of the bg image        | string |
| imgWidth     |  the original widht of the img   |    num |
| imgHeight    |  the original heigth of the img  |    num |
| txtGroup     |       the transparent text       | string |
| txtGroupSize | the size of the transparent text |    num |
| mainColor    |    the main color of the clip    |  color |
| centerText   |      the text with shadows       | string |
