(this.webpackJsonpfcommerce=this.webpackJsonpfcommerce||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),u=a(9),i=a(10),s=a(13),l=a(12),p=a(11),m=a(18),d=a(6),h=a(19),f=a(103),g=a(134),E=a(104),y=a(135),C=a(105),v=a(8),b=a.n(v),O=function(){return function(e){var t=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/user/cart",{headers:{Authorization:"Bearer: "+t}}).then((function(e){return e.json()})).then((function(t){return!1!==t.success?e(S(t.cart.products)):(b.a.error(t.message),e(_(t.message)))}))}},S=function(e){return{type:"GET_CART_SUCCESS",payload:e}},_=function(e){return{type:"GET_CART_FAIL",payload:e}},j=function(e){return function(t){return fetch("http://localhost:5000/api/product/products?categoryId="+e).then((function(e){return e.json()})).then((function(e){return!1!==e.success?t(A(e.products)):(b.a.error(e.message),t(T()))}))}},k=function(e){return function(t){return fetch("http://localhost:5000/api/product/"+e).then((function(e){return e.json()})).then((function(e){return t(A(e.product))}))}},A=function(e){return{type:"GET_PRODUCTS_SUCCESS",payload:e}},T=function(){return{type:"GET_PRODUCTS_FAIL",payload:{}}},w=function(e,t){return function(a){var n=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/user/add-to-cart",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer: "+n},body:JSON.stringify({id:e,amount:parseInt(t)})}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?a(R(e.cart.products)):(b.a.error(e.message),a(D(e.message)))}))}},R=function(e){return{type:"ADD_PRODUCT_TO_CART_SUCCESS",payload:e}},D=function(e){return{type:"ADD_PRODUCT_TO_CART_FAIL",payload:e}},P=function(e){return function(t){var a=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/user/remove-from-cart",{method:"delete",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer: "+a},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?t(N(e.cart.products)):(b.a.error(e.message),t(U(e.message)))}))}},N=function(e){return{type:"REMOVE_PRODUCT_FROM_CART_SUCCESS",payload:e}},U=function(e){return{type:"REMOVE_PRODUCT_FROM_CART_FAIL",payload:e}},I=function(e){return function(t){return fetch("http://localhost:5000/api/product/search-product?productName="+e).then((function(e){return e.json()})).then((function(e){return!1!==e.success?t(x(e.products)):(b.a.error(e.message),t(M()))}))}},x=function(e){return{type:"SEARCH_PRODUCT_SUCCESS",payload:e}},M=function(){return{type:"SEARCH_PRODUCT_FAIL",payload:[]}},L=function(e){return function(t){return fetch("http://localhost:5000/api/product/"+e+"/comments").then((function(e){return e.json()})).then((function(e){return!1!==e.sucess?t(F(e.comments)):(b.a.error(e.message),t(G()))}))}},F=function(e){return{type:"GET_COMMENTS_SUCCESS",payload:e}},G=function(){return{type:"GET_COMMENTS_FAIL",payload:[]}},H=function(e,t){return function(a){var n=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/product/add-comment",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer: "+n},body:JSON.stringify({id:e,message:t})}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?a(z(e.comment)):(b.a.error(e.message),a(B()))}))}},z=function(e){return{type:"ADD_COMMENT_SUCCESS",payload:e}},B=function(){return{type:"ADD_COMMENT_FAIL",payload:{}}},Y=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={dropdownOpen:!1,setDropdownOpen:!1},e}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({setDropdownOpen:!this.state.setDropdownOpen})}},{key:"componentDidMount",value:function(){this.props.actions.getCart()}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{isOpen:this.state.setDropdownOpen,toggle:function(){return e.toggle()}},r.a.createElement(g.a,{caret:!0},"Cart ",r.a.createElement(E.a,{color:"light"},this.props.cart.length)),r.a.createElement(y.a,null,this.props.cart.map((function(t){return r.a.createElement(C.a,{key:t._id},console.log(t),t.product.productName," ",r.a.createElement(E.a,{color:"success"},t.amount),r.a.createElement(E.a,{color:"danger",className:"ml-2",onClick:function(){return e.props.actions.removeProductFromCart(t.product._id)}},"X"))})),r.a.createElement(C.a,{divider:!0}),r.a.createElement(C.a,null,r.a.createElement(h.b,{to:"/cart"},"Go to cart"))))}}]),a}(n.Component);var J=Object(p.b)((function(e){return{cart:e.cartReducer}}),(function(e){return{actions:{getCart:Object(d.b)(O,e),removeProductFromCart:Object(d.b)(P,e)}}}))(Y),V=a(106),q=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggle=function(){},e}return Object(i.a)(a,[{key:"search",value:function(e){var t=e.target.value;""!==t?(this.setState({isOpen:!0}),this.props.actions.searchProduct(t)):this.setState({isOpen:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(V.a,{className:"search_box mr-2",type:"text",name:"search",id:"search",placeholder:"Search a product",onChange:function(t){return e.search(t)}}),r.a.createElement(f.a,{toggle:function(){return e.toggle()},isOpen:this.state.isOpen},r.a.createElement(g.a,{className:"invisible"}),r.a.createElement(y.a,null,this.props.searchResults.map((function(e){return r.a.createElement(C.a,{key:e._id},r.a.createElement(h.b,{to:"/product/"+e._id},r.a.createElement("img",{src:"http://localhost:5000/"+e.images[0],alt:"",width:"25px",height:"25px",className:"mr-3"}),e.productName))})))))}}]),a}(n.Component);var K=Object(p.b)((function(e){return{searchResults:e.searchReducer}}),(function(e){return{actions:{searchProduct:Object(d.b)(I,e)}}}))(q),Q=a(107),W=a(108),X=a(109),$=a(110),Z=a(111),ee=a(112),te=a(113),ae=a(114),ne=a(64),re=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"logout",value:function(){var e=new m.a;e.remove("accessToken",{path:"/"}),e.remove("email",{path:"/"}),e.remove("username",{path:"/"}),window.location.reload()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Q.a,{color:"light",light:!0,expand:"md",className:"mb-3"},r.a.createElement(W.a,null,r.a.createElement(X.a,{href:"/"},"FCommerce"),r.a.createElement($.a,{onClick:function(){return e.toggle()}}),r.a.createElement(Z.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(ee.a,{className:"mx-auto",navbar:!0},r.a.createElement(te.a,null,r.a.createElement(K,null))),0!==Object.keys(this.props.user).length||(new m.a).get("accessToken")?r.a.createElement(ae.a,null,r.a.createElement(J,null)," ",r.a.createElement(ne.a,{color:"primary",className:"ml-2",onClick:function(){return e.logout()}},"Logout")):r.a.createElement("div",null,r.a.createElement(h.b,{to:"/login"},r.a.createElement(ne.a,{color:"primary",className:"mr-2"},"Login")),r.a.createElement(h.b,{to:"/register"},r.a.createElement(ne.a,{color:"primary"},"Register")))))))}}]),a}(n.Component);var ce=Object(p.b)((function(e){return{user:e.authReducer,searchResult:e.searchReducer}}))(re),oe=a(17),ue=a(124),ie=a(115),se=a(116),le=function(){return function(e){return fetch("http://localhost:5000/api/category/categories").then((function(e){return e.json()})).then((function(t){return e(pe(t.categories))}))}},pe=function(e){return{type:"GET_CATEGORIES_SUCCESS",payload:e}},me=function(e){return{type:"CHANGE_CATEGORY",payload:e}},de=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.getCategories(),this.props.actions.getProducts(this.props.currentCategory._id)}},{key:"changeCategory",value:function(e){this.props.actions.changeCategory(e),this.props.actions.getProducts(e._id)}},{key:"render",value:function(){var e=this;return r.a.createElement(ie.a,null,this.props.categories.map((function(t){return r.a.createElement(se.a,{key:t._id,active:e.props.currentCategory._id===t._id,onClick:function(){return e.changeCategory(t)}},t.name)})))}}]),a}(n.Component);var he=Object(p.b)((function(e){return{categories:e.categoryListReducer,currentCategory:e.changeCategoryReducer,products:e.productListReducer}}),(function(e){return{actions:{getCategories:Object(d.b)(le,e),changeCategory:Object(d.b)(me,e),getProducts:Object(d.b)(j,e)}}}))(de),fe=a(117),ge=a(118),Ee=a(119),ye=a(120),Ce=a(121),ve=a(122),be=a(123),Oe=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"shortenDesc",value:function(e){return e.length<50?e:e.substring(0,50)+"..."}},{key:"render",value:function(){var e=this;return r.a.createElement(fe.a,null,this.props.products.map((function(t){return r.a.createElement(ge.a,{key:t._id,className:"bg-light"},r.a.createElement(Ee.a,null,r.a.createElement(h.b,{to:"/product/"+t._id},t.productName)),r.a.createElement(ye.a,{top:!0,height:"200px",src:"http://localhost:5000/"+t.images[0],alt:"Card image cap"}),r.a.createElement(Ce.a,null,r.a.createElement(ve.a,{className:"mb-1"},"Stock: ",t.inStock," - Price: ",t.price),r.a.createElement(be.a,null,e.shortenDesc(t.description)),r.a.createElement(ne.a,{color:"primary",onClick:function(){return e.props.actions.addProductToCart(t._id)}},"Add to Cart")))})))}}]),a}(n.Component);var Se=Object(p.b)((function(e){return{products:e.productListReducer}}),(function(e){return{actions:{addProductToCart:Object(d.b)(w,e)}}}))(Oe),_e=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(ue.a,{xs:"3"},r.a.createElement(he,null)),r.a.createElement(ue.a,{xs:"9"},r.a.createElement(Se,null))))}}]),a}(n.Component),je=a(68),ke=a(125),Ae=a(126),Te=a(127),we=a(128),Re=a(129),De=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={quantity:0,totalPrice:0,imageIdx:0},e}return Object(i.a)(a,[{key:"updateQuantity",value:function(e){0===this.state.quantity&&-1===e||this.setState({quantity:this.state.quantity+e,totalPrice:(this.state.quantity+e)*this.props.product.price})}},{key:"componentDidMount",value:function(){this.props.actions.getProduct(this.props.productId),this.props.actions.getComments(this.props.productId)}},{key:"formatDate",value:function(e){var t=new Date(e),a=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).formatToParts(t),n=Object(je.a)(a,9),r=n[0].value,c=n[2].value,o=n[4].value,u=n[6].value,i=n[8].value;return"".concat(c,"-").concat(r,"-").concat(o," ").concat(u,"-").concat(i)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.comment.value;e.target.comment.value="",this.props.actions.addComment(this.props.productId,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mt-5"},0!==Object.keys(this.props.product).length?r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(ue.a,{xs:"6"},this.props.product.images&&r.a.createElement("div",null,r.a.createElement("img",{src:"http://localhost:5000/"+this.props.product.images[this.state.imageIdx],alt:"",height:"500",width:"500"}),r.a.createElement("hr",null),this.props.product.images.map((function(t,a){return r.a.createElement("img",{key:t,src:"http://localhost:5000/"+t,width:"50",height:"50",alt:"",className:"mr-2 onclick_badge",onClick:function(){return e.setState({imageIdx:a})}})})))),r.a.createElement(ue.a,{xs:"5"},r.a.createElement("h3",null,this.props.product.productName),r.a.createElement("p",null,this.props.product.description),r.a.createElement("p",null,"In stock: ",this.props.product.inStock),r.a.createElement("p",null,"Price: ",this.props.product.price," TL"),r.a.createElement("h4",null,r.a.createElement(E.a,{color:"primary",className:"mr-2 onclick_badge",onClick:function(){return e.updateQuantity(-1)}},"-"),this.state.quantity,r.a.createElement(E.a,{color:"primary",className:"ml-2 mr-2 onclick_badge",onClick:function(){return e.updateQuantity(1)}},"+"),this.state.totalPrice," TL"),r.a.createElement(ne.a,{color:"primary",onClick:function(){return e.props.actions.addProductToCart(e.props.productId,e.state.quantity)}},"Add to Cart"))),r.a.createElement(ae.a,{className:"mt-4 mb-5"},r.a.createElement(ue.a,null,r.a.createElement("h4",{className:"text-primary"},"Comments"),r.a.createElement("hr",null),this.props.comments.map((function(t){return r.a.createElement(ge.a,{key:t._id,className:"mt-2"},r.a.createElement(Ce.a,null,r.a.createElement(ke.a,null,t.user.username),r.a.createElement(be.a,null,t.message),r.a.createElement(be.a,null,r.a.createElement("small",{className:"text-muted"},e.formatDate(t.date)))))})),r.a.createElement("hr",null),r.a.createElement(Ae.a,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"comment"},"Your comment:"),r.a.createElement(V.a,{type:"textarea",name:"comment",id:"comment",placeholder:"Enter your comment for this product"})),r.a.createElement(ne.a,{color:"primary"},"Add Comment"))))):r.a.createElement("div",{className:"mx-auto my-auto spinner_div vertical-center"},r.a.createElement(Re.a,{color:"primary",style:{width:"3rem",height:"3rem"},className:"mx-auto"})))}}]),a}(n.Component);var Pe=Object(p.b)((function(e,t){return{productId:t.match.params.id,product:e.productReducer,comments:e.commentReducer}}),(function(e){return{actions:{getProduct:Object(d.b)(k,e),addProductToCart:Object(d.b)(w,e),getComments:Object(d.b)(L,e),addComment:Object(d.b)(H,e)}}}))(De),Ne=function(e,t){return function(a){return fetch("http://localhost:5000/api/auth/login",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?a(Ue(e)):(b.a.error(e.message),a(Ie()))}))}},Ue=function(e){return(new m.a).set("accessToken",e.access_token,{path:"/",expires:new Date(Date.now()+18e5)}),{type:"LOGIN_SUCCESS",payload:e}},Ie=function(){return{type:"LOGIN_FAIL",payload:{}}},xe=function(e,t,a){return function(n){return fetch("http://localhost:5000/api/auth/register",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({email:e,username:t,password:a})}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?(b.a.success(e.message),n(Me())):(b.a.error(e.message),n(Le()))}))}},Me=function(){return{type:"REGISTER_SUCCESS",payload:{}}},Le=function(){return{type:"REGISTER_FAIL",payload:{}}},Fe=function(e){return function(t){return console.log(e),fetch("http://localhost:5000/api/auth/confirm?verificationToken="+e).then((function(e){return e.json()})).then((function(e){if(!1!==e.success){var a=new m.a;a.set("accessToken",e.access_token,{path:"/",expires:new Date(Date.now()+18e5)}),a.set("email",e.data.email,{path:"/",expires:new Date(Date.now()+18e5)}),a.set("username",e.data.username,{path:"/",expires:new Date(Date.now()+18e5)}),b.a.success(e.data.email+" is verified successully")}else b.a.error(e.message);return t({type:"VERIFY_MAIL",payload:{}})}))}},Ge=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={redirect:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search).get("verificationToken");e&&this.props.actions.verifyMail(e)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=t.get("email"),n=t.get("password");a&&n?this.props.actions.login(a,n):b.a.error("Missing fields")}},{key:"componentDidUpdate",value:function(){0!==Object.keys(this.props.user).length&&this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(Ae.a,{className:"w-50 mx-auto",onSubmit:function(t){return e.handleSubmit(t)}},this.state.redirect&&b.a.success("Welcome, "+this.props.user.data.username+"!")&&r.a.createElement(oe.a,{to:"/"}),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"email"},"E-mail"),r.a.createElement(V.a,{type:"email",name:"email",id:"email",placeholder:"example@example.com"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"password"},"Password"),r.a.createElement(V.a,{type:"password",name:"password",id:"password",placeholder:"A valid password"})),r.a.createElement(ne.a,{className:"mt-3"},"Login"))}}]),a}(n.Component);var He=Object(p.b)((function(e){return{user:e.authReducer}}),(function(e){return{actions:{login:Object(d.b)(Ne,e),verifyMail:Object(d.b)(Fe,e)}}}))(Ge),ze=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target),a=t.get("email"),n=t.get("username"),r=t.get("password"),c=t.get("passwordAgain"),o=t.get("userAgreement");a&&n&&r&&c?r!==c?b.a.error("Passwords do not match"):"on"!==o?b.a.error("You must accept the user agreement"):this.props.actions.register(a,n,r):b.a.error("Missing fields")}},{key:"render",value:function(){var e=this;return r.a.createElement(Ae.a,{className:"w-50 mx-auto",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"email"},"E-mail"),r.a.createElement(V.a,{type:"email",name:"email",id:"email",placeholder:"example@example.com"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"username"},"Username"),r.a.createElement(V.a,{name:"username",id:"username",placeholder:"A valid username"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"password"},"Password"),r.a.createElement(V.a,{type:"password",name:"password",id:"password",placeholder:"A valid password"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"passwordAgain"},"Password again"),r.a.createElement(V.a,{type:"password",name:"passwordAgain",id:"passwordAgain",placeholder:"Password again"})),r.a.createElement(Te.a,{check:!0},r.a.createElement(we.a,{check:!0},r.a.createElement(V.a,{type:"checkbox",name:"userAgreement",id:"userAgreement"})," I read and accept the user agreement")),r.a.createElement(ne.a,{className:"mt-3"},"Submit"))}}]),a}(n.Component);var Be=Object(p.b)((function(e){return{user:e.authReducer}}),(function(e){return{actions:{register:Object(d.b)(xe,e)}}}))(ze),Ye=a(130),Je=a(136),Ve=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"getTotalPrice",value:function(){var e=0;return this.props.cart.forEach((function(t){e+=t.amount*t.product.price})),e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ye.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Total Price"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.props.cart.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,r.a.createElement(h.b,{to:"/product/"+t.product._id},t.product.productName)),r.a.createElement("td",null,r.a.createElement(E.a,{className:"onclick_badge",color:"secondary",onClick:function(){return e.props.actions.addProductToCart(t.product._id,-1)}},"-")," ",t.amount," ",r.a.createElement(E.a,{className:"onclick_badge",color:"secondary",onClick:function(){return e.props.actions.addProductToCart(t.product._id,1)}},"+")),r.a.createElement("td",null,t.amount*t.product.price," "),r.a.createElement("td",null,r.a.createElement(E.a,{className:"onclick_badge",color:"danger",onClick:function(){return e.props.actions.removeProductFromCart(t.product._id)}},"X")))})))),r.a.createElement(Je.a,{className:"row justify-content-between align-items-center",color:"info"},"Cart summary: ",this.getTotalPrice()," ",r.a.createElement(ne.a,{className:""},"Checkout")))}}]),a}(n.Component);var qe=Object(p.b)((function(e){return{cart:e.cartReducer}}),(function(e){return{actions:{getCart:Object(d.b)(O,e),addProductToCart:Object(d.b)(w,e),removeProductFromCart:Object(d.b)(P,e)}}}))(Ve),Ke=function(){return function(e){var t=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/auth/admin",{headers:{Authorization:"Bearer: "+t}}).then((function(e){return e.json()})).then((function(t){return!1!==t.success?e(Qe()):(b.a.error(t.message),e(We()))}))}},Qe=function(){return{type:"CHECK_ADMIN_ACCESS_SUCCESS",payload:!0}},We=function(){return{type:"CHECK_ADMIN_ACCESS_FAIL",payload:!1}},Xe=function(e,t,a,n,r,c){return function(o){var u=(new m.a).get("accessToken"),i=new FormData;i.append("productName",e),i.append("categoryName",t),i.append("stock",a),i.append("price",n);for(var s=0;s<r.length;s++)i.append("photos",r[s]);return i.append("description",c),fetch("http://localhost:5000/api/product/add-product",{method:"post",headers:{Authorization:"Bearer: "+u},body:i}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?(b.a.success("Product added successfully!"),o($e(e.product))):(b.a.error(e.message),o(Ze()))}))}},$e=function(e){return{type:"ADD_PRODUCT_SUCCESS",payload:e}},Ze=function(){return{type:"ADD_PRODUCT_FAIL",payload:{}}},et=function(e){return function(t){var a=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/product/remove-product",{method:"delete",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer: "+a},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(a){return!1!==a.success?t(tt(e)):(b.a.error(a.message),t(at()))}))}},tt=function(e){return{type:"REMOVE_PRODUCT_SUCCESS",payload:e}},at=function(){return{type:"REMOVE_PRODUCT_FAIL",payload:!1}},nt=function(e,t,a,n,r,c,o){return function(u){var i=(new m.a).get("accessToken"),s=new FormData;s.append("id",e),s.append("productName",t),s.append("categoryName",a),s.append("stock",n),s.append("price",r);for(var l=0;l<c.length;l++)s.append("photos",c[l]);return s.append("description",o),fetch("http://localhost:5000/api/product/update-product",{method:"put",headers:{Authorization:"Bearer: "+i},body:s}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?(b.a.success("Product updated successfully!"),u(rt(e.product))):(b.a.error(e.message),u(ct()))}))}},rt=function(e){return{type:"UPDATE_PRODUCT_SUCCESS",payload:e}},ct=function(){return{type:"UPDATE_PRODUCT_FAIL",payload:{}}},ot=function(e){return function(t){var a=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/category/add-category",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer: "+a},body:JSON.stringify({categoryName:e})}).then((function(e){return e.json()})).then((function(e){return!1!==e.success?t(ut(e.category)):(b.a.error(e.message),t(it()))}))}},ut=function(e){return{type:"ADD_CATEGORY_SUCCESS",payload:e}},it=function(){return{type:"ADD_CATEGORY_FAIL",payload:{}}},st=function(e){return function(t){var a=(new m.a).get("accessToken");return fetch("http://localhost:5000/api/category/remove-category",{method:"delete",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer: "+a},body:JSON.stringify({categoryName:e})}).then((function(e){return e.json()})).then((function(a){return!1!==a.success?t(lt(e)):(b.a.error(a.message),t(pt()))}))}},lt=function(e){return{type:"REMOVE_CATEGORY_SUCCESS",payload:e}},pt=function(){return{type:"REMOVE_CATEGORY_FAIL",payload:""}},mt=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.checkPerm()}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.adminPerm?r.a.createElement("h1",null,"Hello from admin orders"):r.a.createElement(Je.a,{color:"danger"},"Not authorized for this area!"))}}]),a}(n.Component);var dt=Object(p.b)((function(e){return{adminPerm:e.adminCheckReducer}}),(function(e){return{actions:{checkPerm:Object(d.b)(Ke,e)}}}))(mt),ht=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentCategory:"",newCategory:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.getCategories()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(we.a,{for:"selectCategory"},"Category"),r.a.createElement(V.a,{type:"select",name:"selectCategory",id:"selectCategory",onChange:function(t){return e.setState({currentCategory:t.target.value})},value:this.state.currentCategory},r.a.createElement("option",null,"Select category"),this.props.categories.map((function(e){return r.a.createElement("option",{key:e._id},e.name)}))),r.a.createElement(ne.a,{className:"mt-3 float-right",color:"danger",onClick:function(){return e.props.actions.removeCategory(e.state.currentCategory)}},"Delete"),r.a.createElement(we.a,{for:"newCategory",className:"mt-5"},"Category name"),r.a.createElement(V.a,{name:"newCategory",id:"newCategory",placeholder:"A valid category name",onChange:function(t){return e.setState({newCategory:t.target.value})}}),r.a.createElement(ne.a,{color:"primary",className:"mt-3 float-right",onClick:function(){return e.props.actions.addCategory(e.state.newCategory)}},"Add category"))}}]),a}(n.Component);var ft=Object(p.b)((function(e){return{categories:e.categoryListReducer}}),(function(e){return{actions:{getCategories:Object(d.b)(le,e),addCategory:Object(d.b)(ot,e),removeCategory:Object(d.b)(st,e)}}}))(ht),gt=a(131),Et=a(132),yt=a(133),Ct=a(5),vt=a.n(Ct),bt=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1",currentCategory:"",productId:"",stock:0,price:0,description:"",submitted:""},e.toggle=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(i.a)(a,[{key:"handleAdd",value:function(e){e.preventDefault();var t=e.target.selectCategory.value,a=e.target.product.value,n=e.target.stock.value,r=e.target.price.value,c=e.target.description.value,o=e.target.photos.files;""===r&&(r=0),""===n&&(n=0),this.props.actions.addProduct(a,t,n,r,o,c)}},{key:"handleUpdate",value:function(e){if(e.preventDefault(),"update"===this.state.submitted){var t=e.target.selectCategory.value,a=e.target.product.value,n=e.target.stock.value,r=e.target.price.value,c=e.target.description.value,o=e.target.photos.files;""===r&&(r=0),""===n&&(n=0),this.props.actions.updateProduct(this.state.productId,a,t,n,r,o,c)}else"delete"===this.state.submitted&&this.props.actions.removeProduct(this.state.productId)}},{key:"componentDidMount",value:function(){this.props.actions.getCategories()}},{key:"changeCategory",value:function(e){this.setState({currentCategory:e.target.value});var t=e.target.options[e.target.options.selectedIndex].getAttribute("get_key");this.props.actions.getProducts(t)}},{key:"changeProduct",value:function(e){var t=e.target.options.selectedIndex;this.setState({productId:e.target.options[t].getAttribute("get_key"),stock:e.target.options[t].getAttribute("stock"),price:e.target.options[t].getAttribute("price"),description:e.target.options[t].getAttribute("desc")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ee.a,{tabs:!0},r.a.createElement(te.a,null,r.a.createElement(gt.a,{className:vt()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Add Product")),r.a.createElement(te.a,null,r.a.createElement(gt.a,{className:vt()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Update/Delete Product"))),r.a.createElement(Et.a,{activeTab:this.state.activeTab},r.a.createElement(yt.a,{tabId:"1"},r.a.createElement(Ae.a,{onSubmit:function(t){return e.handleAdd(t)},className:"mt-3"},r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"category"},"Category"),r.a.createElement(V.a,{type:"select",name:"selectCategory",id:"selectCategory",onChange:function(t){return e.setState({currentCategory:t.target.value})},value:this.state.currentCategory},r.a.createElement("option",null,"Select category"),this.props.categories.map((function(e){return r.a.createElement("option",{key:e._id},e.name)})))),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"product"},"Product"),r.a.createElement(V.a,{name:"product",id:"product",placeholder:"A valid product name"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"stock"},"Stock"),r.a.createElement(V.a,{type:"number",name:"stock",id:"stock"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"price"},"Price"),r.a.createElement(V.a,{type:"number",name:"price",id:"price"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"exampleText"},"Description"),r.a.createElement(V.a,{type:"textarea",name:"description",id:"description"})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"photos"},"File"),r.a.createElement(V.a,{type:"file",name:"photos",id:"photos",multiple:"multiple",accept:"image/*"})),r.a.createElement(ne.a,null,"Add Product"))),r.a.createElement(yt.a,{tabId:"2"},r.a.createElement(Ae.a,{onSubmit:function(t){return e.handleUpdate(t)},className:"mt-3"},r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"category"},"Category"),r.a.createElement(V.a,{type:"select",name:"selectCategory",id:"selectCategory",onChange:function(t){return e.changeCategory(t)},value:this.state.currentCategory},r.a.createElement("option",null,"Select category"),this.props.categories.map((function(e){return r.a.createElement("option",{key:e._id,get_key:e._id},e.name)})))),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"product"},"Product"),r.a.createElement(V.a,{type:"select",name:"product",id:"product",onChange:function(t){return e.changeProduct(t)}},r.a.createElement("option",null,"Select product"),this.props.products.map((function(e){return r.a.createElement("option",{key:e._id,get_key:e._id,stock:e.inStock,price:e.price,desc:e.description},e.productName)})))),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"stock"},"Stock"),r.a.createElement(V.a,{type:"number",name:"stock",id:"stock",onChange:function(t){return e.setState({stock:t.target.value})},value:this.state.stock})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"price"},"Price"),r.a.createElement(V.a,{type:"number",name:"price",id:"price",onChange:function(t){return e.setState({price:t.target.value})},value:this.state.price})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"exampleText"},"Description"),r.a.createElement(V.a,{type:"textarea",name:"description",id:"description",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description||""})),r.a.createElement(Te.a,null,r.a.createElement(we.a,{for:"photos"},"File"),r.a.createElement(V.a,{type:"file",name:"photos",id:"photos",multiple:"multiple",accept:"image/*"})),r.a.createElement(ne.a,{type:"submit",color:"primary",onClick:function(){return e.setState({submitted:"update"})}},"Update Product"),r.a.createElement(ne.a,{type:"submit",color:"danger ml-2",onClick:function(){return e.setState({submitted:"delete"})}},"Delete Product")))))}}]),a}(n.Component);var Ot=Object(p.b)((function(e){return{categories:e.categoryListReducer,products:e.productListReducer}}),(function(e){return{actions:{getCategories:Object(d.b)(le,e),getProducts:Object(d.b)(j,e),addProduct:Object(d.b)(Xe,e),updateProduct:Object(d.b)(nt,e),removeProduct:Object(d.b)(et,e)}}}))(bt),St=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={component:r.a.createElement(Je.a,{color:"info"},"Admin panel home")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.checkPerm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.adminPerm?r.a.createElement(ae.a,null,r.a.createElement(ue.a,{xs:"3"},r.a.createElement(ie.a,null,r.a.createElement(se.a,{onClick:function(){return e.setState({component:r.a.createElement(Je.a,{color:"info"},"Admin panel home")})}},"Home"),r.a.createElement(se.a,{onClick:function(){return e.setState({component:r.a.createElement(dt,null)})}},"Manage orders"),r.a.createElement(se.a,{onClick:function(){return e.setState({component:r.a.createElement(ft,null)})}},"Manage categories"),r.a.createElement(se.a,{onClick:function(){return e.setState({component:r.a.createElement(Ot,null)})}},"Manage products"))),r.a.createElement(ue.a,{xs:"6"},this.state.component)):r.a.createElement(Je.a,{color:"danger"},"Not authorized for this area!"))}}]),a}(n.Component);var _t=Object(p.b)((function(e){return{adminPerm:e.adminCheckReducer}}),(function(e){return{actions:{checkPerm:Object(d.b)(Ke,e)}}}))(St);var jt=function(){return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(W.a,null,r.a.createElement(oe.d,null,r.a.createElement(oe.b,{path:"/",exact:!0,component:_e}),r.a.createElement(oe.b,{path:"/login",component:He}),r.a.createElement(oe.b,{path:"/register",component:Be}),r.a.createElement(oe.b,{path:"/auth/verify-email",component:He}),r.a.createElement(oe.b,{path:"/product/:id",component:Pe}),r.a.createElement(oe.b,{path:"/cart",component:qe}),r.a.createElement(oe.b,{path:"/admin",exact:!0,component:_t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99),a(100),a(101);var kt=a(31),At=a(30),Tt={currentCategory:{categoryName:"Electronics",_id:"5f1714350a901c3b10210dfe"},categories:[],products:[],product:{},user:{},cartItems:[],adminPerm:!1,searchResult:[],comments:[]};var wt=Object(d.c)({categoryListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.categories,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES_SUCCESS":return t.payload;case"ADD_CATEGORY_SUCCESS":return[].concat(Object(At.a)(e),[Object(kt.a)({},t.payload)]);case"REMOVE_CATEGORY_SUCCESS":return e.filter((function(e){return e.name!==t.payload}));default:return e}},productListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.products,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return t.payload;case"ADD_PRODUCT_SUCCESS":return[].concat(Object(At.a)(e),[Object(kt.a)({},t.payload)]);case"REMOVE_PRODUCT_SUCCESS":return e.filter((function(e){return e._id!==t.payload}));default:return e}},changeCategoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.currentCategory,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CATEGORY":return t.payload;default:return e}},productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.product,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return t.payload;default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.user,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_IF_LOGIN_SUCCESS":case"CHECK_IF_LOGIN_FAIL":case"LOGIN_SUCCESS":return t.payload;default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.cartItems,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CART_SUCCESS":case"ADD_PRODUCT_TO_CART_SUCCESS":case"REMOVE_PRODUCT_FROM_CART_SUCCESS":return t.payload;default:return e}},adminCheckReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.adminPerm,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_ADMIN_ACCESS_SUCCESS":case"CHECK_ADMIN_ACCESS_FAIL":return t.payload;default:return e}},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.searchResult,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_PRODUCT_SUCCESS":case"SEARCH_PRODUCT_FAIL":return t.payload;default:return e}},commentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt.comments,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMMENTS_SUCCESS":case"GET_COMMENTS_FAIL":return t.payload;case"ADD_COMMENT_SUCCESS":return[Object(kt.a)({},t.payload)].concat(Object(At.a)(e));default:return e}}}),Rt=a(67);var Dt=Object(d.d)(wt,Object(d.a)(Rt.a));o.a.render(r.a.createElement(h.a,null,r.a.createElement(p.a,{store:Dt},r.a.createElement(jt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(102)}},[[69,1,2]]]);
//# sourceMappingURL=main.cb2f1053.chunk.js.map