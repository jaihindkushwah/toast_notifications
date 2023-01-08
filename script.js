const buttons=document.querySelectorAll('.buttons .btn');
const notifications=document.querySelector('.notifications');

const toastDetails={
    timer:5000,
    success:{
        icon:'fa-circle-check',
        text:'Success: This is a success toast.'
    },
    error:{
        icon:'fa-circle-xmark',
        text:'Error: This is an error toast.'
    },
    warning:{
        icon:'fa-triangle-exclamation',
        text:'Warning: This is a warning toast.'
    },
    info:{
        icon:'fa-circle-info',
        text:'Info: This is an information toast'
    }
}
const removeToast=(toast) =>{
    toast.classList.add("hide");
    setTimeout(()=> toast.remove(),500); //Removing th toast after 500ms
}

const createToast=(id)=>{
    // Getting the icon and text for the toast based on the id passed.
    const {icon , text}=toastDetails[id];
    const toast=document.createElement("li"); // Creating a new 'li element for the toast;
    toast.className=`toast ${id}`; // Setting the classes for the toast
    // Setting the innerHTML for the toast;
    // notifications.innerHTML='';
    toast.innerHTML=`<div class="column"><i class="fa-solid ${icon}"></i>
                        <span>${text}</span></div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId=setTimeout(()=> removeToast(toast),toastDetails.timer);
}

buttons.forEach(btn =>{
    btn.addEventListener('click',(toast)=> createToast(btn.id))
})


