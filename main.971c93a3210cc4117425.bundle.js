(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{182:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(26),__webpack_require__(13),__webpack_require__(2),__webpack_require__(12);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(47),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(215),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(216),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6__),_superset_ui_color_esm_colorSchemes_categorical_d3__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(223),_superset_ui_color_esm_colorSchemes_sequential_common__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(217),_superset_ui_color_esm_colorSchemes_sequential_d3__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(218),_superset_ui_color__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(129);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.setAddon)(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6___default.a);var categoricalSchemeRegistry=Object(_superset_ui_color__WEBPACK_IMPORTED_MODULE_10__.getCategoricalSchemeRegistry)();[_superset_ui_color_esm_colorSchemes_categorical_d3__WEBPACK_IMPORTED_MODULE_7__.a].forEach(function(group){group.forEach(function(scheme){categoricalSchemeRegistry.registerValue(scheme.id,scheme)})}),categoricalSchemeRegistry.setDefaultKey("d3Category10");var sequentialSchemeRegistry=Object(_superset_ui_color__WEBPACK_IMPORTED_MODULE_10__.getSequentialSchemeRegistry)();[_superset_ui_color_esm_colorSchemes_sequential_common__WEBPACK_IMPORTED_MODULE_8__.a,_superset_ui_color_esm_colorSchemes_sequential_d3__WEBPACK_IMPORTED_MODULE_9__.a].forEach(function(group){group.forEach(function(scheme){sequentialSchemeRegistry.registerValue(scheme.id,scheme)})});var EMPTY_EXAMPLES=[{renderStory:function(){return"Does your default export have an `examples` key?"},storyName:"No examples found"}],requireContext=__webpack_require__(553);requireContext.keys().forEach(function(packageName){var packageExport=requireContext(packageName);if(packageExport&&packageExport.default&&!Array.isArray(packageExport.default)){var _packageExport$defaul=packageExport.default.examples;(void 0===_packageExport$defaul?EMPTY_EXAMPLES:_packageExport$defaul).forEach(function(example){var _example$storyPath=example.storyPath,storyPath=void 0===_example$storyPath?"Missing story path":_example$storyPath,_example$storyName=example.storyName,storyName=void 0===_example$storyName?"Missing name":_example$storyName,_example$renderStory=example.renderStory,renderStory=void 0===_example$renderStory?function(){return"Missing `renderStory`"}:_example$renderStory,_example$options=example.options,options=void 0===_example$options?{}:_example$options;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)(storyPath,module).addParameters({options:options}).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.withKnobs).addWithJSX(storyName,renderStory)})}})}.call(this,__webpack_require__(150)(module))},219:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _translation=__webpack_require__(83),_chart=__webpack_require__(16),_transformProps=_interopRequireDefault(__webpack_require__(579)),_thumbnail=_interopRequireDefault(__webpack_require__(580));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var metadata=new _chart.ChartMetadata({credits:["https://github.com/d3/d3-chord"],description:"",name:(0,_translation.t)("Chord Diagram"),thumbnail:_thumbnail.default,useLegacyApi:!0}),ChordChartPlugin=function(a){function b(){return a.call(this,{loadChart:function(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(4)]).then(__webpack_require__.t.bind(null,591,7))},metadata:metadata,transformProps:_transformProps.default})||this}return function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b}(_chart.ChartPlugin);exports.default=ChordChartPlugin},220:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _translation=__webpack_require__(83),_chart=__webpack_require__(16),_transformProps=_interopRequireDefault(__webpack_require__(581)),_thumbnail=_interopRequireDefault(__webpack_require__(582));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var metadata=new _chart.ChartMetadata({credits:["http://bl.ocks.org/d3noob/5141278"],description:"",name:(0,_translation.t)("Force-directed Graph"),thumbnail:_thumbnail.default}),ForceDirectedChartPlugin=function(a){function b(){return a.call(this,{loadChart:function(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(5)]).then(__webpack_require__.t.bind(null,592,7))},metadata:metadata,transformProps:_transformProps.default})||this}return function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b}(_chart.ChartPlugin);exports.default=ForceDirectedChartPlugin},221:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _translation=__webpack_require__(83),_chart=__webpack_require__(16),_thumbnail=_interopRequireDefault(__webpack_require__(583)),_transformProps=_interopRequireDefault(__webpack_require__(584));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var metadata=new _chart.ChartMetadata({description:"HTML Inline Frame",name:(0,_translation.t)("IFrame"),thumbnail:_thumbnail.default,useLegacyApi:!0}),IframeChartPlugin=function(a){function b(){return a.call(this,{loadChart:function(){return __webpack_require__.e(7).then(__webpack_require__.t.bind(null,593,7))},metadata:metadata,transformProps:_transformProps.default})||this}return function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b}(_chart.ChartPlugin);exports.default=IframeChartPlugin},222:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _translation=__webpack_require__(83),_chart=__webpack_require__(16),_thumbnail=_interopRequireDefault(__webpack_require__(585)),_transformProps=_interopRequireDefault(__webpack_require__(586));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var metadata=new _chart.ChartMetadata({description:"HTML Markup",name:(0,_translation.t)("Markup"),thumbnail:_thumbnail.default,useLegacyApi:!0}),IframeChartPlugin=function(a){function b(){return a.call(this,{loadChart:function(){return __webpack_require__.e(6).then(__webpack_require__.t.bind(null,594,7))},metadata:metadata,transformProps:_transformProps.default})||this}return function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a),b}(_chart.ChartPlugin);exports.default=IframeChartPlugin},227:function(module,exports,__webpack_require__){__webpack_require__(228),__webpack_require__(307),module.exports=__webpack_require__(308)},308:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(418),__webpack_require__(421),__webpack_require__(182)},module)}.call(this,__webpack_require__(150)(module))},418:function(module,exports,__webpack_require__){var content=__webpack_require__(419);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(225)(content,options);content.locals&&(module.exports=content.locals)},419:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(224)(!1)).push([module.i,"html,\nbody,\n#root {\n  height: 100%;\n  font-family: BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;\n  font-weight: 200;\n  color: #484848;\n}\n",""])},421:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(214);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__.withOptions)({addonPanelInRight:!1,enableShortcuts:!1,goFullScreen:!1,hierarchySeparator:/\|/,name:"👻 @superset-ui/legacy-",selectedAddonPanel:void 0,showAddonPanel:!0,showSearchBox:!1,showStoriesPanel:!0,sidebarAnimations:!0,sortStoriesByKind:!1,url:"#"}))},553:function(module,exports,__webpack_require__){var map={"./index.js":182,"./legacy-plugin-chart-chord/index.js":587,"./legacy-plugin-chart-force-directed/index.js":590,"./legacy-plugin-chart-iframe/index.js":589,"./legacy-plugin-chart-markup/index.js":588};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=553},579:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b=a.width,c=a.height,d=a.formData,e=a.payload,f=d.yAxisFormat;return{colorScheme:d.colorScheme,data:e.data,height:c,numberFormat:f,width:b}}},580:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/thumbnail.bb8c4a51.png"},581:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b=a.width,c=a.height,d=a.formData,e=a.payload,f=d.charge,g=d.linkLength;return{charge:f,data:e.data,height:c,linkLength:g,width:b}}},582:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/thumbnail.6e31c7f1.png"},583:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/thumbnail.b7fba71b.png"},584:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b=a.formData,c=a.height,d=a.width,e=b.url;return{height:c,url:e,width:d}}},585:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/thumbnail.e3c1a4e7.png"},586:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b=a.height,c=a.payload,e=a.formData.vizType,f=c.data,g=f.theme_css,h=f.html;return{cssFiles:g,height:b,html:h,isSeparator:"separator"===e}}},587:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(42),__webpack_require__(53),__webpack_require__(43),__webpack_require__(44),__webpack_require__(22),__webpack_require__(20),__webpack_require__(2),__webpack_require__(26);var lib=__webpack_require__(219),lib_default=__webpack_require__.n(lib),react=__webpack_require__(6),react_default=__webpack_require__.n(react),chart_lib=__webpack_require__(16),Stories=[{renderStory:function(){return react_default.a.createElement(chart_lib.SuperChart,{chartType:"chord",chartProps:{formData:{colorScheme:"d3Category10",yAxisFormat:".2f"},height:600,payload:{data:{matrix:[[381,16,14,5,4,6],[29,535,132,20,21,16],[22,18,1,3,0,214],[3,4,462,152,132,0],[16,32,299,123,146,1],[22,83,53,21,22,6]],nodes:["Hong Kong","Tokyo","Taipei","Beijing","Bangkok","Jakarta","Singapore"]}},width:600}})},storyName:"ChordChartPlugin",storyPath:"plugin-chart-chord"}];(new lib_default.a).configure({key:"chord"}).register();var arr;__webpack_exports__.default={examples:(arr=Stories,function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())}},588:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(42),__webpack_require__(53),__webpack_require__(43),__webpack_require__(44),__webpack_require__(22),__webpack_require__(20),__webpack_require__(2),__webpack_require__(26);var lib=__webpack_require__(222),lib_default=__webpack_require__.n(lib),react=__webpack_require__(6),react_default=__webpack_require__.n(react),chart_lib=__webpack_require__(16),Stories=[{renderStory:function(){return react_default.a.createElement(chart_lib.SuperChart,{chartType:"markup",chartProps:{formData:{vizType:"markup"},height:600,payload:{data:{html:'<div><b>hello</b> <i>world</i><div><img src="https://avatars3.githubusercontent.com/u/42724554?s=200&v=4" style="width: 80px" />'}},width:600}})},storyName:"MarkupChartPlugin",storyPath:"plugin-chart-markup"}];(new lib_default.a).configure({key:"markup"}).register();var arr;__webpack_exports__.default={examples:(arr=Stories,function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())}},589:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(42),__webpack_require__(53),__webpack_require__(43),__webpack_require__(44),__webpack_require__(22),__webpack_require__(20),__webpack_require__(2),__webpack_require__(26);var lib=__webpack_require__(221),lib_default=__webpack_require__.n(lib),react=__webpack_require__(6),react_default=__webpack_require__.n(react),chart_lib=__webpack_require__(16),Stories=[{renderStory:function(){return react_default.a.createElement(chart_lib.SuperChart,{chartType:"iframe",chartProps:{formData:{url:"https://www.youtube.com/embed/AdSZJzb-aX8"},height:600}})},storyName:"IframeChartPlugin",storyPath:"plugin-chart-iframe"}];(new lib_default.a).configure({key:"iframe"}).register();var arr;__webpack_exports__.default={examples:(arr=Stories,function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())}},590:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(42),__webpack_require__(53),__webpack_require__(43),__webpack_require__(44),__webpack_require__(22),__webpack_require__(20),__webpack_require__(2),__webpack_require__(26);var lib=__webpack_require__(220),lib_default=__webpack_require__.n(lib),react=__webpack_require__(6),react_default=__webpack_require__.n(react),chart_lib=__webpack_require__(16),Stories=[{renderStory:function(){return react_default.a.createElement(chart_lib.SuperChart,{chartType:"force-directed",chartProps:{formData:{},height:600,payload:{data:[{source:"Energy",target:"Electricity and heat",value:24.9},{source:"Energy",target:"Industry",value:14.7},{source:"Energy",target:"Transportation",value:14.3},{source:"Deforestation",target:"Carbon Dioxide",value:10.9},{source:"Land Use Change",target:"Deforestation",value:10.9},{source:"Road",target:"Carbon Dioxide",value:10.5},{source:"Transportation",target:"Road",value:10.5},{source:"Residential Buildings",target:"Carbon Dioxide",value:10.2},{source:"Energy",target:"Other Fuel Combustion",value:8.6},{source:"Other Industry",target:"Carbon Dioxide",value:6.6},{source:"Commercial Buildings",target:"Carbon Dioxide",value:6.3},{source:"Agriculture",target:"Livestock and Manure",value:5.4},{source:"Agriculture",target:"Agriculture Soils",value:5.2},{source:"Agriculture Soils",target:"Nitrous Oxide",value:5.2},{source:"Electricity and heat",target:"Residential Buildings",value:5.2},{source:"Livestock and Manure",target:"Methane",value:5.1},{source:"Cement",target:"Carbon Dioxide",value:5},{source:"Electricity and heat",target:"Commercial Buildings",value:5},{source:"Other Fuel Combustion",target:"Residential Buildings",value:5},{source:"Energy",target:"Fugitive Emissions",value:4},{source:"Iron and Steel",target:"Carbon Dioxide",value:4},{source:"Industry",target:"Other Industry",value:3.8},{source:"Oil and Gas Processing",target:"Carbon Dioxide",value:3.6},{source:"Chemicals",target:"Carbon Dioxide",value:3.4},{source:"Fugitive Emissions",target:"Oil and Gas Processing",value:3.2},{source:"Industry",target:"Iron and Steel",value:3},{source:"Unallocated Fuel Combustion",target:"Carbon Dioxide",value:3},{source:"Industrial Processes",target:"Cement",value:2.8},{source:"Industry",target:"Oil and Gas Processing",value:2.8},{source:"Oil and Gas Processing",target:"Methane",value:2.8},{source:"Electricity and heat",target:"Other Industry",value:2.7},{source:"Rail - Ship and Other Transport",target:"Carbon Dioxide",value:2.5},{source:"Transportation",target:"Rail - Ship and Other Transport",value:2.5},{source:"Electricity and heat",target:"T and D Losses",value:2.2},{source:"T and D Losses",target:"Carbon Dioxide",value:2.2},{source:"Electricity and heat",target:"Unallocated Fuel Combustion",value:2},{source:"Industry",target:"Cement",value:1.9},{source:"Other Fuel Combustion",target:"Unallocated Fuel Combustion",value:1.8},{source:"Agriculture",target:"Other Agriculture",value:1.7},{source:"Air",target:"Carbon Dioxide",value:1.7},{source:"Landfills",target:"Methane",value:1.7},{source:"Transportation",target:"Air",value:1.7},{source:"Waste",target:"Landfills",value:1.7},{source:"Agriculture",target:"Rice Cultivation",value:1.5},{source:"Rice Cultivation",target:"Methane",value:1.5},{source:"Waste",target:"Waste water - Other Waste",value:1.5},{source:"Agricultural Energy Use",target:"Carbon Dioxide",value:1.4},{source:"Industrial Processes",target:"Chemicals",value:1.4},{source:"Industry",target:"Chemicals",value:1.4},{source:"Other Agriculture",target:"Methane",value:1.4},{source:"Electricity and heat",target:"Chemicals",value:1.3},{source:"Fugitive Emissions",target:"Coal Mining",value:1.3},{source:"Harvest / Management",target:"Carbon Dioxide",value:1.3},{source:"Land Use Change",target:"Harvest / Management",value:1.3},{source:"Other Fuel Combustion",target:"Commercial Buildings",value:1.3},{source:"Coal Mining",target:"Methane",value:1.2},{source:"Waste water - Other Waste",target:"Methane",value:1.2},{source:"Pulp - Paper and Printing",target:"Carbon Dioxide",value:1.1},{source:"Aluminium Non-Ferrous Metals",target:"Carbon Dioxide",value:1},{source:"Electricity and heat",target:"Iron and Steel",value:1},{source:"Electricity and heat",target:"Machinery",value:1},{source:"Food and Tobacco",target:"Carbon Dioxide",value:1},{source:"Machinery",target:"Carbon Dioxide",value:1},{source:"Other Fuel Combustion",target:"Agricultural Energy Use",value:1},{source:"Electricity and heat",target:"Pulp - Paper and Printing",value:.6},{source:"Chemicals",target:"HFCs - PFCs",value:.5},{source:"Electricity and heat",target:"Food and Tobacco",value:.5},{source:"Industrial Processes",target:"Other Industry",value:.5},{source:"Industry",target:"Food and Tobacco",value:.5},{source:"Industry",target:"Pulp - Paper and Printing",value:.5},{source:"Electricity and heat",target:"Aluminium Non-Ferrous Metals",value:.4},{source:"Electricity and heat",target:"Oil and Gas Processing",value:.4},{source:"Electricity,heat",target:"Agricultural Energy Use",value:.4},{source:"Industrial Processes",target:"Aluminium Non-Ferrous Metals",value:.4},{source:"Industry",target:"Aluminium Non-Ferrous Metals",value:.4},{source:"Other Industry",target:"HFCs - PFCs",value:.4},{source:"Unallocated Fuel Combustion",target:"Methane",value:.4},{source:"Unallocated Fuel Combustion",target:"Nitrous Oxide",value:.4},{source:"Electricity and heat",target:"Cement",value:.3},{source:"Livestock and Manure",target:"Nitrous Oxide",value:.3},{source:"Other Agriculture",target:"Nitrous Oxide",value:.3},{source:"Waste water - Other Waste",target:"Nitrous Oxide",value:.3},{source:"Aluminium Non-Ferrous Metals",target:"HFCs - PFCs",value:.2},{source:"Chemicals",target:"Nitrous Oxide",value:.2},{source:"Coal Mining",target:"Carbon Dioxide",value:.1}]},width:600}})},storyName:"ForceDirectedChartPlugin",storyPath:"plugin-chart-force-directed"}];(new lib_default.a).configure({key:"force-directed"}).register();var arr;__webpack_exports__.default={examples:(arr=Stories,function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())}}},[[227,2,3]]]);
//# sourceMappingURL=main.971c93a3210cc4117425.bundle.js.map