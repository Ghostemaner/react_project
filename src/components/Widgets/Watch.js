import React from "react";


export default function Watch() {


    React.useEffect(() => {
        let lsec = 70; 
        let lmin = 60;
        let lhour = 40; 
        let l = 6;
        let fz = 16; 
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        function run() {
          
          ctx.fillStyle = "#282c34";
          ctx.fillRect(0, 0, 150, 150);
    
         
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(75, 75, 74, 0, 2 * Math.PI, true);
          ctx.moveTo(75, 75);
          ctx.stroke();
          ctx.closePath();
    
          
          for (let i = 1; i <= 12; i++) {
            ctx.beginPath();
            ctx.strokeStyle = "#ffffff";
            ctx.moveTo(
              75 +
                (75 - l) *
                  Math.cos(
                    Math.PI / 2 - (((i - 1) * 360) / 12) * (Math.PI / 180)
                  ),
              75 -
                (75 - l) *
                  Math.sin(Math.PI / 2 - (((i - 1) * 360) / 12) * (Math.PI / 180))
            );
            ctx.lineWidth = 2;
            ctx.lineTo(
              75 +
                74 *
                  Math.cos(
                    Math.PI / 2 - (((i - 1) * 360) / 12) * (Math.PI / 180)
                  ),
              75 -
                74 *
                  Math.sin(Math.PI / 2 - (((i - 1) * 360) / 12) * (Math.PI / 180))
            );
            ctx.stroke();
            ctx.closePath();
    
            ctx.font = fz + "px arial";
            ctx.fillStyle = "#ffffff55";
            ctx.textAlign = "center";
            ctx.fillText(
              i,
              75 +
                (75 - 20) *
                  Math.cos(Math.PI / 2 - ((i * 360) / 12) * (Math.PI / 180)),
              fz / 2 -
                2 +
                75 -
                (75 - 20) *
                  Math.sin(Math.PI / 2 - ((i * 360) / 12) * (Math.PI / 180))
            );
          }
          
          ctx.beginPath();
          ctx.strokeStyle = "#ffffff";
          ctx.arc(75, 75, 3, 0, 2 * Math.PI, true);
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
    
          let now = new Date();
          let hour = now.getHours();
          let min = now.getMinutes();
          let sec = now.getSeconds();
    
          let t_sec = 6 * sec; 
          let t_min = 6 * (min + (1 / 60) * sec); 
          let t_hour = 30 * (hour + (1 / 60) * min); 
    
          ctx.beginPath();
          ctx.moveTo(75, 75);
          ctx.lineWidth = 1;
          ctx.lineTo(
            75 + lsec * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
            75 - lsec * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180))
          );
          ctx.stroke();
          ctx.closePath();
    
          ctx.beginPath();
          ctx.moveTo(75, 75);
          ctx.lineWidth = 3;
          ctx.lineTo(
            75 + lmin * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
            75 - lmin * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180))
          );
          ctx.stroke();
          ctx.closePath();
    
          ctx.beginPath();
          ctx.moveTo(75, 75);
          ctx.lineWidth = 5;
          ctx.lineTo(
            75 + lhour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
            75 - lhour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180))
          );
          ctx.stroke();
          ctx.closePath();
        }
        run()
        setInterval(run, 500);
    })
    


    return (
        
        <canvas className='watch' id="canvas" width={150} height={150}/>
    )
}