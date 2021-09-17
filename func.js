
const arr = [{message:"hi user",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",_id:"1"},
    {message:"how are you doing today",createdAt:"2021-09-14T13:23:02.298Z",sender:"user",_id:"2"},
    {message:"i'm good, how about you?",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",id:"3"},
    {message:"i'm good, thanks for asking",createdAt:"2021-09-14T13:23:02.298Z",sender:"user",id:"4"},
    {message:"how can i help you today?",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",id:"5"}]


    for(let item of arr){

      let msg = item.message;

      let date = item.createdAt;

      let person = item.sender;

      

      let newmsg = document.createElement('div');
      newmsg.classList.add('msg');
      newmsg.classList.add(`${person}`);


      let image = document.createElement('img');
      if(person==="agent"){
        image.setAttribute("src", "https://wallpapercave.com/wp/wp4302598.jpg");
      }else{
        image.setAttribute("src", "https://wallpapercave.com/wp/wp7835573.jpg");
      }
      newmsg.appendChild(image);

      let p = document.createElement('p');
      p.append(`${msg}`);
      newmsg.appendChild(p);

      let span = document.createElement('span');
      span.append(`${date}`);
      newmsg.appendChild(span);


      let allmsgs = document.querySelector('.allmsgs');
      allmsgs.appendChild(newmsg);

    }

    document.querySelector('button').addEventListener("click",()=>{
      let msgta=document.querySelector("textarea").value;

      let newmsg = document.createElement('div');
      newmsg.classList.add('msg');
      newmsg.classList.add('user');


      let image = document.createElement('img');
      image.setAttribute("src", "https://wallpapercave.com/wp/wp7835573.jpg");
      newmsg.appendChild(image);

      let p = document.createElement('p');
      p.append(`${msgta}`);
      newmsg.appendChild(p);

      let span = document.createElement('span');
      span.append("few seconds ago");
      newmsg.appendChild(span);


      let allmsgs = document.querySelector('.allmsgs');
      allmsgs.appendChild(newmsg);

      document.querySelector("textarea").value="";
      
    })