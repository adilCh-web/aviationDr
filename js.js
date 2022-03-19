function validateLatLng(lat, lng) {    
    let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
    
    return pattern.test(lat) && pattern.test(lng);
  }

var speed = 0;
var degreeFlight = -22.5;
var vert =  document.getElementById("vert");
var horiz =  document.getElementById("horiz")

 

function speedup()
{
    if (speed <=8)
    {
        speed+=0.5
        document.getElementById("displaySpeed").innerHTML = "Speed: " + parseInt(speed*500) + "km/h"
    }
}
function speeddown()
{
    if (speed !=0.4)
    {
        speed-=0.5
        document.getElementById("displaySpeed").innerHTML = "Speed: " + parseInt(speed*500) + "km/h"
    }
}
   
  var plane = document.getElementById("plane");
  plane.style.left="127px";
  plane.style.top="92px";

  console.log(plane.style.top)
  //intervals 

var interval_0Dregree;
var interval_22_Dregree;
var interval_45_Dregree;
var interval_67_Dregree;
var interval_90_Dregree;
var interval_112_Dregree;
var interval_135_Dregree;
var interval_157_Dregree;
var interval_180_Dregree;
var interval_202_Dregree;
var interval_225_Dregree
var interval_247_Dregree
var interval_270_Dregree;
var interval_292_Dregree;
var interval_315_Dregree;
var interval_337_Dregree;









  function flightTurnRight()
  {
      randomPlaneInTheSky()
    if (speed >= 0.4)
    {
    document.getElementById("btn").innerHTML = "Turn"
    degreeFlight +=22.5
    document.getElementById("deg").innerHTML = 'Deg": ' +  degreeFlight
    plane.style.transform =  "rotate(" + degreeFlight +"deg)";
    console.log("this is the dgree " + degreeFlight);
    flightOrientation();
    }

  }

  function flightTurnLeft()
  {
    if (speed >= 0.4)
    {
        document.getElementById("btn").innerHTML = "Turn"
        degreeFlight -=22.5
        plane.style.transform =  "rotate(" + degreeFlight +"deg)";
        //console.log("this is the degree: " + degreeFlight);
        flightOrientationOpposite();
    }

  }




  function flightOrientation()
  {
      
    if(degreeFlight === 0 || degreeFlight === 360 )
    {
        clearInterval(interval_337_Dregree)
        interval_0Dregree = setInterval(()=>{
        plane.style.left = (parseFloat(plane.style.left.replace("px","")) + speed)+"px";
        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")},1000);
        degreeFlight = 0
    }
    else if(degreeFlight === 22.5)
    {
        clearInterval(interval_0Dregree)

        interval_22_Dregree = setInterval(()=>{
        plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75*speed)+"px";
        plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.25*speed)+"px";
        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","")
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")
        vert.innerHTML = plane.style.top
        }
        ,1000)
    }

    else if(degreeFlight===45)
    {
        clearInterval(interval_22_Dregree)
        interval_45_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.5*speed)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.5*speed)+"px";
            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }

    else if(degreeFlight===67.5)
    {

        clearInterval(interval_45_Dregree);
        interval_67_Dregree = setInterval(()=>{
        plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.25*speed)+"px";
        plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75*speed)+"px";
                horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","")
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
        ,1000)
    }

    else if(degreeFlight===90)
    {
        clearInterval(interval_67_Dregree)
        interval_90_Dregree = setInterval(()=>{
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 1*speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }
    else if(degreeFlight===112.5)
    {
        clearInterval(interval_90_Dregree)
        interval_112_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.25*speed)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75*speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","")
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }

    else if(degreeFlight===135)
    {
        clearInterval(interval_112_Dregree)
        interval_135_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.5*speed)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.5*speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","")
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }
    else if(degreeFlight === 157.5)
    {
        clearInterval(interval_135_Dregree)

            interval_157_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75*speed)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.25*speed)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
                ,1000)
        
    }

    else if(degreeFlight===180)
    {
        clearInterval(interval_157_Dregree)
        interval_180_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) - speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }
    else if(degreeFlight===202.5)
    {
        clearInterval(interval_180_Dregree)

            interval_202_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75*speed)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25*speed)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
                ,1000)
    }

    else if(degreeFlight===225)
    {
        clearInterval(interval_202_Dregree)
        interval_225_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.5*speed)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5*speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }
    else if(degreeFlight === 247.5)
    {
        clearInterval(interval_225_Dregree)
            interval_247_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.25*speed)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75*speed)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
                ,1000)
    }

    else if(degreeFlight===270)
    {
        clearInterval(interval_247_Dregree)
        interval_270_Dregree = setInterval(()=>{
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) - speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","")
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }

    else if(degreeFlight === 292.5)
    {
        clearInterval(interval_270_Dregree)
            interval_292_Dregree =  setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.25*speed)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75*speed)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","")
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
                ,1000)
        
    }

    else if(degreeFlight===315)
    {
        clearInterval(interval_292_Dregree)
        interval_315_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.5*speed)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5*speed)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
            ,1000)
    }
    else if(degreeFlight === 337.5)
    {
        clearInterval(interval_315_Dregree)
            interval_337_Dregree =  setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75*speed)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25*speed)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")}
                ,1000)
        
    }

    else if(degreeFlight==360) // degreeFlight=360 which mean 0 degree
    {
        clearInterval(interval_337_Dregree)
        interval_0Dregree = setInterval(()=>{
            plane.style.left = (parseInt(plane.style.left.replace("px","")) + speed)+"px"},1000);
            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left.replace("px","") 
            vert.innerHTML ="Vertical Mapp: " + plane.style.top.replace("px","")

            
    }



      }
  /*

      function flightOrientationOpposite()
      {
    
        if(degreeFlight === 0)
        {
            clearInterval(interval_315_Dregree)
            interval_0Dregree = setInterval(()=>{
            plane.style.left = (parseInt(plane.style.left.replace("px","")) + 1)+"px"},1000);
        }
        else if(Math.abs(degreeFlight)=== 22.5)
        {
            clearInterval(interval_0Dregree)
            interval_22_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
            ,1000)
        }
    
        else if(Math.abs(degreeFlight)===45)
        {
            clearInterval(interval_67_Dregree)
            interval_45_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.5)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
    
        else if(Math.abs(degreeFlight)===67.5)
        {
            clearInterval(interval_90_Dregree);
            interval_67_Dregree = setInterval(()=>{
            plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.25)+"px";
            plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75)+"px";
                    horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
            ,1000)

        }

        else if(Math.abs(degreeFlight)===90)
        {
            clearInterval(interval_112_Dregree)
            interval_90_Dregree = setInterval(()=>{
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 1)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
        else if(Math.abs(degreeFlight)===112.5)
        {
            clearInterval(interval_135_Dregree)
            interval_112_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.25)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }

        else if(Math.abs(degreeFlight)===135)
        {
            clearInterval(interval_157_Dregree)
            interval_135_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.5)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.5)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
        else if(Math.abs(degreeFlight)>=138 && Math.abs(degreeFlight)<= 156)
        {
            clearInterval(interval_180_Dregree)
                interval_157_Dregree = setInterval(()=>{
                    plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75)+"px";
                    plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.25)+"px";
                            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                    ,1000)
            
        }
    
 
        else if(Math.abs(degreeFlight)===180)
        {
            clearInterval(interval_202_Dregree)
            interval_180_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 1)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
        else if(Math.abs(degreeFlight)===202.5)
        {
            clearInterval(interval_225_Dregree)
                interval_202_Dregree = setInterval(()=>{
                    plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75)+"px";
                    plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25)+"px";
                            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                    ,1000)

        }


        else if(Math.abs(degreeFlight)===225)
        {
            clearInterval(interval_247_Dregree)
            interval_225_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.5)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
        else if(Math.abs(degreeFlight) === 247.5)
        {
            clearInterval(interval_270_Dregree)
            
                interval_247_Dregree = setInterval(()=>{
                    plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.25)+"px";
                    plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75)+"px";
                            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                    ,1000)

        }

        else if(Math.abs(degreeFlight)===270)
        {
            clearInterval(interval_292_Dregree)
            interval_270_Dregree = setInterval(()=>{
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 1)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
    
        else if(Math.abs(degreeFlight) === 292.5)
        {
            clearInterval(interval_315_Dregree)

                interval_292_Dregree =  setInterval(()=>{
                    plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.25)+"px";
                    plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75)+"px";
                            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                    ,1000)
            
        }

        else if(Math.abs(degreeFlight)===315)
        {
            clearInterval(interval_337_Dregree)
            interval_315_Dregree = setInterval(()=>{
                plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.5)+"px";
                plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5)+"px";
                        horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                ,1000)
        }
        else if(Math.abs(degreeFlight) === 337.5)
        {
            clearInterval(interval_0Dregree)
  
                interval_337_Dregree =  setInterval(()=>{
                    plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75)+"px";
                    plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25)+"px";
                            horiz.innerHTML = "Horizontal Mapp: " + plane.style.left 
        vert.innerHTML ="Vertical Mapp: " + plane.style.top}
                    ,1000)
    
            
        }

        else if(Math.abs(degreeFlight)===360)// degreeFlight=360 which mean 0 degree
        {
            clearInterval(interval_0Dregree)
            degreeFlight =  0;
            interval_0Dregree;
        }
    
    
    
          }

*/
 function randomCity()
 {
     const cities = ["Betina","Rocafull","Bahara","Nohinissi","Kendall","Gropi","Anfochi","Zeer","Elise","Dassdord","Trifpunkt","Citadelle","Rejdenessen","kolayb","Tayma","Nabihalia","Bahara"]
     document.getElementById("destination").innerHTML = cities[Math.floor(Math.random()*cities.length)];
 }

 function randomPlaneInTheSky()
 {

 }