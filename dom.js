let h1=document.getElementById("title");
let greenDivs= document.getElementsByClassName("bg-green-500");
let divList= document.querySelectorAll(".bg-green-500");
let pharagraphs=document.querySelector(".bg-green-500");
let lis=document.getElementsByTagName("li");

console.log(lis);


h1.innerHTML=`H1 modificado desde javaScript`;

h1.style.color="blue";

for(let div of greenDivs){
  div.innerHTML=`
  <p class="text-white text-xl">This is a pharagraph</p>
  `
}

console.log(pharagraphs);

// let newli=document.createElement("li");
// newli.textContent="Hello there";
// ul.appendChild(newli);

// let miLista=document.querySelectorAll("#main-list li");
// console.log(miLista);

// miLista.forEach(item=>{
  //   console.log(item.textContent);
  // })
  
  // for(item of miLista){
    //   console.log(item);
    // }
    
    function createListItem(list, text){
      let li=document.createElement("li");
      li.textContent=text;
      list.appendChild(li);
    }
    
    let ul=document.querySelector("#main-list");

    createListItem(ul, "Este es el nuevo li");

    let input=document.querySelector("#name");
    console.log(input);

    let button=document.querySelector("#add-button");

    button.addEventListener("click", (e)=>{
      e.preventDefault();
      let form=document.querySelector("#form");

      let existingAlert=document.querySelector("#alert-message");
      if(existingAlert){
        existingAlert.remove()
      }

      if(input.value==""){
        let alert=document.createElement("p");
        alert.id="alert-message";
        alert.classList.add("text-red-500", "text-sm", "mt-2");
        alert.textContent="Debe introducir algo en el formulario";
        form.appendChild(alert)
        return;
      }
      createListItem(ul, input.value);
      alert("El elemento ha sido agregado correctamente")
      input.value="";
    })

    const btnChangeColor=document.getElementById("btn-change-color");
    btnChangeColor.addEventListener("click", ()=>{
      let select = document.getElementById("div-selector");

      let index=parseInt(select.value)-1;
      let targetDiv=divList[index];

      if(targetDiv.classList.contains("bg-green-500")){
        targetDiv.classList.remove("bg-green-500");
        targetDiv.classList.add("bg-blue-500");
      }else{
        targetDiv.classList.remove("bg-blue-500");
        targetDiv.classList.add("bg-green-500");
      }
      
    });
