var BookName = document.getElementById("BookmarkerName")
var BookLinke = document.getElementById("websiteURL")
var searchInput = document.getElementById("searchInput")
var BookList = []
if (localStorage.getItem("Bookinfo") != null) {
    BookList = JSON.parse(localStorage.getItem("Bookinfo"))
    display()
}
function BookInfo() {
    var Book = {
        name: document.getElementById("BookmarkerName").value,
        link: document.getElementById("websiteURL").value,
    }
    BookList.push(Book)
    localStorage.setItem("Bookinfo", JSON.stringify(BookList))
    display()
    BookName.value = ""
    BookLinke.value = ""
}
function display() {
    var temp = ""
    for (var i = 0; i < BookList.length; i++) {
        temp += `<div class="background_vip my-3 w_95 m-auto row">
        <div class="col-md-4">
        <h3 class="my-4">`+ BookList[i].name + `</h3>
        </div>
        <div class="col-md-1 my-4">
          <a href="`+ BookList[i].link + `" target="_blank"> <button type="button" class="btn btn-dark">Visit</button></a>
        </div>
        <div class="col-md-1 my-4">
        <button onclick="Deletbook(`+i+`)" type="button" class="btn btn-danger">Delet</button>
        </div>
        </div>`
    }
    document.getElementById("Divbody").innerHTML = temp
}
function Deletbook(numberOfbook) {
    BookList.splice(numberOfbook,1)
    localStorage.setItem("Bookinfo", JSON.stringify(BookList))
    display()
}
function search() {
 var  searchValue = searchInput.value.toLowerCase()
 console.log(searchValue)
 var temp = ""
 for (var i = 0; i < BookList.length; i++) {
    if(BookList[i].name.toLowerCase().includes(searchValue) == true){
     temp += `<div class="background_vip my-3 w_95 m-auto row">
     <div class="col-md-4">
     <h3 class="my-4">`+ BookList[i].name.toLowerCase().replace(searchValue, '<span class="text-danger fw-bolder">'+searchValue+'</span>') + `</h3>
     </div>
     <div class="col-md-1 my-4">
       <a href="`+ BookList[i].link + `" target="_blank"> <button type="button" class="btn btn-dark">Visit</button></a>
     </div>
     <div class="col-md-1 my-4">
     <button onclick="Deletbook(`+i+`)" type="button" class="btn btn-danger">Delet</button>
     </div>
     </div>`
    }
 }
 document.getElementById("Divbody").innerHTML = temp
}
