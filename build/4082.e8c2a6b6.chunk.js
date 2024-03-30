"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4082],{27997:(ae,R,s)=>{s.d(R,{A:()=>I});var e=s(74081),p=s(19003),T=s(93415);const U=(0,p.ZP)(T.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:M})=>M?"auto 1fr":"1fr"};
`,j=(0,p.ZP)(T.x)`
  overflow-x: hidden;
`,I=({sideNav:M,children:A})=>(0,e.jsxs)(U,{hasSideNav:Boolean(M),children:[M,(0,e.jsx)(j,{paddingBottom:10,children:A})]})},4082:(ae,R,s)=>{s.r(R),s.d(R,{ProvidersPage:()=>k,default:()=>Oe});var e=s(74081),p=s(27279),T=s(2548),U=s(12881),j=s(5938),I=s(6918),M=s(15244),A=s(10701),re=s(23298),ne=s(74577),de=s(35250),H=s(48102),oe=s(27997),le=s(73354),_e=s(27875),ue=s(74758),ce=s(70774),ge=s(38101),Q=s(93153),v=s(50086),b=s(32370),me=s(10989),pe=s(86967),Ee=s(4987),r=s(15530),Pe=s(26784),he=s(51943),B=s(61020),W=s(40464),Me=s(89486),ve=s(82298),fe=s(71563),t=s(70627),n=s(45857),Ce=s(10124),i=s(47853);const K=({description:o,disabled:f,intlLabel:E,error:c,name:u,onChange:O,placeholder:d,providerToEditName:P,type:m,value:_})=>{const{formatMessage:l}=(0,B.Z)(),h=u==="noName"?`${window.strapi.backendURL}/api/connect/${P}/callback`:_,D=l({id:E.id,defaultMessage:E.defaultMessage},{provider:P,...E.values}),g=o?l({id:o.id,defaultMessage:o.defaultMessage},{provider:P,...o.values}):"";if(m==="bool")return(0,e.jsx)(T.s,{"aria-label":u,checked:_,disabled:f,hint:g,label:D,name:u,offLabel:l({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:l({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:x=>{O({target:{name:u,value:x.target.checked}})}});const N=d?l({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",q=c?l({id:c,defaultMessage:c}):"";return(0,e.jsx)(U.o,{"aria-label":u,disabled:f,error:q,label:D,name:u,onChange:O,placeholder:N,type:m,value:h})};K.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},K.propTypes={description:t.shape({id:t.string.isRequired,defaultMessage:t.string.isRequired,values:t.object}),disabled:t.bool,error:t.string,intlLabel:t.shape({id:t.string.isRequired,defaultMessage:t.string.isRequired,values:t.object}).isRequired,name:t.string.isRequired,onChange:t.func.isRequired,placeholder:t.shape({id:t.string.isRequired,defaultMessage:t.string.isRequired,values:t.object}),providerToEditName:t.string.isRequired,type:t.string.isRequired,value:t.oneOfType([t.bool,t.string])};const Z=({headerBreadcrumbs:o,initialData:f,isSubmiting:E,layout:c,isOpen:u,onSubmit:O,onToggle:d,providerToEditName:P})=>{const{formatMessage:m}=(0,B.Z)();return u?(0,e.jsxs)(j.P,{onClose:d,labelledBy:"title",children:[(0,e.jsx)(I.x,{children:(0,e.jsx)(Me.O,{label:o.join(", "),children:o.map((_,l,h)=>(0,e.jsx)(ve.$,{isCurrent:l===h.length-1,children:_},_))})}),(0,e.jsx)(fe.J9,{onSubmit:_=>O(_),initialValues:f,validationSchema:c.schema,validateOnChange:!1,children:({errors:_,handleChange:l,values:h})=>(0,e.jsxs)(r.l0,{children:[(0,e.jsx)(M.f,{children:(0,e.jsx)(A.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,e.jsx)(re.r,{gap:5,children:c.form.map(D=>D.map(g=>(0,e.jsx)(ne.P,{col:g.size,xs:12,children:(0,e.jsx)(K,{...g,error:_[g.name],onChange:l,value:h[g.name],providerToEditName:P})},g.name)))})})}),(0,e.jsx)(de.m,{startActions:(0,e.jsx)(H.z,{variant:"tertiary",onClick:d,type:"button",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(H.z,{type:"submit",loading:E,children:m({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};Z.defaultProps={initialData:null,providerToEditName:null},Z.propTypes={headerBreadcrumbs:t.arrayOf(t.string).isRequired,initialData:t.object,layout:t.shape({form:t.arrayOf(t.array),schema:t.object}).isRequired,isOpen:t.bool.isRequired,isSubmiting:t.bool.isRequired,onSubmit:t.func.isRequired,onToggle:t.func.isRequired,providerToEditName:t.string};const J={id:(0,n.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},V={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},S={id:(0,n.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},z={id:(0,n.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},G={id:(0,n.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},Y={id:(0,n.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},y={id:(0,n.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},w={id:(0,n.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},F={email:{form:[[{intlLabel:z,name:"enabled",type:"bool",description:S,size:6}]],schema:i.Ry().shape({enabled:i.Xg().required(r.I0.required)})},providers:{form:[[{intlLabel:z,name:"enabled",type:"bool",description:S,size:6,validations:{required:!0}}],[{intlLabel:G,name:"key",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:w,name:"secret",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:J,placeholder:V,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:Y,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:i.Ry().shape({enabled:i.Xg().required(r.I0.required),key:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),secret:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),callback:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:z,name:"enabled",type:"bool",description:S,size:6,validations:{required:!0}}],[{intlLabel:G,name:"key",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:w,name:"secret",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,n.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:y,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,n.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,n.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:J,placeholder:V,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:Y,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:i.Ry().shape({enabled:i.Xg().required(r.I0.required),key:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),secret:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),subdomain:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()}),callback:i.Z_().when("enabled",{is:!0,then:i.Z_().required(r.I0.required),otherwise:i.Z_()})})}},k=()=>{const{formatMessage:o,locale:f}=(0,B.Z)(),E=(0,W.useQueryClient)(),{trackUsage:c}=(0,r.rS)(),[u,O]=p.useState(!1),[d,P]=p.useState(null),m=(0,r.lm)(),{lockApp:_,unlockApp:l}=(0,r.o1)(),{get:h,put:D}=(0,r.kY)(),{formatAPIError:g}=(0,r.So)(),N=(0,r.Xe)(f,{sensitivity:"base"});(0,r.go)();const{isLoading:q,allowedActions:{canUpdate:x}}=(0,r.ss)({update:n.P.updateProviders}),{isLoading:De,data:X}=(0,W.useQuery)(["users-permissions","get-providers"],async()=>{const{data:a}=await h("/users-permissions/providers");return a},{initialData:{}}),ee=(0,W.useMutation)(a=>D("/users-permissions/providers",a),{async onSuccess(){await E.invalidateQueries(["users-permissions","providers"]),m({type:"success",message:{id:(0,n.g)("notification.success.submit")}}),c("didEditAuthenticationProvider"),$(),l()},onError(a){m({type:"warning",message:g(a)}),l()},refetchActive:!1}),C=Object.entries(X).reduce((a,[L,Le])=>{const{icon:ie,enabled:Re,subdomain:Te}=Le;return a.push({name:L,icon:ie==="envelope"?["fas","envelope"]:["fab",ie],enabled:Re,subdomain:Te}),a},[]).sort((a,L)=>N.compare(a.name,L.name)),be=De||q,se=p.useMemo(()=>d?!!C.find(L=>L.name===d)?.subdomain:!1,[C,d]),ye=p.useMemo(()=>d==="email"?F.email:se?F.providersWithSubdomain:F.providers,[d,se]),$=()=>{O(a=>!a)},te=a=>{x&&(P(a.name),$())},xe=async a=>{_(),c("willEditAuthenticationProvider"),ee.mutate({providers:{...X,[d]:a}})};return(0,e.jsxs)(oe.A,{children:[(0,e.jsx)(r.SL,{name:o({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,e.jsxs)(le.o,{children:[(0,e.jsx)(_e.T,{title:o({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),be?(0,e.jsx)(r.dO,{}):(0,e.jsx)(ue.D,{children:(0,e.jsxs)(ce.i,{colCount:3,rowCount:C.length+1,children:[(0,e.jsx)(ge.h,{children:(0,e.jsxs)(Q.Tr,{children:[(0,e.jsx)(v.Th,{children:(0,e.jsx)(b.Z,{variant:"sigma",textColor:"neutral600",children:o({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(v.Th,{children:(0,e.jsx)(b.Z,{variant:"sigma",textColor:"neutral600",children:o({id:(0,n.g)("Providers.status"),defaultMessage:"Status"})})}),(0,e.jsx)(v.Th,{children:(0,e.jsx)(b.Z,{variant:"sigma",children:(0,e.jsx)(me.T,{children:o({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,e.jsx)(pe.p,{children:C.map(a=>(0,e.jsxs)(Q.Tr,{...(0,r.X7)({fn:()=>te(a),condition:x}),children:[(0,e.jsx)(v.Td,{width:"45%",children:(0,e.jsx)(b.Z,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),(0,e.jsx)(v.Td,{width:"65%",children:(0,e.jsx)(b.Z,{textColor:a.enabled?"success600":"danger600","data-testid":`enable-${a.name}`,children:a.enabled?o({id:"global.enabled",defaultMessage:"Enabled"}):o({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,e.jsx)(v.Td,{...r.UW,children:x&&(0,e.jsx)(Ee.h,{onClick:()=>te(a),noBorder:!0,icon:(0,e.jsx)(Pe.Z,{}),label:"Edit"})})]},a.name))})]})})]}),(0,e.jsx)(Z,{initialData:X[d],isOpen:u,isSubmiting:ee.isLoading,layout:ye,headerBreadcrumbs:[o({id:(0,n.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),he(d)],onToggle:$,onSubmit:xe,providerToEditName:d})]})},Oe=()=>(0,e.jsx)(r.O4,{permissions:n.P.readProviders,children:(0,e.jsx)(k,{})})}}]);
