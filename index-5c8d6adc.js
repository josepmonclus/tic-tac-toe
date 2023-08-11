var $t=Object.defineProperty;var vt=(r,t,e)=>t in r?$t(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var q=(r,t,e)=>(vt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=window,G=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new WeakMap;let ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new ot(typeof r=="string"?r:r+"",void 0,W),nt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ot(e,r,W)},_t=(r,t)=>{G?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},Z=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var T;const N=window,J=N.trustedTypes,gt=J?J.emptyScript:"",F=N.reactiveElementPolyfillSupport,z={toAttribute(r,t){switch(t){case Boolean:r=r?gt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},lt=(r,t)=>t!==r&&(t==t||r==r),R={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:lt},D="finalized";let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=R){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||R}static finalize(){if(this.hasOwnProperty(D))return!1;this[D]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=R){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:z).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:z;this._$El=o,this[o]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||lt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y[D]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},F==null||F({ReactiveElement:y}),((T=N.reactiveElementVersions)!==null&&T!==void 0?T:N.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const H=window,b=H.trustedTypes,Q=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,B="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,at="?"+v,yt=`<${at}>`,g=document,S=()=>g.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",ht=Array.isArray,mt=r=>ht(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",L=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,f=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ct=/^(?:script|style|textarea|title)$/i,bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),I=bt(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),it=new WeakMap,_=g.createTreeWalker(g,129,null,!1);function dt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const At=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=w;for(let h=0;h<e;h++){const l=r[h];let a,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===w?c[1]==="!--"?n=X:c[1]!==void 0?n=Y:c[2]!==void 0?(ct.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=f):c[3]!==void 0&&(n=f):n===f?c[0]===">"?(n=s??w,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=c[3]===void 0?f:c[3]==='"'?et:tt):n===et||n===tt?n=f:n===X||n===Y?n=w:(n=f,s=void 0);const $=n===f&&r[h+1].startsWith("/>")?" ":"";o+=n===w?l+yt:d>=0?(i.push(a),l.slice(0,d)+B+l.slice(d)+v+$):l+v+(d===-2?(i.push(void 0),h):$)}return[dt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,l=this.parts,[a,c]=At(t,e);if(this.el=C.createElement(a,i),_.currentNode=this.el.content,e===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(s=_.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const p of s.getAttributeNames())if(p.endsWith(B)||p.startsWith(v)){const $=c[n++];if(d.push(p),$!==void 0){const pt=s.getAttribute($.toLowerCase()+B).split(v),k=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:k[2],strings:pt,ctor:k[1]==="."?wt:k[1]==="?"?xt:k[1]==="@"?Ct:O})}else l.push({type:6,index:o})}for(const p of d)s.removeAttribute(p)}if(ct.test(s.tagName)){const d=s.textContent.split(v),p=d.length-1;if(p>0){s.textContent=b?b.emptyScript:"";for(let $=0;$<p;$++)s.append(d[$],S()),_.nextNode(),l.push({type:2,index:++o});s.append(d[p],S())}}}else if(s.nodeType===8)if(s.data===at)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:o}),d+=v.length-1}o++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var s,o,n,h;if(t===A)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=E(r,l._$AS(r,t.values),l,i)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);_.currentNode=o;let n=_.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new P(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Pt(n,this,t)),this._$AV.push(c),a=s[++l]}h!==(a==null?void 0:a.index)&&(n=_.nextNode(),h++)}return _.currentNode=g,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):mt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(dt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new Et(o,this),h=n.u(this.options);n.v(i),this.$(h),this._$AH=n}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new C(t)),e}T(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new P(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class O{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=E(this,h[i+l],e,l),a===A&&(a=this._$AH[l]),n||(n=!x(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const St=b?b.emptyScript:"";class xt extends O{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,St):this.element.removeAttribute(this.name)}}class Ct extends O{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:u)===A)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const st=H.litHtmlPolyfillSupport;st==null||st(C,P),((M=H.litHtmlVersions)!==null&&M!==void 0?M:H.litHtmlVersions=[]).push("2.8.0");const kt=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new P(t.insertBefore(S(),h),h,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,V;class m extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}m.finalized=!0,m._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:m});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:m});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.3");class ut extends m{static get properties(){return{symbol:{type:String},col:{type:Number},row:{type:Number}}}constructor(){super(),this.symbol=""}render(){return I`
            <div class='${this.symbol}'></div>
        `}}q(ut,"styles",[nt`
            :host {
                --box-bg-color: #fefef0;
                
                width: 175px;
                height: 175px;
                background: var(--box-bg-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
            }
            .cross {
                background:  rgb(71, 69, 78);
                height: 100px;
                position: relative;
                width: 10px;
                transform: rotate(45deg);
                border-radius: 30px;
            }
            .cross:after {
                background:  rgb(71, 69, 78);
                content: "";
                height: 10px;
                left: -45px;
                position: absolute;
                top: 45px;
                width: 100px;
                border-radius: 30px;
            }
            .circle {
                background: transparent;
                border: 10px solid rgb(184, 64, 57);
                width: 75px;
                height: 70px;
                border-radius: 50%;
            }
        `]);customElements.define("tic-tac-toe-cell",ut);class Ut extends m{static get styles(){return nt`
            :host {
                --board-width: 540px;
                --board-height: 540px;
                --board-bg-color: #e5d6c2;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .board {
                width: var(--board-width);
                height: var(--board-height);
                padding: 12px;
                background: var(--board-bg-color);
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                justify-content: space-between;
                border-radius: 20px;
            }
            a.new-game{
                background-color: #e5d6c2;
                color: #2D333B;
                font-family: Verdana;
                font-size: 22px;
                font-weight: 800;
                font-style: normal;
                text-decoration: none;
                padding: 15px 30px;
                border: 0px solid #000;
                border-radius: 12px;
                display: inline-block;
                margin-top: 20px;
            }
            a.new-game:hover{
                background-color: #d9cbb8;
                cursor: pointer;
            }
            a.new-game:active{
                transform: scale(0.95);
            }
        `}static get properties(){return{board:{type:Array},currentPlayer:{type:Number},plays:{type:Object},turn:{type:Number}}}constructor(){super(),this.initGame(),this.addEventListener("player-win",t=>{confirm(`Player ${t.detail.player} has won! 🎉`)}),this.addEventListener("tie",()=>{confirm("It seems it's a tie 🫤")})}render(){return I`
            <div class="container">
                <div class="board">
                    ${this.board.map((t,e)=>t.map((i,s)=>I`
                            <tic-tac-toe-cell 
                                .col=${s}
                                .row=${e}
                                @click="${this._handleClick}">
                            </tic-tac-toe-cell>
                        `))}
                </div>
                <a class="new-game" @click="${this.newGame}">New Game</a>
            </div>
        `}initGame(){this.board=[[0,0,0],[0,0,0],[0,0,0]],this.turn=1,this.currentPlayer=1,this.plays={1:0,2:0}}newGame(t){this.initGame(),this.shadowRoot.querySelectorAll("tic-tac-toe-cell").forEach(i=>{i.symbol=""})}_handleClick(t){this.checkVictory(this.currentPlayer)||this.board[t.target.row][t.target.col]===0&&(t.target.symbol=this.currentPlayer===1?"cross":"circle",this.board[t.target.row][t.target.col]=this.currentPlayer,this.plays[this.currentPlayer]++,this.checkVictory(this.currentPlayer)?setTimeout(()=>{this.dispatchEvent(new CustomEvent("player-win",{detail:{player:this.currentPlayer}}))},500):this.plays[1]+this.plays[2]===9?setTimeout(()=>{this.dispatchEvent(new CustomEvent("tie"))},500):(this.turn++,this.changePlayer()))}changePlayer(){this.currentPlayer=this.currentPlayer===1?2:1}checkVictory(t){return this.checkHorizontal(t)||this.checkVertical(t)||this.checkDiagonal(t)}checkHorizontal(t){for(let e=0;e<this.board.length;e++){let i=0;for(let s=0;s<this.board.length&&this.board[e][s]===t;s++)i++;if(i===this.board.length)return!0}return!1}checkVertical(t){for(let e=0;e<this.board.length;e++){let i=0;for(let s=0;s<this.board.length&&this.board[s][e]===t;s++)i++;if(i===this.board.length)return!0}return!1}checkDiagonal(t){return this.board[0][0]===t&&this.board[1][1]===t&&this.board[2][2]===t||this.board[0][2]===t&&this.board[1][1]===t&&this.board[2][0]===t}}customElements.define("tic-tac-toe",Ut);
