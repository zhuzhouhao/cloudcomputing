!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealFragmentGroup=t()}(this,(function(){"use strict";return function(){var e,t,n=[],r="fragment-group";return{id:r,init:function(o){e=o,t=scriptPath(r),loadResource(t+"fragment-group.css","stylesheet",(function(){})),e.on("slidetransitionend",(function(e){var t=n.length;t>1&&n[t-1].classList.remove("current-group");n=[]})),e.on("fragmentshown",(function(e){var t=e.fragment;if(t.hasAttribute("data-fragment-group")){t.classList.add("current-group"),n.push(t);var r=n.length;if(r>1)n[r-2].classList.remove("current-group")}})),Reveal.on("fragmenthidden",(function(e){var t=e.fragment;if(t.hasAttribute("data-fragment-group")){t.classList.remove("current-group"),n.pop();var r=n.length;if(r>0)n[r-1].classList.add("current-group")}}))}}}}));
