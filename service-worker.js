"use strict";var precacheConfig=[["./example.html","045716620225f9f4f5550fac27fad50f"],["./index.html","1c3aad51232c9877ce70aeabbc1cd724"],["./static/css/index.bc905884.css","ffedfd558b5e8df7d2760ea42253f823"],["./static/css/zh-cn.bc905884.css","cc1ee3f5ee5ef569eb24eba702cf56cf"],["./static/js/0.714c52cd.chunk.js","42e4ca9ea888359dbbff222a05ad1063"],["./static/js/1.b4e4183b.chunk.js","3bda28c88f3e0970d16662ae2cbbb36a"],["./static/js/10.b6cff11a.chunk.js","8c262b3ccdde67b40184966302cccc32"],["./static/js/11.b123ed2b.chunk.js","0882c9e1fd012d5fb688f52bcc00b688"],["./static/js/12.f8bafbe5.chunk.js","ce29c0ebc5569197e9f31a1cdab7eca4"],["./static/js/13.430b2cd5.chunk.js","d9e951cd3c5effdc3d49367267ba64e1"],["./static/js/14.0b5be26e.chunk.js","01c47fe329aa405abb38554d1a26074a"],["./static/js/15.639bd4ae.chunk.js","deb2c075741fbaac11921cc4851ec367"],["./static/js/16.a57103d5.chunk.js","2cd6163ce36ff12835d73a3b2fe64aa2"],["./static/js/17.6ce19c9d.chunk.js","73e63dfef34ddc74d13f7d2cff17d1cc"],["./static/js/18.11bdd24f.chunk.js","1a96be2f77004b74c37ffdfbf432e875"],["./static/js/19.92f623d8.chunk.js","6d0ca716262946ac8d68d26ce383d492"],["./static/js/2.55884c98.chunk.js","597ce07e28b70f854f796309169fb3a3"],["./static/js/20.99dc3b57.chunk.js","d6b7d2bdb8e4684bb9c02750ec627aa6"],["./static/js/21.5fb77ae2.chunk.js","cd8df3df5958123c280b9415192c0ceb"],["./static/js/22.2df43870.chunk.js","3f6e91e8ca819c26f495252e5770459d"],["./static/js/23.532ad57e.chunk.js","df5075aa1e9ba9ff03abbb235f3f7cb4"],["./static/js/24.1161fec1.chunk.js","252f7db5761e51b7ebfa827d1c9ed5f3"],["./static/js/25.56bc2513.chunk.js","9968684a903539ac33ad90429ff137a0"],["./static/js/26.1934e8f7.chunk.js","60a372d1d96e9ed108ad2b3986cb73b4"],["./static/js/27.859aa8a1.chunk.js","233d6d3cce8217d8f0da2a5b9d30c8fd"],["./static/js/28.21a205f5.chunk.js","aa8ba5ca2fc257a277186452284cf774"],["./static/js/29.901be312.chunk.js","21af866c1d45eda3a18ec50ee11c8128"],["./static/js/3.d479308b.chunk.js","a8af03689196d83686baa284d78ea48b"],["./static/js/30.ba003ad8.chunk.js","c977aac39ecf96511e8fbd5527379ce7"],["./static/js/31.191c527c.chunk.js","5890d1eb2f1658868a3717e425d833bb"],["./static/js/32.28d3135c.chunk.js","d2cca51763b5d56a650213fcbeae851e"],["./static/js/33.1a3a4e62.chunk.js","dd9aca99987b8bb32f19d1b69ab06178"],["./static/js/34.ddf50bd5.chunk.js","c82837f8ab3cc6dfc4bd256c3a3907f7"],["./static/js/35.0f9c211a.chunk.js","c80a60618328b3d6560b99779cd57db6"],["./static/js/36.2728d5c9.chunk.js","cb4690577e3082dcb24852a459b94453"],["./static/js/37.af88ca6c.chunk.js","d206d8a158a4b5a21e2385fa0f0576f8"],["./static/js/38.3e464af6.chunk.js","52ac776ba6a6da838031b6a2e52e7b4f"],["./static/js/4.ff5c02dc.chunk.js","8dadbc9ed288f6cbd01cc7a06c47d03b"],["./static/js/5.930d59c3.chunk.js","6c8e4d98bfc5620a4e7ac33c3f13d6d9"],["./static/js/6.c57c029a.chunk.js","64b7302aefedc06a358f7e2ffce9db40"],["./static/js/7.ddb7f4bb.chunk.js","4c1f311e455b1bcc3aec1ff1725df8bb"],["./static/js/8.1426e860.chunk.js","cba3a44b30412528103957649b4efddd"],["./static/js/9.30010136.chunk.js","83445161fd3070917ece7e374bdc55df"],["./static/js/example.a6d865e0.js","7380cd78f6c9e54d902db5a1520626a4"],["./static/js/index.65e395ae.js","78d7bc63c4f34eb36d46d9af7a301f71"],["./static/js/zh-cn.98b9d695.js","954dd15248378401e45441a26821cffc"],["./static/media/logo.a2aa6d71.svg","a2aa6d7192f167a96d5dfcacab67da2e"],["./zh-cn.html","5bf8e96ff7cd10d28ec2ce9ce95698b1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});