(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Kfvu:function(e,t,a){"use strict";var o=a("5NKs");t.__esModule=!0,t.OutboundLink=r,t.trackCustomEvent=function(e){var t=e.category,a=e.action,o=e.label,n=e.value,i=e.nonInteraction,c=void 0===i||i,l=e.transport,r=e.hitCallback,s=e.callbackTimeout,m=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:a,eventLabel:o,eventValue:n,nonInteraction:c,transport:l};r&&"function"==typeof r&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,o=function(){a||(a=!0,e())};return setTimeout(o,t),o}(r,m)),window.ga("send","event",d)}};var n=o(a("j8BX")),i=o(a("uDP2")),c=o(a("q1tI")),l=o(a("17x9"));function r(e){var t=e.eventCategory,a=e.eventAction,o=e.eventLabel,l=e.eventValue,r=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return c.default.createElement("a",(0,n.default)({},r,{onClick:function(n){"function"==typeof e.onClick&&e.onClick(n);var i=!0;return(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:o||e.href,eventValue:l,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}r.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},RXBc:function(e,t,a){"use strict";a.r(t);var o=a("t8Zj"),n=a("bL9O"),i=a("q1tI"),c=a.n(i),l=a("Kfvu"),r=a("Bl7J"),s=a("vrFN");var m=function(e){var t=e.category,a=e.id,o=e.onToggleCategory;return c.a.createElement("li",null,c.a.createElement("label",{htmlFor:a,className:"checkbox"},t.title,c.a.createElement("input",{id:a,checked:t.selected,name:a,type:"checkbox",onChange:function(){return o(t)}}),c.a.createElement("span",{className:"checkbox__indicator"})))};var d=function(e){var t=e.title,a=e.categories,o=e.onToggleCategory,n=e.onChangeSearchText,l=Object(i.useState)(""),r=l[0],s=l[1];return c.a.createElement("div",{className:"filter accordion"},c.a.createElement("div",{className:"filter__heading accordion__heading"},t),c.a.createElement("div",{className:"form__input",style:{display:"block"}},c.a.createElement("input",{type:"text",className:"input input--text input--white js-input input--cesg "+(r.length>0?"js-filled":""),name:"search",id:"search",required:"",maxLength:"100",value:r,onChange:function(e){n(e.target.value),s(e.target.value)}}),c.a.createElement("label",{htmlFor:"search",className:"label "},"Search")),c.a.createElement("div",{className:"filter__checkboxes list list--no-bullets accordion__list"},c.a.createElement("ul",null,a.map((function(e,t){return c.a.createElement(m,{category:e,id:t,key:t,onToggleCategory:function(e){return o(e)}})})))))};var u=function(e){var t=e.customElement;return c.a.createElement("div",{className:"card card--lg-2"},c.a.createElement("a",{href:t.readmeUrl,className:"card__link-outer",target:"_blank",rel:"noopener noreferrer",onClick:function(e){Object(l.trackCustomEvent)({category:"CESG",action:"Click Detail",label:t.title})}}),c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"card__heading  card__heading--small"},c.a.createElement("h3",null,t.title)),c.a.createElement("div",{className:"card__image card__image--no-bg",style:{padding:"24px 0",height:"auto"}},c.a.createElement("img",{src:t.thumbnailUrl.publicURL,alt:"Screenshot of element in action"})),c.a.createElement("div",{className:"card__description"},c.a.createElement("p",null,t.description)),c.a.createElement("div",{className:"card__content-bottom"},t.categories&&t.categories.map((function(e,t){return c.a.createElement("span",{key:t,className:"tag tag--orange",style:{margin:"6px"}},e)})))))};var g=function(e){var t=e.customElements;return c.a.createElement("div",{className:"cards"},t.map((function(e){return c.a.createElement(u,{key:e.id,customElement:e})})))};function h(e){return e.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"")}function b(e,t){var a=h(t),o=" "+a,n=h(e);return n.startsWith(a)||n.includes(o)}t.default=function(){var e=n.data,t=Object(i.useState)(""),a=t[0],m=t[1],u=function(e){return e.map((function(e){return{title:e,selected:!1}})).sort((function(e,t){return e.title.toLowerCase().localeCompare(t.title.toLowerCase())}))}(e.categories.distinct),f=Object(i.useState)(u),p=f[0],y=f[1],k=e.elements.edges.map((function(e){return e.node})),U=Object(i.useState)(k)[0],v=Object(i.useState)(k),w=v[0],S=v[1],E=Object(i.useState)(""),T=E[0],C=E[1];Object(i.useEffect)((function(){var e=p.filter((function(e){return e.selected})).map((function(e){return e.title})),t=U.filter((function(t){var o=function(e,t){if(t.length<1)return!0;if(!e.categories)return!1;return e.categories.some((function(e){return t.includes(e)}))}(t,e),n=function(e,t){if(t&&t.length>=3){var a=b(e.title,t),o=b(e.description,t),n=b(e.categories.join(" "),t);return a||o||n}return!0}(t,a);return o&&n}));S(t);var o=h(a),n=p.filter((function(e){return e.selected})).map((function(e){return e.title})).join(", ");C(o||n?"Text: "+o+" | Categories: "+n:null)}),[U,a,p,T]);var I=function(e,t){var a=Object(i.useState)(e),o=a[0],n=a[1];return Object(i.useEffect)((function(){var a=setTimeout((function(){n(e)}),t);return function(){clearTimeout(a)}}),[e]),o}(T,1500);return Object(i.useEffect)((function(){I&&Object(l.trackCustomEvent)({category:"CESG",action:"Search",label:I})}),[I]),c.a.createElement(r.a,null,c.a.createElement(s.a,{title:"Home"}),c.a.createElement("section",{className:"section grid"},c.a.createElement("div",{className:"grid__row"},c.a.createElement("div",{className:"grid__col grid__col--12"},c.a.createElement("div",{className:"js-pagination-list"},c.a.createElement("div",{className:"heading heading--h2 heading--center heading--indent-content"},c.a.createElement("h2",null,"Custom element sample gallery",c.a.createElement("strong",{className:"highlight"},"."))),c.a.createElement("div",{className:"grid__row"},c.a.createElement("div",{className:"grid__col grid__col--12 grid__col--md-3 grid__col--lg-span-2 grid__col--lg-2 js-integrations-filter-wrapper"},c.a.createElement("div",{className:"js-integrations-filter"},T,c.a.createElement(d,{title:"Category",categories:p,onToggleCategory:function(e){return t=e,a=p.findIndex((function(e){return e.title===t.title})),(n=Object(o.a)(p))[a]=Object.assign({},t,{selected:!t.selected}),void y(n);var t,a,n},onChangeSearchText:function(e){return m(e)}}))),c.a.createElement("div",{className:"grid__col grid__col--12 grid__col--md-9 grid__col--lg-7"},c.a.createElement(g,{customElements:w}))))))))}},bL9O:function(e){e.exports=JSON.parse('{"data":{"categories":{"distinct":["Geolocation","HTML","Icons","Images","Markdown","Other","Text","Video","WYSIWYG","eCommerce"]},"elements":{"edges":[{"node":{"id":"76f29c2e-e893-5cf4-a36f-55eefe047014","title":"Ace Code Editor (Syntax Highlighter)","description":"This custom element is an editable text area enhanced by the Ace Code Editor to provide a programmer-friendly environment for writing code examples. Offers a fine selection of programming languages to be highlighted.","readmeUrl":"https://github.com/MilanLund/ace-kenticocloud-customelement","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/AceCodeEditor-3aee991c31f9cb603a00d756b9cbccb9.png"},"categories":["Text"]}},{"node":{"id":"8c0edcbf-74fa-5e22-8465-aade039bfee1","title":"Bing Image Selector","description":"The Bing image selector allows to search images on Bing and select one. Note: selected image may be subject to copyright and/or usage restrictions","readmeUrl":"https://github.com/Kentico/kontent-custom-element-bing-image-selector","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/BingImageSelector-5bca2eb0ea52c13aba336cfa07a14a65.gif"},"categories":["Images"]}},{"node":{"id":"a8ddaff1-4314-50ed-8df8-c734306ab499","title":"Bynder Image Selector","description":"The Bynder Image Selector allows to search images in Bynder DAM and use them in your website.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-sample-bynder","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/BynderImageSelector-56772efb60d642bf85ba2aadeb1ab49e.gif"},"categories":["Images"]}},{"node":{"id":"fa65930b-61b5-5b2b-abfa-df886fc4514f","title":"CKEditor 4","description":"This custom element is based on the CKEditor 4 WYSIWYG text editor.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-ckeditor","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/CKEditor-7e508c9052243ee494455d1378eacff7.png"},"categories":["WYSIWYG","HTML","Text"]}},{"node":{"id":"11959413-295b-575a-8294-94d73c17426e","title":"Color Picker","description":"Color picker allowing user to choose a color from palette and sets it as a HEX string, e.g. \'#ff0000\' for red color, \'#00ff00\' for green, and so on.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-sample-color-picker","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ColorPicker-27c8d7c08b1875a7134e4e96c45c696a.gif"},"categories":["Other"]}},{"node":{"id":"ad3690e6-3773-53ce-b8c8-94f343226a5e","title":"Country State Selector","description":"Country and state selector is a drop down selector which allows users to select country and state (if country has any).","readmeUrl":"https://github.com/ondrabus/kc-country-selector","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/CountryStateSelector-dcdd762bb0468404252b37dcf4a42cc0.png"},"categories":["Other"]}},{"node":{"id":"9aea27d0-b08c-5b7a-b9c5-2f17a116811b","title":"Date Picker","description":"This is a simple calendar control based on jQuery UI DatePicker which lets you pick a date.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-sample-date-picker","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/DatePicker-9da45ffd01c1ae50ca26c69e58588869.gif"},"categories":["Other"]}},{"node":{"id":"a4e3ac99-a72d-5fa7-85c0-e5e3e0ce2000","title":"Flickr Image Selector","description":"The Flickr image selector allows you to search images on Flickr and select one. NOTE: Selected image may be subject to copyright and/or usage restrictions.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-flickr-image-selector","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/FlickrImageSelector-e44ae619ab0d6d9fd48225201c6a2d40.gif"},"categories":["Images"]}},{"node":{"id":"fb3c59a8-1d19-54c9-a74c-7531b5899f4b","title":"Font Awesome Icon Codename Selector","description":"Custom element allowing to pick Font Awesome icon. Custom element stores the value as icon\'s codename.","readmeUrl":"https://github.com/Simply007/kontent-custom-element-font-awesome-selector-codename","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/FontAwesomeIconCodenameSelector-2eaf91f4588dd369858741404d0e6cd7.gif"},"categories":["Icons"]}},{"node":{"id":"b6a2fabd-6672-5cb7-9054-c5a22975c00a","title":"Font Awesome Icon SVG Selector","description":"Custom element allowing to pick Font Awesome icon. Custom element stores the value as icon\'s SVG.","readmeUrl":"https://github.com/Simply007/kontent-custom-element-font-awesome-selector-svg","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/FontAwesomeIconSvgSelector-81b74eea85095fcc7af6260aff8d4596.gif"},"categories":["Icons"]}},{"node":{"id":"c99ddd16-0a77-5cf7-97dc-54387937c28a","title":"Geolocation Leaflet","description":"This custom element allows you to put a marker on a map and it automatically gets converted to latitude and longitude geo locations.","readmeUrl":"https://github.com/hzik/kc_geolocation","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/GeolocationLeaflet-1a5ac6bd7d5b7d7a58b2cd7ba1265499.png"},"categories":["Geolocation"]}},{"node":{"id":"d1b819c0-d37f-5d93-baac-d1a4e1097c07","title":"Giphy Selector","description":"The Giphy Selector allows you to search images on Giphy and select one.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-giphy-selector","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/GiphySelector-52b8d4bfc670bcf67a6ffdaacad0057d.gif"},"categories":["Images"]}},{"node":{"id":"b3afbcba-682a-58b4-8acc-477a905a463f","title":"Google Places Geo-location Selector","description":"This is a custom element for Kentico Kontent that allows users to easily get the geo-coordinates for a location using the Google Places API.","readmeUrl":"https://github.com/ChristopherJennings/kontent-custom-element-google-places-search","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/GooglePlacesSearch-fc93e9e3b7fe7a24c710d748fe62e893.png"},"categories":["Geolocation"]}},{"node":{"id":"04711828-51b5-57f0-ba4b-4aee4534c45c","title":"HTML Inputs","description":"This is a custom element for Kentico Kontent that allows you to define a group of HTML inputs that your editors can fill out one or more times. You can combine any number of HTML5 inputs into a single element -> text, textarea, color, date, time, number, radio, checkbox, password and range.","readmeUrl":"https://github.com/hzik/kontent-custom-element-sample-html-inputs","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/HtmlInputs-32f0e419d283a346de902440c42f1212.png"},"categories":["Other"]}},{"node":{"id":"6e8d64d8-15f9-54a3-a0ef-d445f9787e07","title":"Image transformer","description":"This custom element functions similarly to the Asset element, but allows an editor to apply the Image Transformation API to any selected image.","readmeUrl":"https://github.com/yuriys-kentico/TransformedImagesElement","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ImageTransformer-f9998cf00d9a8745c27cc72c21b58124.gif"},"categories":["Images"]}},{"node":{"id":"4bc0b6fb-ae5c-59b6-ba7c-66194814c3b5","title":"Item selector","description":"This element offers items from another project to be linked with your item","readmeUrl":"https://github.com/hzik/kontent-custom-element-item-selector","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ItemSelector-7430e508fedb246c6fb870925e869740.png"},"categories":["Other"]}},{"node":{"id":"026b0d64-7e8e-566b-b2cc-bc37d395524b","title":"Item synchronizer","description":"This element allows you to sync items from one project to another","readmeUrl":"https://github.com/hzik/ItemSynchronizer/","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ItemSynchronizer-d00e6fa23ebf93bc787248b235149ef3.gif"},"categories":["Other"]}},{"node":{"id":"53b1f3ef-4417-5d79-a60e-ea44cc872c32","title":"Keyword Extractor","description":"This custom element gives you a way to automatically generate keywords for an item based on the content in it. ","readmeUrl":"https://github.com/Kentico/kontent-custom-element-keyword-extractor","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/KeywordExtractor-00a3be9de87fa43d8ad24a0af8a5fbe3.gif"},"categories":["Other"]}},{"node":{"id":"9e9ad2bd-40e9-536e-9d41-8cf784516950","title":"Link checker","description":"This custom element gets all links from all rich text elements on your item and checks whether they are live or not.","readmeUrl":"https://github.com/hzik/LinkChecker","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/LinkChecker-ba264f2b32a1bcd1b46ce8da0232dcd0.gif"},"categories":["Other"]}},{"node":{"id":"5ba87337-8d38-5e0b-b1ff-3ecae6c2ee77","title":"Magento Product Selector","description":"Magento product selector is a selector connected to Magento instance which allows users to search and select a product from the Magento product catalog.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-sample-magento","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/MagentoProductSelector-2c32c77e6e41b6cefddd880d0d501f49.gif"},"categories":["eCommerce"]}},{"node":{"id":"2ac2da10-4245-53f8-8864-3d2281dd1e13","title":"Optimizely Audience Selector","description":"Optimizely audiences selector is a selector connected to Optimizely API which allows users to search and select audiences from the Optimizely.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-sample-optimizely","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/OptimizelyAudiencesSelector-3d24a5204ca774cac31c4c6a801424c1.gif"},"categories":["Other"]}},{"node":{"id":"8288754a-e748-5499-b4f0-e409dbadb871","title":"Quill Rich Text Editor","description":"This custom element is based on the Quill rich text editor. It stores content in JSON format, so it\'s omni-channel friendly.","readmeUrl":"https://github.com/hzik/kc_wysiwyg","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/QuillRichTextEditor-afc8b5347697185ec448f6c222529a87.png"},"categories":["WYSIWYG","Text"]}},{"node":{"id":"10945952-db98-50a1-aadc-a86efe892b10","title":"SVG Icon Selector","description":"This is a custom element for Kentico Kontent that allows users to select an SVG icon from a list of provided icons.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-svg-icon-selector","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/SvgIconSelector-7e7b899c34d41297b2296f9d0c35e574.jpg"},"categories":["Icons"]}},{"node":{"id":"9c07488b-8153-51a9-baf6-eb6780619dea","title":"Shopify Product Selector","description":"Shopify product selector is a selector connected to Shopify Storefront which allows users to search and select a product from Shopify product catalog.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-shopify","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ShopifyProductSelector-c0766b98773b4fa8223a0f43c73f3c19.gif"},"categories":["eCommerce"]}},{"node":{"id":"8c344553-da10-5ed3-976f-e635a00b5509","title":"SimpleMDE (Markdown Editor)","description":"SimpleMDE is a markdown editor which allows users to write formatted text. In this sample element, you can find examples of setting dynamic height and reacting on the window ‘resize’ events. When the element is disabled, the editor is set to the read-only mode.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-simplemde-markdown-editor","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/SimpleMDEMarkdownEditor-e7aed4a2732f59091ded557c127cb6f8.gif"},"categories":["WYSIWYG","Markdown","Text"]}},{"node":{"id":"e4d0704b-a180-5b43-8705-a74421e35687","title":"Summernote Rich Text Editor","description":"This custom element is based on the Summernote rich text editor. It allows you to switch to the Source code mode to edit or see the HTML markup!","readmeUrl":"https://github.com/hzik/kontent-custom-element-summernote","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/SummernoteRichTextEditor-899dbf6f25557fe4a91824cb6f89eb11.gif"},"categories":["WYSIWYG","HTML","Text"]}},{"node":{"id":"af16a3f8-7387-5678-8f2d-7883b0774179","title":"TinyMCE Rich Text Editor","description":"This custom element is based on the TinyMCE WYSIWYG text editor.","readmeUrl":"https://github.com/Kentico/kontent-custom-element-tinymce","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/TinyMCE-7cafec0fb94dc6b7dcbd8153b5a1732d.png"},"categories":["WYSIWYG","HTML","Text"]}},{"node":{"id":"d86e12e5-025e-5234-ac82-16030168c8fd","title":"Toast UI Editor","description":"This custom element is based on Toast UI Editor. It is a Markdown WYSIWYG Editor including GFM Standard + Chart & UML Extensible.","readmeUrl":"https://github.com/Simply007/kc-tui-editor-custom-element","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ToastUIEditor-237f5a3e6315d053bbf44f3c6acb5271.gif"},"categories":["WYSIWYG","Markdown","Text"]}},{"node":{"id":"385c7b0f-69f6-501f-b892-44993e5834d3","title":"Toggle Switch","description":"This custom element is just a simple on/off toggle switch.","readmeUrl":"https://github.com/hzik/kc_inputs","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/ToggleSwitch-3d9cf770b3c168a6a68966978e3223d3.png"},"categories":["Other"]}},{"node":{"id":"69ec82b1-187a-5453-badb-149fd245a171","title":"Unique Textbox","description":"This custom element checks whether your entered value is unique across all items in your project in specified element.","readmeUrl":"https://github.com/hzik/kontent-custom-element-unique-textbox","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/UniqueTextbox-3b41f6351b388426cad8385547379821.gif"},"categories":["Other"]}},{"node":{"id":"06e1a0c0-f3e2-58c1-88bf-66bb364732ee","title":"Unsplash Images Selector","description":"This is a custom element for Kentico Kontent that allows users to search and select high-quality, royalty-free images from Unsplash.","readmeUrl":"https://github.com/ChristopherJennings/kontent-custom-element-unsplash-element","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/UnsplashImagesSelector-d59be100013727edfb28131b9897ae49.jpg"},"categories":["Images"]}},{"node":{"id":"22a8262b-6b02-507a-a98d-bb4aed82f005","title":"Vimeo Preview","description":"This custom element lets you to add and preview a Vimeo video. It extracts and stores the video id so it can later be used in the app.","readmeUrl":"https://github.com/matus666/kontent-custom-element-vimeo-preview","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/VimeoPreview-8f29ed3d4960266e6a25ce48503a3973.gif"},"categories":["Video"]}},{"node":{"id":"57ecf321-1ea7-57a8-a84c-7c9a4b9c03eb","title":"YouTube Preview","description":"This custom element allows you to add various types of Youtube video URL, it extracts and stores the video id for your apps and shows the video.","readmeUrl":"https://github.com/hzik/kk_youtube","thumbnailUrl":{"publicURL":"/kontent-custom-element-samples/gallery/static/YouTubePreview-e5efd0cf92ebea6d693a0f7a92929f9c.png"},"categories":["Video"]}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c621a641ca7b6f30e7de.js.map