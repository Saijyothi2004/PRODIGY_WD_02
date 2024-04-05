 var   hour = 0, mi = 0, s =0,ms = 0
 var timer
         

var display = document.querySelector('.displayTime')
 var laps = document.querySelector('.laps')

    
    function start(){
      if(!timer){
          timer = setInterval(run,60)
        }
 
    function run(){
        display.innerHTML = getTimer()
        s++
        if(s == 60){
          s = 0
           mi++ 
        }

        ms++
        if (ms === 1000){
            s = 0
            ms++
        }

        if( mi == 60){
           mi = 0
           hour++
        }
     }
}
     function getTimer(){
        return (hour<10 ? "0" + hour : hour) + " : "  + (mi<10 ? "0"  + mi : mi) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms)
    }

    function stop(){
        stopTimer()
    }
    function stopTimer(){
        clearInterval(timer)
        timer=false
    }
    function reset(){
        stopTimer()
        hour = 0
        mi = 0
        s = 0
        ms = 0
        display.innerHTML =getTimer()
    }

    function restart(){
        if(timer){
            reset()
            start()
        }
    }
    function lap(){
        if(timer){
            var li = document.createElement("li")
            li.innerHTML = getTimer()
            laps.appendChild(li)
        }
    }
    function resetLaps(){
        laps.innerHTML =""
    }