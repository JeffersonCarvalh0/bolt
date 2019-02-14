(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./packages/core/colors.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={grey:"#8692A6",grey50:"#FAFAFA",grey100:"#ECEEF2",grey200:"#D6DAE2",grey300:"#C1C7D4",grey400:"#A2AEC2",grey500:"#8692A6",grey600:"#6E7A8C",grey700:"#4F5A6A",grey800:"#2C3644",grey900:"#151A21",blue:"#3BB2DD",blue100:"#C3E9F6",blue200:"#77CFEE",blue500:"#3BB2DD",blue700:"#0B88B6",red:"#EC3853",red100:"#F4BAC3",red200:"#F3798B",red500:"#EC3853",red700:"#B4152C"}},"./packages/core/index.ts":function(e,t,n){"use strict";var r=n("./packages/core/styled.ts"),a=(n("./packages/core/createGlobalStylePismo.ts"),n("./packages/core/themePismo.ts"),n("./node_modules/@rebass/grid/dist/index.js")),i=n("./packages/core/typography.ts");n("./packages/core/colors.ts");function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    @media (","-width: ","em) {\n      ","\n    }\n  "]);return s=function(){return e},e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js").css,u={desktop:1025,tablet:900,mobile:737},c=Object.keys(u).reduce(function(e,t){var n=t.includes("desktop")?"min":"max";return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},e,o({},t,function(e){return l(s(),n,u[t]/16,l(e))}))},{});n.d(t,"g",function(){return r.c}),n.d(t,"e",function(){return r.d}),n.d(t,"a",function(){return a.Flex}),n.d(t,"b",function(){return i.d}),n.d(t,"c",function(){return i.e}),n.d(t,"d",function(){return i.f}),n.d(t,"f",function(){return c});try{ThemedBaseStyledInterface.displayName="ThemedBaseStyledInterface",ThemedBaseStyledInterface.__docgenInfo={description:"",displayName:"ThemedBaseStyledInterface",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.\nReturns a string representation of a function.",name:"toString",required:!0,type:{name:"(() => string) & (() => string)"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string an object that supports being matched against, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\nReplaces text in a string, using an object that supports replacement within a string.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substri..."}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\nFinds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\nSplit a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.\nReturns the primitive value of the specified object.",name:"valueOf",required:!0,type:{name:"(() => string) & (() => Object)"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition \u2013 length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\nReturns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an <a> HTML anchor element and sets the name attribute to the text value\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a <big> HTML element",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a <blink> HTML element",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a <b> HTML element",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a <tt> HTML element",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a <font> HTML element and sets the color attribute value",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a <font> HTML element and sets the size attribute value\nReturns a <font> HTML element and sets the size attribute value",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an <i> HTML element",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an <a> HTML element and sets the href attribute value",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a <small> HTML element",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a <strike> HTML element",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a <sub> HTML element",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a <sup> HTML element",name:"sup",required:!0,type:{name:"() => string"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<string>"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimLeft:{defaultValue:null,description:"Removes whitespace from the left end of a string.",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes whitespace from the right end of a string.",name:"trimRight",required:!0,type:{name:"() => string"}},withComponent:{defaultValue:null,description:"",name:"withComponent",required:!0,type:{name:'{ <WithC extends AnyStyledComponent>(component: WithC): StyledComponent<StyledComponentInnerComponent<WithC>, any, any, any>; <WithC extends "symbol" | "object" | "a" | "abbr" | "address" | "area" | ... 167 more ... | FunctionComponent<...>>(component: WithC): StyledComponent<...>; } | { ...; }'}},defaultProps:{defaultValue:null,description:"",name:"defaultProps",required:!0,type:{name:"Partial<WithOptionalTheme<Pick<any, never> & Partial<Pick<any, any>>, any>> | Partial<WithOptionalTheme<Pick<any, string | number | symbol> & Partial<Pick<any, never>>, any>>"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},$$typeof:{defaultValue:null,description:"",name:"$$typeof",required:!0,type:{name:"symbol"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/index.ts#ThemedBaseStyledInterface"]={docgenInfo:ThemedBaseStyledInterface.__docgenInfo,name:"ThemedBaseStyledInterface",path:"packages/core/index.ts#ThemedBaseStyledInterface"})}catch(p){}try{ComponentClass.displayName="ComponentClass",ComponentClass.__docgenInfo={description:"",displayName:"ComponentClass",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ThemeInterface | ((theme: ThemeInterface) => ThemeInterface)"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/index.ts#ComponentClass"]={docgenInfo:ComponentClass.__docgenInfo,name:"ComponentClass",path:"packages/core/index.ts#ComponentClass"})}catch(p){}try{__type.displayName="__type",__type.__docgenInfo={description:"",displayName:"__type",props:{propTypes:{defaultValue:null,description:"",name:"propTypes",required:!0,type:{name:"WeakValidationMap<any>"}},contextTypes:{defaultValue:null,description:"",name:"contextTypes",required:!0,type:{name:"ValidationMap<any>"}},defaultProps:{defaultValue:null,description:"",name:"defaultProps",required:!0,type:{name:"Partial<any>"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/index.ts#__type"]={docgenInfo:__type.__docgenInfo,name:"__type",path:"packages/core/index.ts#__type"})}catch(p){}},"./packages/form-buttons/FormButtons.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),i=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),o=n("./packages/core/index.ts");function l(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-top: 1.5rem;\n"]);return l=function(){return e},e}var u=Object(o.g)(o.a)(l());try{u.displayName="FormButtons",u.__docgenInfo={description:"",displayName:"FormButtons",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"ThemeInterface"}},as:{defaultValue:null,description:"Typing Note: prefer using .withComponent for now as it is actually type-safe.\n\nString types need to be cast to themselves to become literal types (as={'a' as 'a'}).",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 154 more ... | FunctionComponent<...>'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/form-buttons/FormButtons.tsx#FormButtons"]={docgenInfo:u.__docgenInfo,name:"FormButtons",path:"packages/form-buttons/FormButtons.tsx#FormButtons"})}catch(b){}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return f});var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,g(t).call(this,e))).layout=null,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=p(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",components:t},a.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"formbuttons"}},"FormButtons"),a.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic usage"),a.a.createElement(s.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAxYUiBvcIIlQOx5DdE12k9OCBAQpDqDgf0BXtTVzXQuUFXNdpwVQXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnASABYxPYAA2MSJPWMAQJgn1oESAT-GcQ5EUdTB2AABSEfgliIahKDgaTEXUmtNJoZwIAYy52AARnkyT5Go2ipgAQTmdj2EjaDyBsKB0HDdh5E5dixHCmMZHYVFWJgbhgEPJiWOxeRt1rYAougWLggAMgq8ZEnmShmlKmK4u4Fr5TAUIaJ7VB2nYAB-DYyvDSNEquRrytQfyaykGRq3fMxYQ1Y4YDAMIoCmYakpSqaQpXGtEyDKUcBgzIUmvAgitrOtsNwm58LEfVkmuxDbpQqQnrwlCLrrSQDoII6TrOoqpB22azG_EB3peuAcAIOAsCA3RQIMcCiMW6CYNgLAlgy2AcjQ41yIAARmWwbMkLw1otKguiogMXSwYiixQqZIeQuwOJx7JIwx7BOWKbjXF4tALQiGYri8nAAFYuiIVVUH51BwYc7ZXDSAC4GoBGQP0BguJrfhUB9JkkHYfggWJKpvAyC1f3JY3JIsfhWAyfJqH4K5-EEnAvcEqz1n4cpyH6GYuvd02QCC9KiNgGEsB9O2lvJShEjzPICknLUqeLC3QQEP39ZAKI0DD_hVGwdX88dkBMHmCMaIgeAw71y7-DNKUS5ALzlJwAAOHAvMr2t-GJ0nKHJyhKep42PZAAA9L35P7weq7by1rQ7rve6XkB1km-RwZz7wPmoSAUnVzXtERnXwK4kBaF9LJ3bNs1aAtVeLVmGZ-H3-Rf6AA",__position:0,__code:"<FormButtons>My FormButtons</FormButtons>",__scope:{props:this?this.props:n,FormButtons:u}},a.a.createElement(u,null,"My FormButtons")),a.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"propstable"}},"PropsTable"),a.a.createElement(s.f,{of:u}))}}])&&d(n.prototype,r),o&&d(n,o),t}()}}]);
//# sourceMappingURL=packages-form-buttons-form-buttons.3fefaffecb72446a0ac2.js.map