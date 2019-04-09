webpackJsonp([29],{44:function(n,r){n.exports='## [AMD \u6a21\u5757](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88))\r\n\r\n* \u51fd\u6570 `define`\r\n\r\n```javascript\r\ndefine(id?, dependencies?, factory)\r\n```\r\n\r\n------\r\n\r\n## \u7c7b [dojo/_base/declare](https://dojotoolkit.org/reference-guide/1.10/dojo/_base/declare.html)\r\n\r\n### \u5b9a\u4e49\u7c7b\r\n\r\n\u6784\u9020\u51fd\u6570\u3001\u5c5e\u6027 \u4e0d\u662f\u5fc5\u987b\u7684\r\n\r\n```javascript\ndefine(["dojo/_base/declare"], function (declare) {\r\n    /**\r\n     * \u5b9a\u4e49\u7c7b A\r\n     * @module A\r\n     * @description\t\r\n     * \u6a21\u5757\u8def\u5f84  - code/A.js\r\n     * */\r\n    return declare(null, {\r\n        /**\r\n         * \u81ea\u5b9a\u4e49\u5c5e\u6027\r\n         */\r\n        name: "",\r\n        /**\r\n         * \u6784\u9020\u51fd\u6570\r\n         * @param {Object} params \r\n         */\r\n        constructor: function (params) {\r\n            Object.assign(params)\r\n        },\r\n        /**\r\n         * \u9a8c\u8bc1\u65b9\u6cd5\r\n         */\r\n        verification: function () {\r\n            return !!this.name\r\n        },\r\n        /**\r\n         * \u63d0\u4ea4\r\n         */\r\n        submit: function () {\r\n            console.log("submit success")\r\n        }\r\n    });\r\n});\n```\r\n### \u7ee7\u627f\r\n\r\n\u5b9e\u4f8b\u5316\u65f6\u4f1a\u81ea\u52a8\u5148\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\r\n\r\n\u8c03\u7528\u7236\u7c7b\u540c\u540d\u65b9\u6cd5\u7684\u65b9\u5f0f\r\n\r\n```javascript\r\nthis.inherited(arguments)\r\n```\r\n\r\n\u91cd\u5199\u53c2\u6570\r\n\r\n```javascript\r\nthis.inherited(arguments,[123])\r\n```\r\n\r\n[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) `arguments.callee` \u6307\u5f53\u524d\u51fd\u6570\u3002\u5728 `declare` \u5b9a\u4e49\u7c7b\u65f6\uff0c\u4f1a\u628a\u7c7b\u4e2d\u7684\u6240\u6709\u51fd\r\n\r\n\u6570\u540d\u79f0\u8d4b\u503c\u7ed9\u51fd\u6570\u7684 `nom` \u5c5e\u6027\u3002\r\n\r\n\u5f53\u9700\u8981\u5728\u5c40\u90e8\u51fd\u6570\u4e2d\u8c03\u7528\u7236\u7c7b\u540c\u540d\u65b9\u6cd5\u65f6\uff0c\u9700\u8981\u5148\u628a `arguments` \u5b58\u8d77\u6765\r\n\r\n```javascript\r\nvar _this = this;\r\nvar args = arguments;\r\nsetTimeout(function() {\r\n  _this.inherited(args)\r\n}, 0);\r\n```\r\n\r\n\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801\r\n\r\n```javascript\ndefine(["dojo/_base/declare", "./B.js"], function (declare, B) {\r\n    /**\r\n     * \u5b9a\u4e49\u7c7b B \u7ee7\u627f A\r\n     * @module B\r\n     * @description\t\r\n     * \u6a21\u5757\u8def\u5f84  - code/B.js\r\n     * */\r\n    return declare([B], {\r\n        /**\r\n         * \u81ea\u5b9a\u4e49\u5c5e\u6027\r\n         */\r\n        age: "",\r\n        /**\r\n         * \u6784\u9020\u51fd\u6570\uff0c\u5b9e\u4f8b\u5316\u65f6\u4f1a\u81ea\u52a8\u5148\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\r\n         * @param {*} params \r\n         */\r\n        constructor: function (params) {\r\n            this.output()\r\n        },\r\n        /**\r\n         * \u8f93\u51fa\u4fe1\u606f\r\n         */\r\n        output: function () {\r\n            console.log(this.name, this.age)\r\n        },\r\n        /**\r\n         * \u9a8c\u8bc1\u65b9\u6cd5\r\n         */\r\n        verification: function () {\r\n            if (this.age > 10 && this.age < 20) {\r\n                return this.inherited(arguments);\r\n            }\r\n            return false\r\n        },\r\n        /**\r\n         * \u63d0\u4ea4\r\n         */\r\n        submit: function () {\r\n            if (this.verification()) {\r\n                //\u5047\u8bbe\u5728\u8c03\u7528\u670d\u52a1\u9a8c\u8bc1\r\n                setTimeout(function () {\r\n                    var _this = this;\r\n                    var args = arguments;\r\n                    setTimeout(function () {\r\n                        _this.inherited(args)\r\n                    }, 0);\r\n                }, 300)\r\n            }\r\n        }\r\n    });\r\n});\n```\r\n\r\n### \u591a\u7ee7\u627f\r\n\r\n\u5b9e\u4f8b\u5316\u540e\u6784\u9020\u51fd\u6570\u6267\u884c\u987a\u5e8f\r\n\r\n\u5f53\u524d\u7c7b --\x3e C --\x3e B --\x3e A\r\n\r\n```javascript\r\ndeclare([A,B,C],{\r\n\r\n})\r\n```\r\n\r\n------\r\n\r\n## \u4e8b\u4ef6 [dojo/on](https://dojotoolkit.org/reference-guide/1.10/dojo/on.html)\r\n\r\n### \u7ed1\u5b9a\u4e8b\u4ef6\r\n\r\n**\u5728\u7ec4\u4ef6\u5185\u6700\u597d\u4f7f\u7528 \u7ec4\u4ef6\u7684 `connect` \u65b9\u6cd5\u7ed1\u5b9a\u4e8b\u4ef6**\r\n\r\n* \u7ed1\u5b9a\u6d4f\u89c8\u5668\u4e8b\u4ef6\r\n\r\n```javascript\r\non(document, "click", function(e){\r\n\r\n})\r\n```\r\n\r\n* \u7ed1\u5b9a\u591a\u4e2a\u4e8b\u4ef6\r\n\r\n```javascript\r\non(document, "click,keyup", function(e){\r\n\r\n})\r\n```\r\n\r\n* \u4e8b\u4ef6\u59d4\u6258\r\n\r\n```javascript\r\non(document, "button:click", function(e){\r\n  //\u70b9\u51fb\u6240\u6709 button\r\n})\r\n```\r\n\r\n* \u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\r\n\r\n\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u4ee5\u662f\u4efb\u610f\u5b57\u7b26\u4e32\r\n\r\n```javascript\r\non(document, "my-event", function(e){\r\n  \r\n})\r\n```\r\n\r\n### \u89e3\u9664\u7ed1\u5b9a\r\n\r\n```javascript\r\nvar clickListener = on(document, "click", function(e){\r\n\r\n});\r\n//\u89e3\u9664\u7ed1\u5b9a\r\nclickListener.remove();\r\n```\r\n\r\n### \u53d1\u5e03\u4e8b\u4ef6\r\n\r\n```javascript\r\non.emit(document, "my-event", {\r\n  bubbles: true,\r\n  cancelable: true\r\n});\r\n```\r\n\r\n------\r\n\r\n## \u5f02\u6b65\u5904\u7406\r\n\r\n### [dojo/_base/Deferred](https://dojotoolkit.org/reference-guide/1.10/dojo/_base/Deferred.html)\r\n\r\n```javascript\nvar defUserInfo = new Deferred();\r\n\r\ndefUserInfo.then(function (e) {\r\n    //\u6210\u529f\u56de\u8c03\r\n}, function (e) {\r\n    //\u5931\u8d25\u56de\u8c03\r\n});\r\n\r\n//\u6a21\u62df\u5f02\u6b65\u4efb\u52a1\r\nsetTimeout(function () {\r\n    if (Date.now() % 2) {\r\n        defUserInfo.resolve({\r\n            message: "success"\r\n        })\r\n    } else {\r\n        defUserInfo.reject({\r\n            message: "error"\r\n        })\r\n    }\r\n}, 2000)\r\n\r\n//\u4f20\u9012\u4e00\u4e2a\u65b0\u503c\u5230\u4e0b\u4e00\u4e2a\u56de\u8c03\r\ndefUserInfo.then(function (e) {\r\n    //\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u503c\r\n    return Date.now()\r\n}).then(function (newValue) {\r\n    console.log(newValue)\r\n})\n```\r\n\r\n### [dojo/promise/all](https://dojotoolkit.org/reference-guide/1.10/dojo/promise/all.html)\r\n\r\n\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\u5b8c\u6210\uff0c\u6267\u884c\u56de\u8c03\r\n\r\n```javascript\nvar defUserInfo = new Deferred();\r\nvar defConfig = new Deferred();\r\n//\u5bf9\u8c61\u65b9\u5f0f\r\npromiseAll({\r\n    userInfo: defUserInfo,\r\n    config: defConfig\r\n}).then(function (results) {\r\n    console.log(results.userInfo)\r\n    console.log(results.config)\r\n})\r\n//\u6570\u7ec4\r\npromiseAll([\r\n    defUserInfo,\r\n    defConfig\r\n]).then(function (results) {\r\n    console.log(results[0])\r\n    console.log(results[1])\r\n});\r\n//\u6a21\u62df\u5f02\u6b65 defUserInfo \u4efb\u52a1\u5b8c\u6210\r\nsetTimeout(function () {\r\n    defUserInfo.resolve({\r\n        name: "abc"\r\n    })\r\n}, 1000)\r\n//\u6a21\u62df\u5f02\u6b65 defConfig \u4efb\u52a1\u5b8c\u6210\r\nsetTimeout(function () {\r\n    defConfig.resolve({\r\n        version: 1\r\n    })\r\n}, 2000)\n```\r\n\r\n------\r\n\r\n## \u5e38\u7528\u51fd\u6570\r\n\r\n### [dojo/_base/lang](https://dojotoolkit.org/reference-guide/1.10/dojo/_base/lang.html)\r\n\r\n* \u66f4\u6539\u51fd\u6570\u4f5c\u7528\u57df\r\n\r\n```javascript\r\nlang.hitch(this, function() { })\r\n```\r\n\u6216\r\n```javascript\r\nlang.hitch(this, "onClick")\r\n```\r\n\r\n* \u5bf9\u8c61\u6df7\u5408\r\n\r\n```javascript\r\nlang.mixin({ a: 1, b: 2 }, {b: 3, c: 4 })\r\n```\r\n\r\n* \u7c7b\u578b\u5224\u65ad\r\n\r\n```javascript\r\nlang.isArray(obj)\r\nlang.isFunction(obj)\r\nlang.isObject(obj)\r\nlang.isString(obj)\r\n```\r\n\r\n### \u53bb\u6296 dojo/debounce\r\n\r\n```javascript\r\n//\u505c\u6b62\u8f93\u5165\u540e 500 \u6beb\u79d2\u6267\u884c\r\non(input, "input" ,debounce(function(e) {\r\n  \r\n}, 500)\r\n```'}});
//# sourceMappingURL=29.901be312.chunk.js.map