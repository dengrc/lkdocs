webpackJsonp([0],{39:function(e,i,n){"use strict";var t=n(93),r=n(94),c=r.readFile,o=r.readFileSync,a=r.writeFile,u=r.eachFile,f=r.eachDirectory,s=r.fileCopy,l={js:"javascript"};f("./",function(e,i,n){if("md.source"===n.toLowerCase()){var r=i;t.existsSync(i+"/code/link")&&(r=o(i+"/code/link")),u(e,function(e,n,t,u){"md"===u.toLowerCase()&&c(e).then(function(e){a(i+"/md/"+t,e.replace(/```.+\..+\s/g,function(e){var n=e.replace(/```/g,"").trim(),t=n.split(".").pop().toLowerCase();s(r+"/"+n,i+"/"+n);var c=o(r+"/"+n);return"```"+(l[t]||t)+"\n"+c}))})})}},!0)},93:function(e,i,n){"use strict"},94:function(e,i,n){"use strict";function t(e){return new Promise(function(i,n){s.readFile(e,function(e,t){if(e)return void n(e);i(t.toString())})})}function r(e,i){return new Promise(function(n,t){s.writeFile(e,i,function(e){if(e)return void t(e);n(1)})})}function c(e){return s.readFileSync(e).toString()}function o(e,i){s.writeFileSync(e,i)}function a(e,i,n){e+="/",s.readdir(e,function(t,r){r&&r.length&&r.forEach(function(t,r){var c=e+t;s.statSync(c).isDirectory()&&(i(c,e,t),n&&a(c,i,n))})})}function u(e,i,n){e+="/",s.readdir(e,function(t,r){r&&r.length&&r.forEach(function(t,r){var c=e+t,o=t.split("."),u=o.length>1?o.pop():"";s.statSync(c).isDirectory()||(i(c,e,t,u),n&&a(c,i,n))})})}function f(e,i){s.createReadStream(e).pipe(s.createWriteStream(i))}var s=n(93);e.exports={readFile:t,writeFile:r,readFileSync:c,writeFileSync:o,eachDirectory:a,eachFile:u,fileCopy:f}}});
//# sourceMappingURL=0.32d629c0.chunk.js.map