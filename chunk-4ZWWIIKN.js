import{a as we,b as T,f as Ce}from"./chunk-RADL3733.js";import{k as u,s as x}from"./chunk-PRTAAYF4.js";import{Cb as ge,Ga as he,Ha as ve,Ja as ye,V as ue,W as fe,X as me,cb as z,fb as ze}from"./chunk-3O3UD67L.js";import{Ba as H,Ca as b,Cb as G,D as c,Da as D,Db as I,E as Y,Eb as Q,Gc as de,Ib as U,J as M,Ka as k,M as d,N as p,O as W,Ob as q,Pa as R,Qb as K,Rb as J,Sb as ee,Uc as pe,W as X,Xc as y,ac as te,bc as ie,fa as L,ga as m,gc as ne,jc as oe,lc as v,mc as re,na as $,nc as se,q as w,qc as ae,r as C,rc as le,sa as h,sb as Z,sc as ce,ub as E,v as B,vb as s,w as F,wb as V,x as O}from"./chunk-XKVGAKQW.js";var Re=["*"];function Se(n,S){if(n&1){let e=ne();te(0,"div",0),oe("@slideMotion.done",function(t){b(e);let i=v();return D(i.onAnimationEvent(t))})("mouseenter",function(){b(e);let t=v();return D(t.setMouseState(!0))})("mouseleave",function(){b(e);let t=v();return D(t.setMouseState(!1))}),se(1),ie()}if(n&2){let e=v();J(e.nzOverlayStyle),ee(e.nzOverlayClassName),K("ant-dropdown-rtl",e.dir==="rtl"),q("@slideMotion",void 0)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}var _e="dropDown",Ne=[u.bottomLeft,u.bottomRight,u.topRight,u.topLeft],st=(()=>{let n,S=[],e=[];return class A{static{let t=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;n=[fe()],F(null,null,n,{kind:"field",name:"nzBackdrop",static:!1,private:!1,access:{has:i=>"nzBackdrop"in i,get:i=>i.nzBackdrop,set:(i,a)=>{i.nzBackdrop=a}},metadata:t},S,e),t&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}nzConfigService;renderer;viewContainerRef;platform;_nzModuleName=_e;elementRef=h(R);overlay=h(ze);portal;overlayRef=null;destroy$=new w;positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");inputVisible$=new C(!1);nzTrigger$=new C("hover");overlayClose$=new w;nzDropdownMenu=null;nzTrigger="hover";nzMatchWidthElement=null;nzBackdrop=O(this,S,!1);nzClickHide=(O(this,e),!0);nzDisabled=!1;nzVisible=!1;nzOverlayClassName="";nzOverlayStyle={};nzPlacement="bottomLeft";nzVisibleChange=new k;setDropdownMenuValue(t,i){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(t,i)}constructor(t,i,a,f){this.nzConfigService=t,this.renderer=i,this.viewContainerRef=a,this.platform=f}ngAfterViewInit(){if(this.nzDropdownMenu){let t=this.elementRef.nativeElement,i=d(M(t,"mouseenter").pipe(c(()=>!0)),M(t,"mouseleave").pipe(c(()=>!1))),a=this.nzDropdownMenu.mouseState$,f=d(a,i),_=M(t,"click").pipe(c(()=>!this.nzVisible)),N=this.nzTrigger$.pipe(L(r=>r==="hover"?f:r==="click"?_:B)),g=this.nzDropdownMenu.descendantMenuItemClick$.pipe(p(()=>this.nzClickHide),c(()=>!1)),Me=d(N,g,this.overlayClose$).pipe(p(()=>!this.nzDisabled)),be=d(this.inputVisible$,Me);Y([be,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(c(([r,j])=>r||j),W(150),X(),p(()=>this.platform.isBrowser),m(this.destroy$)).subscribe(r=>{let P=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:t).getBoundingClientRect().width;if(this.nzVisible!==r&&this.nzVisibleChange.emit(r),this.nzVisible=r,r){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:P,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),d(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(p(l=>!this.elementRef.nativeElement.contains(l.target))),this.overlayRef.keydownEvents().pipe(p(l=>l.keyCode===27&&!he(l)))).pipe(m(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let l=this.overlayRef.getConfig();l.minWidth=P}this.positionStrategy.withPositions([u[this.nzPlacement],...Ne]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new ye(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(m(this.destroy$)).subscribe(r=>{r.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(t){let{nzVisible:i,nzDisabled:a,nzOverlayClassName:f,nzOverlayStyle:_,nzTrigger:N}=t;if(N&&this.nzTrigger$.next(this.nzTrigger),i&&this.inputVisible$.next(this.nzVisible),a){let g=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(g,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(g,"disabled")}f&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),_&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}static \u0275fac=function(i){return new(i||A)(s(ue),s(E),s(V),s(me))};static \u0275dir=Q({type:A,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:[2,"nzBackdrop","nzBackdrop",y],nzClickHide:[2,"nzClickHide","nzClickHide",y],nzDisabled:[2,"nzDisabled","nzDisabled",y],nzVisible:[2,"nzVisible","nzVisible",y],nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[H]})}})(),Oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=I({type:n});static \u0275inj=$({})}return n})();var at=(()=>{class n{cdr;elementRef;renderer;viewContainerRef;directionality;mouseState$=new C(!1);nzMenuService=h(T);isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$;descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$;animationStateChange$=new k;nzOverlayClassName="";nzOverlayStyle={};templateRef;dir="ltr";destroy$=new w;onAnimationEvent(e){this.animationStateChange$.emit(e)}setMouseState(e){this.mouseState$.next(e)}setValue(e,o){this[e]=o,this.cdr.markForCheck()}noAnimation=h(x,{host:!0,optional:!0});constructor(e,o,t,i,a){this.cdr=e,this.elementRef=o,this.renderer=t,this.viewContainerRef=i,this.directionality=a}ngOnInit(){this.directionality.change?.pipe(m(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(o){return new(o||n)(s(pe),s(R),s(E),s(V),s(ve))};static \u0275cmp=G({type:n,selectors:[["nz-dropdown-menu"]],viewQuery:function(o,t){if(o&1&&ae(Z,7),o&2){let i;le(i=ce())&&(t.templateRef=i.first)}},exportAs:["nzDropdownMenu"],features:[de([T,{provide:we,useValue:!0}])],ngContentSelectors:Re,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"mouseenter","mouseleave","nzNoAnimation"]],template:function(o,t){o&1&&(re(),U(0,Se,2,9,"ng-template"))},dependencies:[x],encapsulation:2,data:{animation:[ge]},changeDetection:0})}return n})(),lt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=I({type:n});static \u0275inj=$({imports:[Oe,Ce]})}return n})(),ct=[new z({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new z({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new z({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new z({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})];export{st as a,at as b,lt as c};
