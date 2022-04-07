import { HTMLClip, CSSEffect, Group } from '@donkeyclip/motorcortex';

class BannerA extends HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;

    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }

    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }

    return fontsize;
  }

  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    var _this = this;

    const textlist = (() => {
      const list = [];
      const n = Math.floor(this.attrs.height / (this.attrs.width * 0.2));
      this.n = n;

      for (let i = 0; i < n; i++) {
        list.push("<div class=\"txt-group txt-".concat(i, "\">").concat(this.attrs.txtGroup, "</div>"));
      }

      return list.join("");
    })();

    const strokeTextList = this.attrs.strokeText.split(" ");
    this.strokeTextLength = strokeTextList.length;

    const textlistStroke = function (className) {
      let style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      const list = [];

      for (let i = 0; i < strokeTextList.length; i++) {
        list.push("\n          <div style=\"".concat(style === true ? "top:".concat(_this.attrs.height / strokeTextList.length * i, "px;") : " ", "\" class=\"").concat(className).concat(i, "\">").concat(strokeTextList[i], "</div>"));
      }

      return list.join("");
    };

    return "\n    <div class=\"wrapper\">\n      <div class=\"left-image-wrapper\">\n        <div class=\"left-image\"> </div>\n      </div>\n\n      <div class=\"right-image-wrapper\">\n        <div class=\"right-image\"> </div>\n      </div>\n\n      <div  class=\"bg\"></div>\n      <div class=\"bg2\">\n        <div class=\"knockout\">\n          ".concat(textlist, "\n        </div>\n      </div>\n\n      <div class=\"lines-wrapper\">\n        <div class=\"lines lines-1\" style=\"\n          height:  ").concat(this.attrs.height * 0.1 * Math.random(), "px;\n          width: ").concat(this.attrs.width * 0.5 * Math.random().toFixed(2), "px;\n          top:").concat(this.attrs.height * Math.random().toFixed(2), "px;\n          \"></div>\n          \n        <div class=\"lines lines-2\" style=\"\n          height:").concat(this.attrs.height * 0.1 * Math.random(), "px;\n          width: ").concat(this.attrs.width * 0.5 * Math.random().toFixed(2), "px;\n          top:").concat(this.attrs.height * Math.random().toFixed(2), "px;\n        \"></div>\n        <div class=\"lines lines-3\" style=\"\n          height: ").concat(this.attrs.height * 0.1 * Math.random(), "px;\n          width: ").concat(this.attrs.width * 0.5 * Math.random().toFixed(2), "px;\n          top:").concat(this.attrs.height * Math.random().toFixed(2), "px;\n        \"></div>\n      </div>\n\n    \n\n      <div class=\"circles-wrapper\">\n        <div class=\"circle-1 circle\" ></div>\n        <div class=\"circle-2 circle \"></div>\n        <div class=\"circle-3 circle \"></div>\n      </div>\n      <div class=\"flex-center center-text-wrapper\" >\n        <div class=\"center-text\" data-text=\"Yeyey\">\n          ").concat(this.attrs.centerText, "\n        </div>\n        <div class=\"center-text-after\" data-text=\"Yeyey\">\n          ").concat(this.attrs.centerText, "\n        </div>\n        <div class=\"center-text-before\" data-text=\"Yeyey\">\n          ").concat(this.attrs.centerText, "\n        </div>\n        \n      </div>\n\n      <div  class=\"sliced-img-wrapper\">\n        <div class=\"sliced-img\"></div>\n      </div>\n      <div  style=\"opacity: 0;\"class=\"stroke-text-wrapper flex-center\">\n      \n        ").concat(textlistStroke("stroke-text-center txt-stroke-"), "\n        ").concat(textlistStroke("stroke-text-outline txt-stroke-outline-", true), "\n      </div>\n      <div class=\"doted\"></div>\n      <div class=\"doted-half\"></div>\n      <div class=\"rng-box\"></div>\n      <div class=\"yellow-underline\"></div>\n      <div class=\"yellow-transition\"> </div>\n      <div class=\"box\"> </div>\n      <div class=\"leftBlackBox\"></div>\n      <div class=\"rightBlackBox\"></div>\n\t  </div>\n    ");
  }

  get css() {
    const strokeTextList = this.attrs.strokeText.split(" ");
    return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n     \n      display:flex;\n      font-family: 'Poppins', sans-serif;\n    }\n    .box{\n      width: ").concat(this.attrs.width * 0.03, "px;\n      height: ").concat(this.attrs.height * 2.4, ";\n      background: ").concat(this.attrs.mainColor, ";\n      position:absolute;\n      left: ").concat(this.attrs.width / 2, "px;\n    }\n\n    .doted{\n      background-image: radial-gradient(").concat(this.attrs.mainColor, " 16%, #0000 20%);\n      background-position: 0 0;\n      background-size: 16px 14px;\n      height: ").concat(this.attrs.height / 4.5, "px;\n      width: ").concat(this.attrs.width / 2.7, "px;\n      position:absolute;\n      left: 7%;\n      top: 65%\n    }\n\n    .doted,.doted-half{\n      background-image: radial-gradient(").concat(this.attrs.mainColor, " 16%, #0000 20%);\n      background-position: 0 0;\n      background-size: 16px 14px;\n      height: ").concat(this.attrs.height / 4.5, "px;\n      width: ").concat(this.attrs.width / 2.7, "px;\n      position:absolute;\n      left: 7%;\n      top: 65%;\n      opacity: 0;\n    }\n\n    .doted-half{\n      clip-path: polygon(0 31%, 85% 31%, 100% 55%, 15% 55%);\n      left: 65%;\n      top: 7%\n    }\n\n    .lines-wrapper{\n      height: ").concat(this.attrs.height, "px;\n      width: ").concat(this.attrs.width, "px;\n      position: absolute;\n    }\n\n    .lines{\n      background: ").concat(this.attrs.mainColor, ";\n      position: absolute;\n    }\n\n    .left-image-wrapper, .right-image-wrapper{\n      width:").concat(this.attrs.width / 2, "px;\n      overflow: hidden;\n    }\n  \n    .right-image{\n      height: ").concat(this.attrs.imgHeight, "px;\n      width: ").concat(this.attrs.imgWidth, "px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl, ");\n      background-size: ").concat(this.attrs.imgWidth, "px;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      background-repeat: no-repeat;\n    }\n\n    .left-image{\n      height: ").concat(this.attrs.imgHeight, "px;\n      width: ").concat(this.attrs.imgWidth, "px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl, ");\n      background-size: ").concat(this.attrs.imgWidth, "px;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n    }\n\n    .left-image:after,.right-image:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    \n    .txt-group{\n      font-size: ").concat(this.attrs.txtGroupSize, "px;\n    }\n\n    .txt-group:nth-of-type(odd){\n      height: 14%;\n    }\n\n    .txt-group:nth-of-type(2n+2) {\n      height: 14%;\n    }\n\n    .knockout {\n      background: url(").concat(this.attrs.bgUrl, ");\n      background-position: 50% 50%;\n      color: red;\n      -webkit-text-fill-color: transparent; \n      -webkit-background-clip: text;\n      font-weight: bold;\n      font-size: 0;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n    .bg2{\n      background: ").concat(this.attrs.mainColor, ";\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: absolute;\n      left:100%;\n    }\n\n    .bg{\n      background: url(").concat(this.attrs.bgUrl, ");\n      background-position: 50% 50%;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: absolute;\n    }\n\n    .circle{\n      width: ", 0, "px;\n      height: ", 0, "px;\n      background: transparent;\n      border-radius: 100%;\n      position: absolute;\n    }\n\n    .circles-wrapper{\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n    }\n\n    .center-text{\n      font-weight: bold;\n      font-size: ", 100, "px;\n      text-transform: uppercase;\n      color:").concat(this.attrs.mainColor, "\n    }\n\n    .center-text-before,.center-text-after{\n      content: attr(data-text);\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: -2;\n      opacity: 0.6;\n      font-size: ", 100, "px;\n      font-weight: bold;\n      text-transform: uppercase;\n    }\n\n    .center-text-before{\n      color: #ff00c1;\n    }\n\n    .center-text-after{\n      color: #3498db;\n    }\n\n    .flex-center{\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      z-index: 1;\n    }\n\n    .sliced-img-wrapper{\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);\n      overflow: hidden;\n    }\n\n    .sliced-img{\n      background: url(").concat(this.attrs.bgUrl, ");\n      background-position: 50% 50%;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: absolute;\n    }\n\n    .sliced-img::after{\n      content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor, ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n    }\n\n    .stroke-text-center{\n      position: relative;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width, "px;\n      color: ").concat(this.attrs.mainColor, ";\n      font-weight: 900;\n      display: flex;\n      align-items: center;\n      z-index: 1;\n    }\n\n    .stroke-text-wrapper{\n      display:flex;\n      flex-direction: column;\n    }\n\n    .stroke-text-outline{\n      font-size: ").concat(this.attrs.width * 0.3, "px;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width, "px;\n      color: transparent;\n      font-weight: 900;\n      display: flex;\n      align-items: center;\n      -webkit-text-stroke: 3px aquamarine;\n      position: absolute;\n      height:").concat(this.attrs.height / strokeTextList.length, "px;\n    }\n\n    .rng-box::after{\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      height:").concat(this.attrs.height * 0.08, "px;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      background-size: ").concat(this.attrs.height, "px ").concat(this.attrs.width, "px;\n    }\n\n    .rng-box{\n      position: absolute;\n      height:").concat(this.attrs.height * 0.08, "px;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      top:80%;\n      left:-100%;\n      z-index: 1;\n    }\n    \n    .yellow-underline{\n      position: absolute;\n      height:").concat(this.attrs.height * 0.01, "px;\n      width: ").concat(this.attrs.width * 0.5, "px;\n      top:90%;\n      left:-100%;\n      z-index: 1;\n      background: ").concat(this.attrs.mainColor, ";\n    }\n\n    .yellow-transition{\n      position: absolute;\n      height:").concat(this.attrs.height, "px;\n      width: ").concat(this.attrs.width, "px;\n      top:0%;\n      left:100%;\n      z-index: 1;\n      background: ").concat(this.attrs.mainColor, ";\n    }\n\n    .leftBlackBox,.rightBlackBox{\n      position: absolute;\n      height:").concat(this.attrs.height * 2, "px;\n      width: ").concat(this.attrs.width * 2, "px;\n      background: black;\n      transform: rotate(0deg); \n      z-index: 1;\n      top: -50%;\n    }\n\n    .leftBlackBox{\n      left: -200%;\n    }\n\n    .rightBlackBox{\n      left: 100%\n    }\n  ");
  }

  buildTree() {
    const box = new CSSEffect({
      animatedAttrs: {
        top: "-".concat(this.attrs.height * 0.1, "px"),
        height: "".concat(this.attrs.height * 0.1, "px")
      },
      initialValues: {
        top: "".concat(this.attrs.height, "px"),
        height: "".concat(this.attrs.height / 2.5, "px")
      },
      attrs: {}
    }, {
      duration: 500,
      selector: ".box",
      easing: "easeOutQuart",
      repeats: 2
    });
    const leftImageTop = new CSSEffect({
      animatedAttrs: {
        backgroundPositionY: "".concat(this.attrs.height - this.attrs.imgHeight / 2, "px"),
        top: "-50%"
      },
      initialValues: {
        backgroundPositionY: "".concat(this.attrs.height - this.attrs.imgHeight / 2 + this.attrs.height, "px"),
        top: "-150%"
      }
    }, {
      duration: 300,
      selector: ".left-image",
      easing: "easeOutQuart"
    });
    const leftImageLeft = new CSSEffect({
      animatedAttrs: {
        backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width + this.attrs.width / 4, "px "),
        left: "-50%"
      },
      initialValues: {
        backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width + this.attrs.width / 4 + this.attrs.width / 2, "px "),
        left: "100%"
      }
    }, {
      duration: 700,
      selector: ".left-image",
      easing: "easeOutQuart"
    });
    const rightImageTop = new CSSEffect({
      animatedAttrs: {
        backgroundPositionY: "".concat(this.attrs.height - this.attrs.imgHeight / 2, "px"),
        top: "-50%"
      },
      initialValues: {
        backgroundPositionY: "-".concat((this.attrs.height - this.attrs.imgHeight / 2) * 4, "px"),
        top: "100%"
      }
    }, {
      duration: 700,
      selector: ".right-image",
      easing: "easeOutQuart"
    });
    const rightImageLeft = new CSSEffect({
      animatedAttrs: {
        backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width, "px"),
        left: "-200%"
      },
      initialValues: {
        backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width, "px"),
        left: "-400%"
      }
    }, {
      duration: 200,
      selector: ".right-image",
      easing: "easeOutQuart"
    });
    const rightImageLeftWrapper = new CSSEffect({
      animatedAttrs: {
        width: "".concat(this.attrs.width / 2, "px")
      },
      initialValues: {
        width: "".concat(this.attrs.width / 2 * 0.02, "px")
      }
    }, {
      duration: 200,
      selector: ".right-image-wrapper",
      easing: "easeOutQuart"
    });
    const dotedHalfOneOn = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 1,
      selector: ".doted-half",
      easing: "easeOutQuart"
    });
    const dotedHalfOneOff = new CSSEffect({
      animatedAttrs: {
        opacity: 0
      },
      initialValues: {
        opacity: 1
      }
    }, {
      duration: 1,
      selector: ".doted-half",
      easing: "easeOutQuart"
    });
    const dotedOneOn = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 1,
      selector: ".doted",
      easing: "easeOutQuart"
    });
    const dotedOneOff = new CSSEffect({
      animatedAttrs: {
        opacity: 0
      },
      initialValues: {
        opacity: 1
      }
    }, {
      duration: 1,
      selector: ".doted",
      easing: "easeOutQuart"
    });
    const bg2In = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "100%"
      }
    }, {
      duration: 500,
      selector: ".bg2",
      easing: "easeOutQuart"
    });
    const bg2InBg = new CSSEffect({
      animatedAttrs: {
        backgroundPositionX: "50%"
      },
      initialValues: {
        backgroundPositionX: "100%"
      }
    }, {
      duration: 500,
      selector: ".knockout",
      easing: "easeOutQuart"
    });
    const myGroup = new Group();

    for (let i = 0; i < this.n; i++) {
      const textAnimationSize = new CSSEffect({
        animatedAttrs: {
          fontSize: !this.attrs.txtGroupSize ? "".concat(this.attrs.width * 0.2, "px") : "".concat(this.attrs.txtGroupSize, "px"),
          marginLeft: i % 2 !== 1 ? "14%" : "6%"
        },
        initialValues: {
          fontSize: "0px",
          marginLeft: i % 2 !== 1 ? "85%" : "6%"
        }
      }, {
        duration: 500,
        selector: ".txt-" + i,
        easing: "easeOutCubic"
      });
      myGroup.addIncident(textAnimationSize, 500 + 50 * (i + 1));
    }

    const bg2OutBg = new CSSEffect({
      animatedAttrs: {
        width: "0px"
      }
    }, {
      duration: 300,
      selector: ".bg2",
      easing: "easeOutQuart"
    });
    const bgInBg = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 1,
      selector: ".bg",
      easing: "easeOutQuart"
    });
    const linesInOut = new CSSEffect({
      animatedAttrs: {
        left: "-100%",
        width: "".concat(this.attrs.width / 2 * 0.1, "px")
      },
      initialValues: {
        left: "100%"
      }
    }, {
      duration: 1000,
      selector: ".lines-wrapper",
      easing: "easeOutQuart"
    });
    const circlesWrapper = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 1,
      selector: ".circles-wrapper",
      easing: "easeOutQuart"
    });
    const circlesWrapperOp = new CSSEffect({
      animatedAttrs: {
        opacity: 0
      },
      initialValues: {
        opacity: 1
      }
    }, {
      duration: 1,
      selector: ".circles-wrapper",
      easing: "easeOutQuart"
    });
    const circlesGroup = new Group();

    for (let i = 1; i <= 3; i++) {
      const ran = "".concat(Math.random() * 360 + "deg");
      const translateX = new CSSEffect({
        animatedAttrs: {
          transform: {
            rotate: ran,
            translateX: "".concat(this.attrs.width / 2 * Math.random(), "px"),
            translateY: "".concat(this.attrs.width / 2 * Math.random(), "px")
          },
          width: "".concat(this.attrs.width * 0.2, "px"),
          height: "".concat(this.attrs.width * 0.2, "px"),
          border: " ".concat(0, "px solid ", this.attrs.mainColor)
        },
        initialValues: {
          transform: {
            rotate: ran,
            translateX: "0px",
            translateY: "0px"
          },
          width: "0px",
          height: "0px",
          border: " ".concat(this.attrs.width * 0.05, "px solid ").concat(this.attrs.mainColor)
        }
      }, {
        duration: 500,
        selector: ".circle-" + i,
        easing: "easeOutCubic"
      });
      circlesGroup.addIncident(translateX, 500 + 50 * (i + 1));
    }

    const centerTextWrapper = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1
        }
      },
      initialValues: {
        transform: {
          scale: 0
        }
      }
    }, {
      duration: 500,
      selector: ".center-text-wrapper",
      easing: "easeOutBounce"
    });
    const centerTextAfter = new CSSEffect({
      animatedAttrs: {
        left: "49%",
        top: "51%"
      },
      initialValues: {
        left: "50%",
        top: "50%"
      }
    }, {
      duration: 500,
      selector: ".center-text-after",
      easing: "easeOutBounce"
    });
    const centerTextBefore = new CSSEffect({
      animatedAttrs: {
        left: "51%",
        top: "49%"
      },
      initialValues: {
        left: "50%",
        top: "50%"
      }
    }, {
      duration: 500,
      selector: ".center-text-before",
      easing: "easeOutBounce"
    });
    const slicedImgWrapper = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "-100%"
      }
    }, {
      duration: 300,
      selector: ".sliced-img-wrapper",
      easing: "easeOutCubic"
    });
    const slicedImg = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "100%"
      }
    }, {
      duration: 300,
      selector: ".sliced-img",
      easing: "easeOutCubic"
    });
    const slicedImgWrappeClipPath = new CSSEffect({
      animatedAttrs: {
        clipPath: "polygon(0 0, 100% 0, 100% 110%, 0 100%)"
      },
      initialValues: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)"
      }
    }, {
      duration: 300,
      selector: ".sliced-img-wrapper",
      easing: "easeOutCubic"
    });
    const slicedImgTranformUp = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      }
    }, {
      duration: 150,
      selector: ".sliced-img",
      easing: "easeOutCubic"
    });
    const slicedImgTranformDown = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1
        }
      },
      initialValues: {
        transform: {
          scale: 1.5
        }
      }
    }, {
      duration: 150,
      selector: ".sliced-img",
      easing: "easeOutCubic"
    });
    const slicedImgWrapperOpacity = new CSSEffect({
      animatedAttrs: {
        opacity: 0
      },
      initialValues: {
        opacity: 1
      }
    }, {
      duration: 1,
      selector: ".sliced-img-wrapper,.center-text-wrapper",
      easing: "easeOutQuart"
    });
    const strokeTextWrapper = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 300,
      selector: ".stroke-text-wrapper",
      easing: "easeOutQuart"
    });
    const strokeTextCenter = new CSSEffect({
      animatedAttrs: {
        fontSize: "".concat(this.attrs.width * 0.15, "px"),
        left: "5%",
        height: "".concat(this.attrs.width * 0.15, "px")
      },
      initialValues: {
        fontSize: "".concat(0, "px"),
        left: "50%",
        height: "".concat(this.attrs.width * 0.15 * 3, "px")
      }
    }, {
      duration: 500,
      selector: ".stroke-text-center",
      easing: "easeOutQuart"
    });
    const strokeTextGroup = new Group();

    for (let i = 0; i < this.strokeTextLength; i++) {
      const strokeTextOutline = new CSSEffect({
        animatedAttrs: {
          left: i % 2 !== 1 ? "-".concat(this.attrs.width * 0.1, "px") : "".concat(this.attrs.width * 0.1, "px")
        },
        initialValues: {
          left: i % 2 === 1 ? "-".concat(this.attrs.width * 0.5, "px") : "".concat(this.attrs.width * 0.5, "px")
        }
      }, {
        duration: 3000 + 80 * (i + 1),
        selector: ".txt-stroke-outline-" + i
      });
      strokeTextGroup.addIncident(strokeTextOutline, 500);
    }

    const bgDistortionOp = new CSSEffect({
      animatedAttrs: {
        opacity: 0
      },
      initialValues: {
        opacity: 1
      }
    }, {
      duration: 20,
      selector: ".bg2"
    });
    const bgScaleUp = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      }
    }, {
      duration: 200,
      selector: ".bg"
    });
    const bgScaleDown = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1
        }
      },
      initialValues: {
        transform: {
          scale: 1.5
        }
      }
    }, {
      duration: 150,
      selector: ".bg"
    });
    const rngBoxDownIn = new CSSEffect({
      animatedAttrs: {
        left: "30%"
      },
      initialValues: {
        left: "-70%"
      }
    }, {
      duration: 2000,
      selector: ".rng-box"
    });
    const yellowUnderLineLeftIn = new CSSEffect({
      animatedAttrs: {
        left: "30%"
      },
      initialValues: {
        left: "-100%"
      }
    }, {
      duration: 2000,
      selector: ".yellow-underline"
    });
    const yellowUnderLineWidth = new CSSEffect({
      animatedAttrs: {
        width: "0px"
      }
    }, {
      duration: 1000,
      selector: ".yellow-underline"
    });
    const yellowTransitionWidth = new CSSEffect({
      animatedAttrs: {
        width: "0px"
      }
    }, {
      duration: 500,
      selector: ".yellow-transition"
    });
    const yellowTransitionLeft = new CSSEffect({
      animatedAttrs: {
        left: "-100%"
      }
    }, {
      duration: 1000,
      selector: ".yellow-transition"
    });
    const circlesGroup2 = new Group();
    const circlesWrapper2 = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 1,
      selector: ".circles-wrapper",
      easing: "easeOutQuart"
    });
    const circlesWrapper2Position = new CSSEffect({
      animatedAttrs: {
        top: "-33%",
        left: "-33%"
      }
    }, {
      duration: 1,
      selector: ".circles-wrapper",
      easing: "easeOutQuart"
    });

    for (let i = 1; i <= 3; i++) {
      const ran = "".concat(Math.random() * 360 + "deg");
      const translateX = new CSSEffect({
        animatedAttrs: {
          transform: {
            rotate: ran,
            translateX: "".concat(this.attrs.width / 2 * Math.random(), "px"),
            translateY: "".concat(this.attrs.width / 2 * Math.random(), "px")
          },
          width: "".concat(this.attrs.width * 0.2, "px"),
          height: "".concat(this.attrs.width * 0.2, "px"),
          border: " ".concat(0, "px solid yellow")
        },
        initialValues: {
          transform: {
            rotate: ran,
            translateX: "0px",
            translateY: "0px"
          },
          width: "0px",
          height: "0px",
          border: " ".concat(this.attrs.width * 0.05, "px solid yellow")
        }
      }, {
        duration: 500,
        selector: ".circle-" + i,
        easing: "easeOutCubic"
      });
      circlesGroup2.addIncident(translateX, 500 + 50 * (i + 1));
    }

    const blackBoxRotate = new CSSEffect({
      animatedAttrs: {
        transform: {
          rotate: "-90deg"
        }
      },
      initialValues: {
        transform: {
          rotate: "0deg"
        }
      }
    }, {
      duration: 600,
      selector: ".leftBlackBox,.rightBlackBox"
    });
    const blackBoxLeftTop = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-200%"
      }
    }, {
      duration: 1000,
      selector: ".leftBlackBox"
    });
    const blackBoxRightTop = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "100%"
      }
    }, {
      duration: 1000,
      selector: ".rightBlackBox"
    });
    this.addIncident(box, 0);
    this.addIncident(leftImageTop, 350);
    this.addIncident(leftImageLeft, 350);
    this.addIncident(rightImageTop, 0);
    this.addIncident(rightImageLeft, 350);
    this.addIncident(rightImageLeftWrapper, 350);
    this.addIncident(dotedHalfOneOn, 450);
    this.addIncident(dotedHalfOneOff, 600);
    this.addIncident(dotedOneOn, 600);
    this.addIncident(dotedOneOff, 1000);
    this.addIncident(bg2In, 700);
    this.addIncident(bg2InBg, 700);
    this.addIncident(myGroup, 500);
    this.addIncident(bg2OutBg, 1800);
    this.addIncident(bgInBg, 1779);
    this.addIncident(linesInOut, 1900);
    this.addIncident(circlesWrapper, 2000);
    this.addIncident(circlesGroup, 1400);
    this.addIncident(circlesWrapperOp, 2660);
    this.addIncident(centerTextWrapper, 2000);
    this.addIncident(centerTextAfter, 2170);
    this.addIncident(centerTextBefore, 2170);
    this.addIncident(slicedImgWrapper, 2500);
    this.addIncident(slicedImg, 2500);
    this.addIncident(slicedImgWrappeClipPath, 2700);
    this.addIncident(slicedImgTranformUp, 2550);
    this.addIncident(slicedImgTranformDown, 2850);
    this.addIncident(slicedImgWrapperOpacity, 3000);
    this.addIncident(strokeTextWrapper, 3000);
    this.addIncident(strokeTextCenter, 3000);
    this.addIncident(yellowTransitionLeft, 2400);
    this.addIncident(yellowTransitionWidth, 3000);
    this.addIncident(strokeTextGroup, 2400);
    this.addIncident(bgDistortionOp, 2920);
    this.addIncident(bgScaleUp, 3640);
    this.addIncident(bgScaleDown, 3840);
    this.addIncident(rngBoxDownIn, 4300);
    this.addIncident(yellowUnderLineLeftIn, 4200);
    this.addIncident(yellowUnderLineWidth, 5200);
    this.addIncident(circlesWrapper2, 3000);
    this.addIncident(circlesWrapper2Position, 3000);
    this.addIncident(circlesGroup2, 3010);
    this.addIncident(blackBoxRotate, 6000);
    this.addIncident(blackBoxLeftTop, 6000);
    this.addIncident(blackBoxRightTop, 6000);
  }

}

const BannerAValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: false,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  imgWidth: {
    optional: false,
    type: "number"
  },
  imgHeight: {
    optional: false,
    type: "number"
  },
  strokeText: {
    type: "string"
  },
  txtGroupSize: {
    optional: true,
    type: "number"
  },
  mainColor: {
    optional: false,
    type: "color"
  },
  centerText: {
    type: "string"
  }
};

var name = "@donkeyclip/motorcortex-banners";
var version = "0.1.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: BannerA,
    name: "BannerA",
    attributesValidationRules: { ...BannerAValidation
    }
  }]
};

export { index as default };
