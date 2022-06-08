function countUpBy(countBy, end) {
	let countArray = [];
  for (let i = countBy; i <= end; i += countBy) {
    countArray.push(i);
  }
  console.log("loop return"); 
  return countArray;
}


$(document).ready(function(){
  $("form#count").submit(function(event){
    event.preventDefault();
    let end = parseInt($("input#end").val());
    let countBy = parseInt($("input#countBy").val());
    
    countUpBy(countBy, end);
    console.log(countArray);
  });
});