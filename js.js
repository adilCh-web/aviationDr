function validateLatLng(lat, lng) {    
    let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
    
    return pattern.test(lat) && pattern.test(lng);
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


var speed = 0;
var degreeFlight = -22.5;
var vert =  document.getElementById("vert");
var horiz =  document.getElementById("horiz")
randomPlaneInTheSky()

 

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


 function randomCity()
 {
     const cities = ["Betina","Rocafull","Bahara","Nohinissi","Kendall","Gropi","Anfochi","Zeer","Elise","Dassdord","Trifpunkt","Citadelle","Rejdenessen","kolayb","Tayma","Nabihalia","Bahara"]
     document.getElementById("destination").innerHTML = cities[Math.floor(Math.random()*cities.length)];
 }

 function randomPlaneInTheSky()
 {
    for(let x = 0;x<100;x++)
    {
        let divMap = document.getElementById("map")
        const randomPlane = document.createElement("img");
        randomPlane.src = "./img/randomPlane.png"
        randomPlane.style.position = "absolute"
        divMap.appendChild(randomPlane);
        randomPlane.style.height = "30px";
        randomPlane.style.width = "30px"

        randomPlane.style.left = randomIntFromInterval(0,2900) + "px"

        randomPlane.style.top = randomIntFromInterval(0,1630) + "px"
        let degrees = [360, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]
        let index = randomIntFromInterval(0,15)
        let deg = degrees[index]
        console.log(deg)
        randomPlane.style.transform =  "rotate(" + deg +"deg)"
        let speeds = [0.4,0.8,1.2]
        let speedRandomPlane = speeds[randomIntFromInterval(0,2)]


        switch (deg) {
            case 360:
              setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + speedRandomPlane)+"px"},1000)
                
              break;
            case 22.5:
              setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.75*speedRandomPlane)+"px";
                randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.25*speedRandomPlane)+"px";
                }
                ,1000)
              break;
            case 45:
               setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.50*speedRandomPlane)+"px";
                randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.50*speedRandomPlane)+"px";
                }
                ,1000)
              break;
            case 67.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    }
                    ,1000)

              break;
              case 90:
                setInterval(()=>{
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + speedRandomPlane)+"px";
                    }
                    ,1000)

              break;
            case 112.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    }
                    ,1000)
              break;
            case 135:
                setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.50*speedRandomPlane)+"px";
                randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.50*speedRandomPlane)+"px";
                }
                ,1000)
              break;
            case 157.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    }
                    ,1000)
            case 180:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
            case 202.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
            case 225:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
            case 247.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
            case 270:
                setInterval(()=>{
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
            case 292.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
            case 315:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.5*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    }
                    ,1000)
            case 337.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    }
                    ,1000)
                break;
          }



    }
 }