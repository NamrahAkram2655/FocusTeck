const data = document.getElementById("data");
const btn = document.getElementById("btn");
const list = document.getElementById("list");


btn.addEventListener("click", function(){

    let task = document.createElement("div");
    task.classList.add("task");
    
    // let ul = document.createElement("ul");
    // ul.classList.add("list-items");

    let val = data.value;
    // task.appendChild(ul);

    let li = document.createElement("li");
    li.classList.add("items");
    
    li.innerText=val;
   
    task.appendChild(li);

    let donebutton = document.createElement("button");
    donebutton.innerHTML = "<i class='bx bxs-bookmark-plus' ></i>";
    donebutton.classList.add("dbtn");
    task.appendChild(donebutton);

    let delbutton  = document.createElement("button");
    delbutton.innerHTML = "<i class='bx bxs-message-x'></i>";
    delbutton.classList.add("closebutton");
    task.appendChild(delbutton);

    if (val==="") {
        alert("it is empty");
    }
    else{
        list.appendChild(task);
    }

    donebutton.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
    });
    delbutton.addEventListener("click", function(){
        task.style.display="none";
    });
});


