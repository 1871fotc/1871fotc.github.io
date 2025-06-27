// change search button icon and color on Enter //    
document.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
// change icon and colour to show search is processing // 
      document.getElementById("searchButton").style.backgroundColor = "#df41fb"; 
  };
}),  

/* TODO Hack to get working - listen to document instead of element. Note it only works on Desktops */
/* const hark = document.getElementById('myInput'); */
document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      searchIndex();
  };
// If search input is empty, call clearInput to show the whole table. see https://www.w3schools.com/js/js_validation.asp //
  let x = document.getElementById("myInput").value;
  if (x == "") {
    clearInput();
    document.getElementById("searchButton").style.backgroundColor = "#7e56c2";
    document.getElementById("resetButton").style.display = "none"; 
    // set hover that seems to be lost https://stackoverflow.com/questions/11371550/change-hover-css-properties-with-javascript //
  }
  else {
    document.getElementById("resetButton").style.display = ""; 
  };
});

/*  Try change color when search button is pressed */
function setSearchButton() {
  document.getElementById("searchButton").style.backgroundColor = "#df41fb";
}


/*
   potential speed increase due to Sarifi poor speed: search only names; 
   https://insidethediv.com/javascript-filter-table-row-single-and-multiple-columns 
   https://listjs.com/examples/table/
*/

// https://stackoverflow.com/questions/65247934/filtering-html-table-containing-links?noredirect=1&lq=1 //
  
function searchIndex() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase(); 
  table = document.getElementById("lostHeadstoneTable");
  tr = table.getElementsByTagName("tr");  
  for (var i = 1; i < tr.length; i++) {
    var tds = tr[i].getElementsByTagName("td");
    var flag = false;
// search whole table //    
//    for(var j = 0; j < tds.length; j++){ //
// only search names in lostHeadstoneTable //
    for(var j = 1; j < 3; j++){ 
      var td = tds[j];
      if (td.innerText.toUpperCase().indexOf(filter) > -1) {
        flag = true;
      } 
    }
    if(flag){
        tr[i].style.display = "";
    }
    else {
        tr[i].style.display = "none";
    }
  };
// reset search icon color  //
  document.getElementById("searchButton").style.backgroundColor = "#7e56c2"; 
// document.getElementById("searchButton").style.backgroundImage = "url('../assets/search.svg')"; //
}

// When Reset button is pressed, Reset search icon color, hide the Reset button, clear the Input, show all table rows //

  function clearInput() {
    var tr, i;
    document.getElementById("searchButton").style.background = "#7e56c2";
    document.getElementById("resetButton").style.display = "none"; 
    document.getElementById('myInput').value = '';
    table = document.getElementById('lostHeadstoneTable');
    tr = table.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
      tr[i].style.display = "";  
    }
  }

/* show hide reset button on load - conflicts with listener 

  function hideResetButton() {  
    let y = document.getElementById("resetButton").value;
    if (y == "") {
      document.getElementById("resetButton").style.display = "none"; 
    }
    else {
      document.getElementById("resetButton").style.display = ""; 
    };
  };
*/  
