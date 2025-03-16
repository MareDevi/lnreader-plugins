var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(s,r){function i(e){try{o(l.next(e))}catch(e){r(e)}}function n(e){try{o(l.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,n)}o((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,s,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=n(0),i.throw=n(1),i.return=n(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function n(n){return function(o){return function(n){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,n[0]&&(r=0)),r;)try{if(a=1,l&&(s=2&n[0]?l.return:n[0]?l.throw||((s=l.return)&&s.call(l),0):l.next)&&!(s=s.call(l,n[1])).done)return s;switch(l=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,l=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(s=r.trys,(s=s.length>0&&s[s.length-1])||6!==n[0]&&2!==n[0])){r=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){r.label=n[1];break}if(6===n[0]&&r.label<s[1]){r.label=s[1],s=n;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(n);break}s[2]&&r.ops.pop(),r.trys.pop();continue}n=t.call(e,r)}catch(e){n=[6,e],l=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,o])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("cheerio"),l=require("htmlparser2"),s=require("@libs/fetch"),r=require("@libs/novelStatus"),i=require("@libs/defaultCover"),n=require("@libs/storage");function o(e,t){var a=e.match(/(\d+)$/);a&&a[0]&&(t.chapterNumber=parseInt(a[0]))}var c=new(function(){function c(e){var t,a,l;this.hideLocked=n.storage.get("hideLocked"),this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var s=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.1.".concat(7+s),this.options=null!==(a=e.options)&&void 0!==a?a:{},this.filters=e.filters,(null===(l=this.options)||void 0===l?void 0:l.hasLocked)&&(this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}})}return c.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},c.prototype.safeFecth=function(a,l){return e(this,void 0,void 0,(function(){var e,r,i,n,o,c,u,v;return t(this,(function(t){switch(t.label){case 0:return e=a.split("://"),r=e.shift(),i=e[0].replace(/\/\//g,"/"),[4,(0,s.fetchApi)(r+"://"+i)];case 1:if(!(n=t.sent()).ok&&1!=l)throw new Error("Could not reach site ("+n.status+") try to open in webview.");return[4,n.text()];case 2:if(o=t.sent(),c=null===(v=null===(u=o.match(/<title>(.*?)<\/title>/))||void 0===u?void 0:u[1])||void 0===v?void 0:v.trim(),this.getHostname(a)!=this.getHostname(n.url)||c&&("Bot Verification"==c||"You are being redirected..."==c||"Un instant..."==c||"Just a moment..."==c||"Redirecting..."==c))throw new Error("Captcha error, please open in webview (or the website has changed url)");return[2,o]}}))}))},c.prototype.parseNovels=function(e){var t=this;e=(0,a.load)(e).html();var l=[];return(e.match(/<article([^]*?)<\/article>/g)||[]).forEach((function(e){var a=e.match(/<a href="([^\"]*)".*? title="([^\"]*)"/)||[],s=a[1],r=a[2];if(r&&s){var n=e.match(/<img [^>]*?src="([^\"]*)"[^>]*?(?: data-src="([^\"]*)")?[^>]*>/)||[],o=void 0;if(s.includes(t.site))o=s.replace(t.site,"");else{var c=s.split("/");c.shift(),c.shift(),c.shift(),o=c.join("/")}l.push({name:r,cover:n[2]||n[1]||i.defaultCover,path:o})}})),l},c.prototype.popularNovels=function(a,l){return e(this,arguments,void 0,(function(e,a){var l,s,r,i,n,o,c,u,v,h=a.filters,p=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in l=null!==(v=null===(u=this.options)||void 0===u?void 0:u.seriesPath)&&void 0!==v?v:"/series/",s=this.site+l+"?page="+e,h||(h=this.filters||{}),p&&(s+="&order=latest"),h)if("object"==typeof h[r].value)for(i=0,n=h[r].value;i<n.length;i++)o=n[i],s+="&".concat(r,"=").concat(o);else h[r].value&&(s+="&".concat(r,"=").concat(h[r].value));return[4,this.safeFecth(s,!1)];case 1:return c=t.sent(),[2,this.parseNovels(c)]}}))}))},c.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,s,n,c,u,v,h,p,d,f,b,m,g,y,w,k,N,C,S,L,x;return t(this,(function(t){switch(t.label){case 0:return e=this.site,[4,this.safeFecth(e+a,!1)];case 1:return s=t.sent(),n={path:a,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},c=!1,u=!1,v=0,h=!1,p=!1,d=!1,f=!1,b=!1,m=!1,g=!1,y=0,w=!1,k=!1,N=[],C={},S=this.hideLocked,L=new l.Parser({onopentag:function(t,a){var l;!n.cover&&(null===(l=a.class)||void 0===l?void 0:l.includes("ts-post-image"))?(n.name=a.title,n.cover=a["data-src"]||a.src||i.defaultCover):"genxed"===a.class||"sertogenre"===a.class?c=!0:c&&"a"===t?u=!0:"div"!==t||"entry-content"!==a.class&&"description"!==a.itemprop?"spe"===a.class||"serl"===a.class?h=!0:h&&"span"===t?p=!0:"div"===t&&"sertostat"===a.class?(h=!0,p=!0,b=!0):a.class&&a.class.includes("eplister")?m=!0:m&&"li"===t?g=!0:g?"a"===t&&void 0===C.path?C.path=a.href.replace(e,"").trim():"epl-num"===a.class?y=1:"epl-title"===a.class?y=2:"epl-date"===a.class?y=3:"epl-price"===a.class&&(y=4):v&&"div"===t&&v++:v++},ontext:function(e){var t,a;if(c)u&&(n.genres+=e+", ");else if(1===v)n.summary+=e.trim();else if(h){if(p){var l=e.toLowerCase().replace(":","").trim();if(d)n.author+=e||"Unknown";else if(f)n.artist+=e||"Unknown";else if(b)switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":n.status=r.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":n.status=r.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":n.status=r.NovelStatus.OnHiatus;break;default:n.status=r.NovelStatus.Unknown}switch(l){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":d=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":b=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":f=!0}}}else if(m&&g)if(1===y)e.includes("🔒")?(w=!0,k=!0):k&&(w=!1),o(e,C);else if(2===y)C.name=(null===(a=null===(t=e.match(RegExp("^".concat(n.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===t?void 0:t[1])||void 0===a?void 0:a.trim())||e.trim(),C.chapterNumber||o(e,C);else if(3===y)C.releaseTime=e;else if(4===y){switch(l=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":w=!1;break;default:w=!0}}},onclosetag:function(e){var t,a,l;c?u?u=!1:(c=!1,n.genres=null===(t=n.genres)||void 0===t?void 0:t.slice(0,-2)):v?"br"===e?n.summary+="\n":"div"===e&&v--:h?p?"span"===e&&(p=!1,d&&n.author?d=!1:f&&n.artist?f=!1:b&&""!==n.status&&(b=!1)):"div"===e&&(h=!1,n.author=null===(a=n.author)||void 0===a?void 0:a.trim(),n.artist=null===(l=n.artist)||void 0===l?void 0:l.trim()):m&&(g?1===y||2===y||3===y||4===y?y=0:"li"===e&&(g=!1,C.chapterNumber||(C.chapterNumber=0),w&&(C.name="🔒 "+C.name),S&&w||N.push(C),C={}):"ul"===e&&(m=!1))}}),L.write(s),L.end(),N.length&&((null===(x=this.options)||void 0===x?void 0:x.reverseChapters)&&N.reverse(),n.chapters=N),[2,n]}}))}))},c.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,s,r,i,n;return t(this,(function(t){switch(t.label){case 0:return[4,this.safeFecth(this.site+l,!1)];case 1:if(e=t.sent(),null===(r=this.options)||void 0===r?void 0:r.customJs)try{s=(0,a.load)(e),e=s.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(n=null===(i=e.match(/<div.*?class="epcontent ([^]*?)<div.*?class="?bottomnav/g))||void 0===i?void 0:i[0].match(/<p[^>]*>([^]*?)<\/p>/g))||void 0===n?void 0:n.join("\n"))||""]}}))}))},c.prototype.searchNovels=function(a,l){return e(this,void 0,void 0,(function(){var e,s;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+l+"/?s="+encodeURIComponent(a),[4,this.safeFecth(e,!0)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},c}())({id:"ellotl",sourceSite:"https://ellotl.com/",sourceName:"ElloTL",options:{lang:"English",reverseChapters:!0},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Hunter",value:"hunter"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Modern Fantasy",value:"modern-fantasy"},{label:"Mystery",value:"mystery"},{label:"Psychological",value:"psychological"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Seinen",value:"seinen"},{label:"Shounen",value:"shounen"},{label:"Slice of Life",value:"slice-of-life"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Fantasy",value:"fantasy"},{label:"Genius",value:"genius"},{label:"Hunter",value:"hunter"},{label:"Japanese Web Novel",value:"japanese-web-novel"},{label:"Korean Web Novel",value:"korean-web-novel"},{label:"Light Novel (JP)",value:"light-novel-jp"},{label:"Mage",value:"mage"},{label:"Modern Fantasy",value:"modern-fantasy"},{label:"Reincarnation",value:"reincarnation"},{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"},{label:"Rating",value:"rating"}]}}});exports.default=c;