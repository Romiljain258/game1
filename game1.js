

    let a=9;
    let c=0;
    let num=document.getElementById("text");
    for(let i=0;i<a;i++){
        let block1=document.createElement("div");
        block1.setAttribute("id","div"+i);
      
        for(let j=0;j<a;j++){
            let block2=document.createElement("button");
         
            if(block2.addEventListener("click",function(){
                 
                if((j+i)%8!=0 && (i+j)%5!=0){
                    block2.style.background="green";
                    c++;
                    document.getElementById("score").innerHTML = "<span style=\"color:white; text:20px;\">" + c + "</span>";
                    if(50==c){
                    window.alert("You won match");
                    document.location.reload();
                    }
                   
                 }
                 else{
                    block2.style.background="red";
                    
                    window.alert("game Over");
                    
                    document.location.reload();
                 
                 }
                
            }))
            block2.setAttribute("class","bar");
            block1.appendChild(block2);
        }
        num.appendChild(block1);
    }
