# MotorCortex-Banners

**Table of Contents**

- [MotorMortex-Banners](#motorcortex-banners)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [BannerA](#bannera)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-banners/demo/index.html)

# Intro / Features
If you are looking for a simple way to create a startling banner, MotorCortex-Banners is the right plugin for your clip.

This Plugin exposes one Incident:
- BannerA

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-banners
# OR
$ yarn add @donkeyclip/motorcortex-banners
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import BannersDefinition from "@donkeyclip/motorcortex-banners";
const Banner = loadPlugin(BannersDefinition);
```

# Creating Incidents

## BannerA

The only thing you have to do is to give values to the attributes you want to include in your clip.

```javascript
const BannerA = new Banner.BannerA(
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
| imgHeight    |  the original height of the img  |    num |
| txtGroup     |       the transparent text       | string |
| txtGroupSize | the size of the transparent text |    num |
| mainColor    |    the main color of the clip    |  color |
| centerText   |      the text with shadows       | string |
| overlayColor |      list of hex colors          | string |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes


# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
