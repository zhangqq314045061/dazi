var audio=$('audio').get(0);

var timerId;
var m=300;
var box=document.querySelector(".boxxiao");
   var toggleGame=function(){         
        if(timerId){ 
            clearInterval(timerId);
            audio.pause();
             timerId=null;
        }else{
             timerId=setInterval(move,50);
             audio.play();
        }   
    }  
    var zimujiehe=[];
    for(var i=0;i<3;i++){
        createzimu(i);
      }
    function createzimu(){
        do{
        var zimu=String.fromCharCode(Math.floor(Math.random()*26+97)).toLowerCase(); 

    }while (zimujiehe[zimu])
        el=document.createElement("div");
        
        el.style.left=Math.floor(Math.random()*((box.offsetWidth-10)-el.offsetWidth))+"px"; 

        box.appendChild(el);  
        el.classList.add("zi"); 
        zimujiehe[zimu]=el;
        var ran=Math.ceil(Math.random()*5);
        el.innerHTML=zimu;        
        zimujiehe[zimu]={top:0,yuansu:el,off:ran}
        
    } 
    var lzimu=[];
    var ale=[];
    var removezimu=function(zimu){  

     
        var el=zimujiehe[zimu].yuansu;   
         var els=el.parentElement.removeChild(el);
         // console.log(els)
        delete zimujiehe[zimu];
        // console.log(zimu)
        lzimu.push(zimu)
        // console.log(lzimu)
        var s=lzimu.length
        console.log(s) 
        $('.life').html(s)
        if(s===5){
          $('.play').toggleClass('pause')
         toggleGame();
     $('.life').html(0)
       clearInterval(times);
     xs=m;
    $('.data').html(xs);
    lzimu=[];
    $('.aboi').css('display','block').html('你输了！')
    return;
          console.log("nishule")}
    }
    document.onkeyup=function(e){  
  
       var key=String.fromCharCode(e.keyCode).toLowerCase();

       if(zimujiehe[key]){
        var el=zimujiehe[key].yuansu;
         
         el.parentElement.removeChild(el);
        delete zimujiehe[key];
         ale.push(keyl);
 var keyl=ale.length;
       
        console.log(keyl)
        $('.die').html(keyl)
        if(keyl===20){
           $('.play').toggleClass('pause')
         toggleGame();
     $('.life').html(0)
       clearInterval(times);
     xs=m;
    $('.data').html(xs);
    lzimu=[];
         $('.aboi').css('display','block').html('你赢了！')
         return;
        }
           createzimu();
       }
 

     if(e.keyCode==32){toggleGame(); }
    } 
   

    function move(){
        var arr=[];                 
        for(var i in zimujiehe){   
            var el=zimujiehe[i];  

            el.top+=el.off; 
               el.yuansu.style.top=el.top+"px";
            if(el.top>box.offsetHeight-50){ 
                arr.push(i);  
             // console.log(arr)    

            }
        } 
       
            if(arr.length>0){           
                for(var j=0;j<arr.length;j++){
                removezimu(arr[j]);
                createzimu();
            }
            }
        
    }








$('.play').on('click',function(){
$('.play').toggleClass('pause')
toggleGame();

if($('.play').hasClass('pause')){
  
   $('.data').html(m);
   jishi();
}else{ 
  clearInterval(times);
  xs=m;
   $('.data').html(xs);
  return;
}
})



   	  $('.diva').on('click',function(e){
   		 var gaodu =  e.offsetX/this.offsetWidth;
   		 audio.volume = gaodu;
  		})
	$('audio').on('volumechange',function(e){
		var yinliang = audio.volume.toFixed(2)* 100+'%';
		$('.divb').css("width",yinliang);
	})
   

   $('.sheng').on('click',function(){
  if($('diva').display='none'){
  	$('.diva').css('display','block')
  }
   })

      $('.sheng').on('dblclick',function(){
  if($('diva').display='block'){
  	$('.diva').css('display','none')
  }
   })


      var data=document.querySelector('.data')

function shijian(){
 m-=1;
 $('.data').html(m);
 as=m;
 if(as===0){
m=300;
  console.log(m)
  toggleGame();
   $('.data').html(m);
  clearInterval(times)
  $('.play').toggleClass('pause')
  return;
 }

}
 function jishi(){
    $('.data').html(m);
    times = setInterval(shijian, 1000)
  }
 
$('.aboi').on('click',function(){
    $(this).css('display','none')
  console.log(1)
})