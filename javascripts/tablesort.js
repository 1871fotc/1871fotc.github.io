// http://tristen.ca/tablesort/demo/ //

document$.subscribe(function() {
  var tables = document.querySelectorAll("article table")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})
