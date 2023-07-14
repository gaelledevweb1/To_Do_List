const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
console.log(form, todo);
const listItems = document.querySelector(".list-items");
console.log(listItems);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("bouton cliqué");
  const todoValue = todo.value;
  console.log(todoValue);
  const item = `<div class="item">
                    <p>${todoValue}</p>
                    <button class="btn-delete" >
                        <i class=" fas fa-trash"></i>
                    </button>
                    <button class="btn-archive">
                        <i class=" fas fa-check-circle"></i>
                    </button>
                </div>`;
  console.log(item);
  listItems.innerHTML += item;
  const btnDelete = document.querySelectorAll(".btn-delete");
  console.log(btnDelete);
  
    btnDelete.forEach(i => {
        console.log('btn-delete');
        i.addEventListener('click',()=>{
            console.log('resultat');
            // attention à l'ordre des mots : parentElement
            i.parentElement.remove();
        });
   const btnArchive = document.querySelectorAll('.btn-archive');
   btnArchive.forEach(i=>{
    console.log('cliquer sur btn-archive');
    i.addEventListener('click',()=>{
        console.log('clic sur btn-archive');
        const parent = i.parentElement;
        console.log(parent);
        parent.classList.toggle('done');
    });
   })
  });
  form.reset();
});
