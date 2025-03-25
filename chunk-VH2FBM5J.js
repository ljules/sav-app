import{a as R,b as j,c as U,d as B,e as q,f as W,g as z,n as H,p as w,q as D,s as k}from"./chunk-IYLHBZMW.js";import{Aa as F,Ba as y,C as g,H as E,I as b,M as C,N as a,O as _,T as x,V as u,Y as $,Z as t,_ as i,a as f,aa as M,ba as d,ca as v,ja as o,ka as c,la as I,na as N,oa as L,pa as G}from"./chunk-HZAULQJF.js";var Me=(()=>{class s{static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=g({type:s,selectors:[["app-users-manager-page"]],decls:2,vars:0,template:function(r,n){r&1&&(t(0,"p"),o(1,"users-manager-page works!"),i())}})}}return s})();var h={id:null,nom:"",iode:0,ins:0,sapo:0,volMousse:0,tenueMousse:0,douceur:0,lavant:0,durete:0,solubilite:0,sechage:0,estCorpsGras:!0,ligneIngredients:[]},J=new Map([["sapo",["Ind. Sapo.","Ratio quantit\xE9 de potasse (mg) pour produire 1gr de savon."]],["ins",["INS","Note globale d'un savon/corps gras par soustraction entre l'indice d'iode et de saponification. Usuellement valeur de 125 \xE0 160"]],["iode",["Ind. d'iode","Valeur du potentiel oxydatif global."]],["lavant",["Lavant","Pouvoir lavant du savon."]],["douceur",["Douceur","Capacit\xE9 \xE0 adoucir et nourrir la peau."]],["durete",["Duret\xE9","Consistance du savon."]],["solubilite",["Solubilit\xE9","Capacit\xE9 d'un savon \xE0 se diluer dans l'eau."]],["sechage",["S\xE9chage","Capacit\xE9 d'un savon \xE0 perdre son humidit\xE9."]],["volMousse",["Vol. Mousse","Volume de mousse que produire le savon."]],["tenueMousse",["Tenue Mousse","Tenue de la mousse dans le temps."]]]);function fe(s,S){if(s&1){let e=M();t(0,"div",12)(1,"label",13),o(2),i(),t(3,"input",14),d("ngModelChange",function(n){let l=E(e).$implicit,p=v();return b(p.setFieldValue(l[0],n))}),i()()}if(s&2){let e=S.$implicit;a(),u("for",e[0]),a(),c(e[1][0]),a(),u("id",e[0])("name",e[0])("name",e[0])("title",e[1][1])}}function _e(s,S){if(s&1){let e=M();t(0,"button",15),d("click",function(){E(e);let n=v();return b(n.cancel())}),o(1," Annuler "),i()}}var A=(()=>{class s{constructor(){this.ingredient=f({},h),this.isEditing=!1,this.save=new C,this.cancelEdit=new C,this.ingredientArrayFieldLabel=Array.from(J.entries())}getFieldValue(e){return this.ingredient[e]}setFieldValue(e,r){this.ingredient[e]=r}saveIngredient(){this.save.emit(this.ingredient)}cancel(){this.cancelEdit.emit()}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=g({type:s,selectors:[["app-ingredient-form"]],inputs:{ingredient:"ingredient",isEditing:"isEditing"},outputs:{save:"save",cancelEdit:"cancelEdit"},decls:16,vars:5,consts:[["ingredientForm","ngForm"],[1,"mt-3",3,"ngSubmit"],[1,"row"],[1,"col","mb-3"],["for","nom",1,"form-label"],["type","text","id","nom","name","nom","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","col-lg-3 col-md-4 mb-3",4,"ngFor","ngForOf"],[1,"form-check","mb-3"],["type","checkbox","id","estCorpsGras","name","estCorpsGras",1,"form-check-input",3,"ngModelChange","ngModel"],["for","estCorpsGras",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],["type","button","class","btn btn-secondary ms-2",3,"click",4,"ngIf"],[1,"col-lg-3","col-md-4","mb-3"],[1,"form-label",3,"for"],["type","number","required","",1,"form-control",3,"ngModelChange","id","name","title"],["type","button",1,"btn","btn-secondary","ms-2",3,"click"]],template:function(r,n){if(r&1){let l=M();t(0,"form",1,0),d("ngSubmit",function(){return E(l),b(n.saveIngredient())}),t(2,"div",2)(3,"div",3)(4,"label",4),o(5,"Nom de l'ingr\xE9dient"),i(),t(6,"input",5),G("ngModelChange",function(m){return E(l),L(n.ingredient.nom,m)||(n.ingredient.nom=m),b(m)}),i()()(),t(7,"div",2),x(8,fe,4,6,"div",6),i(),t(9,"div",7)(10,"input",8),G("ngModelChange",function(m){return E(l),L(n.ingredient.estCorpsGras,m)||(n.ingredient.estCorpsGras=m),b(m)}),i(),t(11,"label",9),o(12,"Cet ingr\xE9dient est un corps gras"),i()(),t(13,"button",10),o(14),i(),x(15,_e,2,0,"button",11),i()}r&2&&(a(6),N("ngModel",n.ingredient.nom),a(2),u("ngForOf",n.ingredientArrayFieldLabel),a(2),N("ngModel",n.ingredient.estCorpsGras),a(4),I(" ",n.isEditing?"Mettre \xE0 jour":"Ajouter"," l'ingr\xE9dient "),a(),u("ngIf",n.isEditing))},dependencies:[F,y,z,j,R,U,B,H,W,q]})}}return s})();var X=(()=>{class s{constructor(e){this.activeModal=e,this.titre="Formule de ...",this.message="Texte du corps du modal par d\xE9faut.",this.selectedIngredient=f({},h),this.isEditing=!1}saveIngredient(e){this.activeModal.close("refresh")}resetForm(){this.selectedIngredient=f({},h),this.isEditing=!1}static{this.\u0275fac=function(r){return new(r||s)(_(w))}}static{this.\u0275cmp=g({type:s,selectors:[["app-modal-form"]],inputs:{titre:"titre",message:"message",selectedIngredient:"selectedIngredient",isEditing:"isEditing"},decls:10,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Fermer",1,"btn-close",3,"click"],[1,"modal-body"],[3,"save","cancelEdit","ingredient","isEditing"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"h5",1),o(2),i(),t(3,"button",2),d("click",function(){return n.activeModal.dismiss("Cross click")}),i()(),t(4,"div",3),o(5),t(6,"app-ingredient-form",4),d("save",function(p){return n.saveIngredient(p)})("cancelEdit",function(){return n.resetForm()}),i()(),t(7,"div",5)(8,"button",6),d("click",function(){return n.activeModal.close("Close click")}),o(9," Annuler "),i()()),r&2&&(a(2),c(n.titre),a(3),I(" ",n.message," "),a(),u("ingredient",n.selectedIngredient)("isEditing",n.isEditing))},dependencies:[A]})}}return s})();var O=(()=>{class s{constructor(e){this.activeModal=e,this.titre="Le titre du modal par d\xE9faut",this.message="Texte du corps du modal par d\xE9faut.",this.btnText="Appliquer",this.btnColor="info"}static{this.\u0275fac=function(r){return new(r||s)(_(w))}}static{this.\u0275cmp=g({type:s,selectors:[["app-modal-box-confirmation"]],inputs:{titre:"titre",message:"message",btnText:"btnText",btnColor:"btnColor"},decls:11,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Fermer",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",3,"click"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"h5",1),o(2),i(),t(3,"button",2),d("click",function(){return n.activeModal.dismiss("Cross click")}),i()(),t(4,"div",3),o(5),i(),t(6,"div",4)(7,"button",5),d("click",function(){return n.activeModal.close("Close click")}),o(8," Annuler "),i(),t(9,"button",6),d("click",function(){return n.activeModal.close("execute")}),o(10),i()()),r&2&&(a(2),c(n.titre),a(3),I(" ",n.message," "),a(4),$("btn btn-",n.btnColor,""),a(),I(" ",n.btnText," "))}})}}return s})();function ve(s,S){if(s&1){let e=M();t(0,"tr")(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),i(),t(9,"td"),o(10),i(),t(11,"td"),o(12),i(),t(13,"td"),o(14),i(),t(15,"td"),o(16),i(),t(17,"td"),o(18),i(),t(19,"td"),o(20),i(),t(21,"td"),o(22),i(),t(23,"td"),o(24),i(),t(25,"td"),o(26),i(),t(27,"td")(28,"button",7),d("click",function(){let n=E(e).$implicit,l=v(2);return b(l.editIngredient(n))}),o(29," Modifier "),i(),t(30,"button",2),d("click",function(){let n=E(e).$implicit,l=v(2);return b(l.openDeleteOneModal(n))}),o(31," Supprimer "),i()()()}if(s&2){let e=S.$implicit;a(2),c(e.id),a(2),c(e.nom),a(2),c(e.estCorpsGras),a(2),c(e.sapo),a(2),c(e.ins),a(2),c(e.iode),a(2),c(e.lavant),a(2),c(e.douceur),a(2),c(e.durete),a(2),c(e.solubilite),a(2),c(e.sechage),a(2),c(e.volMousse),a(2),c(e.tenueMousse)}}function Ie(s,S){if(s&1&&(t(0,"table",4)(1,"thead",5)(2,"tr")(3,"th"),o(4,"ID"),i(),t(5,"th"),o(6,"Nom"),i(),t(7,"th"),o(8,"Corps Gras"),i(),t(9,"th"),o(10,"Ind. sapo."),i(),t(11,"th"),o(12,"Ind. INS"),i(),t(13,"th"),o(14,"Ind. Iode"),i(),t(15,"th"),o(16,"Lavant"),i(),t(17,"th"),o(18,"Douceur"),i(),t(19,"th"),o(20,"Duret\xE9e"),i(),t(21,"th"),o(22,"Solubilit\xE9"),i(),t(23,"th"),o(24,"S\xE9chage"),i(),t(25,"th"),o(26,"Vol. Mousse"),i(),t(27,"th"),o(28,"Tenue Mousse"),i(),t(29,"th"),o(30,"Actions"),i()()(),t(31,"tbody"),x(32,ve,32,13,"tr",6),i()()),s&2){let e=v();a(32),u("ngForOf",e.ingredients)}}var Y=(()=>{class s{constructor(e){this.modalService=e,this.ingredients=[],this.edit=new C,this.delete=new C,this.deleteAll=new C,this.ingredientToDelete=null}openDeleteAllModal(){let e=this.modalService.open(O,{centered:!0});e.componentInstance.titre="Suppression de tous les ingr\xE9dients",e.componentInstance.message="\xCAtes-vous s\xFBr de vouloir supprimer TOUS les ingr\xE9dients ? Cette action est irr\xE9versible.",e.componentInstance.btnText="Supprimer TOUT !",e.componentInstance.btnColor="danger",e.result.then(r=>{r==="execute"&&this.deleteAll.emit()})}openDeleteOneModal(e){let r=this.modalService.open(O,{centered:!0});r.componentInstance.titre="Suppression d'un ingr\xE9dient",r.componentInstance.message=`\xCAtes-vous s\xFBr de vouloir supprimer l\u2019ingr\xE9dient ${e?.nom} ?`,r.componentInstance.btnText="Supprimer !",r.componentInstance.btnColor="danger",r.result.then(n=>{n==="execute"&&(this.ingredientToDelete=e,this.delete.emit(this.ingredientToDelete.id),this.ingredientToDelete=null)})}editIngredient(e){this.edit.emit(e)}static{this.\u0275fac=function(r){return new(r||s)(_(D))}}static{this.\u0275cmp=g({type:s,selectors:[["app-ingredient-list"]],inputs:{ingredients:"ingredients"},outputs:{edit:"edit",delete:"delete",deleteAll:"deleteAll"},decls:7,vars:1,consts:[[1,"row","mt-4"],[1,"row","col-3","d-flex","justify-content-between","align-items-center","ms-4","mt-3","mb-3"],[1,"btn","btn-danger",3,"click"],["class","table table-bordered table-striped mt-3",4,"ngIf"],[1,"table","table-bordered","table-striped","mt-3"],[1,"table-dark"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","btn-sm","me-2",3,"click"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"h2"),o(2,"Liste des ingr\xE9dients :"),i()(),t(3,"div",1)(4,"button",2),d("click",function(){return n.openDeleteAllModal()}),o(5,"Supprimer TOUS les ingr\xE9dients"),i()(),x(6,Ie,33,1,"table",3)),r&2&&(a(6),u("ngIf",n.ingredients.length>0))},dependencies:[F,y]})}}return s})();function be(s,S){if(s&1&&(t(0,"div",6),o(1),i()),s&2){let e=v();a(),I(" ",e.message,`
`)}}function Ce(s,S){if(s&1&&(t(0,"div",7),o(1),i()),s&2){let e=v();a(),I(" ",e.message,`
`)}}var Z=(()=>{class s{constructor(e){this.ingredientService=e,this.ingredients=[],this.importComplete=new C,this.message="",this.error=!1}exportToCSV(){if(!this.ingredients||this.ingredients.length===0){this.error=!0,this.message="Aucun ingr\xE9dient \xE0 exporter.";return}let n=["ID,Nom,Indice Iode,Indice INS,Indice de Saponification,Volume de Mousse,Tenue de Mousse,Douceur,Pouvoir Lavant,Duret\xE9,Solubilit\xE9,S\xE9chage,Est Corps Gras",...this.ingredients.map(m=>`${m.id},${m.nom},${m.iode},${m.ins},${m.sapo},${m.volMousse},${m.tenueMousse},${m.douceur},${m.lavant},${m.durete},${m.solubilite},${m.sechage},${m.estCorpsGras}`)].join(`
`),l=new Blob([n],{type:"text/csv"}),p=document.createElement("a");p.href=URL.createObjectURL(l),p.download="ingredients.csv",p.click(),this.message="Exportation r\xE9ussie !",this.clearMessageAfterDelay()}importFromCSV(e){let r=e.target.files[0];if(!r)return;let n=new FileReader;n.onload=l=>{(l.target?.result).split(`
`).slice(1).forEach(ee=>{let[Se,te,ne,ie,re,oe,se,ae,le,de,me,ce,pe]=ee.split(","),ue={id:null,nom:te.trim(),iode:parseFloat(ne),ins:parseFloat(ie),sapo:parseFloat(re),volMousse:parseFloat(oe),tenueMousse:parseFloat(se),douceur:parseFloat(ae),lavant:parseFloat(le),durete:parseFloat(de),solubilite:parseFloat(me),sechage:parseFloat(ce),estCorpsGras:pe.trim().toLowerCase()==="true",ligneIngredients:[]};this.ingredientService.addIngredient(ue).subscribe({next:()=>{this.importComplete.emit(),this.error=!1,this.message="Importation r\xE9ussie !"},error:ge=>{this.error=!0,this.message=`Erreur lors de l'import d'un ingr\xE9dient : ${ge}`}}),this.clearMessageAfterDelay()})},n.readAsText(r)}clearMessageAfterDelay(){setTimeout(()=>{this.message="",this.error=!1},3e3)}static{this.\u0275fac=function(r){return new(r||s)(_(k))}}static{this.\u0275cmp=g({type:s,selectors:[["app-ingredient-import-export"]],inputs:{ingredients:"ingredients"},outputs:{importComplete:"importComplete"},decls:8,vars:2,consts:[[1,"row","ms-2"],[1,"col-md-4","btn","btn-primary","m-3"],["type","file","hidden","",3,"change"],[1,"col-md-4","btn","btn-success","m-3",3,"click"],["class","alert alert-danger mt-2",4,"ngIf"],["class","alert alert-success mt-2",4,"ngIf"],[1,"alert","alert-danger","mt-2"],[1,"alert","alert-success","mt-2"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"label",1),o(2," Importer depuis un fichier CSV "),t(3,"input",2),d("change",function(p){return n.importFromCSV(p)}),i()(),t(4,"button",3),d("click",function(){return n.exportToCSV()}),o(5,"Exporter en CSV"),i()(),x(6,be,2,1,"div",4)(7,Ce,2,1,"div",5)),r&2&&(a(6),u("ngIf",n.message&&n.error),a(),u("ngIf",n.message&&!n.error))},dependencies:[y]})}}return s})();var V=class{constructor(){this.id=null,this.nom="",this.iode=0,this.ins=0,this.sapo=0,this.volMousse=0,this.tenueMousse=0,this.douceur=0,this.lavant=0,this.durete=0,this.solubilite=0,this.sechage=0,this.estCorpsGras=!0,this.ligneIngredients=[]}};var Ye=(()=>{class s{openModalFormIngredient(e){let r=this.modalService.open(X,{centered:!0,size:"lg"});r.componentInstance.titre="Ajout d'un nouvel ingr\xE9dient",r.componentInstance.message="Renseignez les valeurs de votre nouvel ingr\xE9dient",r.result.then(n=>{n===V&&this.saveIngredient(n)})}constructor(e,r){this.ingredientService=e,this.modalService=r,this.ingredients=[],this.isEditing=!1,this.selectedIngredient=f({},h)}ngOnInit(){this.fetchIngredients()}fetchIngredients(){this.ingredientService.getAllIngredients().subscribe({next:e=>this.ingredients=e,error:e=>console.error("Erreur chargement des ingr\xE9dients:",e)})}saveIngredient(e){this.isEditing&&e.id!==null?this.ingredientService.updateIngredient(e.id,e).subscribe({next:()=>{this.isEditing=!1,this.selectedIngredient=f({},h),this.fetchIngredients()},error:r=>{console.error("Erreur mise \xE0 jour ingr\xE9dient:",r)}}):this.ingredientService.addIngredient(e).subscribe({next:r=>{this.ingredients.push(r),this.selectedIngredient=f({},h),this.isEditing=!1},error:r=>{console.error("Erreur ajout ingr\xE9dient:",r)}})}editIngredient(e){this.selectedIngredient=f({},e),this.isEditing=!0}deleteIngredient(e){e!==null&&this.ingredientService.deleteIngredient(e).subscribe({next:()=>{this.ingredients=this.ingredients.filter(r=>r.id!==e)},error:r=>{console.error("Erreur suppression ingr\xE9dient:",r)}})}deleteAllIngredients(){this.ingredientService.deleteAllIngredients().subscribe({next:()=>{this.ingredients=[]},error:e=>console.error("Erreur suppression de tous les ingr\xE9dients:",e)})}resetForm(){this.selectedIngredient=f({},h),this.isEditing=!1}static{this.\u0275fac=function(r){return new(r||s)(_(k),_(D))}}static{this.\u0275cmp=g({type:s,selectors:[["app-ingredient-manager-page"]],decls:9,vars:4,consts:[[1,"container"],[1,"container","row","col-3"],[1,"btn","btn-info",3,"click"],[3,"save","cancelEdit","ingredient","isEditing"],[3,"edit","delete","deleteAll","ingredients"],[3,"importComplete","ingredients"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"h1"),o(2,"Gestion des Ingr\xE9dients"),i(),t(3,"div",1)(4,"button",2),d("click",function(){return n.openModalFormIngredient()}),o(5,"Cr\xE9er un ingr\xE9dient"),i()(),t(6,"app-ingredient-form",3),d("save",function(p){return n.saveIngredient(p)})("cancelEdit",function(){return n.resetForm()}),i(),t(7,"app-ingredient-list",4),d("edit",function(p){return n.editIngredient(p)})("delete",function(p){return n.deleteIngredient(p)})("deleteAll",function(){return n.deleteAllIngredients()}),i(),t(8,"app-ingredient-import-export",5),d("importComplete",function(){return n.fetchIngredients()}),i()()),r&2&&(a(6),u("ingredient",n.selectedIngredient)("isEditing",n.isEditing),a(),u("ingredients",n.ingredients),a(),u("ingredients",n.ingredients))},dependencies:[A,Y,Z]})}}return s})();export{Me as a,Ye as b};
