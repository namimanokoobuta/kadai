const profile = {
    firstName:'tomoya',
    familyName:'kita',
    age:26,
    major:'computer science',
    hobby:'soccer',
    job:'student',
    families:'2cats',
}
 const keys = Object.keys(profile);

 for (let i = 0; i < keys.length; i = i + 1) {
     const key = keys[i];
     const value = profile[key];
     const text= '私の' + key + 'は' + value +"です"
     console.log(text);

     
 }