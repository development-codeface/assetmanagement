var gvjs_DU="border: 0; padding: 0; margin: 0;";function gvjs_EU(a,b,c,d,e){gvjs_Zn.call(this);this.ca=a;this.ea=b;this.Ia=c;this.YK=new gvjs_Th({lb:gvjs_kt,fontSize:d,color:gvjs_mr,opacity:1,Tb:"",bold:!1,jd:!1,qf:!1});this.Eya=new gvjs_Th({lb:gvjs_kt,fontSize:d,color:gvjs_6a,opacity:1,Tb:"",bold:!1,jd:!1,qf:!1});this.Dxa=new gvjs_Th({lb:gvjs_kt,fontSize:0,color:gvjs_mr,opacity:1,Tb:"",bold:!1,jd:!1,qf:!1});this.Rua=e;this.qg=this.Va=this.C=null;this.J0=[]}gvjs_p(gvjs_EU,gvjs_Zn);
var gvjs_FU=new gvjs_B({fill:gvjs_zr,stroke:gvjs_mr,strokeWidth:1}),gvjs_GU=new gvjs_B({fill:"#f7f7f7",stroke:gvjs_Ar,strokeWidth:2}),gvjs_cja=new gvjs_B({stroke:gvjs_pr,strokeWidth:1}),gvjs_dja=new gvjs_B({stroke:gvjs_mr,strokeWidth:2}),gvjs_eja=new gvjs_B({fill:"#dc3912",fillOpacity:.7,stroke:"#c63310",strokeWidth:1}),gvjs_fja=new gvjs_B({fill:"#4684ee",stroke:gvjs_pr,strokeWidth:1});gvjs_=gvjs_EU.prototype;gvjs_.eb=NaN;gvjs_.Jb=NaN;gvjs_.aba=NaN;gvjs_.uD=NaN;gvjs_.ge=0;gvjs_.mX=null;gvjs_.ZK=null;
gvjs_.w3=null;gvjs_.C5=270;gvjs_.Vba=0;gvjs_.Uba=null;gvjs_.qJ=null;gvjs_.yz=null;gvjs_.ig=null;gvjs_.If=function(){return this.eb};gvjs_.Cw=function(a){this.eb=a};gvjs_.Hf=function(){return this.Jb};gvjs_.du=function(a){this.Jb=a};
gvjs_.Za=function(a,b,c){this.ge=a;this.mX=b;this.lu();a=gvjs_HU(this,a);null!=this.qJ&&c?(this.ig=new gvjs_kD([this.qJ],[a],c.duration,c.l8),gvjs_T(this.ig,["begin","animate",gvjs_1],this.Eta,!1,this),gvjs_T(this.ig,gvjs_1,this.Dta,!1,this),this.ig.play(!1)):(this.qJ=a,gvjs_IU(this))};gvjs_.yr=function(a,b){this.aba=Math.max(1,a);this.uD=Math.max(1,b)};gvjs_.T1=function(a){this.yz=a};function gvjs_JU(a,b,c,d){a.J0.push({Ve:b,Dk:c,color:d})}gvjs_.setAnimation=function(){};
gvjs_.clear=function(){this.lu();gvjs_S(this.Va);this.Va=null;gvjs_Vn(this)};gvjs_.draw=function(a,b){var c=new gvjs_z(this.ea,this.Ia);null!=this.Va?this.Va.update(c,a):this.Va=new gvjs_1z(this.ca,c,a,b);gvjs_5z(this.Va,gvjs_o(this.Do,this),a)};
gvjs_.Do=function(){var a=this.Va.fb(),b=a.$m(this.ea,this.Ia);a.Bc(b,gvjs_fu,gvjs_An);this.C=a;var c=this.qg=a.Ua(!1);a.appendChild(b,c);b=Math.round(.45*Math.min(this.ea,this.Ia));var d=this.ea/2,e=this.Ia/2;a.Se(d-.5,e-.5,b,gvjs_FU,c);b-=gvjs_FU.ac;b=Math.round(.9*b);a.Se(d-.5,e-.5,b,gvjs_GU,c);b-=2*gvjs_GU.ac;var f=.75*b;for(var g=0;g<this.J0.length;g++){var h=this.J0[g],k=gvjs_KU(this,gvjs_HU(this,h.Ve)),l=gvjs_KU(this,gvjs_HU(this,h.Dk));var m=new gvjs_Vy;var n=d+gvjs_pd(k,b),p=e+gvjs_qd(k,
b);m.move(n,p);m.hg(d,e,b,b,k+90,l+90,!0);n=d+gvjs_pd(l,f);p=e+gvjs_qd(l,f);m.Aa(n,p);m.hg(d,e,f,f,l+90,k+90,!1);m.close();a.Ja(m,new gvjs_B({fill:h.color}),c)}if(this.ZK||this.w3)this.ZK&&(f=e-Math.round(.35*b),a.ej(this.ZK,0,f,this.ea,f,gvjs_0,gvjs_0,this.YK,c)),this.w3&&(f=e+Math.round(.35*b),a.ej(this.w3,0,f,this.ea,f,gvjs_0,gvjs_0,this.YK,c));h=this.uD;k=.8*b;l=.9*b;n=this.aba*h;p=(this.Jb-this.eb)/n;var q=new gvjs_Vy,r=new gvjs_Vy,t=this.Dxa,u=Math.round(.14*b);t.fontSize=u;for(g=0;g<=n;g++){var w=
gvjs_KU(this,gvjs_HU(this,g*p+this.eb)),v=0==g%h,x=v?k:l;m=v?q:r;var y=d+gvjs_pd(w,x);f=e+gvjs_qd(w,x);m.move(y,f);y=d+gvjs_pd(w,b);f=e+gvjs_qd(w,b);m.Aa(y,f);v&&this.yz&&(m=this.yz[Math.floor(g/h)])&&(y=d+gvjs_pd(w,x-u/2),f=e+gvjs_qd(w,x-u/2),x=gvjs_0,280<w||90>w?(x=gvjs_1,w=0):90<=w&&260>w?(x=gvjs_3,w=y,y=this.ea):(v=Math.min(y,this.ea-y),w=y-v,y+=v,f+=Math.round(u/4)),a.ej(m,w,f,y,f,x,gvjs_0,t,c))}a.Ja(r,gvjs_cja,c);a.Ja(q,gvjs_dja,c);this.lu();this.Vba=b;gvjs_IU(this);this.Rua()};
gvjs_.Eta=function(a){this.qJ=a.x;gvjs_IU(this)};gvjs_.Dta=function(){this.lu()};gvjs_.lu=function(){this.ig&&(gvjs_Vn(this.ig),this.ig.stop(!1),gvjs_S(this.ig),this.ig=null)};function gvjs_HU(a,b){a=(b-a.eb)/(a.Jb-a.eb);a=Math.max(a,-.02);return a=Math.min(a,1.02)}function gvjs_KU(a,b){return a.C5*b+gvjs_md((360-a.C5)/2+90)}
function gvjs_IU(a){if(a.C){var b=a.Vba,c=a.C,d=a.ea/2,e=a.Ia/2,f=gvjs_KU(a,a.qJ),g=Math.round(.95*b),h=Math.round(.3*b),k=gvjs_pd(f,g);g=gvjs_qd(f,g);var l=gvjs_pd(f,h);h=gvjs_qd(f,h);f=gvjs_md(f+90);var m=.07*b,n=gvjs_pd(f,m);m=gvjs_qd(f,m);f=new gvjs_Vy;f.move(d+k,e+g);f.Mp(d+n,e+m,d-l+n/2,e-h+m/2,d-l,e-h);f.Mp(d-l-n/2,e-h-m/2,d-n,e-m,d+k,e+g);k=Math.round(.15*b);(g=a.Uba)?c.sc(g):g=a.Uba=c.Ua();a.mX&&(b=e+Math.round(.75*b),c.ej(a.mX,0,b,a.ea,b,gvjs_0,gvjs_0,a.Eya,g));c.Ja(f,gvjs_eja,g);c.Se(d-
.5,e-.5,k,gvjs_fja,g);c.appendChild(a.qg,g)}};function gvjs_LU(a,b,c,d){this.ca=a;this.ea=b;this.Ia=c;this.VN=d;this.Ey=[];this.nd=[];this.yz=[];this.nX=[];this.Pq=[];this.eb=0;this.Jb=100;this.D5=this.P0=this.rR=this.qR=this.A4=this.RT=this.QT=this.eY=this.GO=this.FO=null;this.Ar=!0;this.Q_=0}gvjs_=gvjs_LU.prototype;gvjs_.uD=2;gvjs_.Cw=function(a){this.eb!=a&&(this.eb=a,this.Ar=!0)};gvjs_.If=function(){return this.eb};gvjs_.du=function(a){this.Jb!=a&&(this.Jb=a,this.Ar=!0)};gvjs_.Hf=function(){return this.Jb};
gvjs_.setAnimation=function(a){this.D5=a};gvjs_.setValues=function(a,b,c){this.Ar=this.Ar||this.nd.length!=a.length||this.Pq.length!=c.length||!gvjs_dd(this.Pq,c);this.nd=a;this.nX=b;this.Pq=c};gvjs_.T1=function(a){1==a.length&&(a=["",a[0],""]);gvjs_dd(this.yz,a)||(this.yz=a,this.Ar=!0)};function gvjs_MU(a,b,c){return Math.min(Math.floor(a.ea/c),Math.floor(a.Ia/b))}
gvjs_.draw=function(a){if(this.Ar)gvjs_gja(this,a);else for(a=0;a<this.nd.length;a++){var b=this.Ey[a];b.ZK=this.Pq[a];b.Za(this.nd[a],this.nX[a],this.D5)}};
function gvjs_gja(a,b){a.clear();var c=a.nd.length,d=1,e=1;if(1<c){var f=Math.floor(Math.sqrt(a.ea*a.Ia/c));e=Math.floor(a.ea/f);for(d=Math.floor(a.Ia/f);!(c<=Math.floor(a.ea/f)*Math.floor(a.Ia/f));){var g=gvjs_MU(a,d,e+1),h=gvjs_MU(a,d+1,e);g>=h&&(f=g,e++);h>=g&&(f=h,d++)}}f=gvjs_MU(a,d,e);f-=0;h=gvjs_Wm();h.sc(a.ca);a.Ey=[];if(0!=c){var k=h.G(gvjs_Qa,{style:gvjs_DU,cellpadding:0,cellspacing:0,align:gvjs_0}),l=h.G(gvjs_Ra,null);h.appendChild(k,l);g=[];for(var m=0,n=0;n<d;n++){var p=h.G(gvjs_Ua,{style:gvjs_DU});
h.appendChild(l,p);for(var q=0;q<e;q++){var r=h.G(gvjs_Sa,{style:"border: 0; padding: 0; margin: 0; width: "+f+"px;"});g[m++]=r;h.appendChild(p,r)}}h.appendChild(a.ca,k);d=Math.round(.1*f);a.Q_=0;a.Ar=!0;for(e=0;e<c;e++)h=a.Ey[e]=new gvjs_EU(g[e],f,f,d,gvjs_o(function(){this.Q_++;this.Q_==this.Ey.length&&(this.Ar=!1)},a)),h.Cw(a.eb),h.du(a.Jb),h.ZK=a.Pq[e],k=a.yz,l=k.length,h.yr(1<l?l-1:4,a.uD),0<l&&h.T1(k),h.Za(a.nd[e],a.nX[e],null),null!=a.FO&&null!=a.GO&&gvjs_JU(h,a.FO,a.GO,a.eY),null!=a.QT&&null!=
a.RT&&gvjs_JU(h,a.QT,a.RT,a.A4),null!=a.qR&&null!=a.rR&&gvjs_JU(h,a.qR,a.rR,a.P0),h.draw(b,a.VN)}}gvjs_.clear=function(){for(var a=0;a<this.Ey.length;++a)this.Ey[a].clear();this.Ey=[]};function gvjs_NU(a){gvjs_7p.call(this,a);this.H=gvjs_Wm()}gvjs_p(gvjs_NU,gvjs_7p);gvjs_=gvjs_NU.prototype;gvjs_.ea=0;gvjs_.Ia=0;gvjs_.VN=!0;
gvjs_.Fg=function(a,b,c){var d=new gvjs_8h([c||{}]);c=this.container;var e=gvjs_Pm(c,d),f=gvjs_Qm(c,d),g=gvjs_D(d,gvjs_dv);if(e!=this.ea||f!=this.Ia||g!=this.VN)this.JK&&this.JK.clear(),this.JK=new gvjs_LU(c,e,f,g),this.ea=e,this.Ia=f,this.VN=g;c=this.JK;e=gvjs_E(d,gvjs_uw,0);c.Cw(e);e=gvjs_E(d,gvjs_mw,100);c.du(e);e=[String(c.If()),"","","",String(c.Hf())];e=d.ha("majorTicks",e);c.T1(e);e=gvjs_E(d,"minorTicks",2);c.uD!=e&&(c.uD=e,c.Ar=!0);e=d.Pa("greenFrom");f=d.Pa("greenTo");g=d.Pa("yellowFrom");
var h=d.Pa("yellowTo"),k=d.Pa("redFrom"),l=d.Pa("redTo"),m=gvjs_xi(d,"greenColor",gvjs_kr),n=gvjs_xi(d,"yellowColor",gvjs_wr),p=gvjs_xi(d,"redColor",gvjs_vr);if(c.FO!=e||c.GO!=f||c.eY!=m||c.QT!=g||c.RT!=h||c.A4!=n||c.qR!=k||c.rR!=l||c.P0!=p)c.FO=e,c.GO=f,c.eY=m,c.QT=g,c.RT=h,c.A4=n,c.qR=k,c.rR=l,c.P0=p,c.Ar=!0;d=gvjs_VK(d,400,gvjs_Ov);c.setAnimation(d);d=[];e=[];f=[];if(2==b.Y()&&b.X(0)==gvjs_f&&b.X(1)==gvjs_e)for(g=0;g<b.da();g++)null!=b.getValue(g,0)&&null!=b.getValue(g,1)&&(f.push(b.getValue(g,
0)),d.push(b.getValue(g,1)),e.push(b.Oa(g,1)));else for(h=0;h<b.Y();h++)if(b.X(h)==gvjs_e)for(g=0;g<b.da();g++)null!=b.getValue(g,h)&&(d.push(b.getValue(g,h)),e.push(b.Oa(g,h)),f.push(b.Wa(h)));c.setValues(d,e,f);c.draw(a);gvjs_U(this,gvjs_I,null)};gvjs_.kg=function(){this.JK&&this.JK.clear()};gvjs_k(gvjs_Yj,gvjs_NU,void 0);gvjs_NU.prototype.draw=gvjs_NU.prototype.draw;gvjs_NU.prototype.clearChart=gvjs_NU.prototype.Vb;gvjs_NU.prototype.getContainer=gvjs_NU.prototype.getContainer;