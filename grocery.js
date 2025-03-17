let submitBtn=document.getElementById("submit-btn")
let clearBtn=document.getElementById("clear-btn");
let  container=document.getElementById('grocery-list');
 let values=document.getElementById('grocery'); 
 let error = document.querySelector('.alert');
 
 

 let inputValues=[] ;



submitBtn.addEventListener('click',(e) =>{

    e.preventDefault()

    if(values.value.trim()=="")
        {
        error.textContent = "Input field is empty";
        error.className = "alert-danger";
        timer()
        return;  
    }

    
    let list=document.createElement('li') ;
    list.className = "listStyle";
      let data=list.textContent=values.value
      inputValues.push(data);
    let editBtn=document.createElement('i') ;
    editBtn.className='fa-solid fa-pen-to-square edit';
    let canBtn=document.createElement('i') ;
    canBtn.className='fa-solid fa-trash delete cancel-btn' ;
    list.appendChild(editBtn);
    list.appendChild(canBtn);
    container.appendChild(list);
    error.textContent = "Input field is added";
    error.className = "alert-success";
    timer()
    values.value=""



let store=JSON.parse(localStorage.getItem('items'))|| [];
let arr1={

        id:Math.random(),
       itemName:data
}  
console.log(arr1);

store.push(arr1);
localStorage.setItem('items',JSON.stringify(store));


// let canBtn=document.querySelectorAll(".cancel-btn");
    canBtn.addEventListener('click',()=>{
      

        if(arr1.id);
        
        list.remove()
    });



    clearBtn.addEventListener('click',()=>{
        container.innerHTML=""
        localStorage.clear();
    })
    
    editBtn.addEventListener('click',()=>{
        let dataValues=inputValues.indexOf(data)
        let removeData= inputValues.splice(dataValues, 1);
        submitBtn.innerText='Update'
         let singleData=removeData.toString();
         console.log(singleData);
         document.getElementById("grocery").value = singleData
    })



})

function timer(){
    setTimeout(()=>{
        error.textContent = "";
        error.className = "";
    },2000)
  } 












