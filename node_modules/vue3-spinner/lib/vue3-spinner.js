'use strict';

var vue = require('vue');

const _hoisted_1$g = { class: "v-spinner" };


const __default__$h = {
  name: "BeatLoader",
};

var script$h = /*#__PURE__*/Object.assign(__default__$h, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
    vue.createElementVNode("div", {
      class: "v-beat v-beat-odd",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-beat v-beat-even",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-beat v-beat-odd",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$h = "\n.v-spinner .v-beat {\n  -webkit-animation: v-beatStretchDelay 0.7s infinite linear;\n  animation: v-beatStretchDelay 0.7s infinite linear;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n}\n.v-spinner .v-beat-odd {\n  animation-delay: 0s;\n}\n.v-spinner .v-beat-even {\n  animation-delay: 0.35s;\n}\n@-webkit-keyframes v-beatStretchDelay {\n50% {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75);\n    -webkit-opacity: 0.2;\n    opacity: 0.2;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n@keyframes v-beatStretchDelay {\n50% {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75);\n    -webkit-opacity: 0.2;\n    opacity: 0.2;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n";
styleInject(css_248z$h);

script$h.__file = "src/components/BeatLoader.vue";

const _hoisted_1$f = { class: "v-spinner" };


const __default__$g = {
  name: "BounceLoader",
};

var script$g = /*#__PURE__*/Object.assign(__default__$g, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    borderRadius: props.radius,
    opacity: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
  };
});

const spinnerBasicStyle = vue.computed(() => {
  return {
    height: props.size,
    width: props.size,
    position: "relative",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$f, [
    vue.createElementVNode("div", {
      class: "v-bounce v-bounce1",
      style: vue.normalizeStyle(vue.unref(spinnerBasicStyle))
    }, [
      vue.createElementVNode("div", {
        class: "v-bounce v-bounce2",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      vue.createElementVNode("div", {
        class: "v-bounce v-bounce3",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$g = "\n.v-spinner .v-bounce {\n}\n.v-spinner .v-bounce1 {\n}\n.v-spinner .v-bounce2 {\n  -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n  animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.v-spinner .v-bounce3 {\n  -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n  animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes v-bounceStretchDelay {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes v-bounceStretchDelay {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n";
styleInject(css_248z$g);

script$g.__file = "src/components/BounceLoader.vue";

const _hoisted_1$e = { class: "v-spinner" };

const __default__$f = {
  name: "ClipLoader",
};

var script$f = /*#__PURE__*/Object.assign(__default__$f, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "35px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    height: props.size,
    width: props.size,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: props.color + " " + props.color + " transparent",
    borderRadius: props.radius,
    background: "transparent",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
    vue.createElementVNode("div", {
      class: "v-clip",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$f = "\n.v-spinner {\n  /*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n  /*margin: 25px auto;*/\n  text-align: center;\n}\n.v-spinner .v-clip {\n  -webkit-animation: v-clipDelay 0.75s 0s infinite linear;\n  animation: v-clipDelay 0.75s 0s infinite linear;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n  display: inline-block;\n}\n@-webkit-keyframes v-clipDelay {\n0% {\n    -webkit-transform: rotate(0deg) scale(1);\n    transform: rotate(0deg) scale(1);\n}\n50% {\n    -webkit-transform: rotate(180deg) scale(0.8);\n    transform: rotate(180deg) scale(0.8);\n}\n100% {\n    -webkit-transform: rotate(360deg) scale(1);\n    transform: rotate(360deg) scale(1);\n}\n}\n@keyframes v-clipDelay {\n0% {\n    -webkit-transform: rotate(0deg) scale(1);\n    transform: rotate(0deg) scale(1);\n}\n50% {\n    -webkit-transform: rotate(180deg) scale(0.8);\n    transform: rotate(180deg) scale(0.8);\n}\n100% {\n    -webkit-transform: rotate(360deg) scale(1);\n    transform: rotate(360deg) scale(1);\n}\n}\n";
styleInject(css_248z$f);

script$f.__file = "src/components/ClipLoader.vue";

const _hoisted_1$d = { class: "v-spinner" };


const __default__$e = {
  name: "DotLoader",
};


var script$e = /*#__PURE__*/Object.assign(__default__$e, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: parseFloat(props.size) / 2 + "px",
    width: parseFloat(props.size) / 2 + "px",
    borderRadius: props.radius,
  };
});

const spinnerBasicStyle = vue.computed(() => {
  return {
    height: props.size,
    width: props.size,
    position: "relative",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
    vue.createElementVNode("div", {
      class: "v-dot v-dot1",
      style: vue.normalizeStyle(vue.unref(spinnerBasicStyle))
    }, [
      vue.createElementVNode("div", {
        class: "v-dot v-dot2",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      vue.createElementVNode("div", {
        class: "v-dot v-dot3",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$e = "\n.v-spinner .v-dot {\n}\n.v-spinner .v-dot1 {\n  -webkit-animation: v-dotRotate 2s 0s infinite linear;\n  animation: v-dotRotate 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.v-spinner .v-dot2 {\n  -webkit-animation: v-dotBounce 2s 0s infinite linear;\n  animation: v-dotBounce 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  position: absolute;\n  top: 0;\n  bottom: auto;\n}\n.v-spinner .v-dot3 {\n  -webkit-animation: v-dotBounce 2s -1s infinite linear;\n  animation: v-dotBounce 2s -1s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  position: absolute;\n  top: auto;\n  bottom: 0;\n}\n@-webkit-keyframes v-dotRotate {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes v-dotRotate {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes v-dotBounce {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes v-dotBounce {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n";
styleInject(css_248z$e);

script$e.__file = "src/components/DotLoader.vue";

const _hoisted_1$c = {
  class: "v-spinner",
  style: { position: 'relative', fontSize: 0 }
};


const __default__$d = {
  name: "FadeLoader",
};


var script$d = /*#__PURE__*/Object.assign(__default__$d, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  height: {
    type: String,
    default: "15px",
  },
  width: {
    type: String,
    default: "5px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "20px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

const ngRadius = vue.computed(() => {
  return "-" + props.radius;
});

const quarter = vue.computed(() => {
  return parseFloat(props.radius) / 2 + parseFloat(props.radius) / 5.5 + "px";
});

const ngQuarter = vue.computed(() => {
  return "-" + quarter.value;
});

const animationStyle1 = vue.computed(() => {
  return {
    top: props.radius,
    left: 0,
    animationDelay: "0.12s",
  };
});

const animationStyle2 = vue.computed(() => {
  return {
    top: quarter.value,
    left: quarter.value,
    animationDelay: "0.24s",
    transform: "rotate(-45deg)",
  };
});

const animationStyle3 = vue.computed(() => {
  return {
    top: 0,
    left: props.radius,
    animationDelay: "0.36s",
    transform: "rotate(90deg)",
  };
});

const animationStyle4 = vue.computed(() => {
  return {
    top: ngQuarter.value,
    left: quarter.value,
    animationDelay: "0.48s",
    transform: "rotate(45deg)",
  };
});

const animationStyle5 = vue.computed(() => {
  return {
    top: ngRadius.value,
    left: 0,
    animationDelay: "0.60s",
  };
});

const animationStyle6 = vue.computed(() => {
  return {
    top: ngQuarter.value,
    left: ngQuarter.value,
    animationDelay: "0.72s",
    transform: "rotate(-45deg)",
  };
});

const animationStyle7 = vue.computed(() => {
  return {
    top: 0,
    left: ngRadius.value,
    animationDelay: "0.84s",
    transform: "rotate(90deg)",
  };
});
const animationStyle8 = vue.computed(() => {
  return {
    top: quarter.value,
    left: ngQuarter.value,
    animationDelay: "0.96s",
    transform: "rotate(45deg)",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
    vue.createElementVNode("div", {
      class: "v-fade v-fade1",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle1)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade2",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle2)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade3",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle3)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade4",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle4)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade5",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle5)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade6",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle6)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade7",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle7)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-fade v-fade8",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle8)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$d = "\n.v-spinner .v-fade {\n  -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n  animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  position: absolute;\n}\n@-webkit-keyframes v-fadeStretchDelay {\n50% {\n    -webkit-opacity: 0.3;\n    opacity: 0.3;\n}\n100% {\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n@keyframes v-fadeStretchDelay {\n50% {\n    -webkit-opacity: 0.3;\n    opacity: 0.3;\n}\n100% {\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n";
styleInject(css_248z$d);

script$d.__file = "src/components/FadeLoader.vue";

const __default__$c = {
  name: "GridLoader",
};

var script$c = /*#__PURE__*/Object.assign(__default__$c, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

const animationStyle = vue.computed(() => {
  return {
    animationName: "v-gridStretchDelay",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease",
    animationFillMode: "both",
    display: "inline-block",
  };
});

const animationStyle1 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle2 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle3 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle4 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle5 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle6 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle7 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle8 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle9 = vue.computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});

const containerStyle = vue.computed(() => {
  return {
    width: parseFloat(props.size) * 3 + parseFloat(props.margin) * 6 + "px",
    fontSize: 0,
  };
});

const random = (value) => {
  return Math.random() * value;
};

const delay = () => {
  return random(100) / 100 - 0.2 + "s";
};

const duration = () => {
  return random(100) / 100 + 0.6 + "s";
};

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: "v-spinner",
    style: vue.normalizeStyle(vue.unref(containerStyle))
  }, [
    vue.createElementVNode("div", {
      class: "v-grid v-grid1",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle1)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid2",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle2)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid3",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle3)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid4",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle4)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid5",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle5)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid6",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle6)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid7",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle7)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid8",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle8)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-grid v-grid9",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(animationStyle9)])
    }, null, 4 /* STYLE */)
  ], 4 /* STYLE */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$c = "\n@-webkit-keyframes v-gridStretchDelay {\n0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n@keyframes v-gridStretchDelay {\n0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n";
styleInject(css_248z$c);

script$c.__file = "src/components/GridLoader.vue";

const _hoisted_1$b = { class: "whirlpool" };
const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"ring ring0\" data-v-b9d9af2e></div><div class=\"ring ring1\" data-v-b9d9af2e></div><div class=\"ring ring2\" data-v-b9d9af2e></div><div class=\"ring ring3\" data-v-b9d9af2e></div><div class=\"ring ring4\" data-v-b9d9af2e></div><div class=\"ring ring5\" data-v-b9d9af2e></div><div class=\"ring ring6\" data-v-b9d9af2e></div><div class=\"ring ring7\" data-v-b9d9af2e></div><div class=\"ring ring8\" data-v-b9d9af2e></div><div class=\"ring ring9\" data-v-b9d9af2e></div>", 10);
const _hoisted_12 = [
  _hoisted_2
];


const __default__$b = {
  name: "JellyfishLoader",
};

var script$b = /*#__PURE__*/Object.assign(__default__$b, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "25px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
  speed: {
    type: String,
    default: "2.5s",
  },
  scale: {
    type: Number,
    default: 1,
  },
},
  setup(__props) {

const props = __props;

vue.useCssVars(_ctx => ({
  "b9d9af2e-props\.scale": (props.scale),
  "b9d9af2e-props\.color": (props.color),
  "b9d9af2e-props\.speed": (props.speed)
}));



return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, _hoisted_12))
}
}

});

var css_248z$b = "\n.whirlpool[data-v-b9d9af2e] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  transform: scale(var(--b9d9af2e-props\\.scale));\n}\n.ring[data-v-b9d9af2e]:before {\n  content: \"\";\n  border-radius: 50%;\n  border: 1px solid var(--b9d9af2e-props\\.color);\n  position: absolute;\n}\n.ring0[data-v-b9d9af2e]:before {\n  left: 45px;\n  width: 10px;\n  top: 13px;\n  height: 3px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0s infinite spinner-b9d9af2e;\n}\n.ring1[data-v-b9d9af2e]:before {\n  left: 40px;\n  width: 20px;\n  top: 12px;\n  height: 6px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.1s infinite spinner-b9d9af2e;\n}\n.ring2[data-v-b9d9af2e]:before {\n  left: 35px;\n  width: 30px;\n  top: 11px;\n  height: 9px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.2s infinite spinner-b9d9af2e;\n}\n.ring3[data-v-b9d9af2e]:before {\n  left: 30px;\n  width: 40px;\n  top: 9px;\n  height: 12px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.3s infinite spinner-b9d9af2e;\n}\n.ring4[data-v-b9d9af2e]:before {\n  left: 25px;\n  width: 50px;\n  top: 8px;\n  height: 15px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.4s infinite spinner-b9d9af2e;\n}\n.ring5[data-v-b9d9af2e]:before {\n  left: 20px;\n  width: 60px;\n  top: 6px;\n  height: 18px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.5s infinite spinner-b9d9af2e;\n}\n.ring6[data-v-b9d9af2e]:before {\n  left: 15px;\n  width: 70px;\n  top: 5px;\n  height: 21px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.6s infinite spinner-b9d9af2e;\n}\n.ring7[data-v-b9d9af2e]:before {\n  left: 10px;\n  width: 80px;\n  top: 3px;\n  height: 24px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.7s infinite spinner-b9d9af2e;\n}\n.ring8[data-v-b9d9af2e]:before {\n  left: 5px;\n  width: 90px;\n  top: 2px;\n  height: 27px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.8s infinite spinner-b9d9af2e;\n}\n.ring9[data-v-b9d9af2e]:before {\n  width: 100px;\n  height: 30px;\n  animation: var(--b9d9af2e-props\\.speed) ease 0.9s infinite spinner-b9d9af2e;\n}\n@keyframes spinner-b9d9af2e {\n0% {\n    transform: translateY(10px);\n    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n50% {\n    transform: translateY(60px);\n    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n100% {\n    transform: translateY(10px);\n    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n}\n";
styleInject(css_248z$b);

script$b.__scopeId = "data-v-b9d9af2e";
script$b.__file = "src/components/JellyfishLoader.vue";

const _hoisted_1$a = { class: "v-spinner" };


const __default__$a = {
  name: "MoonLoader",
};


var script$a = /*#__PURE__*/Object.assign(__default__$a, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    height: props.size,
    width: props.size,
    borderRadius: props.radius,
  };
});

const moonSize = vue.computed(() => {
  return parseFloat(props.size) / 7;
});

const spinnerMoonStyle = vue.computed(() => {
  return {
    height: moonSize.value + "px",
    width: moonSize.value + "px",
    borderRadius: props.radius,
  };
});

const animationStyle2 = vue.computed(() => {
  return {
    top: parseFloat(props.size) / 2 - moonSize.value / 2 + "px",
    backgroundColor: props.color,
  };
});

const animationStyle3 = vue.computed(() => {
  return {
    border: moonSize.value + "px solid " + props.color,
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
    vue.createElementVNode("div", {
      class: "v-moon v-moon1",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, [
      vue.createElementVNode("div", {
        class: "v-moon v-moon2",
        style: vue.normalizeStyle([vue.unref(spinnerMoonStyle), vue.unref(animationStyle2)])
      }, null, 4 /* STYLE */),
      vue.createElementVNode("div", {
        class: "v-moon v-moon3",
        style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle3)])
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$a = "\n.v-spinner .v-moon1 {\n  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  position: relative;\n}\n.v-spinner .v-moon2 {\n  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  opacity: 0.8;\n  position: absolute;\n}\n.v-spinner .v-moon3 {\n  opacity: 0.1;\n}\n@-webkit-keyframes v-moonStretchDelay {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes v-moonStretchDelay {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z$a);

script$a.__file = "src/components/MoonLoader.vue";

const _hoisted_1$9 = {
  class: "v-spinner",
  style: { position: 'relative', fontSize: 0 }
};


const __default__$9 = {
  name: "PacmanLoader",
};


var script$9 = /*#__PURE__*/Object.assign(__default__$9, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "25px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

const border1 = vue.computed(() => {
  return props.size + " solid transparent";
});

const border2 = vue.computed(() => {
  return props.size + " solid " + props.color;
});

const spinnerStyle1 = vue.computed(() => {
  return {
    width: 0,
    height: 0,
    borderTop: border2.value,
    borderRight: border1.value,
    borderBottom: border2.value,
    borderLeft: border2.value,
    borderRadius: props.size,
  };
});

const animationStyle = vue.computed(() => {
  return {
    width: "10px",
    height: "10px",
    transform: "translate(0, " + -parseFloat(props.size) / 4 + "px)",
    position: "absolute",
    top: "25px",
    left: "100px",
    animationName: "v-pacmanStretchDelay",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationFillMode: "both",
  };
});

const spinnerDelay2 = vue.computed(() => {
  return {
    animationDelay: "0.25s",
  };
});

const spinnerDelay3 = vue.computed(() => {
  return {
    animationDelay: "0.5s",
  };
});

const spinnerDelay4 = vue.computed(() => {
  return {
    animationDelay: "0.75s",
  };
});

const spinnerDelay5 = vue.computed(() => {
  return {
    animationDelay: "1s",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
    vue.createElementVNode("div", {
      class: "v-pacman v-pacman1",
      style: vue.normalizeStyle(vue.unref(spinnerStyle1))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-pacman v-pacman2",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-pacman v-pacman3",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(spinnerDelay3)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-pacman v-pacman4",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(spinnerDelay4)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-pacman v-pacman5",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(animationStyle), vue.unref(spinnerDelay5)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$9 = "\n.v-spinner {\n  text-align: center;\n}\n\n/*TODO computed transform */\n@-webkit-keyframes v-pacmanStretchDelay {\n75% {\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: translate(-100px, -6.25px);\n    transform: translate(-100px, -6.25px);\n}\n}\n@keyframes v-pacmanStretchDelay {\n75% {\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: translate(-100px, -6.25px);\n    transform: translate(-100px, -6.25px);\n}\n}\n";
styleInject(css_248z$9);

script$9.__file = "src/components/PacmanLoader.vue";

const _hoisted_1$8 = { class: "" };


const __default__$8 = {
  name: "Pacman2Loader",
};


var script$8 = /*#__PURE__*/Object.assign(__default__$8, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "25px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
},
  setup(__props) {

const props = __props;



const dot = vue.computed(() => {
  return {
    backgroundColor: props.color,
    marginLeft: "0px",
    top: `${props.height / 2.5}px`,
    width: `${props.width / 5}px`,
    height: `${props.height / 5}px`,
    "-moz-border-radius": `${props.height / 3 / 2}px`,
    "-webkit-border-radius": `${props.height / 3 / 2}px`,
    "-o-border-radius": `${props.height / 3 / 2}px`,
    "border-radius": `${props.height / 3 / 2}px`,
  };
});

const pacmanBody = vue.computed(() => {
  return {
    backgroundColor: props.color,
    width: "50px",
    height: "50px",
    "-moz-border-radius": props.height / 2 + "px",
    "-webkit-border-radius": props.height / 2 + "px",
    "-o-border-radius": props.height / 2 + "px",
    "border-radius": (props.height / 2) + "px",
  };
});

const container = vue.computed(() => {
  return {
    width: props.width + "px",
    height: props.height + "px",
  };
});

const pacman = vue.computed(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
    "-moz-border-radius": `${props.height / 2}px`,
    "-webkit-border-radius": `${props.height / 2}px`,
    "-o-border-radius": `${props.height / 2}px`,
    "border-radius": `${props.height / 2}px`,
    clip: `rect(0px, ${props.height / 2}px, ${props.width}px, 0)`,
  };
});

const pacmanMouth = vue.computed(() => {
  return {
    left: `${props.height / 60}px`,
    width: `${props.width + 2}px`,
    height: `${props.height + 2}px`,
    "-moz-border-radius": `${props.height / 2}px`,
    "-webkit-border-radius": `${props.height / 2}px`,
    "-o-border-radius": `${props.height / 2}px`,
    "border-radius": `${props.height / 2}px`,
    clip: `rect(0px, ${props.height}px, ${props.width}px, ${(props.height / 2) + 2}px)`,
  };
});

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
    vue.createElementVNode("div", {
      class: "pacman-container",
      style: vue.normalizeStyle(vue.unref(container))
    }, [
      vue.createElementVNode("div", {
        class: "pacman-body",
        style: vue.normalizeStyle(vue.unref(pacmanBody))
      }, null, 4 /* STYLE */),
      vue.createElementVNode("div", {
        class: "pacman-mouth",
        style: vue.normalizeStyle(vue.unref(pacmanMouth))
      }, [
        vue.createElementVNode("div", {
          class: "pacman",
          style: vue.normalizeStyle(vue.unref(pacman))
        }, null, 4 /* STYLE */)
      ], 4 /* STYLE */)
    ], 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "dot",
      style: vue.normalizeStyle(vue.unref(dot))
    }, null, 4 /* STYLE */)
  ]))
}
}

});

var css_248z$8 = "\n.pacman-container {\n  display: block;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -moz-animation: bite 0.5s linear infinite;\n  -webkit-animation: bite 0.5s linear infinite;\n  animation: bite 0.5s linear infinite;\n}\n.pacman-body {\n  background-color: #ff0;\n  position: absolute;\n}\n.dot {\n  background-color: #318a47;\n  position: absolute;\n  z-index: 0;\n  -moz-animation: movedot 0.5s linear infinite;\n  -webkit-animation: movedot 0.5s linear infinite;\n  animation: movedot 0.5s linear infinite;\n  -moz-animation-delay: 0.2s;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.pacman {\n  position: absolute;\n  z-index: 2;\n}\n.pacman-mouth {\n  position: absolute;\n  -moz-border-radius: 50px;\n  -webkit-border-radius: 50px;\n  -o-border-radius: 50px;\n  border-radius: 50px;\n  clip: rect(0px, 100px, 100px, 52px);\n}\n.pacman-mouth .pacman {\n  background-color: #ffffff;\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -moz-animation: munch 0.5s linear infinite;\n  -webkit-animation: munch 0.5s linear infinite;\n  animation: munch 0.5s linear infinite;\n\n  /* To fix a yellow border on pacman's mouth */\n  border: 10px solid #ffffff;\n}\n.dot {\n  -moz-animation: movedot 1s linear infinite;\n  -webkit-animation: movedot 1s linear infinite;\n  animation: movedot 1s linear infinite;\n  -moz-animation-delay: 0.4s;\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n@-moz-keyframes munch {\n0% {\n    -moz-transform: rotate(90deg);\n}\n50% {\n    -moz-transform: rotate(0deg);\n}\n100% {\n    -moz-transform: rotate(90deg);\n}\n}\n@-webkit-keyframes munch {\n0% {\n    -webkit-transform: rotate(90deg);\n}\n50% {\n    -webkit-transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(90deg);\n}\n}\n@keyframes munch {\n0% {\n    transform: rotate(90deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(90deg);\n}\n}\n@-moz-keyframes bite {\n0% {\n    -moz-transform: rotate(45deg);\n}\n50% {\n    -moz-transform: rotate(90deg);\n}\n100% {\n    -moz-transform: rotate(45deg);\n}\n}\n@-webkit-keyframes bite {\n0% {\n    -webkit-transform: rotate(45deg);\n}\n50% {\n    -webkit-transform: rotate(90deg);\n}\n100% {\n    -webkit-transform: rotate(45deg);\n}\n}\n@keyframes bite {\n0% {\n    transform: rotate(45deg);\n}\n50% {\n    transform: rotate(90deg);\n}\n100% {\n    transform: rotate(45deg);\n}\n}\n@-webkit-keyframes movedot {\n0% {\n    left: 200px;\n}\n100% {\n    left: 50px;\n}\n}\n@-moz-keyframes movedot {\n0% {\n    left: 200px;\n}\n100% {\n    left: 50px;\n}\n}\n@keyframes movedot {\n0% {\n    left: 200px;\n}\n100% {\n    left: 50px;\n}\n}\n";
styleInject(css_248z$8);

script$8.__file = "src/components/Pacman2Loader.vue";

const _hoisted_1$7 = { class: "v-spinner" };


const __default__$7 = {
  name: "PulseLoader",
};


var script$7 = /*#__PURE__*/Object.assign(__default__$7, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius,
    display: "inline-block",
    animationName: "v-pulseStretchDelay",
    animationDuration: "0.75s",
    animationIterationCount: "infinite",
    animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
    animationFillMode: "both",
  };
});

const spinnerDelay1 = vue.computed(() => {
  return {
    animationDelay: "0.12s",
  };
});

const spinnerDelay2 = vue.computed(() => {
  return {
    animationDelay: "0.24s",
  };
});

const spinnerDelay3 = vue.computed(() => {
  return {
    animationDelay: "0.36s",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
    vue.createElementVNode("div", {
      class: "v-pulse v-pulse1",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay1)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-pulse v-pulse2",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-pulse v-pulse3",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay3)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$7 = "\n/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/\n@-webkit-keyframes v-pulseStretchDelay {\n0%,\n  80% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n45% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n}\n@keyframes v-pulseStretchDelay {\n0%,\n  80% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n45% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n}\n";
styleInject(css_248z$7);

script$7.__file = "src/components/PulseLoader.vue";

const _hoisted_1$6 = { class: "v-spinner" };


const __default__$6 = {
  name: "RingLoader",
};


var script$6 = /*#__PURE__*/Object.assign(__default__$6, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    height: props.size,
    width: props.size,
    border: parseFloat(props.size) / 10 + "px solid" + props.color,
    opacity: 0.4,
    borderRadius: props.radius,
  };
});

const spinnerBasicStyle = vue.computed(() => {
  return {
    height: props.size,
    width: props.size,
    position: "relative",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
    vue.createElementVNode("div", {
      class: "v-ring v-ring1",
      style: vue.normalizeStyle(vue.unref(spinnerBasicStyle))
    }, [
      vue.createElementVNode("div", {
        class: "v-ring v-ring2",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      vue.createElementVNode("div", {
        class: "v-ring v-ring3",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$6 = "\n.v-spinner .v-ring {\n}\n.v-spinner .v-ring1 {\n}\n.v-spinner .v-ring2 {\n  -webkit-animation: v-ringRightRotate 2s 0s infinite linear;\n  animation: v-ringRightRotate 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  perspective: 800px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.v-spinner .v-ring3 {\n  -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;\n  animation: v-ringLeftRotate 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  perspective: 800px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@-webkit-keyframes v-ringRightRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringRightRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@-webkit-keyframes v-ringLeftRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringLeftRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n";
styleInject(css_248z$6);

script$6.__file = "src/components/RingLoader.vue";

const _hoisted_1$5 = { class: "v-spinner" };


const __default__$5 = {
  name: "RiseLoader",
};


var script$5 = /*#__PURE__*/Object.assign(__default__$5, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    vue.createElementVNode("div", {
      class: "v-rise v-rise-odd",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-rise v-rise-even",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-rise v-rise-odd",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-rise v-rise-even",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-rise v-rise-odd",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$5 = "\n.v-spinner {\n  /*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n  /*margin: 25px auto;*/\n  text-align: center;\n}\n.v-spinner .v-rise-odd {\n  -webkit-animation: v-riseOddDelay 1s 0s infinite\n    cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n  display: inline-block;\n}\n.v-spinner .v-rise-even {\n  -webkit-animation: v-riseEvenDelay 1s 0s infinite\n    cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n  display: inline-block;\n}\n@-webkit-keyframes v-riseOddDelay {\n0% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n25% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n75% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(0.75);\n    transform: translateY(0) scale(0.75);\n}\n}\n@keyframes v-riseOddDelay {\n0% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n25% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n75% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(0.75);\n    transform: translateY(0) scale(0.75);\n}\n}\n@-webkit-keyframes v-riseEvenDelay {\n0% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n25% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n50% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n75% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n}\n}\n@keyframes v-riseEvenDelay {\n0% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n25% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n50% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n75% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n}\n}\n";
styleInject(css_248z$5);

script$5.__file = "src/components/RiseLoader.vue";

const _hoisted_1$4 = { class: "v-spinner" };


const __default__$4 = {
  name: "RotateLoader",
};


var script$4 = /*#__PURE__*/Object.assign(__default__$4, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
    vue.createElementVNode("div", {
      class: "v-rotate v-rotate1",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, [
      vue.createElementVNode("div", {
        class: "v-rotate v-rotate2",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      vue.createElementVNode("div", {
        class: "v-rotate v-rotate3",
        style: vue.normalizeStyle(vue.unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$4 = "\n.v-spinner .v-rotate1 {\n  -webkit-animation: v-rotateStretchDelay 1s 0s infinite\n    cubic-bezier(0.7, -0.13, 0.22, 0.86);\n  animation: v-rotateStretchDelay 1s 0s infinite\n    cubic-bezier(0.7, -0.13, 0.22, 0.86);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n  position: relative;\n}\n.v-spinner .v-rotate2 {\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: -28px;\n}\n.v-spinner .v-rotate3 {\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: 25px;\n}\n@-webkit-keyframes v-rotateStretchDelay {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes v-rotateStretchDelay {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z$4);

script$4.__file = "src/components/RotateLoader.vue";

const _hoisted_1$3 = { class: "v-spinner" };


const __default__$3 = {
  name: "ScaleLoader",
};


var script$3 = /*#__PURE__*/Object.assign(__default__$3, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  height: {
    type: String,
    default: "35px",
  },
  width: {
    type: String,
    default: "4px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "2px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.radius,
    display: "inline-block",
    animationName: "v-scaleStretchDelay",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
    animationFillMode: "both",
    // TODO
    // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
    // animationFillMode: "both"
  };
});

const spinnerDelay1 = vue.computed(() => {
  return {
    animationDelay: "0.1s",
  };
});

const spinnerDelay2 = vue.computed(() => {
  return {
    animationDelay: "0.2s",
  };
});

const spinnerDelay3 = vue.computed(() => {
  return {
    animationDelay: "0.3s",
  };
});

const spinnerDelay4 = vue.computed(() => {
  return {
    animationDelay: "0.4s",
  };
});

const spinnerDelay5 = vue.computed(() => {
  return {
    animationDelay: "0.5s",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
    vue.createElementVNode("div", {
      class: "v-scale v-scale1",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay1)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-scale v-scale2",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-scale v-scale3",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay3)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-scale v-scale4",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay4)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-scale v-scale5",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay5)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$3 = "\n.v-spinner {\n  /*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n  /*margin: 25px auto;*/\n  text-align: center;\n}\n@-webkit-keyframes v-scaleStretchDelay {\n0% {\n    -webkit-animation-name: inherit;\n    -webkit-animation-duration: inherit;\n    -webkit-animation-iteration-count: inherit;\n    -webkit-animation-direction: inherit;\n}\n50% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n}\n100% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n}\n}\n@keyframes v-scaleStretchDelay {\n0% {\n    -webkit-animation-name: inherit;\n    -webkit-animation-duration: inherit;\n    -webkit-animation-iteration-count: inherit;\n    -webkit-animation-direction: inherit;\n}\n50% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n}\n100% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n}\n}\n";
styleInject(css_248z$3);

script$3.__file = "src/components/ScaleLoader.vue";

const _hoisted_1$2 = { class: "v-spinner" };


const __default__$2 = {
  name: "SkewLoader",
};


var script$2 = /*#__PURE__*/Object.assign(__default__$2, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "20px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    height: 0,
    width: 0,
    borderLeft: props.size + " solid transparent",
    borderRight: props.size + " solid transparent",
    borderBottom: props.size + " solid " + props.color,
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    vue.createElementVNode("div", {
      class: "v-skew",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$2 = "\n.v-spinner {\n  text-align: center;\n}\n.v-spinner .v-skew {\n  -webkit-animation: v-skewDelay 3s 0s infinite\n    cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  animation: v-skewDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n}\n@-webkit-keyframes v-skewDelay {\n25% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n    transform: perspective(100px) rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n    transform: perspective(100px) rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n    transform: perspective(100px) rotateX(0) rotateY(0);\n}\n}\n@keyframes v-skewDelay {\n25% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n    transform: perspective(100px) rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n    transform: perspective(100px) rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n    transform: perspective(100px) rotateX(0) rotateY(0);\n}\n}\n";
styleInject(css_248z$2);

script$2.__file = "src/components/SkewLoader.vue";

const _hoisted_1$1 = { class: "v-spinner" };


const __default__$1 = {
  name: "SquareLoader",
};


var script$1 = /*#__PURE__*/Object.assign(__default__$1, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "50px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createElementVNode("div", {
      class: "v-square",
      style: vue.normalizeStyle(vue.unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z$1 = "\n.v-spinner {\n  text-align: center;\n}\n.v-spinner .v-square {\n  -webkit-animation: v-squareDelay 3s 0s infinite\n    cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  perspective: 100px;\n  display: inline-block;\n}\n@-webkit-keyframes v-squareDelay {\n25% {\n    -webkit-transform: rotateX(180deg) rotateY(0);\n    transform: rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: rotateX(180deg) rotateY(180deg);\n    transform: rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: rotateX(0) rotateY(180deg);\n    transform: rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: rotateX(0) rotateY(0);\n    transform: rotateX(0) rotateY(0);\n}\n}\n@keyframes v-squareDelay {\n25% {\n    -webkit-transform: rotateX(180deg) rotateY(0);\n    transform: rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: rotateX(180deg) rotateY(180deg);\n    transform: rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: rotateX(0) rotateY(180deg);\n    transform: rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: rotateX(0) rotateY(0);\n    transform: rotateX(0) rotateY(0);\n}\n}\n";
styleInject(css_248z$1);

script$1.__file = "src/components/SquareLoader.vue";

const _hoisted_1 = { class: "v-spinner" };


const __default__ = {
  name: "SyncLoader",
};


var script = /*#__PURE__*/Object.assign(__default__, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = vue.computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
    display: "inline-block",
    animationName: "v-syncStretchDelay",
    animationDuration: "0.6s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
  };
});

const spinnerDelay1 = vue.computed(() => {
  return {
    animationDelay: "0.07s",
  };
});

const spinnerDelay2 = vue.computed(() => {
  return {
    animationDelay: "0.14s",
  };
});

const spinnerDelay3 = vue.computed(() => {
  return {
    animationDelay: "0.21s",
  };
});

return (_ctx, _cache) => {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "v-sync v-sync1",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay1)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-sync v-sync2",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    vue.createElementVNode("div", {
      class: "v-sync v-sync3",
      style: vue.normalizeStyle([vue.unref(spinnerStyle), vue.unref(spinnerDelay3)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, __props.loading]
  ])
}
}

});

var css_248z = "\n@-webkit-keyframes v-syncStretchDelay {\n33% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n}\n66% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n}\n100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n}\n@keyframes v-syncStretchDelay {\n33% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n}\n66% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n}\n100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n}\n";
styleInject(css_248z);

script.__file = "src/components/SyncLoader.vue";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BeatLoader: script$h,
  BounceLoader: script$g,
  ClipLoader: script$f,
  DotLoader: script$e,
  FadeLoader: script$d,
  GridLoader: script$c,
  JellyfishLoader: script$b,
  MoonLoader: script$a,
  PacmanLoader: script$9,
  Pacman2Loader: script$8,
  PulseLoader: script$7,
  RingLoader: script$6,
  RiseLoader: script$5,
  RotateLoader: script$4,
  ScaleLoader: script$3,
  SkewLoader: script$2,
  SquareLoader: script$1,
  SyncLoader: script
});

const vue3Spinner = {
  install(Vue) {
    for (const prop in components) {
      const component = components[prop];
      Vue.component(component.name, component);
    }
  },
};

exports.BeatLoader = script$h;
exports.BounceLoader = script$g;
exports.ClipLoader = script$f;
exports.DotLoader = script$e;
exports.FadeLoader = script$d;
exports.GridLoader = script$c;
exports.JellyfishLoader = script$b;
exports.MoonLoader = script$a;
exports.Pacman2Loader = script$8;
exports.PacmanLoader = script$9;
exports.PulseLoader = script$7;
exports.RingLoader = script$6;
exports.RiseLoader = script$5;
exports.RotateLoader = script$4;
exports.ScaleLoader = script$3;
exports.SkewLoader = script$2;
exports.SquareLoader = script$1;
exports.SyncLoader = script;
exports.vue3Spinner = vue3Spinner;
