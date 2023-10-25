"use strict";(self.webpackChunkhome_page=self.webpackChunkhome_page||[]).push([[723],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),k=a,m=c["".concat(p,".").concat(k)]||c[k]||g[k]||l;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},588:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={position:1020,title:"\u624b\u98061. \u6e96\u5099"},i="1. \u6e96\u5099",o={unversionedId:"setup",id:"setup",title:"\u624b\u98061. \u6e96\u5099",description:"\u307e\u305a\u306f\u30d1\u30bd\u30b3\u30f3\u306b\u5fc5\u8981\u306a\u9053\u5177\u3092\u63c3\u3048\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/tab_tutorial/1020_setup.md",sourceDirName:".",slug:"/setup",permalink:"/hunny/tutorial/setup",draft:!1,tags:[],version:"current",sidebarPosition:1020,frontMatter:{position:1020,title:"\u624b\u98061. \u6e96\u5099"},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u306b \ud83c\udf6f",permalink:"/hunny/tutorial/intro"},next:{title:"\u624b\u98062. \u30d5\u30a9\u30fc\u30af\u3068\u30af\u30ed\u30fc\u30f3",permalink:"/hunny/tutorial/fork"}},p={},s=[{value:"\u78ba\u8a8d\u3059\u308b",id:"\u78ba\u8a8d\u3059\u308b",level:3},{value:"\u521d\u56de\u8a2d\u5b9a",id:"\u521d\u56de\u8a2d\u5b9a",level:3},{value:"\u30e6\u30fc\u30b6\u30fcID",id:"\u30e6\u30fc\u30b6\u30fcid",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3",id:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3",level:3}],u={toc:s},c="wrapper";function g(t){let{components:e,...l}=t;return(0,a.kt)(c,(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-\u6e96\u5099"},"1. \u6e96\u5099"),(0,a.kt)("p",null,"\u307e\u305a\u306f\u30d1\u30bd\u30b3\u30f3\u306b\u5fc5\u8981\u306a\u9053\u5177\u3092\u63c3\u3048\u3066\u3044\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4eca\u56de\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u5fc5\u8981\u306a\u3082\u306e\u306f ",(0,a.kt)("strong",{parentName:"p"},"Git(\u30ae\u30c3\u30c8)"),", ",(0,a.kt)("strong",{parentName:"p"},"GitHub(\u30ae\u30c3\u30c8\u30cf\u30d6)")," \u306e 2 \u3064\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(773).Z,width:"2002",height:"289"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"git"},"Git"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mac \u3092\u304a\u4f7f\u3044\u306e\u65b9\u306f\u3001\u6700\u521d\u304b\u3089\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u6e96\u5099\u306f\u4e0d\u8981\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"Windows \u3092\u304a\u4f7f\u3044\u306e\u65b9\u306f\u4e8b\u524d\u306b\u6e96\u5099\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7606).Z,width:"2002",height:"562"}),"  "),(0,a.kt)("a",{href:"https://gitforwindows.org/",class:"linkbutton"},"Windows\u7248Git\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u78ba\u8a8d\u3059\u308b"},"\u78ba\u8a8d\u3059\u308b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-\u30bf\u30fc\u30df\u30ca\u30eb.sh"},"$ git --version\n")),(0,a.kt)("p",null,"Mac \u3067\u306f ",(0,a.kt)("strong",{parentName:"p"},"\u30bf\u30fc\u30df\u30ca\u30eb")," \u3001 Windows \u3067\u306f ",(0,a.kt)("strong",{parentName:"p"},"Powershell")," \u3092\u958b\u3044\u3066\u4e0a\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"2.39.2")," \u306e\u3088\u3046\u306b\u4f55\u304b ",(0,a.kt)("strong",{parentName:"p"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u308c\u3070 Git \u304c\u4f7f\u3048\u307e\u3059")," \u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u3061\u306a\u307f\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"$ ")," \u306f 1\u56de\u5206\u306e\u30b3\u30de\u30f3\u30c9\u3092\u8868\u3059\u305f\u3060\u306e\u8a18\u53f7\u3067\u3059\u306e\u3067 \u5165\u529b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u521d\u56de\u8a2d\u5b9a"},"\u521d\u56de\u8a2d\u5b9a"),(0,a.kt)("p",null,"Git\u306b\u81ea\u5206\u306e\u540d\u524d\u3068\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u3064\u3044\u3067\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"core.autocrlf false")," \u3082\u8a2d\u5b9a\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git config --global user.name "\u3053\u3053\u306f\u306a\u3093\u3067\u3082\u597d\u304d\u306a\u540d\u524d"\n$ git config --global user.email "\u958b\u767a\u306b\u4f7f\u3046\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"\n$ git config --global core.autocrlf false\n')),(0,a.kt)("p",null,"\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git config --global user.name "\u30eb\u30d3\u30fc\u30c9\u30c3\u30b0"\n$ git config --global user.email "rubydog@example.com"\n$ git config --global core.autocrlf false\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"github"},"GitHub"),(0,a.kt)("p",null,"\u307e\u3060\u4f7f\u3063\u305f\u3053\u3068\u304c\u306a\u3044\u65b9\u306f\u4ee5\u4e0b\u304b\u3089 ",(0,a.kt)("strong",{parentName:"p"},"\u767b\u9332(\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7)")," \u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,a.kt)("a",{href:"https://github.co.jp/",class:"linkbutton"},"GitHub\u306b\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7 \ud83d\udc19"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u30e6\u30fc\u30b6\u30fcid"},"\u30e6\u30fc\u30b6\u30fcID"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(9446).Z,width:"1277",height:"350"})),(0,a.kt)("p",null,"\u3053\u306e ",(0,a.kt)("strong",{parentName:"p"},"\u30e6\u30fc\u30b6\u30fcID")," \u3092\u30e1\u30e2\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b: ",(0,a.kt)("inlineCode",{parentName:"p"},"rbdog")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"),(0,a.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306f\u3053\u308c\u304b\u3089\u306e\u4f5c\u696d\u3067\u4f7f\u3046\u79d8\u5bc6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gif",src:n(7403).Z,width:"1280",height:"720"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"gif",src:n(6691).Z,width:"2002",height:"581"})),(0,a.kt)("a",{href:"https://github.com/settings/tokens",class:"linkbutton"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u4f5c\u6210"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4f5c\u3063\u305f ",(0,a.kt)("strong",{parentName:"p"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3")," \u3092\u30e1\u30e2\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e00\u5ea6\u753b\u9762\u3092\u96e2\u308c\u308b\u3068\u3001\u3082\u3046\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e07\u304c\u4e00\u5fd8\u308c\u3066\u3057\u307e\u3063\u305f\u3068\u304d\u3084\u3001\u4ed6\u4eba\u306b\u30d0\u30ec\u3066\u3057\u307e\u3063\u305f\u3068\u304d\u306f \u53e4\u3044\u307b\u3046\u3092\u6d88\u3057\u3066\u3082\u3046\u4e00\u5ea6\u4f5c\u308a\u76f4\u305b\u3070\u5927\u4e08\u592b\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b: ",(0,a.kt)("inlineCode",{parentName:"p"},"ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc")))}g.isMDXComponent=!0},6691:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/access-token-digest-2eea4cf2619746a6654b1b217da0726c.png"},7403:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/access-token-bac8578f9f9299726c400ce5741b5f93.gif"},773:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/git-github-981726177a7c75d346344dcce494d6f1.png"},7606:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/git-install-win-2aad2ad521bf7bbb2dbac70b784262fa.png"},9446:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/github_id-8bee4e34b155e5812fd2902711fdfd1b.png"}}]);