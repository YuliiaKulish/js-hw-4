function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("5a6Bh");const u=document.querySelector(".form");function l(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();let n=Number(u.delay.value);const r=Number(u.step.value),o=Number(u.amount.value);for(let t=1;t<=o;t+=1)l(t,n).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t))),n+=r;u.reset()}));
//# sourceMappingURL=03-promises.8183c388.js.map
