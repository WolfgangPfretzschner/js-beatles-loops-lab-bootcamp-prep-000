

function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(let i=0;i<musicians.length;i++){
    array.push(musicians[i].toString() +" plays "+ instruments[i].toString())
    console.log(array)
    
  }
  return array
}

theBeatlesPlay(['hans', 'berry'],['flut','gitar'])