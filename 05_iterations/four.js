const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    py:'Python',

}
for (const key in myObject) {
   console.log(`${key}   Key for  ${myObject[key]}`);
   
}


const prog=['js','cpp','py','java','ruby']

for (const key in prog) {
    console.log(prog[key]);
    
}

const map=new Map()

map.set('Pak','Pakistan')
map.set('US','United States')
map.set('AUS','Australia')

for (const key in map) {
    console.log(key);
    // not iteratable
}