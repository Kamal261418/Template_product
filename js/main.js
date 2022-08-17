// -----inputs------//
var pNameInput = document.getElementById("name");
var pPriceInput = document.getElementById("price");
var pCatInput = document.getElementById("cat");
var pScrInput = document.getElementById("scr");
// -----------//

//محزن

var myStore= [];
// -----//

//4
var myStore;
if(localStorage.getItem("productLocalStorage")==null)
{
  myStore =[];
}
else
{
  myStore=JSON.parse(localStorage.getItem("productLocalStorage"));
  displayProduct();
}

//1
function addProducts()
{
   var pNameValue = pNameInput.value ;
   var pPriceValue = pPriceInput.value ;
   var pCatValue = pCatInput.value ;
   var pScrValue = pScrInput.value ;
   var oneProduct={

      pName :pNameValue,
      pPrice:pPriceValue,
      pCat:pCatValue,
      pScr:pScrValue
   }
   myStore.push(oneProduct);
   
   localStorage.setItem("productLocalStorage", JSON.stringify(myStore));
   clearProduct();
   displayProduct();
   
   
   
   
}

//2
function clearProduct()
{
    pNameInput.value = " ";
    pPriceInput.value = " ";
    pCatInput.value = " ";
    pScrInput.value = " ";

}
//3
function displayProduct()
{
  var hasalah = ``;
  for(var i=0 ; i<myStore.length;i++ )
  {
    hasalah+=` <tr>
    <td>`+i+`</td>
    <td>`+myStore[i].pName+`</td>
    <td>`+myStore[i].pPrice+`</td>
    <td>`+myStore[i].pCat+`</td>
    <td>`+myStore[i].pScr+`</td>
    <td><button onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button></td>

  </tr>`
  }
  document.getElementById("tbody").innerHTML=hasalah;
}

//5
function deleteProduct(pindex)
{

  myStore.splice(pindex,1);
  displayProduct();
  localStorage.setItem("productLocalStorage", JSON.stringify(myStore));
}
//6 ------->
function searchProduct(userWord)
{


  
}