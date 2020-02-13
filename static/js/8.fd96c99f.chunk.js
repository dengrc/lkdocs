webpackJsonp([8],{71:function(e,t){e.exports='# ReportPageConfigMixin\r\n\r\n## \u9875\u9762\u6a21\u5757\u663e\u793a\u4e0e\u6392\u5e8f\u914d\u7f6e\r\n\r\n\r\n\u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e\r\n:---------------|:-------------|:-------------|:-------------\r\nbilltype | number | | \u7528\u4e8e\u4fdd\u5b58\u914d\u7f6e\u7684\u6807\u8bc6\u7b26\u3002\u8fd9\u4e2a\u503c\u901a\u8fc7\u67d0\u4e2a\u5de5\u5177\u83b7\u53d6\r\npageConfigId | string | | \u7528\u4e8e\u4fdd\u5b58\u914d\u7f6e\u7684\u6807\u8bc6\u7b26\uff0c\u4ec5\u5f53\u4e0d\u540c\u9875\u9762 billtype \u76f8\u540c\u65f6\u4f7f\u7528\u3002\u8fd9\u4e2a\u503c\u5efa\u8bae\u548c viewName \u76f8\u540c\r\n\r\n```html\r\n<div module-set="data">\r\n    \x3c!--\u901a\u8fc7\u9009\u62e9\u5668\u6307\u5b9a\uff0c\u663e\u793a\u540d\u79f0--\x3e\r\n    <div module-id="qty_title">\r\n        <div class="menu-subtext">XX\u663e\u793a\u540d\u79f0</div>\r\n    </div>\r\n    <div module-id="qty_titleb">\r\n        <div>\r\n            <span class="menu-subtext">XX\u663e\u793a\u540d\u79f0</span>\r\n        </div>\r\n    </div>\r\n    \x3c!-- \u9ed8\u8ba4\u9690\u85cf view-module-hidden --\x3e\r\n    <div module-id="goodscount_title" class="col-4 col-xmd-4 view-module-hidden" data-dojo-type="dijit/_Widget" data-dojo-attach-point="goodscountControl"></div>\r\n    \x3c!-- \u6743\u9650\u63a7\u5236 visible --\x3e\r\n    <div module-id="costmoney_title"  data-dojo-props="visible:at(this.visibleOperation,\'viewcost\')" data-dojo-mixins="desktop/widgets/VisibleMixin" data-dojo-type="dijit/_Widget">\r\n    </div>\r\n    \x3c!--\u5982\u679c\u662f\u7ec4\u4ef6\u4f18\u5148\uff0c\u53d6 label \u5c5e\u6027\uff0c\u4f5c\u4e3a\u663e\u793a\u540d\u79f0--\x3e\r\n    <div module-id="costmoney_titleb" data-dojo-props="label:\'abc\'" data-dojo-type="***">\r\n    </div>\r\n</div>\r\n```\r\n\u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e\r\n:---------------|:---------------|:---------------|:-------------\r\nmodule-set | enum{data,input} | | module-set \u4f5c\u7528\u4e8e module-id \u7236\u5143\u7d20\u4e0a\uff0c\u7528\u4e8e\u6307\u5b9a module-id \u663e\u793a\u5728\u914d\u7f6e\u9875\u9762\u7684\u54ea\u4e2a\u9875\u7b7e\u3002\r\nmodule-id | string | | \u63a7\u5236\u663e\u793a\u6392\u5e8f\u7684id *\u5982\u679c\u7528\u6237\u6ca1\u6709\u6743\u9650\uff0c\u53c2\u8003\u4e0a\u9762\u4ee3\u7801 \u201c\u6743\u9650\u63a7\u5236\u201d*\r\nmodule-label-selecotr | string | .menu-subtext | *\u5982\u679c `module-id` \u5bf9\u5e94\u7684\u662f `dojo` \u7ec4\u4ef6\uff0c\u4f18\u5148\u53d6\u7ec4\u4ef6\u7684 label \u503c*\uff0c \u914d\u7f6e\u9875\u9762\u663e\u793a\u7684\u540d\u79f0\r\nmodule-fixed | boolean | false | true \u914d\u7f6e\u9875\u9762\u4e2d\u6b64\u9879\u4e0d\u80fd\u52fe\u9009\r\nmodule-invisible | boolean | false | true \u914d\u7f6e\u9875\u9762\u4e2d\u6b64\u9879\u4e0d\u663e\u793a\r\nmodule-group | string | | \u914d\u7f6e\u9875\u9762\u52fe\u9009\u65f6\uff0c\u540c\u7ec4\u4f1a\u540c\u65f6\u663e\u793a\u6216\u9690\u85cf\r\n\r\n![avatar](https://dengrc.github.io/lkdocs/image/pc/QQ\u622a\u56fe20191224144451.jpg)\r\n\r\n## \u67e5\u8be2\u6761\u4ef6\u90e8\u5206\r\n\r\n```html\r\n<div class="itemfield-row">\r\n    <input name="keywords" class="" type="search" data-dojo-props="label:\'\u7b5b\u9009\u6761\u4ef6\',value:at(\'rel:\',\'keywords\')" data-dojo-type="dijit/form/TextBox" data-dojo-mixins="desktop/widgets/ItemField" placeholder="\u5546\u54c1\u540d\u79f0/\u8d27\u53f7/\u6761\u7801/\u89c4\u683c/\u578b\u53f7">\r\n    <button type="submit" data-dojo-props="label:\'\u67e5\u8be2\',title:\'\u5feb\u6377\u67e5\u8be2\uff1aF2\',onClick:lang.hitch(this,\'onQueryClick\'),class:\'btn-query \'" data-dojo-type="dijit/form/Button" data-dojo-mixins="desktop/widgets/VisibleMixin"></button>\r\n    <div name="shownotused" data-dojo-type="widget/FormField" data-dojo-props="label:\'\u663e\u793a\u65e0\u4e1a\u52a1\u6570\u636e\u5546\u54c1\'">\r\n                            <input name="shownotused" type="checkbox" value="" data-dojo-type="dijit/form/CheckBox" data-dojo-props="checked:at(\'rel:\',\'shownotused\'),onClick:lang.hitch(this,\'toggleTreeState\')">\r\n                        </div>\r\n</div>\r\n```\r\n### \u76f8\u540c\u70b9\r\n\r\nmodule-label-selecotr\u3001module-fixed\u3001module-invisible\u3001module-group\r\n\r\n### \u533a\u522b\r\n\r\n1. **class="itemfield-row" \u76f8\u5f53\u4e8e module-set="input"**\r\n\r\n2. **.itemfield-row \u5b50\u5143\u7d20\u9664 button \u5916\uff0c\u90fd\u662f\u53ef\u914d\u7f6e\u5143\u7d20\u3002name \u4ee3\u66ff module-id**\r\n\r\n3. **\u7b2c\u4e00\u4e2a button \u4e4b\u540e\u7684\u5143\u7d20\u4e0d\u80fd\u6392\u5e8f**\r\n\r\n![avatar](https://dengrc.github.io/lkdocs/image/pc/QQ\u622a\u56fe20191224144546.jpg)\r\n'}});
//# sourceMappingURL=8.fd96c99f.chunk.js.map