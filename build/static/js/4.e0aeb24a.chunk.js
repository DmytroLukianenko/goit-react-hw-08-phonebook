(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[4],{85:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(6);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},91:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(85),r=n(6),o=n(31),c=n(32),i=n(34),l=n(33),s=n(0),u=n.n(s),p=n(11),b=n(14),h=n(13),f=(n(91),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(r.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(Object(a.a)({},e.state)),e.setState({email:"",password:""})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return u.a.createElement("div",null,u.a.createElement("form",{className:"login_form",onSubmit:this.handleSubmit},u.a.createElement("input",{type:"email",placeholder:"email",name:"email",onChange:this.handleChange,value:t}),u.a.createElement("input",{type:"password",placeholder:"password",name:"password",onChange:this.handleChange,value:n}),u.a.createElement("button",null,"LogIn"),u.a.createElement("p",null,"If you have not got an account yet, please"," ",u.a.createElement(b.b,{to:"/register"},"register"))))}}]),n}(s.Component));t.default=Object(p.b)(null,{onLogin:h.a.logIn})(f)}}]);
//# sourceMappingURL=4.e0aeb24a.chunk.js.map