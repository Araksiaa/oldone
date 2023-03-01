

const chatMessages = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const errror=document.getElementById("error")
const namee=prompt("enter yout name")

const sendmessage = (user_name)=>{
const message=messageInput.value.trim();

if(!message){
errror.innerHTML='please add something';
errror.style.display=`block`;
setTimeout(()=>{
  errror.style.display=`none`;
}, 3000);
return;

} else {

  errror.style.display=`none`;
};

const date= new Date();
const result = date.toLocaleDateString("en-GB",{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",

  })

  const result1 = date.toLocaleTimeString('it-IT',{
    hour: "2-digit", 
    minute: "2-digit"
  })


const messageEL=document.createElement("div");
messageEL.classList.add("chat-message");
messageEL.innerHTML=`
<div>
<span class="author">${user_name}
<span>${result}</span><span class="minutes" >${result1}</span></span>
<span class="msg">${message}</span>
</div>

`;

chatMessages.appendChild(messageEL);
messageInput.value="";
chatMessages.scrollTop=chatMessages.scrollHeight

};

sendButton.addEventListener("click", ()=>sendmessage(namee));

messageInput.addEventListener("keydown",(event)=>{
  if(event.key==="Enter"){

    sendmessage(namee);

  }
} )