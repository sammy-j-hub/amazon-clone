(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{109:function(e,a,t){},110:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(46),l=t.n(c),i=(t(62),t(47)),o=t(2),s=(t(63),t(64),t(49)),m=t.n(s),u=t(51),d=t.n(u),p=t(8),E=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(a,t)},c)},h=function(){return Object(n.useContext)(E)},g=t(31),f=t.n(g),v=f.a.initializeApp({apiKey:"AIzaSyCcFH2R-DQ3VqUEGCJvCXH5sTvDqdnOzjc",authDomain:"clone-3eeeb.firebaseapp.com",databaseURL:"https://clone-3eeeb.firebaseio.com",projectId:"clone-3eeeb",storageBucket:"clone-3eeeb.appspot.com",messagingSenderId:"161389043757",appId:"1:161389043757:web:5c6eb3dffa304d4689d8a4",measurementId:"G-YGLCQ0JE9M"}).firestore(),b=f.a.auth();var N=function(){var e=h(),a=Object(o.a)(e,1)[0],t=a.basket,n=a.user;return r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{type:"text",className:"header__searchInput"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!n&&"/login"},r.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",n?n.email+",":"Guest,"),r.a.createElement("span",{className:"header_optionLineTwo"},n?"Sign Out":"Sign In"))),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header_optionLineTwo"},"& Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header_optionLineTwo"},"Prime")),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__basketOption"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))};t(84);var O=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,l=e.rating,i=h(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null," \u2b50\ufe0f ")})))),r.a.createElement("img",{src:n}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:c,rating:l}})}},"Add to Basket"))};t(85);var S=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg",alt:""}),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"1",title:"Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage) - 48MP Quad Camera & Full HD+ Display",price:11999,image:"https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg",rating:4}),r.a.createElement(O,{id:"2",title:"Solimo Wi-Fi Smart Light, 9W, B22 Holder, Alexa Enabled (Yellow/Light Yellow/White)",price:629,image:"https://images-na.ssl-images-amazon.com/images/I/61bw%2B7cP-0L._SL1500_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"3",title:"ZOSOE Milk Frother Electric Foam Maker ",price:249,image:"https://images-na.ssl-images-amazon.com/images/I/41Xek-y5a5L.jpg",rating:3}),r.a.createElement(O,{id:"4",title:"Casa Azul Non-Stick 6 Cup Muffin Pan with Free 60pcs Muffin Liners ",price:299,image:"https://images-na.ssl-images-amazon.com/images/I/91WGMpVp%2BvL._SL1500_.jpg",rating:5}),r.a.createElement(O,{id:"5",title:"LG 215 L 4 Star Inverter Direct Cool Single Door Refrigerator (GL-B221AASY, Amber Steel)",price:16499,image:"https://images-na.ssl-images-amazon.com/images/I/61%2Bu%2Bz0uJZL._SL1500_.jpg",rating:5})),r.a.createElement("div",{className:"home__row"},r.a.createElement(O,{id:"6",title:"Natraj Exports Wooden Five Seater Sofa Set for Living Room | 5 Seater Sofa for Office & Lounge",price:18e3,image:"https://image.made-in-china.com/202f0j00WaLUFqgBsurh/Corner-Group-Modern-Sofa-Set-3PCS-Sectional-Sofas-Sectionals-Living-Room-Furniture-Modern.jpg",rating:5}))))},y=t(20),j=t.n(y),k=(t(87),t(35)),C=t(18),w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},T=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(k.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:a.user});default:return e}},B=t(4);var A=function(){var e=Object(B.f)(),a=h(),t=Object(o.a)(a,1)[0].basket;return r.a.createElement("div",{className:"subtotal"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"SubTotal (",t.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:w(t),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Procced to Checkout"))};t(88);var P=function(e){var a=e.id,t=e.image,n=e.title,c=e.price,l=e.rating,i=e.hideButton,s=h(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:t,alt:""}),r.a.createElement("div",{className:"checkoutProduct__input"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return r.a.createElement("p",null," \u2b50\ufe0f ")}))),!i&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))};t(89);var L=function(){var e=h(),a=Object(o.a)(e,2),t=a[0],n=t.basket,c=t.user;return a[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"",className:"checkout__ad"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",null===c||void 0===c?void 0:c.email),r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),n.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(A,null)))};t(90);var I=function(){var e=Object(B.f)(),a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"loginPage"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp",alt:"",className:"loginPage__image"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,r.a.createElement("strong",null,"Sign In")),r.a.createElement("form",null,r.a.createElement("h5",null,"Email ID "),r.a.createElement("input",{type:"email",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Email ID"}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Password"}),r.a.createElement("button",{className:"login__signInButton",type:"submit",onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(c,m).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))}},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest- Based Ads Notice."),r.a.createElement("button",{className:"login__registerButton",onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(c,m).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))}},"Create your Amazon Account")))};t(91);var M=function(){return r.a.createElement(p.b,{to:"/"},r.a.createElement("div",{className:"footer"},r.a.createElement("img",{className:"footer__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""}),r.a.createElement("div",{className:"footer_bar"},r.a.createElement("span",{className:"footer_bar_career"},"Careers"),r.a.createElement("span",{className:"footer_bar_blog"},"Blog"),r.a.createElement("span",{className:"footer_bar_contact"},"Contact Us"),r.a.createElement("span",{className:"footer_bar_help"},"Help")),r.a.createElement("p",null,"Copyright \xa9 2020, Amazon clone by Samriddhi Jaiswal \ud83d\ude80 ")))},D=t(22),G=t.n(D),x=t(34),z=t(17),R=t(52),F=t.n(R).a.create({baseURL:"https://us-central1-clone-3eeeb.cloudfunctions.net/api"});t(109);var W=function(){var e=h(),a=Object(o.a)(e,2),t=a[0],c=t.basket,l=t.user,i=a[1],s=Object(B.f)(),m=Object(z.useStripe)(),u=Object(z.useElements)(),d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],g=E[1],f=Object(n.useState)(""),b=Object(o.a)(f,2),N=b[0],O=b[1],S=Object(n.useState)(null),y=Object(o.a)(S,2),k=y[0],C=y[1],T=Object(n.useState)(!0),A=Object(o.a)(T,2),L=A[0],I=A[1],M=Object(n.useState)(!0),D=Object(o.a)(M,2),R=D[0],W=D[1];Object(n.useEffect)((function(){(function(){var e=Object(x.a)(G.a.mark((function e(){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F({method:"post",url:"/payments/create?total=".concat(100*w(c))});case 2:a=e.sent,W(a.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("the secret is >>>>>>",R);var U=function(){var e=Object(x.a)(G.a.mark((function e(a){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),O(!0),e.next=4,m.confirmCardPayment(R,{payment_method:{card:u.getElement(z.CardElement)}}).then((function(e){var a=e.paymentIntent;console.log("hello!"),v.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(a.id).set({basket:c,amount:a.amount,created:a.created}),g(!0),C(null),O(!1),i({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout : ",r.a.createElement(p.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items")),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"Modi Ji ka Ghar"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review Items and Delivery")),r.a.createElement("div",{className:"payment__items"},c.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:U},r.a.createElement(z.CardElement,{onChange:function(e){I(e.empty),C(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__pricecontainer"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Order Total : ",e))},decimalScale:2,value:w(c),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",{disabled:N||L||_},r.a.createElement("span",null,N?r.a.createElement("p",null,"Processing"):r.a.createElement("p",null,"Buy Now")))),k&&r.a.createElement("div",null,k))))))},U=(t(110),t(53)),Y=t.n(U);var H=function(e){var a,t=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,Y.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}))};t(112);var K=function(){var e=h(),a=Object(o.a)(e,2),t=a[0],c=(t.basket,t.user),l=(a[1],Object(n.useState)([])),i=Object(o.a)(l,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){c?v.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(H,{order:e})}))))},X=t(54),J=t(55),V=t.n(J);t(113);var q=function(){return r.a.createElement("div",{className:"subheader"},r.a.createElement("div",{className:"subheader_locationIcon"},r.a.createElement(V.a,null)),r.a.createElement("div",{className:"subheader_location"},r.a.createElement("span",{className:"subheader_deliver"},"Deliver To"),r.a.createElement("span",{className:"subheader_locationName"},"India ")),r.a.createElement("div",{className:"subheader_options"},r.a.createElement("span",{className:"subheader_optionOne"},"Today's Deal"),r.a.createElement("span",{className:"subheader_optionTwo"},"Customer Service"),r.a.createElement("span",{className:"subheader_optionThree"},"Gift Cards"),r.a.createElement("span",{className:"subheader_optionFour"},"Sell")))},Q=Object(X.a)("pk_test_51HUvkbH2WdavAV06qTpKanFGKbwCOFM3BorXWhy6CGWY07G9TgCE9jalKGuZvOPndanss7QDaXTeiPytGiL5pcXS0069E9Hri0");var Z=function(){var e=h(),a=Object(o.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("the user is >>>",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/orders"},r.a.createElement(N,null),r.a.createElement(q,null),r.a.createElement(K,null)),r.a.createElement(B.a,{path:"/login"},r.a.createElement(I,null)),r.a.createElement(B.a,{path:"/checkout"},r.a.createElement(N,null),r.a.createElement(q,null),r.a.createElement(L,null)),r.a.createElement(B.a,{path:"/payment"},r.a.createElement(N,null),r.a.createElement(z.Elements,{stripe:Q},r.a.createElement(W,null))),r.a.createElement(B.a,{path:"/"},r.a.createElement(N,null),r.a.createElement(q,null),r.a.createElement(S,null))),r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,{initialState:{basket:[],user:null},reducer:T},r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,a,t){e.exports=t(115)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.58ad9bf5.chunk.js.map