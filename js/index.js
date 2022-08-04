const $=(id)=>{
    return document.getElementById(id);
}

let n = prompt('Please enter a number: ');
n = parseInt(n);
// for( i=0;i<n;i++){
//     document.writeln("&nbsp")
//     for(j=0;j<=i;j++){
//         document.writeln("*")
//     }
//        document.writeln("</br>")
// }

for( i=0;i<n;i++){
    
    for(let j=0;j<(n-i);j++){
        document.writeln("&ensp;");
    }
        for(j=0;j<=i;j++){
            document.writeln("*")
        }
        document.writeln("</br>")
    }
      


n.push('item')
$('app').innerHTML=ar.join('-')