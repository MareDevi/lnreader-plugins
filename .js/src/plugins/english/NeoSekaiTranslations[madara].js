var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),n=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=a(require("dayjs")),l=require("@libs/storage"),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function a(e){var t,a;this.hideLocked=l.storage.get("hideLocked"),this.parseData=function(e){var t,a=(0,s.default)(),r=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",n=parseInt(r,10);if(!r)return e;if(u(e,["detik","segundo","second","วินาที"]))a=a.subtract(n,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(n,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(n,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(n,"days");else if(u(e,["week","semana"]))a=a.subtract(n,"week");else if(u(e,["month","mes"]))a=a.subtract(n,"month");else{if(!u(e,["year","año"]))return"Invalid Date"!==(0,s.default)(e).format("LL")?(0,s.default)(e).format("LL"):e;a=a.subtract(n,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var r=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(7+r),this.options=e.options,this.filters=e.filters,(null===(a=this.options)||void 0===a?void 0:a.hasLocked)&&(this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}})}return a.prototype.translateDragontea=function(e){var t;if("dragontea"!==this.id)return e;var a=(0,n.load)((null===(t=e.html())||void 0===t?void 0:t.replace("\n","").replace(/<br\s*\/?>/g,"\n"))||"");return e.html(a.html()),e.find("*").addBack().contents().filter((function(e,t){return 3===t.nodeType})).each((function(e,t){var r=a(t),n=r.text().normalize("NFD").split("").map((function(e){var t=e.normalize("NFC"),a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t);return a>=0?"zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"[a]+e.slice(t.length):e})).join("");r.replaceWith(n.replace("\n","<br>"))})),e},a.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},a.prototype.getCheerio=function(a,i){return e(this,void 0,void 0,(function(){var e,o,s,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=i)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return s=n.load,[4,e.text()];case 2:if(o=s.apply(void 0,[t.sent()]),l=o("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==l||"You are being redirected..."==l||"Un instant..."==l||"Just a moment..."==l||"Redirecting..."==l)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},a.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,r){var n=e(r).find(".post-title").text().trim(),o=e(r).find(".post-title").find("a").attr("href")||"";if(n&&o){var s=e(r).find("img"),l={name:n,cover:s.attr("data-src")||s.attr("src")||s.attr("data-lazy-srcset")||i.defaultCover,path:o.replace(/https?:\/\/.*?\//,"/")};t.push(l)}})),t},a.prototype.popularNovels=function(a,r){return e(this,arguments,void 0,(function(e,a){var r,n,i,o,s,l,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(n in r=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(r+="&m_orderby=latest"),u)if("object"==typeof u[n].value)for(i=0,o=u[n].value;i<o.length;i++)s=o[i],r+="&".concat(n,"=").concat(s);else u[n].value&&(r+="&".concat(n,"=").concat(u[n].value));return[4,this.getCheerio(r,1!=e)];case 1:return l=t.sent(),[2,this.parseNovels(l)]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,l,u,c,h,p,d,m,f=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(l={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text().trim()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content");switch(t){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":l.genres?l.genres+=", "+a.find("a").map((function(t,a){return e(a).text()})).get().join(", "):l.genres=a.find("a").map((function(t,a){return e(a).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=a.text().trim();break;case"Status":case"Novel":case"Estado":l.status=a.text().trim().includes("OnGoing")||a.text().trim().includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed;break;case"Artist(s)":l.artist=a.text().trim()}})),l.author||(l.author=e(".manga-authors").text().trim()),e("div.summary__content .code-block,script,noscript").remove(),l.summary=this.translateDragontea(e("div.summary__content")).text().trim()||e("#tab-manga-about").text().trim()||e('.post-content_item h5:contains("Summary")').next().find("span").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-summary p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-excerpt p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim(),u=[],c="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,r.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST",referrer:this.site+a}).then((function(e){return e.text()}))]:[3,3];case 2:return c=t.sent(),[3,5];case 3:return h=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(p=new FormData).append("action","manga_get_chapters"),p.append("manga",h),[4,(0,r.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:p}).then((function(e){return e.text()}))];case 4:c=t.sent(),t.label=5;case 5:return"0"!==c&&(e=(0,n.load)(c)),d=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var r=e(a).find("a").text().trim(),n=a.attribs.class.includes("premium-block");n&&(r="🔒 "+r);var i=e(a).find("span.chapter-release-date").text().trim();i=i?f.parseData(i):(0,s.default)().format("LL");var o=e(a).find("a").attr("href")||"";!o||"#"==o||n&&f.hideLocked||u.push({name:r,path:o.replace(/https?:\/\/.*?\//,"/"),releaseTime:i||null,chapterNumber:d-t})})),l.chapters=u.reverse(),[2,l]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,r,n;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),r=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),null===(n=this.options)||void 0===n||n.customJs,[2,this.translateDragontea(r).html()||""]}}))}))},a.prototype.searchNovels=function(a,r){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+r+"/?s="+encodeURIComponent(a)+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return n=t.sent(),[2,this.parseNovels(n)]}}))}))},a}())({id:"neosekaiTLS",sourceSite:"https://www.neosekaitranslations.com/",sourceName:"NeoSekai Translations",filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Drama",value:"drama"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Horror",value:"horror"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"Psychological",value:"psychological"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-Fi",value:"sci-fi"},{label:"Slice of Life",value:"slice-of-life"}]},op:{type:"Switch",label:"having all selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"Completed",value:"complete"},{label:"Ongoing",value:"on-going"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}});exports.default=c;