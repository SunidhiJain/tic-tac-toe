


function changeLabel(lab,a)
{
    document.getElementById(lab).innerHTML=a;
}
var player=["O","X"];

var btn=document.getElementsByClassName("plug");
function winner()
{

    var i=0,j=0;
    //diagonal logic
    if(btn[4].value=="O"||btn[4].value=="X"){
        if(btn[2].value==btn[4].value&&btn[4].value==btn[6].value)
       
        {
            btn[2].style.backgroundColor="Green";
            btn[4].style.backgroundColor="Green";
            btn[6].style.backgroundColor="Green";
            setTimeout(function(){ alert("winner player is :"+btn[i].value);},10);
            location.reload();
            return 0;

        }
        else if( btn[0].value==btn[4].value&&btn[4].value==btn[8].value)
        {
            btn[0].style.backgroundColor="Green";
            btn[4].style.backgroundColor="Green";
            btn[8].style.backgroundColor="Green";
            setTimeout(function(){ alert("winner player is :"+btn[i].value);},10);
            location.reload();
            return 0;
        }
    }
    //row logic
    while(i<9)
    {
        if(btn[i].value=="O"|| btn[i].value=="X")
        {
            if(btn[0+i].value==btn[1+i].value&& btn[1+i].value==btn[2+i].value) 
            {
                btn[0+i].style.backgroundColor = 'Green';
                btn[1+i].style.backgroundColor="Green";
                btn[2+i].style.backgroundColor="Green";
               setTimeout(function(){ alert("winner player is :"+btn[i].value);},10);
                
                location.reload();
                return 0;
               
            }
            
        }

     i=i+3;
    }
    //column logic
    i=0;
    while(i<9&&j<3)
    {
        if(btn[i].value=="O"|| btn[i].value=="X"){
                j=i%3;
                if(btn[j+0].value==btn[j+3].value&&btn[j+3].value==btn[j+6].value)
                {
                    btn[j+0].style.backgroundColor ="Green";
                    btn[j+3].style.backgroundColor="Green";
                    btn[j+6].style.backgroundColor="Green";
                    setTimeout(function(){ alert("winner player is :"+btn[i].value);},10);
                    location.reload();
                   
                    return 0;
                }
        }
    i++;
    }
    return 1;
}
for(var i=0;i<btn.length;i++)
{
    var flag=0;
    var r;
    var j=0;
    btn[i].addEventListener('click',function(){

        
        
                var e;
                e=document.getElementById(this.id);

                if(flag==0)
                {
                    changeLabel(this.id,player[flag]);
                    
                    e.setAttribute("value",player[flag]);
                    e.disabled=true;
                    flag=1;
                    j++;
                    
                }
                else{
                    changeLabel(this.id,player[flag]);
                    e.setAttribute("value",player[flag]);
                    e.disabled=true;
                    flag=0;
                    j++;
                    
                }
                
                if(j>=5){
                 r= winner();
                }

                if(r==1 && j==9) 
                {
                    alert("Match Draw!!!")
                    location.reload();
                }
                

         
    })
   
   
}



