console.log('TEST file...');

// arr = [5,6,7,8,9];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     i++;
// }
// arr.forEach(e => console.log(e));
// console.log(arr.filter(e => e > 6));

function a(){console.log('run a'); return true;}
function b(){console.log('run b'); return false;}

if(a() || b()) {
    console.log('if res true')
}

