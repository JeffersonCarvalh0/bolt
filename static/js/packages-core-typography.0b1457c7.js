(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./packages/core/docz/wrapperPismoTheme.tsx":function(A,e,o){"use strict";o.d(e,"a",function(){return B});var n=o("./node_modules/react/index.js"),t=o.n(n),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./packages/core/createGlobalStylePismo.ts"),l=o("./packages/core/styled.ts"),c=o("./packages/core/themePismo.ts");function r(){var A=function(A,e){e||(e=A.slice(0));return Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(e)}}))}(["\n  ","\n  background-color: #fff;\n"]);return r=function(){return A},A}var g=l.c.div(r(),function(A){var e=A.theme;return Object(i.a)(e)}),m=Object(a.withTheme)(g),B=function(A){var e=A.children;return t.a.createElement(l.a,{theme:c.a},t.a.createElement(m,null,e))};try{B.displayName="WrapperPismoTheme",B.__docgenInfo={description:"",displayName:"WrapperPismoTheme",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/docz/wrapperPismoTheme.tsx#WrapperPismoTheme"]={docgenInfo:B.__docgenInfo,name:"WrapperPismoTheme",path:"packages/core/docz/wrapperPismoTheme.tsx#WrapperPismoTheme"})}catch(p){}},"./packages/core/typography.mdx":function(A,e,o){"use strict";o.r(e),o.d(e,"default",function(){return E});var n=o("./node_modules/react/index.js"),t=o.n(n),a=o("./node_modules/@mdx-js/tag/dist/index.js"),i=o("./node_modules/docz/dist/index.m.js"),l=o("./packages/core/typography.ts"),c=o("./packages/core/docz/wrapperPismoTheme.tsx");function r(A){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"===typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function g(A,e){if(null==A)return{};var o,n,t=function(A,e){if(null==A)return{};var o,n,t={},a=Object.keys(A);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(t[o]=A[o]);return t}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(t[o]=A[o])}return t}function m(A,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}function B(A,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(A):e}function p(A){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function s(A,e){return(s=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}var E=function(A){function e(A){var o;return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=B(this,p(e).call(this,A))).layout=null,o}var o,n,r;return function(A,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&s(A,e)}(e,t.a.Component),o=e,(n=[{key:"render",value:function(){var A=this.props,e=A.components,o=g(A,["components"]);return t.a.createElement(a.MDXTag,{name:"wrapper",components:e},t.a.createElement(a.MDXTag,{name:"h1",components:e,props:{id:"typography"}},"Typography"),t.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"global-settings"}},"Global settings"),t.a.createElement(a.MDXTag,{name:"p",components:e},"All elements of Bolt have defaults that comes from the theme:"),t.a.createElement(a.MDXTag,{name:"ul",components:e},t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"fontFamily"),": Lato"),t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"fontSizeBase"),": 16px"),t.a.createElement(a.MDXTag,{name:"li",components:e,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"lineHeightBase"),": 1.5")),t.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"available-components"}},"Available Components"),t.a.createElement(a.MDXTag,{name:"p",components:e},"4 Heading sizes"),t.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbreDeuAdpGAJ9gLXaUib0oQGiwzfQ7CgCAPEyARkikAnVxRkmkMJ4nkN68nKepqZPg3GgGaZlm2ckfnOdrEnU3MvnFcF9gqZp0XqHp9hGeZ1xWbrGXUzlxMYPQ3mSfNsmKbV4XabFggJb1g32fNuWpDRuZZMxxSYFxqRodh-HEdmqRwY-sxvxAKiaLohicEdoDdFAgxwOYn6htgHJjREz1M-ybSA106h9PzuBLEoNiYAgFJCEayN86uVEZxSTkm7RAoQYsmsasG4z4AiKua8IfVZka7uUcZ2uCCuZN7Ps9yUa6FJQigfWrnQ-fF9rLx2quAB2LfVw8NediuABOI_Id-_7V5n9hN4X9YXvWLoCD6cwy8H6vp9HmYAG1844GyozAgT55Scn_vZAAuuwAAPnA-UmBb6A3aNAyqOlvoOjQLQAQ_1Eo3n8LEVKlAhwTyNCBSasALrtxbhgouWCRYlymPBRq-d0D4DgowQh-RyAkLuGIYooUQIWnyCVK4SEcD2X3gAVi6EQVU-UREjB_oQK4AASYAzUKGFX7o1do515DdW4L1MuFch7T0jAVAgVCYCcnkIoiw1jRH9w0Vo6C1jbH6MMcY3qnj-7APJC8cBb5_5wVgQg-UPwBD4QpoooRDCsAsSLKgfSyE2H9w4XgJC3CiF8MHHAQRwiaCiOKqVOCOB95ITkQJRxOjLQqOHvfTR2j_FTW8V1EGZjK6qLAW02A9i6nOMbuwFpHjKF6LMgYzpJj6m2MCaAkJkDwnwMQe0aJsSHFmASV9JJP1e4wWTBkqaWTky5N4fwwpCSnEiLEeUnA6FkyyPkUM5RvS3GtIme0qZPiun93Lj0ppVivkDK2UokpIyxlzMmfKX5sz-n_hAcE86oSVmRPWcKTZ8TMF7IdAc9Cxys74HQuc4hBSingstHcq4FSkIvOKQ095oz3HQu-bCmZpj_nmN6cC3RU1BkMpcVND54y-WwA6UYkGCKFnIogWEiJayNnxDidsnFyTe5YUJdkHAMxSX5NIVcwVjTp4itZeKn5HK-5TQBRYwgvKbH9wFZSoVsBTUIolb4s1iKglgJRcshVUTMXKrBTsl0uKmGpKmHheIUAtUcPkjGvVlyKU3IhWUq49kcAAA5kxwWqfSnu1NhSmomAJbokrZmluPDgaxjgoDCmjQkMFqbGVNLdSC7oFqK2cutdyoFCKnUtpdaVKF7qu2eulUi31cq0WKqDVAFVqBQ2MJSfpIiqBkhmXYcA_CUAk3kuufU0p4j2CZoCufJ5NSFFGqZaOjtHq_m9sBZYgdzaj2QpZWO9l3avUyunaigNGKYnBuxagKO40pIyQEHJBS2N_yOywEnEC-gGDpwdNDDSCpzSFzQ6xAseBfZCRzvKdhFpNaZkdjhlS0EPCUi8aRYjFFPTkDNLQAA4vW2jUBbEwcoFR5J7CljQV9iQv404iPuiY5Idh_GfrQSrTAXjEnyI4EonB3jhczC909nCONOAZCHqhQpy1tG4AwFsZGBT9j1i0Z2LRNoGAyNFvLOwAAxGADzoGtPMJSv4OAXizL4d9pGHTGRPphvVT50L0GfZwfri1NqT1LXRleiJoQYmMgEjLaNBTvGZqrkYFhPztixDzUS-GeQUgitwH8_3UOkg0u_C4BkCOYGlAgG3YnbQycUNpxUkYEIRJMnri1uLTDpHyP01kw6Ab_gsuCUY2pstGnqo-fIcggG99BPrDOHAbeLGJTsc4_EWx29tgwESDKH08Bt6NYywIbeQW4PuVIlu4bTpRuO0G1arOI2KNwBwL7dAtj0B_fpvqJwq8YCMAU4DuDDQ9B4MlH7NVcmeg1aWAdrIHHKBcdO-wc7l3MjHj21YdT6XmsPfzHiQjL0V0bbvj97Ikd2tY6O7jk7_deMJy0BQZDYEILJOgkqxmJVlMiSFIzOAmx0DTdYkDnHePhtrxq5c8XJHMlObpuLTTqBcPmR6KxmAivOdTSWE9st6vRIybtGj32CPcH4PLZhpbx4VuJOSTHbobPjfHe41zzGDR669FRJEWxtCCieoV37kH9gVdwEuYwYASgydlodxkJ31ZdmRcjewUz5mYWWbg1ce3iOneeuagyyKRBopXFh9Y6v0V9vObr3BmtIE63Cm3tY6l83_yeLKTwmA29GYuhgky2Ho-YDj6aUP7etntj2eOqDlvfecAL6Xxgbemw23yjgvPAApHlIxqO8U-Z9yb_3U1eMPSN5fnjgfg95AiEQALsLfHrAt8eSMF-Y_90M8ACLmUndC9BYAAAL659BQBPiEC3D3CPA96njCBYgSgzC2AfCRCAg1YXT_Q15JDcAAAy0QlAiAc8C8ZBEAigj8VB88lBh8C89BlBl8C8zBEAb4ii6whAJASwXg6AiQSwrmQgIgAhQg4QmW5CFgRmcWP6-eFmVmoBJE6wmiIeL-tiL0xQ74UcuWmMPOSGegAuK6OCGeyOqex46eSOiU5CG-ohGAEes46wA4Ao-sMUfcdClKneLmzcBQDKHhjaUAdhhQlKjeSQARDKRUJUQ-oRNYU-M-08kRrh3hz0p-Ea-k2h8kI4ZkVhkoi-Nh6Adk7mrg_0_0eUFgjhVkLh7Qrm2oAU2otU54SEJR9SHh-RSE5AyYAU6E6EjRtazmfh-RWa56SErgAU3REUUUIR7A_A7QRBEQbkg07gcAoiGQEAYA6UYRg-lIdkcEQUrkI-aA0-vS8R7QFSMix-LOygOU2wrgaQAEcA1AehKcDA5C_AqA12_AVw_AQIxIVQ3gGQFov45ITIIA28_ArAGQ-Q1A7xkxIAmasJaxNY_A5QLGEAMwp0UJ_AtUg0zE4qAJ4qmA5IlAiQeYeQncZoUoTm5QIIvxAg8JFg_AUQaA6JKgEYGgcAtJ0J-JdAmAukEA8AUJEh0JZJogSA0J2x2aOAcE7JdJHWmuk24sTJAAeuhBKTgMmFKdCZLrYDLoqZIsmKqeqfwEKVaJEEyWKVmhKfwM_JVFHN8dUBgagJACkLcfcd1vzqnCABZNHAJOSFkO8Z8UbhaEaejPwPIAoPIPIEAA",__position:0,__code:"<WrapperPismoTheme>\n  <H1> {'<H1> -'} Bolt components library </H1>\n  <H2> {'<H2> -'} Bolt components library </H2>\n  <H3> {'<H3> -'} Bolt components library </H3>\n  <H4> {'<H4> -'} Bolt components library </H4>\n</WrapperPismoTheme>",__scope:{props:this?this.props:o,H1:l.a,H2:l.b,H3:l.c,H4:l.d,P:l.e,Small:l.f,Tiny:l.g,WrapperPismoTheme:c.a}},t.a.createElement(c.a,null,t.a.createElement(l.a,null," ","<H1> -"," Bolt components library "),t.a.createElement(l.b,null," ","<H2> -"," Bolt components library "),t.a.createElement(l.c,null," ","<H3> -"," Bolt components library "),t.a.createElement(l.d,null," ","<H4> -"," Bolt components library "))),t.a.createElement(a.MDXTag,{name:"p",components:e},"2 Small sizes"),t.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbrPD4igXrgHaRgCYSXqLXaUib0oQGiwzfQ7CgCAPEyARkikcmidXFHGDZ9gt152tGCI1BEmJ0mxYl9gqZpumpk-DcaGZ1n2c5yRpdxnc0bmWTMcUmBcakaHYfhxHZqkcGPrMb8QComi6IYnACC0CgQP0BhmJ-obYByY0RM9X3sm0gNdOofTg7gSxKDYmAIBSQhGsjYOrlRGcUk5NO0QKEGLJrGrBuM-AIjjhPCH1WZGvzlGWcTggrmTez7PclGuhSUIoFcct2HQ5vW9rLx2quAB2fvVw8LudiuABOcfId-_7O4b3v54sF71i6Ag-nMKPS_j-vK5mABtYOcGylmCCfeVOWP-yAF12AAHyf-VMCXwH2nvyqdO-h00FoAIf6iUbz-FiKlSgQ4a5GhApNWAF1s4Zx_mHP-isI5THgo1YO6B8BwUYKA_I5AIF3DEMUUKIELT5BKlcJCOB7IjwAKxdCIKqfKFCRgH0IFcAAJMAZqMDCrF0au0c68hurcF6lHGOZd66RgKgQOBMBOTyFYRYeRlDi48L4dBeRijhGiPEb1XRxdz7kheNfN8x84KPxfvKH4Ah8LU1YWQlBWAWJFlQPpZCWDi44LwEhfBYCiGDjgKQ8hNBKHFVKnBHAI8kJMIEqogRloOHlxXrw_hxipr6K6iDKRsdOFXyybAZRST1Gp3YBknRsChFmREbkiRyTFGmMvhY2-1jn6v3aPYxxKizAuK-m4n6hcYLJh8VNPxyZAmEOIaElxaiKFUOiTgdCyZGHMLKewwpWjMk1OyXUgxeTi7RwKWkuReySl9LYREipVSmm1PlIcxpxT_wX3MedSxHTbHdOFL05xv8hkOhGehcZft8DoWmeAkJYTrmWiWVcGJSENnhJSdsyp2j7n7MeQ0yRxzpGFPOYIqapSUUaKmjs6pRLYA5LESDF5LT3k3ysTYrpPT4hOP6QC9xhcsKguyDgGYkLgmQLmaS1J9cKWYupQcnFRcponJkYQQlCji4kthWS2AkqXk0sMVK15Zir4fPaSyuxvz2VXIGS6QFaDPFTG5nynB8lCZCtmTChZNyolXHsjgAAHMmOC8TkUFzpsKSVEwBLdFpY08Nx4cDyMcFAYU3MrnutRWkrVFzugyqjbi-V-KzkvLVamjVpU7nauzbq-lbzDVMq-ays1UAOWoEtagjx-lpYOvPvhKALroXzOSZE6h7BvUBRnmshJLCxVorLZmnVRy82nNkYWlNA7bkYvLdinNeqGU1s-San5DjzX_NQHbcaUkZICDkgpbG_5XZYCAroUCBhwLewdNDDSCpzSh1faxAseBDZCQDvKbBFolbUCZt-lS0EPCUj0aRIDFFPTkDNLQAA4ommDUBFFXsoJB9x2CljQUNhAv405APukQ5IbBeGfrQRjTAHD5HyI4EojenDoczCF11nCTtMh-13Po7KmDcAYCKMjPR5R6wYM7Fom0DAoGQ09wAMRgFU8ezj6CUr-DgHosyf7DaRm4xkT6VruWaaM5eg2N7k4tTak9WV0ZXrEaEKRjIBII2jXozhmaq5GBYW04osQ807PhnkFIfzcAdPF0tprNjLmuAZBtiepQIBsEuzdsBPQYEILuKMCEIkvj1zgZVh-kDYHMyuxow6PL_h3OCQQ6xiN7Hqqaege_AGK8CPrDOHAAeyGJRoYw_ERRA9tgwESDKH08AB7Od-AlgQA99M3vcqRMy2CisVbsLV9bTpiuuxwIbdAij0AbaZvqJwncYCMHowdm9DQ9BAMlEbLltGeiRaWP1rI6HKCYZG-wMbE3MjHl61YOLc3pxLCWxGkigz3HteXnKv2tsUufcGz94bxccPpYfR7bLP7zLsDZSzEqTGRJChZnATY6AqusUO9937hWu6RdmaT4DviFOMxVhx1A-OWooZgPTjHU1Id4gA_BijQdfE04J4be7gDgGRo_Y148zXXHuIdt0VHAuhtYcx5jBoydeiokiIoxBBRdV0518d-wTO4CzMYMAJQoOI1y4yAr6ssPhmaeE6Jh54mb1XFlw9hXurmoosikQaKVwbvyIj9FPrino83rjSBBNwoB7yPhXV_8uiokEJgAPFmLoYJopu0XmAJe0n54HtJ7YsnjoncT9nnAtf68YAHpsdN8o4LNwAKR5TES9oFmmteC911NHDD1-dj-w_rw3eQIhEF048wx6wofHkjKPq3xd-PACJ1Eu6L0LAAAF8d9CgE-Qgtx7iPEz6eYQWIJQzFsB8SIgJIsXX-pHpI3AAAy0RKBEAm4W5gCIBFA-4W4ICwCx4W4YCwC54W4ECIA3xWF1hCASAlgvB0BEglglMhARBcChBwg3NoELABNrMt0fcxMJMj8YcaxeEjdF9FEXpih3w7YvNMZsdtBH1PZwJW0AE3cntndjxXdHtEpoFW8iCMAzdZx1gBwBRu4Yoi4kFYU08e504CgUU1DuYZDChYU48khdCUUioSp88jCaxy9K964zDlDNDnoh8bV9IOD5IRwzIJDJQ68pD0A7IVNXB_p_o8oLB5CrIlD2glNtQAptRapzwkJAjkk1CfCkJyBkwAp0J0I4j41FMdD5QlMfVR0kJXAAoMiIoopDD2B-B2h_8Ig3JBp3A4BKEMgIAwB0pjC89KQ7I4IgpXJC80AK9CkbD2gYkGEB9kdlAcpthXA0gAI4BqAccstn0QBoF-BUApt-Arh-AgRiQqhvAMgLRfxyQmQQAB5-BWAMh8hqA1jyiQBvUbiWiax-ByhkMIAZhTpLj-BapBpmJqV9jqVMByRKBEg8w8hc4zQpQFNygQQdiBA7iLB-Aog0A3iVAIwNA4AYSri_i6BMBdIIB4BLjSCrjQTRAkArjOjfUcA4I0TYTUt2dysmZESAA9dCcknAZMSkq48nWwKnBk2hZMFktk_gQkq0SIRE0kn1ck_gdYF6eQO2LY6oV_VASAFIaY2Y7g3HBYiye2ASckLINYjY_nC0QU9GfgaU-QU0oAA",__position:1,__code:"<WrapperPismoTheme>\n  <Small> {'<Small> -'} Bolt components library </Small>\n  <br />\n  <Tiny> {'<Tiny> -'} Bolt components library </Tiny>\n</WrapperPismoTheme>",__scope:{props:this?this.props:o,H1:l.a,H2:l.b,H3:l.c,H4:l.d,P:l.e,Small:l.f,Tiny:l.g,WrapperPismoTheme:c.a}},t.a.createElement(c.a,null,t.a.createElement(l.f,null," ","<Small> -"," Bolt components library "),t.a.createElement("br",null),t.a.createElement(l.g,null," ","<Tiny> -"," Bolt components library "))),t.a.createElement(a.MDXTag,{name:"p",components:e},"Paragraph"),t.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbrLDeuAdpGAJ9gLXaUib0oQGiwzfQ7CgCAPEyARkikAnVx3NG5lkzHFJgXGpGh2H4cR2apHBj6zG_EAqJouiGJwAgtAoED9AYZifqG2AcmNETPW17JtIDXTqH0w24EsSg2JgCAUkIRrI0Nq5URnFJORdtEChBiyaxqwbjPgCIbbtwh9VmRrfZRxn7YIK5k3s-z3JRroUlCKBXHLdh0MT5Pay8dqrgAdlz1cPAznYrgATlLyHfv-9O4-z2uLBe9YugIPpzAt4Pbdj8OZgAbUNnBssZggn3lTlB_sgBddgAB8F_lTAG8B9pZ8qnTvodNBaAEf7EpvfxYlSyghyjo0QMm2ALs9t2t5Nnepn9-DGsN9B8Dgxhj_ycgz7uGIYooUQIWnyCVK4SEcD2SLgAVi6EQVU-VQEjD7oQK4AASYAzUr6FUDo1do515DdW4L1C2VsQ6x0jAVAgN8YCcnkEgiwNCwGB0wdg6CNC6EEKISQ3qXDA6j3JC8Seb5B5wXnkveUPwBD4Qpkg4BT8sAsSLKgfSyF36B0_ngJCP8T7_0HHAIBICaBgOKqVOCOAi5IXgQJJhuDLSoNDk3LBOCBFTR4V1EG5DrZoInu42ADD7EsOduwVxnDr74LMoQrxpCHF0KEePUR08JGL2Xu0GRcjGFmEUV9ZRP1X7Jk0VNbRyY9F_wAUYxRzDQHgIsTgdCyY4EIOCSgvx7C3GRI8dE3h3jA6W18c46hXTAnZOQaY0J4T4lRPlL0uJAT_xjxEedMRqSpEZOFFkhR298kOlfuhYpOt8DoXKafQxxjxmWjqVcSxSEWkmMce0sJHDpndNmbEsh_SKF-OGXgqaQSHmsKmh0iJfzYCeOISDBZiTllT3EZI9JmT4jyJyTslR_ssKHOyDgGYpyDHnyqYCpxscQWvPBT0j5AcpoDMoYQX5tDA4AsuUC2ApKFkQr4WSxZwiJ4rJSQi6RmzkVjNyS6XZL8zZTDwvEKAWLP7yRlXiypFyakTPMVceyOAAAcyY4I2PuX7amwpSUTAEt0SFcTTXHhwDQxwUBhTSoSGM1VjznFspGd0ClFrPnUu-UMhZTKXUstKlM9lXrOXQqWbyuFazEVCqgCi1Aorn6qP0kRVAyQzIf1HvhKASrznVIcWYiB7BNUBSrk02xiCiVPNDR6jlfTfWDKoQG51RbJkvLDe871XKYXRtWQKjZsjhXbNQDLcaUkZICDkgpbG_5lZYCAroUCBhwKawdNDDSCpzTG3XaxAseB-ZCT1vKD-FpPgbhoHAXdKloIeEpNw0iJ6KKenIGaWgABxe196oB0JnZQG9KiP5LGgvzM-fxpzHvdC-yQH9AM_WglamA_6oPkRwJROd_7jZmH9tzOEcqcAyELVMpDlL71wBgHQyMSGGHrHvTsWibQMDnqNVnAAxGATjo6cOSpSv4OA3CzIHv5pGPDGRPpivRbxsT06-Zzsdi1NqT1KXRlemBoQEGMgEjNaNJD_6ZqrhJvxuhYh5pKfDPIdmxnA7i0kOp34XAMhSzHUoEA2blZLrVmBCCKijAhCJFo9c1B6ZbrPRe4LV74MOj8_4bTgln0YbNVh6qvHL6rwBk3YD6wzhwDzm-iUn7v3xDoXnbYMBEgyh9PAPO9nNMCDzsJud7lSJZsC06CLyt_NUp1kFzMyscD83QHQ9AvX6b6icOnGAjAkMDbnQ0PQB9JQCzRQhnocBcs9HfTAL9lAf0lfYGVirmRjwbdq45-r-Y8RHpeim9LjduvZGlq5_LWQdt7cDv-pWKtgJ6G83u8y7AkWMxKqhkSQpGZwE2OgKLrFBtveK4FjO63Kmg9PVoljdNIs6X-y1Lb8Pf2ByWI1s1qPRJwbtKt_m8396H3NVuxLx5ktKJUXLboL3Cu7YR1Nf9DRHa9FRJEOh98Cicrh0VgnJT7BI7gJUxgwAlBWDmwt2n1Y8lSbUVMcjlGZnUbnVcKnyulucuag8yKRBopXBmzQs30U8usct3Om1IE7XCjzjQ65cX_xcPMb_GAedGYuhgk8mbAeYBB-cb7vO9HtiMeOiN-3nucDR9jxgPOmw3XyjgonAApHlYhK29m8fZ9t8Xf7MYPTx6Xj7mNedmUjPziIRBBOzL4esYnx56-V85xL2AxHgBA_MXdF6FgAAC_2-hQCfIQW49xHju9PMILEEoZi2A-JEQE62Lr_XN0kbgAAZaIlBEAJyTifiAigc5J0v-fkuSdb_n5rknR_EA3xIPWIQEgSwvDoESEsNjQgRA_8hBwgtNL4LASN5Me0tcqMaNh8SJ1gsEG9BdA4Xpih3wZY9NMYvtPNftV0QAU094MhadFczVqciCltzI6NJQY9gCMBhdZx1gBwBRM4YoA4H5LkXcs5XYCgHlODHUoB6DChLkbckhBCHkioSpfcxCaxQ9w9Y4pC2CeDnoC8JUNdPcUMzJL5k9aD0A7IONXB_p_o8oLAmCrJWD2g2NtQAptRapzwkJjCHFOC9CkJyBkwAp0J0IHDbVWN-C9CtVy0kJXAAovCIoopRD2B-B2gD8Ig3JBp3A4AwEMgIAwB0pxCfdKQ7I4IgpXJ_c0Aw8_EFD2hLFYE88ntlAcpthXA0gAI4BqAcCV0GBL5-BUAqt-Arh-AgRiQqhvAMgLRfxyQmQQA85-BWAMh8hqA2iIiQBNUZjUiax-Byg30IAZhTpJj-BapBpmJwV-jwVMByRKBEg8w8hvYzQpQWNygQQeiBA5iLB-Aog0A1iVAIwNA4Abipi9i6BMBdIIB4BJiwCpjTjRAkApisjtUcA4I3jbi3N0dws-tXjgT-AAA9dCcEnAZMSEqY8HWwKHR4xEqBZMNEjE_gQEq0SIR40ErVcE_gdYF6eQGWLo6oNfVASAFIGouo7QZddWcCCyWWASckLINojorbC0Ek9GfgOk-QSUoAA",__position:2,__code:"<WrapperPismoTheme>\n  <P> {'<P> -'} Bolt components library </P>\n</WrapperPismoTheme>",__scope:{props:this?this.props:o,H1:l.a,H2:l.b,H3:l.c,H4:l.d,P:l.e,Small:l.f,Tiny:l.g,WrapperPismoTheme:c.a}},t.a.createElement(c.a,null,t.a.createElement(l.e,null," ","<P> -"," Bolt components library "))),t.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"styles"}},"Styles"),t.a.createElement(a.MDXTag,{name:"p",components:e},"Use the prop ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"fontStyle")," to style the Typography"),t.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbrLCjRAyaRv4KAIBSQhxFXPHzPaRgCYKghiZgPgQDJinRBAXqLXaUib0oQGiwzV1gDprCxF59h2cpyG8akcXqdrenCcK4yWdJ8nCE4Ah4liKnZZp0XlcZ5nWel8cdbJ8hxHYHm-YFqZPg3LMjfFyXze13XrYNpXJAVn3E39mmUdd7nJf5wWneoEWxYl0iuhSUIoFcARFZ3IPg-Nom1dZhOk5Tz2rf14O5rFlWmZz_g8-To4Xi9m27fYCPHadaOXdjyXq5TtPazrouA7rP3cZRrPVam1mvHa4uS9p0eK_H_hJ_QBvw4doXnagjvSKXnv5eHpWGezheQCXwu9a5nuLFd8vTcXgWcj78-w_tyPW8zTf6bj9hT8f72S733eh8x4kxPsnHY08S7XxNpXUBkptgrxfi3YW7dP6Sw8GA-BA8AFYKAfPEB6C4Fn2thfAeV8y7QOPgQnYRCEFNzXlHd-s83bbwwTQrBQ9FZSDRnMWSmNFIwFxlIaGsN4aI1mlIcGH0zDfhAFRGidEGI4AIFoCgIF9AMGYj9IasAcjGhEp6bR2RtIBl0tQfShi4CWEoGxGAmsphmUjIYq4qIZwpE5M4tEBQQYWRrDVQaatUTWNsRzfUsxGo-JRubK4yZ7L2XcijLu5Z2DoVifE2sS8rgAHZUmriodsK4ABOHJstMD_STgQK4KS4nrBeusLoBA-jmAsREGxdjQkzAANqGJwNlMmBAnzyk5B0-yABddgAAfcZ8pSkA1fCMyqOlvoOjQLQAQ_1Eo3n8LEVKlAhwRJvmrC6HjXELJMUsluqB9LwUaoY9A-A4KME2fkcgOy7hiGKKFECFp8glSuEhHA9lMkAFYuhEFVPlL5IxgmECuAAEmAM1A5U1GrtHOvIbq3BeoWKsa0jmkYKGwE5PIcFFhGbfLVnChF0ECXdDMqirqIMaU9PJC8AZb4OlwTGZM-UPwBD4V5uCj5ZysAsSLJcqYyEblqzuXgJCjytkvMHHAd5nyaDfOKqVOCOBMlIRBQJEl5cLRQrsZSxFNKUVooxVigJOLoX9JpUSg1ZKnHsHhWao-sALUMsxUi2AzK-lsqGZyiZUz2i8v5cSswQqvoip-n4mCyYpVTRlcmeVzzXnKqFaSr5PzNU4HQsmYFoKnWQrtaa6lHraXyktSDbFQS7H4srY61VloXVuorcAqt9L0WMsrf61l512XBu5WG4UEbBWLNjQ6eN6Ek06PwOhNN2ylUqohWq3NVwtVIWLS2o1ZbXVUt9V2mtPq624sII2ztza12topQe91navU9p9Uy3pA7Bkcq5aG8N8QBVRsnaKvxBMzK3JwDMJdirdmZt3cajm5aj1Pqtf4qalj614odZGm95KprwfNXSk9vVX0sv6YOoNX6eVjt_Zh6NLop0XP0nheIUA53ZB6fhKAEGM2ruzeujVVx7I4AABzJjgrqndviBbCngxMAS3Rn29Rk8eHAjNHBQGFIxhImGeOWlgzC-9Ha8HHu9dalDtqG0YZLeuu97aEP4eM0e_tJGP3Du_ZRqAf7UA0fOWK_SRFUDJBA9KtjTHOMrqzYajd7ABMBQKYWvVYKYP7ps3h6t9mz12svYZ692nsOwFw5WxDvbO2OcDZ-kNFG-VUYnagGR40pIyQEHJBS2N_zKKwEBXQoEDDgU0Q6aGGkFTmmMb11iBY8D8KEno-UtyLQMP0HAYbKloIeEpMzSb7oKKenIGaWgABxNTK2oDMya5QRborblLGgvwnZfxpzrfIjgAx0qzs_WgopmAJ37v6Moi1k7xizB-O4XCFjdyZDhZs-9-zK24AwGZpGd7RL1grZ2LRNoGBZuSaSQAYjALj6rAOzFTCwv4OAa2zJjf4ZGIHGRPq0cA4T9iDWTsTYcS1NqT17PRletdoQt2MgElk6Nd7J2ZqrnpiT5mYh5rs_DPIeWEu1biMkDz34XAMhSJq0oEAoHlEdbUWBCCoqjAhCJNK9cbdlEDZm3NmgC27Q_WN_4AXgkpuiWF5jf7pjxXmXWDM8pHjk1pLOHAIPO2YD7coId5maTtgwESDKH08A0kq75wINJFOWvuVIoF5N5v352Cd7cvP82cD8PQMzdAxfbf6icEnGAjB3ul5aw0PQazJQCIA69nocAQ89DDxHqPaslix_j5kY8veU9q7T_mPEE2Xreb94LW50itfbYlHtg78RjuYyUSo4CegDcjfMuwH9ZMSpfflEKMmcBNjoBew6K7LX0AD632b5OPeM0X_aNbt-83PdH5an703yOyHxnwmDnwGye2TXv1Yn4Rb1WXWTk0gMkHd3klO07wdDkW6DXyyBfxAKmhOwaEakjF6ECSIGZmOQKCQzLzwIr3sHfzgAzUYGACUCsGb1b0QOrBjXp292h1hzVmIPeyuDgI4PbyQ2ahbUiiIGiiuEb0ZikOiiD0x1kJa2UxAlU2FDSUZkizkKJg1SeRgDSTJhdBgn3Ub2MJgFMLsQMLSWR22FR2Okr2UOd3_DsIcIwDSU2BNXlDgliQAFI8p0UMD6NHYgDI9X8CDMYHowjB9Ii0CiCHFSCIhyCBD8MrV1gM9ZMSCYiIjYBwdgBT8NU7oXoLAAABI_PoKAJ8QgW4e4R4bQ08YQLECUGYWwD4SIQEHvC6f6aQpIbgAAGWiEoEQBiTiVGIgEUCqUmNiQmOyTiTmImKKTiSWIgDfHBXWEIBICWC8HQESCWCxyEBEH2KEHCH532QsAhxayh1WzVnhxa0RxrBKIPSSMiGZhemKHfBkVQN4l3z1wP26xAG8xWQyEQLYNk3gJBPbx9xrDcJOIwEoNnHWAHAFBThin8RORvQ0KSRcQKBbSxI0ygARMKBvQUKSCJJbSKhKgMPJJrAsKsI5mpPRNxOemCJ8ymG-JHDMn2VhLR3QDshx1cH-n-jygsGRKsjRPaCx21ACm1FqnPCQhFPLixP5KQnIGTACnQnQkVJU0xwJP5MExiyQlcACm1IiiijJPYH4HaEGIiDckGncDgG-QyAgDAHSgpP0MpDsjgiClciMLQEsLtUZPaC1SBUCJX2UBym2FcDSAAjgGoD-K6wYH2X4FQET34CuH4CBGJCqG8AyAtF_HJCZBADSX4FYAyHyGoHTMtJAAE1rLdJrH4HKG2wgBmFOirP4FqkGmYk9QLM9UwHJEoESDzDyC8TNClAx3KBBFzNTmLPWH4CiDQHbJUAjA0DgHrIsEbJgHmAjF0ggHgCrPOOrLHM5gzJAG9KExwDgnXNrH4B_2QWUSXIAD10JLycBkxryNyQAr9bBb8nz_lkw3yPyjytQrRIglzzzBNLz-AalKoZFszqh2jUBIAUhYz4ztBOt1FwILJZEBJyQsh0zMyw8LRjyLR0Z-B5AFB5B5AgA",__position:3,__code:"<WrapperPismoTheme>\n  <P fontStyle=\"light\">\n    {'<P fontStyle=\"light\"> -'} Bolt component {'<P>'} light\n  </P>\n  <P fontStyle=\"light italic\">\n    {'<P fontStyle=\"light italic\"> -'} Bolt component {'<P>'} light italic\n  </P>\n  <P>\n    {'<P> -'} Bolt component {'<P>'} regular\n  </P>\n  <P fontStyle=\"regular italic\">\n    {'<P fontStyle=\"regular italic\"> -'} Bolt component {'<P>'} regular italic\n  </P>\n  <P fontStyle=\"bold\">\n    {'<P fontStyle=\"bold\"> -'} Bolt component {'<P>'} bold\n  </P>\n  <P fontStyle=\"bold italic\">\n    {'<P fontStyle=\"bold italic\"> -'} Bolt component {'<P>'} bold italic\n  </P>\n  <P fontStyle=\"black\">\n    {'<P fontStyle=\"black\"> -'} Bolt component {'<P>'} black\n  </P>\n  <P fontStyle=\"black italic\">\n    {'<P fontStyle=\"black italic\"> -'} Bolt component {'<P>'} black italic\n  </P>\n</WrapperPismoTheme>",__scope:{props:this?this.props:o,H1:l.a,H2:l.b,H3:l.c,H4:l.d,P:l.e,Small:l.f,Tiny:l.g,WrapperPismoTheme:c.a}},t.a.createElement(c.a,null,t.a.createElement(l.e,{fontStyle:"light"},'<P fontStyle="light"> -'," Bolt component ","<P>"," light"),t.a.createElement(l.e,{fontStyle:"light italic"},'<P fontStyle="light italic"> -'," Bolt component ","<P>"," light italic"),t.a.createElement(l.e,null,"<P> -"," Bolt component ","<P>"," regular"),t.a.createElement(l.e,{fontStyle:"regular italic"},'<P fontStyle="regular italic"> -'," Bolt component ","<P>"," regular italic"),t.a.createElement(l.e,{fontStyle:"bold"},'<P fontStyle="bold"> -'," Bolt component ","<P>"," bold"),t.a.createElement(l.e,{fontStyle:"bold italic"},'<P fontStyle="bold italic"> -'," Bolt component ","<P>"," bold italic"),t.a.createElement(l.e,{fontStyle:"black"},'<P fontStyle="black"> -'," Bolt component ","<P>"," black"),t.a.createElement(l.e,{fontStyle:"black italic"},'<P fontStyle="black italic"> -'," Bolt component ","<P>"," black italic"))),t.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"api"}},"API"),t.a.createElement(a.MDXTag,{name:"p",components:e},"All Typography components have the props as the H1 shown below"),t.a.createElement(i.f,{of:l.a}))}}])&&m(o.prototype,n),r&&m(o,r),e}()}}]);
//# sourceMappingURL=packages-core-typography.3fefaffecb72446a0ac2.js.map