(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat.app;var r="spookygames-auth-keycloak.",l="flarum-ext-auth-keycloak.admin.keycloak_settings.";e.n(a)().initializers.add("spookygames-auth-keycloak",(function(e){e.extensionData.for("spookygames-auth-keycloak").registerSetting({setting:r+"server_url",label:e.translator.trans(l+"server_url_label"),type:"text",placeholder:"https://keycloak.example.com/auth"}).registerSetting({setting:r+"realm",label:e.translator.trans(l+"realm_label"),type:"text",placeholder:"my_realm"}).registerSetting({setting:r+"app_id",label:e.translator.trans(l+"client_id_label"),type:"text",placeholder:"flarum"}).registerSetting({setting:r+"app_secret",label:e.translator.trans(l+"client_secret_label"),type:"text",placeholder:"88a44c58-17c4-414c-85ed-4c56594131ba"}).registerSetting({setting:r+"encryption_algorithm",label:e.translator.trans(l+"encryption_algorithm_label"),type:"text",placeholder:"RS256"}).registerSetting({setting:r+"encryption_key",label:e.translator.trans(l+"encryption_key_label"),type:"text",placeholder:"-----BEGIN PUBLIC KEY----- MIIBIjANsomethingIDAQAB -----END PUBLIC KEY-----"}).registerSetting({setting:r+"role_mapping",label:e.translator.trans(l+"role_mapping_label"),type:"text",placeholder:'{"ROLE_MEMBER":"Member","ROLE_MODERATOR":"Mods","ROLE_ADMIN":"Admin"}'}).registerSetting({setting:r+"attribute_mapping",label:e.translator.trans(l+"attribute_mapping_label"),type:"text",placeholder:'{"moniker":"nickname","badges":"badges"}'}).registerSetting({setting:r+"delegate_avatars",label:e.translator.trans(l+"delegate_avatars_label"),type:"boolean",default:"false"})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map