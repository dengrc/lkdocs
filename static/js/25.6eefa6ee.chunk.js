webpackJsonp([25],{57:function(n,r){n.exports='## \u4f9d\u8d56\u6280\u672f \r\n\r\n* [dojo](https://dojotoolkit.org/api/)\r\n* [Vue](https://cn.vuejs.org/v2/guide/)\r\n\r\n## \u4e00\u4e2a\u6700\u7b80\u5355\u7684\u9875\u9762\r\n\r\n1. SimpleView.js\r\n\r\n```javascript\ndefine([\r\n    "dojo/_base/declare",\r\n    "mobile/views/ViewBase"\r\n], function (declare, ViewBase) {\r\n    return declare([ViewBase], {\r\n\r\n    });\r\n})\n```\r\n\r\n2. SimpleView.html\r\n\r\n```html\n<div>\r\n    <script type="dojo/require">\r\n        lang: "dojo/_base/lang",\r\n        at: "dojox/mvc/at"\r\n    <\/script>\r\n    <div data-dojo-type="dojox/mobile/Heading" data-dojo-props="label:\'\u6765\u80af\u4e91\u5546\'">\r\n        <span class="backButton" data-dojo-type="dojox/mobile/ToolBarButton" data-dojo-props="onClick:lang.hitch(this,\'onBackClick\')"></span>\r\n    </div>\r\n    <div data-dojo-type="dojox/mobile/ScrollableView">\r\n        123\r\n    </div>\r\n</div>\r\n\n```\r\n\r\n3. \u5728 `mobile/config.json` views \u5c5e\u6027\u4e0b\u6dfb\u52a0\u914d\u7f6e **\u533a\u5206\u5927\u5c0f\u5199**\r\n\r\n\r\n```json\r\n"SimpleView": {\r\n    "template": "mobile/views/SimpleView.html",\r\n    "type": "mobile/views/SimpleView"\r\n}\r\n\r\n```\r\n4. \u518d\u5f53\u524d\u9875\u9762\u8c03\u7528 `this.startView(viewName, params)`, `startView`, \u5728 `mobile/views/ViewBase` \u4e2d\u5b9a\u4e49\r\n\r\n```javascript\r\nthis.startView("SimpleView", {});\r\n```\r\n\r\n[mobile vue docs](mobilevuedocs)'}});
//# sourceMappingURL=25.6eefa6ee.chunk.js.map