(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{162:function(e,t,a){e.exports=a(473)},167:function(e,t,a){},212:function(e,t,a){},213:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAYAAACXOioTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUJDRTRDN0Q4MTkwMTFFQUJCNzc5NEM2RTYyRjlEMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUJDRTRDN0U4MTkwMTFFQUJCNzc5NEM2RTYyRjlEMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQkNFNEM3QjgxOTAxMUVBQkI3Nzk0QzZFNjJGOUQwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQkNFNEM3QzgxOTAxMUVBQkI3Nzk0QzZFNjJGOUQwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgdXPswAAAGKSURBVHjaYmSYtuQ/Ax0AEwOdAN0sYkHhaP2lquF/rjEP46Ab3BbdNfGlvUWL5Q0Y5LgFGcqEpGlrkQQHD5gOlFSnnUUgX5x+/4zh0df3DFoCYgzmrOy0scgCaFHVq3sMx14/ZuBiYWPIkdKkvkUg13/9/QvMnvLsOsO3P78YXCSUqW8RyPWH3j8Fs0/+/slw7cMrBhEOboY2MSXqWqTCI8Qw+9NrOH//6wdg2lFUgfSyDhcAudpERIbht30chhxI3J+Lj2Hjt0+UW2QqKMUQcnoDhmHHtZ3AFsVLaTBsvHOKsqBL5RNlePHjC1YXF9w6Ck4UlsKylAUdqBSIUNADs7lZ2RiCkFwNCq41pgFgNiipg4K1+/oRcPLHBhiRq/LR+mjwtxmQw3Q06IixiJEIfBaH/ltE6mck1kezcYhvpnbQLQXiL1jEt1Lboi9Qy5DBByA+QovEgB5824D4Ny0sOouWKLbSMnnDfPUHiHfQ0iJYojgMxO/ILoJISBS3KSrrSAi+r6RqAggwABImclbsVBAyAAAAAElFTkSuQmCC"},470:function(e,t,a){},473:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(8),i=a.n(s),r=(a(167),a(11)),c=a(12),o=a(14),m=a(13),u=a(26),p=a.n(u),d=a(97),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).goToIntro=function(t){e.intro.current&&e.intro.current.scrollIntoView({behavior:"smooth",block:"nearest"})},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-template"},l.a.createElement("div",{className:"home-top-content"},l.a.createElement("div",{className:"page-content-background-outer"},l.a.createElement("img",{className:"background-image",src:this.props.bg,alt:"background"}),l.a.createElement("div",{className:"page-main-content",dangerouslySetInnerHTML:{__html:this.props.overlayContent}}),l.a.createElement("div",{onClick:this.goToIntro,className:"mouse"},l.a.createElement(d.Link,{to:"intro",spy:!0,smooth:!0,duration:800},l.a.createElement("div",{className:"mouse-wheel"},l.a.createElement("span",{className:"wheel"}),l.a.createElement("span",{className:"arrow"}),l.a.createElement("span",{className:"arrow"})))))),l.a.createElement(d.Element,{name:"intro",className:"sub-content"},l.a.createElement("div",{ref:this.intro,dangerouslySetInnerHTML:{__html:this.props.subContent}})))}}]),a}(l.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e="",t=0;return this.props.repeaterContent&&(e=this.props.repeaterContent.map((function(e,a){var n="";return n=++t%2?"row set-order-1":"row set-order-2",l.a.createElement("div",{key:a,className:n},l.a.createElement("div",{className:"col-lg-6 repeater-content"},l.a.createElement("h3",null,e.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})),l.a.createElement("div",{className:"dotted-line"}),l.a.createElement("div",{className:"col-lg-6 repeater-image"},l.a.createElement("div",{className:"repeater-image-container"},l.a.createElement("img",{src:e.image.url,alt:e.image.alt,title:e.image.title}))))}))),l.a.createElement("div",{className:"guest-information-template"},l.a.createElement("h2",null,"Guest",l.a.createElement("br",null),"Information"),l.a.createElement("div",{className:"container-fluid repeater-content-outer"},e))}}]),a}(l.a.Component),g=a(161),E=a(156),y=a.n(E),f=(a(212),a(213),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={color:e.color,name:e.name,pointer:e.pointer},n}return Object(c.a)(a,[{key:"render",value:function(){return this.state.pointer?l.a.createElement("div",null,l.a.createElement("div",{className:"pin bounce",style:{backgroundImage:"url("+this.state.pointer+")",cursor:"pointer"},title:this.state.name}),l.a.createElement("div",{className:"pulse"})):""}}]),a}(l.a.Component)),b=function(e){var t=Object(n.useState)(5),a=Object(g.a)(t,2),s=(a[0],a[1],[]),i={lat:59.95,lng:30.33};if(e.lat&&e.long&&(i={lat:Number(e.lat),lng:Number(e.long)}),e.details){var r=0;s=e.details.map((function(t,a){r++;var n=Number(t.lat),s=Number(t.long);return l.a.createElement(f,{pointer:e.site+"/wp-content/themes/cj/assets/images/point-"+r+".png",key:a,lat:n,lng:s,name:t.title})}))}return e.lat&&e.long?l.a.createElement("div",{className:"google-map-container"},l.a.createElement(y.a,{bootstrapURLKeys:{key:"AIzaSyDn0GOiOz_vsprzRg7FMoT8moIjA8XPZck"},defaultCenter:i,defaultZoom:10,options:function(e){return{disableDefaultUI:!0,mapTypeControl:!1,streetViewControl:!1,styles:[{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#304b78"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#f2f2f2"},{lightness:"11"},{weight:"3.45"}]},{featureType:"poi.school",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e2c4e4"},{saturation:"5"},{lightness:"34"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0d2b9"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e88989"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#9bbae2"},{lightness:"2"},{gamma:"0.67"},{weight:"2.09"}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{visibility:"off"},{color:"#963636"}]},{featureType:"transit.station.rail",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#c32525"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#9bbed5"},{visibility:"on"}]}]}},distanceToMouse:function(e,t,a){return!1}},s)):""},k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e="";return this.props.map&&(e=this.props.map.map((function(e,t){return l.a.createElement("div",{className:"map-location"},l.a.createElement("div",{className:"map-title"},e.venue_type),l.a.createElement("p",null,e.title,l.a.createElement("br",null),e.address))}))),l.a.createElement("div",{className:"venue-map-template"},l.a.createElement("h2",{className:"underline-circle"},"Venue and Map"),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},e),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(b,{site:this.props.site,details:this.props.map,lat:this.props.lat,long:this.props.long}))))))}}]),a}(l.a.Component),w=a(157),N=a.n(w),C=a(56),j=(a(458),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={fileList:[]},n}return Object(c.a)(a,[{key:"successUpload",value:function(e,t){Object(C.Message)({showClose:!0,message:"Thanks! Your image will be added once it has been approved.",duration:5e3}),this.setState({fileList:[]})}},{key:"handleRemove",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e=this,t=this.props.site+"/wp-json/cj/v2/gallery-images/";return l.a.createElement("div",{className:""},l.a.createElement(C.Upload,{className:"upload-demo",drag:!0,action:t,onPreview:function(t){return e.handlePreview(t)},onRemove:function(t,a){return e.handleRemove(t,a)},onSuccess:function(t,a){return e.successUpload(t,a)},fileList:this.state.fileList,accept:"image/jpeg, image/png",multiple:!0,tip:l.a.createElement("div",{className:"el-upload__tip"},"jpg/png files with a size less than 500kb")},l.a.createElement("i",{className:"el-icon-upload"}),l.a.createElement("div",{className:"el-upload__text"},"Drop file here or",l.a.createElement("em",null,"click to upload"))))}}]),a}(l.a.Component)),S=a(158),A=a.n(S),O=(a(469),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t="";this.props.gallery&&(t=this.props.gallery.map((function(t,a){return"blank-upload"===t.title?l.a.createElement(j,{site:e.props.site,key:a}):l.a.createElement(A.a,{key:a,thumbnail:t.url,image:t.url})})));return l.a.createElement("div",{className:"gallery-template"},l.a.createElement("h2",{className:"underline-circle"},"Gallery"),l.a.createElement(N.a,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},t))}}]),a}(l.a.Component)),T=a(23),G="",M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={lists:[{name:"vue",address:"https://github.com/vuejs/vue"},{name:"element",address:"https://github.com/ElemeFE/element"},{name:"cooking",address:"https://github.com/ElemeFE/cooking"},{name:"mint-ui",address:"https://github.com/ElemeFE/mint-ui"},{name:"vuex",address:"https://github.com/vuejs/vuex"},{name:"vue-router",address:"https://github.com/vuejs/vue-router"},{name:"babel",address:"https://github.com/babel/babel"}],group:[],value1:"",value2:""},n}return Object(c.a)(a,[{key:"querySearch",value:function(e,t){G.length>0&&t(e?G.filter(this.createFilter(e)):G)}},{key:"componentDidUpdate",value:function(){G=this.props.list}},{key:"createFilter",value:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}}},{key:"handleSelect",value:function(e){this.props.callbackFromParent(e),this.setState({value1:e.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"group-template"},l.a.createElement(C.AutoComplete,{autoComplete:"off",placeholder:"Please start typing your name",value:this.state.value1,fetchSuggestions:this.querySearch.bind(this),onSelect:this.handleSelect.bind(this),triggerOnFocus:!1}))}}]),a}(l.a.Component),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={password:"",notSelected:!1,nameError:!1,passwordError:!1,attendingError:!1,rsvpComplete:!1,site:e.site,courses:"",formClass:"active-form",guestList:[],labelClass:"",textareaClass:"label-textarea",autoClass:"non-active",checkingClass:"checking-box",errorClass:"form-error",attendingGuests:"",steps:"",list:[],specialRequirements:"",attending:"",step:1},n.handleChange=n.handleChange.bind(Object(T.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(T.a)(n)),n.handleCheckboxChange=n.handleCheckboxChange.bind(Object(T.a)(n)),n.handleRadioChange=n.handleRadioChange.bind(Object(T.a)(n)),n.completeRsvp=n.completeRsvp.bind(Object(T.a)(n)),n.nextStep=n.nextStep.bind(Object(T.a)(n)),n.handleRequirements=n.handleRequirements.bind(Object(T.a)(n)),n.logIn=n.logIn.bind(Object(T.a)(n)),n.setAttendance=n.setAttendance.bind(Object(T.a)(n)),n.getGuestList(),n}return Object(c.a)(a,[{key:"handleRequirements",value:function(e){this.setState({textareaClass:"label-textarea active",specialRequirements:e.target.value})}},{key:"handleChange",value:function(e){this.setState({password:e.target.value,labelClass:"active",checkingClass:"checking-box"})}},{key:"handleSubmit",value:function(e){this.setState({checkingClass:"checking-box active"}),this.getToken(this.state.password),e.preventDefault()}},{key:"getToken",value:function(e){var t=this;p()({method:"post",url:this.state.site+"wp-json/jwt-auth/v1/token",data:{username:"Guest",password:e}}).then((function(e){sessionStorage.setItem("newToken",e.data.token),t.getGuestList()})).catch((function(e){t.setState({labelClass:"error active",checkingClass:"checking-box error"}),console.log("rest error")}))}},{key:"handleCheckboxChange",value:function(e){for(var t=[],a=this.state.list.length-1;a>=0;a--){var n=this.state.list[a];e.target.checked?n.value===e.target.value&&(n.selected=!0):n.selected=!1,t.push(n)}this.setState({attendingGuests:t.reverse()})}},{key:"handleRadioChange",value:function(e){this.setState({attending:e.target.value})}},{key:"setAttendance",value:function(e){var t=this;this.state.attending?"no"==this.state.attending?p()({method:"post",url:this.state.site+"wp-json/cj/v2/not-attending",data:{attending:!1,mainGuest:this.state.mainGuest}}).then((function(e){t.setState({step:5})})).catch((function(e){console.log("rest error")})):"yes"==this.state.attending&&this.setState({step:3}):this.setState({attendingError:!0})}},{key:"nextStep",value:function(){for(var e=0,t=this.state.list.length-1;t>=0;t--){this.state.list[t].selected||e++}this.state.list.length===e?this.setState({notSelected:!0}):this.setState({step:4,courses:this.props.courses})}},{key:"getGuestList",value:function(){var e=this;p()({method:"get",url:this.state.site+"wp-json/cj/v2/guests"}).then((function(t){e.setState({guestList:t.data,formClass:"non-active-form",autoClass:"active-auto",steps:[1,2,3,4],step:1})}))}},{key:"completeRsvp",value:function(){var e=this,t=[],a=0;this.state.attendingGuests.map((function(n,l){var s=[];if(n.selected&&!n.child){for(var i=e.state.courses.length-1;i>=0;i--){for(var r=e.state.courses[i],c=!1,o=0;o<n.selection.length;o++)if(n.selection[o].id==r.id){c=!0;break}c||(s.push(r),a++)}n.errors=s}t.push(n)})),a>0?window.scrollTo(0,0):p()({method:"post",url:this.state.site+"wp-json/cj/v2/complete-rsvp",data:{specialRequirements:this.state.specialRequirements,mainGuest:this.state.mainGuest,attendingGuests:t}}).then((function(t){e.setState({step:5})})).catch((function(e){console.log("rest error")})),this.setState({attendingGuests:t})}},{key:"logIn",value:function(){var e=this;this.setState({nameError:!1,passwordError:!1}),0===this.state.list.length&&this.setState({nameError:!0}),this.state.password||this.setState({passwordError:!0}),this.state.password&&this.state.list.length>0&&p()({method:"post",url:this.state.site+"wp-json/cj/v2/login",data:{user:this.state.mainGuest,password:this.state.password}}).then((function(t){"extra information"===t.data&&e.setState({step:2}),"complete"===t.data&&e.setState({rsvpComplete:!0}),t.data||e.setState({passwordError:!0})})).catch((function(e){console.log("rest error")}))}},{key:"setGuestList",value:function(e){e.group?this.setState({list:e.group,mainGuest:e}):this.setState({list:[e],mainGuest:e})}},{key:"selectCourse",value:function(e,t,a){var n=[];this.state.attendingGuests.map((function(l,s){if(l.id===a.id){for(var i={},r=!1,c=(s="",l.selection.length-1);c>=0;c--){l.selection[c].id==t&&(r=!0,s=c)}r||(i.id=t,i.choice=e,l.selection.push(i)),r&&(l.selection[s].id=t,l.selection[s].choice=e)}n.push(l)})),this.setState({attendingGuests:n})}},{key:"courses",value:function(e,t){var a=this;if(this.state.courses){var n=this.state.courses.map((function(n,s){var i=n.type,r=i+t,c=n.options.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("label",{className:"checkbox-container"},e.option,l.a.createElement("input",{value:e.option,name:r,type:"radio"}),l.a.createElement("span",{className:"checkmark"})))}));return l.a.createElement("ul",{className:"course-list",key:s},l.a.createElement("li",null,l.a.createElement("div",{className:"course-title"},i),l.a.createElement("ul",{onChange:function(t){return a.selectCourse(t.target.value,n.id,e)}},c)))}));return n}return""}},{key:"render",value:function(){var e,t,a,n,s,i,r,c,o,m,u,p,d=this,h="";if(this.state.nameError&&(r=l.a.createElement("div",{className:"error-message"},"Please enter your name")),this.state.notSelected&&(o=l.a.createElement("div",{className:"error-message not-selected"},"Please select at least one guest")),this.state.passwordError&&(c=l.a.createElement("div",{className:"error-message"},"Please enter the correct password")),this.state.attendingError&&(p=l.a.createElement("div",{className:"error-message not-selected"},"Please select an option")),this.state.rsvpComplete&&(u=l.a.createElement("div",{className:"error-message"},"Your group has already RSVP'd ")),this.state.steps){var v=this.state.steps.map((function(e,t){var a="";return e===d.state.step&&(a="active"),l.a.createElement("li",{className:a,key:t},e)}));e=l.a.createElement("ul",{className:"rsvp-steps"},v),5===this.state.step&&(e="")}if(1==this.state.step&&(i=l.a.createElement("div",{className:this.state.autoClass},l.a.createElement("p",null,"Please login"),l.a.createElement(M,{callbackFromParent:function(e){return d.setGuestList(e)},list:this.state.guestList}),r,l.a.createElement("label",{className:"password-label"},l.a.createElement("input",{autocomplete:"off",placeholder:"Password",type:"password",value:this.state.password,onChange:this.handleChange})),u,c,l.a.createElement("div",{className:"button-container step-1"},l.a.createElement("button",{onClick:this.logIn},"Login")))),this.state.list.length>0&&2==this.state.step&&(a=l.a.createElement("div",{className:"list-wrapper"},l.a.createElement("p",null,"Can you attend?"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",{className:"checkbox-container"},"Happily accept",l.a.createElement("input",{value:"yes",name:"attendance",onChange:this.handleRadioChange,type:"radio"}),l.a.createElement("span",{className:"checkmark"}))),l.a.createElement("li",null,l.a.createElement("label",{className:"checkbox-container"},"Declines with regret",l.a.createElement("input",{value:"no",name:"attendance",onChange:this.handleRadioChange,type:"radio"}),l.a.createElement("span",{className:"checkmark"})))),p,l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:this.setAttendance}," Next step")))),3==this.state.step){var g=l.a.createElement("p",null,"Please select your name");this.state.list.length>1&&(g=l.a.createElement("p",null,"Please select the guests that will be attending the wedding")),t=this.state.list.map((function(e,t){var a="";return e.attending||(a=l.a.createElement("label",{className:"checkbox-container"},e.value,l.a.createElement("input",{value:e.value,onChange:d.handleCheckboxChange,type:"checkbox"}),l.a.createElement("span",{className:"checkmark"}))),l.a.createElement("li",{key:t},a)})),a=l.a.createElement("div",{className:"list-wrapper"},g,l.a.createElement("ul",null,t),o,l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:this.nextStep}," Next step")))}return 4==this.state.step&&(a="",this.state.attendingGuests.length>0&&(n=this.state.attendingGuests.map((function(e,t){return e.selected&&!e.child?l.a.createElement("div",{className:"guest-selection-box",key:t},l.a.createElement("div",{className:"guest-name"},e.value,"'s selection"),l.a.createElement("ul",null,d.courses(e,t))):e.selected&&e.child?l.a.createElement("div",{className:"guest-selection-box",key:t},l.a.createElement("div",{className:"guest-name"},e.value,"'s selection"),l.a.createElement("div",{className:"children-menu"},d.props.childrensMenu)):void 0})),(h=this.state.attendingGuests.map((function(e,t){if(e.errors){var a=e.errors.reverse().map((function(t,a){return l.a.createElement("li",{key:a},"Please select a ",t.type," for ",e.value)}));return l.a.createElement("ul",{className:"error-message",key:t},a)}})))&&(h=l.a.createElement("div",{className:"error-message-container"},h)),s=l.a.createElement("div",{className:"menu-selection-container"},l.a.createElement("p",null,"Please select your choice of meal, with any special dietary requirements"),h,n,l.a.createElement("label",{className:this.state.textareaClass},l.a.createElement("textarea",{placeholder:"Any special dietary requirements",value:this.state.specialRequirements,onFocus:this.handleRequirements,onChange:this.handleRequirements})),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:this.completeRsvp},"Submit"))))),5===this.state.step&&(m=l.a.createElement("p",{className:"rsvp-complete"},"Thank you, your RSVP has been sent!")),l.a.createElement("div",{className:"rsvp-template"},l.a.createElement("h2",{className:"underline-circle"},"RSVP"),m,e,i,a,s)}}]),a}(l.a.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isLoading?"":l.a.createElement("div",{className:"loading-page"},l.a.createElement("div",{className:"lds-ripple"},l.a.createElement("div",null),l.a.createElement("div",null)))}}]),a}(l.a.Component),L=(a(470),a(96)),x=a(38),P=a(18),U=a.n(P),Z="https://wilson.tonk.uk/",D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={pageClass:"active-1",pageView:"page-view",bg:"",subContent:"",overlayContent:"",repeaterContent:"",pageLoading:!1,loadingClass:"loading",mobileMenuClass:!1,menu:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get(Z+"/wp-json/cj/v2/content").then((function(t){e.setState({bg:t.data.home.backgroundImage.url,subContent:t.data.home.subContent,overlayContent:t.data.home.overlayContent,repeaterContent:t.data.guest.repeaterContent,pageLoading:!0,loadingClass:"loaded",gallery:t.data.gallery.gallery,map:t.data.map.mapLocations,lat:t.data.map.centreMapLat,long:t.data.map.centreMapLong,courses:t.data.courses,childrensMenu:t.data.childrensMenu})})),this.setActivePage(window.location.pathname)}},{key:"setActivePage",value:function(e){"/"===e&&this.setState({pageClass:"active-1"}),"/guest-information"!==e&&"/guest-information/"!==e||this.setState({pageClass:"active-2"}),"/information"!==e&&"/information/"!==e||this.setState({pageClass:"active-2"}),"/venue-and-map"!==e&&"/venue-and-map/"!==e||this.setState({pageClass:"active-3"}),"/gallery"!==e&&"/gallery/"!==e||this.setState({pageClass:"active-4"}),"/rsvp"!==e&&"/rsvp/"!==e||this.setState({pageClass:"active-5"})}},{key:"toggleMenu",value:function(){this.setState({mobileMenuClass:!this.state.mobileMenuClass})}},{key:"action",value:function(e,t){var a=this;if(this.setState({mobileMenuClass:!this.state.mobileMenuClass}),e!==t){this.setState({pageView:"page-view fade-out"});setTimeout((function(){a.setActivePage(e)}),300),setTimeout((function(){a.setState({pageView:"page-view"})}),1e3)}}},{key:"render",value:function(){var e=this;return l.a.createElement(L.BrowserRouter,null,l.a.createElement(I,{isLoading:this.state.pageLoading}),l.a.createElement("div",{className:this.state.mobileMenuClass?"mobile-menu-open":""},l.a.createElement("div",{className:this.state.loadingClass},l.a.createElement("div",{id:"page-container",className:this.state.pageClass},l.a.createElement("div",{className:"mobile-nav",onClick:function(){return e.toggleMenu()}},l.a.createElement("span",null)),l.a.createElement("div",{className:"mobile-menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/",clickAction:function(){return e.action("/",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Home"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/information",clickAction:function(){return e.action("/information",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Guest Information"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/venue-and-map",clickAction:function(){return e.action("/venue-and-map",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Venue and Map"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/gallery",clickAction:function(){return e.action("/gallery",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Gallery"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/rsvp",clickAction:function(){return e.action("/rsvp",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"RSVP"))))),l.a.createElement("a",{className:"logo",href:"/"},l.a.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"300.000000pt",height:"300.000000pt",viewBox:"0 0 300.000000 300.000000",preserveAspectRatio:"xMidYMid meet"},l.a.createElement("g",{transform:"translate(0.000000,300.000000) scale(0.100000,-0.100000)",fill:"#fff",stroke:"none"},l.a.createElement("path",{d:"M1350 2884 c-340 -43 -610 -173 -840 -404 -204 -204 -329 -439 -387 -726 -24 -123 -24 -385 0 -508 58 -287 183 -522 387 -726 203 -204 438 -329 726 -387 135 -26 395 -24 534 6 275 59 502 182 700 381 204 203 329 438 387 726 24 123 24 385 0 508 -58 287 -183 522 -387 726 -202 203 -441 330 -721 385 -82 16 -329 28 -399 19z m410 -123 c508 -116 886 -500 996 -1013 25 -116 25 -380 0 -496 -112 -520 -497 -906 -1016 -1018 -118 -25 -381 -26 -498 0 -392 84 -712 324 -892 668 -57 110 -100 228 -126 350 -25 116 -25 380 0 496 85 397 329 719 682 899 110 57 253 105 359 122 39 6 81 13 95 15 60 11 319 -4 400 -23z"}),l.a.createElement("path",{d:"M1130 2015 c-186 -53 -299 -205 -316 -427 -12 -158 33 -315 119 -413 121 -138 371 -177 527 -82 73 45 140 120 140 157 0 18 -18 11 -25 -10 -10 -33 -96 -109 -154 -138 -48 -23 -69 -27 -142 -27 -75 0 -92 4 -144 30 -142 73 -213 275 -186 526 23 212 97 324 240 366 114 33 278 -8 322 -81 26 -42 24 -57 -11 -91 -40 -39 -39 -91 2 -114 66 -37 123 37 98 128 -16 61 -89 132 -166 161 -77 29 -225 37 -304 15z"}),l.a.createElement("path",{d:"M1880 2010 c0 -5 13 -10 28 -10 15 0 33 -5 40 -12 9 -9 12 -156 12 -600 0 -630 0 -631 -49 -658 -33 -17 -78 -11 -108 15 l-28 24 23 40 c12 22 22 48 22 59 0 26 -31 52 -62 52 -58 0 -84 -90 -42 -147 38 -50 81 -68 164 -68 88 0 142 23 178 75 l22 33 0 574 c0 377 4 581 10 594 8 13 21 19 45 19 19 0 35 5 35 10 0 6 -55 10 -145 10 -90 0 -145 -4 -145 -10z"})))),l.a.createElement("nav",{className:"main-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/",clickAction:function(){return e.action("/",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Home"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/information",clickAction:function(){return e.action("/information",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Guest Information"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/venue-and-map",clickAction:function(){return e.action("/venue-and-map",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Venue and Map"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/gallery",clickAction:function(){return e.action("/gallery",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Gallery"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/rsvp",clickAction:function(){return e.action("/rsvp",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"RSVP"))))),l.a.createElement("div",{className:this.state.pageView},l.a.createElement(x.g,null,l.a.createElement(x.d,{path:"/guest-information"},l.a.createElement(v,{repeaterContent:this.state.repeaterContent})),l.a.createElement(x.d,{path:"/information"},l.a.createElement(v,{repeaterContent:this.state.repeaterContent})),l.a.createElement(x.d,{path:"/venue-and-map"},l.a.createElement(k,{site:Z,map:this.state.map,lat:this.state.lat,long:this.state.long})),l.a.createElement(x.d,{path:"/rsvp"},l.a.createElement(R,{site:Z,childrensMenu:this.state.childrensMenu,courses:this.state.courses})),l.a.createElement(x.d,{path:"/gallery"},l.a.createElement(O,{site:Z,gallery:this.state.gallery})),l.a.createElement(x.d,{path:"/"},l.a.createElement(h,{bg:this.state.bg,subContent:this.state.subContent,overlayContent:this.state.overlayContent}))),l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-copyright"},"\xa9 2021 C & J Wedding"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/",clickAction:function(){return e.action("/",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Home"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/information",clickAction:function(){return e.action("/information",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Guest Information"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/venue-and-map",clickAction:function(){return e.action("/venue-and-map",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Venue and Map"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/gallery",clickAction:function(){return e.action("/gallery",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"Gallery"))),l.a.createElement("li",null,l.a.createElement(U.a,{delay:1e3,to:"/rsvp",clickAction:function(){return e.action("/rsvp",window.location.pathname)},replace:!1},l.a.createElement("div",{className:"inner-link"},"RSVP"))))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);
//# sourceMappingURL=main.a78d2ffe.chunk.js.map