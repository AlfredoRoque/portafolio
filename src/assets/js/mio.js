addEventListener('load',()=>{
        var link = document.getElementById('cv');
        link.addEventListener('click',()=>{
                link.setAttribute("target","_blank");
                link.href = "https://drive.google.com/u/0/uc?id=14vCT8m2qgVvG2d6OxyJPsVNT7YWUzz67&export=download";
                link.download = "C.V.pdf";
        })

        const lenguage = document.getElementById("lenguage");
        if(lenguage!=null){
           lenguage.addEventListener("change",(a)=>{
           if(lenguage.value == 'es'){
                lenguage.classList.remove("flag-en");
                lenguage.classList.add("flag-es");
                location.href = '/';
           }else if(lenguage.value == 'en'){
                lenguage.classList.remove("flag-es");
                lenguage.classList.add("flag-en");
                location.href = 'en';
           } 
           });
        }

        $(function () {
                var cxt=document.getElementById('canvas').getContext('2d');
                    // seguimiento
                 function drawTrack() {
                     for(var i=0;i<8;i++){
                         cxt.beginPath();
                         cxt.arc(500,500,(i+1)*50,0,360,false);
                         cxt.closePath();
                                      // Establece el color del trazo
                         cxt.strokeStyle='#ffffff7e';
                         cxt.stroke();
                     }
                 }
                 drawTrack();
                    // planeta
                 function drawStar(x,y,size,cycle,im){
                              // Dibuja qué atributos necesita el planeta
                              // coordenadas del planeta
                     this.x=x;
                     this.y=y;
                              // radio del planeta
                     this.size=size;
                              // Periodo de revolución planetaria
                     this.cycle=cycle;
                              // Establecer un temporizador
                     this.time=0;
                     this.img = new Image();
                     this.draw=function () {
                                      // Guardar el contenido del lienzo anterior
                         cxt.save();
                                      // Restablecer cero cero
                         cxt.translate(500,500);
                                      // Establecer el ángulo de rotación
                         cxt.rotate(this.time*(360/this.cycle)*Math.PI/180);
                                      // Restaurar el contenido del lienzo guardado previamente
                                      // Dibuja el planeta
                         cxt.beginPath();
                         //cxt.arc(this.x,this.y,this.radius,0,360,false);
                         cxt.closePath();
                                      // el color degradado llena el color del planeta
                        this.img.src = im;
                        cxt.drawImage(this.img, this.x,this.y,this.size,this.size);
                         //this.color=cxt.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
                         //this.color.addColorStop(0,sColor);
                         //this.color.addColorStop(1,eColor);
                         //cxt.fillStyle=this.color;
                         //cxt.fill();
                         cxt.restore();
                                      // el tiempo aumenta después de la ejecución
                         this.time++;
                     }
                 }
                      // Crea una función heredada del objeto sol
                 function js() {
                     drawStar.call(this,-18,-20,40,90,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE2My40Yy00Mi43NDY4NCwwIC03Ny40LC0zNC42NTMxNiAtNzcuNCwtNzcuNHYwYzAsLTQyLjc0Njg0IDM0LjY1MzE2LC03Ny40IDc3LjQsLTc3LjR2MGM0Mi43NDY4NCwwIDc3LjQsMzQuNjUzMTYgNzcuNCw3Ny40djBjMCw0Mi43NDY4NCAtMzQuNjUzMTYsNzcuNCAtNzcuNCw3Ny40eiIgZmlsbD0iI2YxYzQwZiI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik00OC4xNjI2OSw0Mi42NTZjLTMuMDE1MzgsMCAtNS41MDY2OSwyLjQ5MTMxIC01LjUwNjY5LDUuNTA2Njl2NzUuNjc0NjJjMCwzLjAxNTM4IDIuNDkxMzEsNS41MDY2OSA1LjUwNjY5LDUuNTA2NjloNzUuNjc0NjJjMy4wMTUzOCwwIDUuNTA2NjksLTIuNDgzMjUgNS41MDY2OSwtNS41MDY2OXYtNzUuNjc0NjJjMCwtMy4wMTUzOCAtMi40ODMyNSwtNS41MDY2OSAtNS41MDY2OSwtNS41MDY2OXpNNDguMTYyNjksNDYuNzg0aDc1LjY3NDYyYzAuNzY1OTQsMCAxLjM3ODY5LDAuNjEyNzUgMS4zNzg2OSwxLjM3ODY5djc1LjY3NDYyYzAsMC43NjU5NCAtMC42MTI3NSwxLjM3ODY5IC0xLjM3ODY5LDEuMzc4NjloLTc1LjY3NDYyYy0wLjc2NTk0LDAgLTEuMzc4NjksLTAuNjEyNzUgLTEuMzc4NjksLTEuMzc4Njl2LTc1LjY3NDYyYzAsLTAuNzY1OTQgMC42MTI3NSwtMS4zNzg2OSAxLjM3ODY5LC0xLjM3ODY5ek04MS44NzIsODEuODcydjI1Ljk1MzE5YzAsMy45ODI4NyAtMS41MDc2OSw1LjAwNjgxIC00LjEyOCw1LjAwNjgxYy0yLjc0MTI1LDAgLTQuNjQ0LC0xLjcwOTI1IC01LjkwMTc1LC0zLjkyNjQ0bC02LjQ4MjI1LDMuOTI2NDRjMS44Nzg1NiwzLjk3NDgxIDYuNDgyMjUsOC4yNTYgMTIuODY3NzUsOC4yNTZjNy4wNjI3NSwwIDExLjkwMDI1LC0zLjc1NzEyIDExLjkwMDI1LC0xMi4wMDUwNnYtMjcuMjEwOTR6TTEwNy41NzUyNSw4MS44NzJjLTcuMDMwNSwwIC0xMS41Mzc0NCw0LjQ5ODg4IC0xMS41Mzc0NCwxMC40MDg2OWMwLDYuNDA5NjkgMy43ODEzMSw5LjQ0MTE5IDkuNDY1MzgsMTEuODU5OTRsMS45NjcyNSwwLjg0NjU2YzMuNTg3ODEsMS41NzIxOSA1LjM2MTU2LDIuNTMxNjIgNS4zNjE1Niw1LjIzMjU2YzAsMi4yNDk0NCAtMS43MDkyNSwzLjg3ODA2IC00Ljk3NDU2LDMuODc4MDZjLTMuODg2MTMsMCAtNS43MjQzOCwtMi42MzY0NCAtNy40MDk0NCwtNS4zOTM4MWwtNi4xOTIsNC4xMjhjMi4zMTM5NCw0LjU3MTQ0IDYuNDY2MTMsOC4yNTYgMTMuNzc4ODEsOC4yNTZjNy40ODIsMCAxMy4wNTMxOSwtMy44ODYxMiAxMy4wNTMxOSwtMTAuOTczMDZjMCwtNi41NzkgLTMuNzczMjUsLTkuNTA1NjkgLTEwLjQ3MzE5LC0xMi4zNzU5NGwtMS45NjcyNSwtMC44Mzg1Yy0zLjM3ODE5LC0xLjQ2NzM3IC00Ljg0NTU2LC0yLjQxODc1IC00Ljg0NTU2LC00Ljc4MTA2YzAsLTEuOTEwODEgMS40NjczOCwtMy4zNzgxOSAzLjc3MzI1LC0zLjM3ODE5YzIuMjY1NTYsMCAzLjcxNjgxLDAuOTU5NDQgNS4wNjMyNSwzLjM3ODE5bDYuMTM1NTYsLTMuOTM0NWMtMi41ODgwNiwtNC41NzE0NCAtNi4xOTIsLTYuMzEyOTQgLTExLjE5ODgxLC02LjMxMjk0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+');
                 }
                      // Crear un constructor de objetos Mercury
                 function java() {
                     drawStar.call(this,0,-65,40,157.70,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48Zz48cGF0aCBkPSJNODQuOTk2NjcsODguNTczODdjLTIuODYwOTMsLTQuNjEyNDcgLTQuOTM2NCwtOC40MzY2IC03LjgxMTY3LC0xNS42Mzc2N2MtNC44NjE4NywtMTIuMTYzMjcgMjkuNTY5NjcsLTIzLjE1NDA3IDE1LjYwOSwtNDQuMjcyOGM2LjA1MTUzLDE0LjU4ODQ3IC0yMS43MjA3MywyMy42MDcgLTI0LjMwMDczLDM1Ljc1NTkzYy0yLjM1OTI3LDExLjE3NDI3IDE2LjQ4OTA3LDI0LjE1NDUzIDE2LjUwMzQsMjQuMTU0NTN6IiBmaWxsPSIjZjQ0MzM2Ij48L3BhdGg+PHBhdGggZD0iTTg1LjY1MDI3LDY2LjcwNjk0Yy0wLjU1MDQsNy4yMTI1MyA2LjM4OTgsMTEuMDU2NzMgNi41OTA0NywxNi4zMjU2N2MwLjE2MDUzLDQuMjg4NTMgLTQuMTQ4MDcsNy44NjMyNyAtNC4xNDgwNyw3Ljg2MzI3YzAsMCA3LjgyMDI3LC0xLjUzNjUzIDEwLjI1OTgsLTguMDc4MjdjMi43MDksLTcuMjY0MTMgLTUuMjU3NDcsLTEyLjIzNzggLTQuNDM3NiwtMTguMDU0MjdjMC43NjU0LC01LjU1NTYgMTcuMjg4ODcsLTE1Ljg4OTkzIDE3LjI4ODg3LC0xNS44ODk5M2MwLDAgLTI0LjMxMjIsMS42MTEwNyAtMjUuNTUzNDcsMTcuODMzNTN6IiBmaWxsPSIjZjQ0MzM2Ij48L3BhdGg+PGcgZmlsbD0iIzE1NjVjMCI+PHBhdGggZD0iTTEwOS4xNzQxMyw4OS4wMjM5NGM1LjAyODEzLC0xLjEyOTQ3IDkuMjY3OTMsMi4wNzI2IDkuMjY3OTMsNS43NjJjMCw4LjMxNjIgLTExLjUyNjg3LDE2LjE3NjYgLTExLjUyNjg3LDE2LjE3NjZjMCwwIDE3Ljg0NSwtMi4xMjcwNyAxNy44NDUsLTE1Ljc4MWMwLC05LjAzIC04Ljc2MzQsLTExLjI4NjA3IC0xNS41ODYwNywtNi4xNTc2ek0xMDAuNzAzMTMsOTUuNzMxOTRjMCwwIDUuNTY0MiwtMy45NjQ2IDcuMDQ2MjcsLTUuNDUyNGMtMTMuNjUzOTMsMi44OTgyIC00NC44Mjg5MywzLjI4ODA3IC00NC44Mjg5MywwLjc3MTEzYzAsLTIuMzE5MTMgMTAuMDUzNCwtNC42OTU2IDEwLjA1MzQsLTQuNjk1NmMwLDAgLTIyLjI4MjYsLTAuMzIxMDcgLTIyLjI4MjYsNi4yNTIyYzAsNi44NTEzMyAyOS4xNjgzMyw3LjM0MTUzIDUwLjAxMTg3LDMuMTI0Njd6Ij48L3BhdGg+PHBhdGggZD0iTTk3LjI4MDMzLDEwMS45Njk4Yy0xMi45MjU4LDQuMjk3MTMgLTM2LjczMzQ3LDIuOTI0IC0yOS42ODE0NywtMi44NDY2Yy0zLjQzNDI3LDAgLTguNTI1NDcsMi43NjA2IC04LjUyNTQ3LDUuNDE1MTNjMCw1LjMyMzQgMjUuNzQ4NCw5LjQzNDIgNDQuODA2LDEuNjM5NzN6Ij48L3BhdGg+PHBhdGggZD0iTTcwLjc2NjUzLDExMS4wNTE0Yy00LjY4OTg3LDAgLTcuNzI1NjcsMy4wMjE0NyAtNy43MjU2Nyw1LjIyMzA3YzAsNi44NTQyIDI3Ljk3ODY3LDcuNTQ1MDcgMzkuMDY0MDcsMC41ODc2N2wtNy4wNDYyNywtNC42Nzg0Yy04LjI4MTgsMy42NDA2NyAtMjkuMDg1Miw0LjE0MjMzIC0yNC4yOTIxMywtMS4xMzIzM3oiPjwvcGF0aD48cGF0aCBkPSJNMTIxLjIwNTUzLDEyMi4yMTEzNGMwLC0yLjY4MzIgLTMuMDI0MzMsLTMuOTQ3NCAtNC4xMDc5MywtNC41NTIyN2M2LjM4NjkzLDE1LjQwMjYgLTYzLjk3NTQsMTQuMjA3MiAtNjMuOTc1NCw1LjExNDEzYzAsLTIuMDY2ODcgNS4xODAwNywtNC4wOTA3MyA5Ljk2NzQsLTMuMTMzMjdsLTQuMDcwNjcsLTIuNDA1MTNjLTkuNTQwMjcsLTEuNDk2NCAtMTYuMDE4OTMsMi42OTc1MyAtMTYuMDE4OTMsNi4wODAyYzAsMTUuNzc1MjcgNzguMjA1NTMsMTUuMDE1NiA3OC4yMDU1MywtMS4xMDM2N3oiPjwvcGF0aD48cGF0aCBkPSJNMTI5LDEyNy44NjQ0Yy0xMS44ODUyLDExLjczOSAtNDIuMDIyNDcsMTYuMDE2MDcgLTcyLjMyODg3LDguNzYzNGMzMC4zMDY0LDEyLjkwODYgNzIuMTg1NTMsNS42Mzg3MyA3Mi4zMjg4NywtOC43NjM0eiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==');
                 }
                      // Crea un constructor de objetos Venus
                 function html() {
                     drawStar.call(this,0,-115,40,224.701,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiNmZjZkMDAiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTM0LjczMzMzLDMxLjUzMzMzaC05Ny40NjY2N2w4LjYsOTcuNDY2NjdsNDAuMTMzMzMsMTEuNDY2NjdsNDAuMTMzMzMsLTExLjQ2NjY3bDguNiwtOTcuNDY2Njd6IiBmaWxsPSIjZTY1MTAwIj48L3BhdGg+PHBhdGggZD0iTTg2LDQwLjEzMzMzdjkxLjQ0NjY3bDMyLjEwNjY3LC05LjE3MzMzbDcuMTY2NjcsLTgyLjI3MzMzeiIgZmlsbD0iI2ZmNmQwMCI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw4OC44NjY2N3YtMTEuNDY2NjdoMjQuNjUzMzNsLTIuMDA2NjcsMzIuOTY2NjdsLTIyLjY0NjY3LDcuNDUzMzN2LTEyLjA0bDExLjc1MzMzLC00LjAxMzMzbDAuODYsLTEyLjl6TTExMS41MTMzMyw2NS45MzMzM2wwLjg2LC0xMS40NjY2N2gtMjYuMzczMzN2MTEuNDY2Njd6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTg2LDEwNS43OHYxMi4wNGwtMjIuNjQ2NjcsLTcuNDUzMzNsLTEuMTQ2NjcsLTE1Ljc2NjY3aDExLjQ2NjY3bDAuNTczMzMsNy4xNjY2N3pNNzEuOTUzMzMsNjUuOTMzMzNoMTQuMDQ2Njd2LTExLjQ2NjY3aC0yNi4wODY2N2wyLjAwNjY3LDM0LjRoMjQuMDh2LTExLjQ2NjY3aC0xMy4xODY2N3oiIGZpbGw9IiNlZWVlZWUiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==');
                 }
                      // Crear un método de construcción de objeto de globo
                 function spring() {
                     drawStar.call(this,0,-165,40,365.224,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiM4YmMzNGEiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTQzLjI4MTczLDg0Ljg0NjE3YzAuMTk3OCwtMTIuMjE0ODcgLTIuNTU0MiwtMjYuNzQwMjcgLTguMjg3NTMsLTQzLjc4MjZsLTQuNDk0OTMsLTEzLjM2NDRsLTYuMTA2LDEyLjcwNzkzYy0wLjMyNjgsMC42Nzk0IC0wLjY5OTQ3LDEuMzQ0NDcgLTEuMDg5MzMsMi4wMDA5M2MtMTAuMDMwNDcsLTguNjExNDcgLTIzLjA0NTEzLC0xMy44NDg4NyAtMzcuMzAzOTMsLTEzLjg0ODg3Yy0zMS42NjUyLDAgLTU3LjMzMzMzLDI1LjY2ODEzIC01Ny4zMzMzMyw1Ny4zMzMzM2MwLDMxLjY2NTIgMjUuNjY4MTMsNTcuMzMzMzMgNTcuMzMzMzMsNTcuMzMzMzNjMzEuNjY1MiwwIDU3LjMzMzMzLC0yNS42NjgxMyA1Ny4zMzMzMywtNTcuMzMzMzNjMCwtMC4zNTI2IC0wLjA0NTg3LC0wLjY5MzczIC0wLjA1MTYsLTEuMDQ2MzN6IiBmaWxsPSIjOGJjMzRhIj48L3BhdGg+PHBhdGggZD0iTTEzMC4xMDM2NywxMTAuNDI1NDNjLTguOTUyNiwxMi4zMzI0IC0yNC43OTk1MywxMi45OTQ2IC0zOS43MTQ4LDEyLjczMzczaC0xOS40Mzg4N2gtNS41NTU2YzEyLjY5MzYsLTQuNTY2NiAyMC4yNDcyNywtNS42NTMwNyAyNy45NjE0NywtOS43NDY2N2MxNC41MjgyNywtNy42Mzk2NyAyOC44OTAyNywtMjQuMzU1MiAzMS44ODAyLC00MS43NDQ0Yy01LjUzMjY3LDE2LjcyOTg3IC0yMi4yOTk4LDMxLjEwMzMzIC0zNy41NzkxMywzNi45NDg0N2MtMTAuNDY5MDcsMy45OTMyNyAtMjkuMzc3Niw3Ljg2OSAtMjkuMzc3Niw3Ljg2OWwtMC43NjU0LC0wLjQxNTY3Yy0xMi44NzEzMywtNi40NzU4IC0xMy4yNjEyLC0zNS4yOTcyNyAxMC4xMzk0LC00NC42MDI0N2MxMC4yNDU0NywtNC4wNzkyNyAyMC4wNDY2LC0xLjgzNzUzIDMxLjExNDgsLTQuNTY2NmMxMS44MTY0LC0yLjkwMTA3IDI1LjQ4NDY3LC0xMi4wNjI5MyAzMS4wNDYsLTI0LjAwODMzYzYuMjI2NCwxOS4xMTIwNyAxMy43MTk4Nyw0OS4wMzcyIDAuMjg5NTMsNjcuNTMyOTN6TTYyLjExNDkzLDEyNy4zMDE1Yy0wLjgwODQsMS4wMDMzMyAtMi4wNDM5MywxLjU5MSAtMy4zMzM5MywxLjU5MWMtMi4zNTkyNywwIC00LjI4NTY3LC0xLjk0MDczIC00LjI4NTY3LC00LjNjMCwtMi4zNTkyNyAxLjk0MDczLC00LjMgNC4yODU2NywtNC4zYzAuOTc3NTMsMCAxLjk0MDczLDAuMzM4MjcgMi42OTc1MywwLjk2MzJjMS44MzQ2NywxLjQ4NzggMi4xMjEzMyw0LjIxMTEzIDAuNjM2NCw2LjA0NTh6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=');
                 }
                      // Crear un constructor de objetos de Marte
                 function angular() {
                     drawStar.call(this,0,-215,40,600.98,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiNiNzFjMWMiPjwvcGF0aD48Zz48cGF0aCBkPSJNODUuODA3OTMsMjIuOTMzMzNsLTYwLjAwNzkzLDIwLjg4MzY3bDkuNDgyOTMsNzcuNzUyNmw1MC41ODgwNywyNy40OTcwN2w1MC44NDg5MywtMjcuODY5NzNsOS40ODAwNywtNzcuNzQ5NzN6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTEzOS45NDQ5Myw0Ny4zNzc0bC01My45NDQ5MywtMTguMzIzNzN2MTEzLjQwNTMzbDQ1LjM4NTA3LC0yNC44NzY5M3oiIGZpbGw9IiNiNzFjMWMiPjwvcGF0aD48cGF0aCBkPSJNODUuODMwODcsMjguOTk2MzNsLTUzLjc3ODY3LDE4LjcxNjQ3bDguNTYyNzMsNzAuMjMwNDdsNDUuMjQ0NiwyNC41OTAyN2wwLjE0MDQ3LC0wLjA3NDUzdi0xMTMuNDA1MzN6IiBmaWxsPSIjZGQyYzAwIj48L3BhdGg+PHBhdGggZD0iTTg2LDM0LjM4ODUzdjI3LjI1NjI3bDI0LjU5MDI3LDUzLjAyMTg3aDEyLjYzOTEzeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik00OC43NzA2LDExNC42NjY2N2gxMi42MzkxM2wyNC41OTAyNywtNTMuMDIxODd2LTI3LjI1NjI3eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw4NmgxNy4ydjExLjQ2NjY3aC0xNy4yeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02OC44LDg2aDE3LjJ2MTEuNDY2NjdoLTE3LjJ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=');
                 }
                      // Crear un constructor de objetos de Júpiter
                 function typescript() {
                     drawStar.call(this,0,-265,40,932.589,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0iIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNjAuODJjLTQxLjMyMTk0LDAgLTc0LjgyLC0zMy40OTgwNiAtNzQuODIsLTc0LjgydjBjMCwtNDEuMzIxOTQgMzMuNDk4MDYsLTc0LjgyIDc0LjgyLC03NC44MnYwYzQxLjMyMTk0LDAgNzQuODIsMzMuNDk4MDYgNzQuODIsNzQuODJ2MGMwLDQxLjMyMTk0IC0zMy40OTgwNiw3NC44MiAtNzQuODIsNzQuODJ6IiBmaWxsPSIjMTk3NmQyIj48L3BhdGg+PGc+PHJlY3QgeD0iMTIiIHk9IjEyIiB0cmFuc2Zvcm09InNjYWxlKDIuODY2NjcsMi44NjY2NykiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iIzE5NzZkMiI+PC9yZWN0PjxwYXRoIGQ9Ik05Ni4wMDQ2Nyw4MC4yNjY2N2gtMzguMDIwNnY5LjM1NjhoMTMuNjM2NzN2NDIuMjQzMmgxMC44MDQ0N3YtNDIuMjQzMmgxMy41Nzk0eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjkuNTU2MTMsOTEuOTc0MTNjMCwwIC01LjEyMjczLC0zLjQxNzA3IC0xMC45MTM0LC0zLjQxNzA3Yy01Ljc5MDY3LDAgLTcuODc0NzMsMi43NTIgLTcuODc0NzMsNS42OTMyYzAsNy41OTA5MyAyMS4xNTg4Nyw2LjgzMTI3IDIxLjE1ODg3LDIyLjEwNzczYzAsMjMuNTMyNDcgLTMyLjI2MTQ3LDEzLjA5NDkzIC0zMi4yNjE0NywxMy4wOTQ5M3YtMTEuMjg4OTNjMCwwIDYuMTY5MDcsNC42NDk3MyAxMy41Njc5Myw0LjY0OTczYzcuMzk4ODcsMCA3LjExNzkzLC00LjgzODkzIDcuMTE3OTMsLTUuNTA0YzAsLTcuMDIwNDcgLTIwLjk2OTY3LC03LjAyMDQ3IC0yMC45Njk2NywtMjIuNTgzNmMwLC0yMS4xNTg4NyAzMC41NTI5MywtMTIuODExMTMgMzAuNTUyOTMsLTEyLjgxMTEzeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==');
                 }
                      // Crea un constructor de objetos de Saturno
                 function postgres() {
                     drawStar.call(this,0,-315,40,2059.5,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0iIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzJjLTQ3LjQ5NjQ5LDAgLTg2LC0zOC41MDM1MSAtODYsLTg2djBjMCwtNDcuNDk2NDkgMzguNTAzNTEsLTg2IDg2LC04NnYwYzQ3LjQ5NjQ5LDAgODYsMzguNTAzNTEgODYsODZ2MGMwLDQ3LjQ5NjQ5IC0zOC41MDM1MSw4NiAtODYsODZ6IiBmaWxsPSIjMDI3N2JkIj48L3BhdGg+PGc+PHBhdGggZD0iTTE0Mi44OTUwMiwxMDMuMzE0MzFjLTAuNTI0NiwtMi4zNzY0NyAtMi42ODAzMywtNS4xNDg1MyAtNy4wMjkwNywtNS4xNDg1M2MtMC44ODg2NywwIC0xLjg2MDQ3LDAuMTExOCAtMi45NjcsMC4zNDExM2MtMi4wMjk2LDAuNDE4NTMgLTMuNzU4MiwwLjYyMjA3IC01LjI4MDQsMC42OTA4N2MxMS44NDc5MywtMjAuMTgxMzMgMTkuNTM5MiwtNDguMjE0NDcgMTEuOTIyNDcsLTU3Ljk0NjhjLTEwLjAzNjIsLTEyLjgyMjYgLTIzLjU0NjgsLTE0LjczNzUzIC0zMC43MDQ4NywtMTQuNzM3NTNsLTAuNjczNjcsMC4wMDI4N2MtMi42NjMxMywwLjA0MyAtNS40MjY2LDAuMzY5OCAtOC4yMDcyNywwLjk3MThsLTEwLjI3MTI3LDIuMjE4OGMtMS4zOTg5MywtMC4xNzQ4NyAtMi44MjM2NywtMC4yOTgxMyAtNC4zMDg2LC0wLjMyMzkzaC0wLjA4NmgtMC4wNDU4N2wtMC40MzU3MywtMC4wMDI4N2MtNC41NjY2LDAgLTguNzMxODcsMC45Njg5MyAtMTIuNDQ0MiwyLjc4OTI3bC0zLjU4NjIsLTEuNDEzMjdjLTQuOTMwNjcsLTEuOTQzNiAtMTIuMzQ5NiwtNC4yNTcgLTE5LjY4ODI3LC00LjI1N2MtMC40MTI4LDAgLTAuODIyNzMsMC4wMDg2IC0xLjIzNTUzLDAuMDIyOTNjLTcuMjI5NzMsMC4yNjA4NyAtMTMuNDM4OTMsMy4wMDQyNyAtMTcuOTU5NjcsNy45MzIwN2MtNS42NDE2LDYuMTUxODcgLTguMjEwMTMsMTUuMTUwMzMgLTcuNjI4MiwyNi43NDg4N2MwLjAyODY3LDAuNTk5MTMgNy4wNDYyNyw1OS45MTMzMyAyNi45MzgwNyw1OS45MTMzM2gwLjA3MTY3bDAuMTgzNDcsLTAuMDAyODdjMi41ODI4NywtMC4wNjMwNyA1LjA0NTMzLC0xLjEwMDggNy4zNDcyNywtMy4wODc0YzEuNzU3MjcsMS4zMTg2NyA0LjAzMDUzLDIuMDk4NCA2LjE0OSwyLjQwOGMxLjM5ODkzLDAuMzI5NjcgMy45MTU4NywwLjc5NjkzIDYuOTMxNiwwLjc5NjkzYzMuNjgwOCwwIDcuMDAwNCwtMC43NTM5MyA5Ljg2MTMzLC0yLjExNTZjLTAuMDAyODcsMi41MjI2NyAtMC4wMTcyLDUuNzE2MTMgLTAuMDQ1ODcsOS43OTgyN2wtMC4wMDI4NywwLjIxNWwwLjAxNDMzLDAuMjE1YzAuMjc4MDcsNC4wNjc4IDAuOTgwNCw3LjczNDI3IDIuMDM4MiwxMC42MDk1M2MzLjAxMjg3LDguMTk1OCA4LjIxNTg3LDEyLjcxMDggMTQuNjUxNTMsMTIuNzEwOGMwLjI2NjYsMCAwLjUzODkzLC0wLjAwODYgMC44MTQxMywtMC4wMjU4YzUuMjkxODcsLTAuMzI2OCAxMC42NTU0LC0zLjI5OTUzIDE0LjM0NDgsLTcuOTQ2NGMzLjk5MzI3LC01LjAzMSA0LjkxNjMzLC0xMC4zNDAwNyA1LjI3MTgsLTE0LjQwNzg3bDAuMDIyOTMsLTAuMjQ5NHYtMC4yNTIyN3YtMTEuNjkzMTNsMC4yOTUyNywwLjAyODY3bDEuMjQ5ODcsMC4xMDg5M2wwLjEyMDQsMC4wMTE0N2wwLjEyMDQsMC4wMDU3M2MwLjM1NTQ3LDAuMDE3MiAwLjcyMjQsMC4wMjI5MyAxLjA5MjIsMC4wMjI5M2M0LjMyMDA3LDAgOS42Mzc3MywtMS4xMjA4NyAxMy4yMzI1MywtMi43OTIxM2MzLjQzNzEzLC0xLjU5Mzg3IDExLjI5MTgsLTUuOTc0MTMgOS45MjcyNywtMTIuMTYwNHoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTExLjEyMzc1LDExNS4zODI5OGMwLC0wLjU4NzY3IDAuMDM0NCwtMS4wNzc4NyAwLjA1MTYsLTEuNjE5NjdjLTAuMDI4NjcsLTAuNzE5NTMgLTAuMDUxNiwtMS4yNDcgLTAuMDUxNiwtMS4yNDdjMCwwIDAuMDM0NCwtMC4wMjU4IDAuMDkxNzMsLTAuMDYzMDdjMC40MjcxMywtNy42NjI2IDIuNTM5ODcsLTEwLjYxNTI3IDQuODAxNjcsLTEyLjI5OGMtMC4zMTUzMywtMC40Mzg2IC0wLjY3OTQsLTAuOTExNiAtMS4wMjA1MywtMS4zNjE2N2MtMC45NTQ2LC0xLjI1MjczIC0yLjE0NDI3LC0yLjgwNjQ3IC0zLjQxNzA3LC00Ljc5ODhsLTAuMjM1MDcsLTAuNDUyOTNjLTAuMTkyMDcsLTAuNDcwMTMgLTAuNjU2NDcsLTEuMjgxNCAtMS4yNDcsLTIuMzQ3OGMtMy4zOTEyNywtNi4xMzQ2NyAtMTAuNDQ5LC0xOC44OTcwNyAtNS42MTg2NywtMjYuOTU4MTNjMi4xMTU2LC0zLjUzMTczIDYuMDgzMDcsLTUuNTY3MDcgMTEuODEzNTMsLTYuMDY4NzNjLTIuMzQyMDcsLTYuNjU5MjcgLTExLjExNjkzLC0yMi43MjEyIC0zMS4wMTE2LC0yMy4wNTA4N2MtMC4wMDU3MywwIC0wLjAxMTQ3LDAgLTAuMDE3MiwwYy0xNy4zMTc1MywtMC4yODA5MyAtMjMuMDA3ODcsMTUuNDU3MDcgLTI0Ljg1OTczLDI0Ljg1OTczYzIuNTUxMzMsLTEuMDgwNzMgNS40NjM4NywtMS43MzcyIDguMTI5ODcsLTEuNzM3MmMwLjA0MDEzLDAgMC4wODMxMywwIDAuMTIzMjcsMGM2LjU2NDY3LDAuMDQ4NzMgMTEuMDc5NjcsMy41NTE4IDEyLjM5MjYsOS42MTQ4YzAuOTYwMzMsNC40NDkwNyAxLjQyMTg3LDguMzQyIDEuNDEwNCwxMS45MDUyN2MtMC4wMjg2Nyw3Ljc5NDQ3IC0xLjU5OTYsMTEuODkzOCAtMi45ODcwNywxNS41MTE1M2wtMC40NDE0NywxLjE2OTZjLTAuMzU1NDcsMC45NTc0NyAtMC43MzEsMS44NDkgLTEuMDg2NDcsMi42ODYwN2MtMC4zNjEyLDAuODU0MjcgLTAuNjc5NCwxLjYxMzkzIC0wLjkxMTYsMi4yOTkwN2MxLjM4NzQ3LDAuMzE1MzMgMi40NzY4LDAuNzU5NjcgMy4yMjUsMS4wODkzM2wwLjQzMjg3LDAuMTg5MmMwLjEzNDczLDAuMDU3MzMgMC4yNjk0NywwLjEyMzI3IDAuMzkyNzMsMC4xOTc4YzIuNDMwOTMsMS40NzkyIDMuOTQ0NTMsMy43NTI0NyA0LjI2ODQ3LDYuNDAxMjdjMC4xNzQ4NywxLjQyNzYgMC4xNDYyLDExLjE1OTkzIDAuMDg2LDE5LjY1MWMwLjI0OTQsMy42ODM2NyAwLjg3NDMzLDYuNzc2OCAxLjY5OTkzLDkuMDE4NTNjMS4xNzI0NywzLjE5MzQ3IDQuMTAyMiw5LjI5MDg3IDkuNzI5NDcsOC45NDExM2MzLjkyNzMzLC0wLjI0MzY3IDcuNzAyNzMsLTIuNjM0NDcgMTAuMjA4MiwtNS43ODc4YzIuNjg4OTMsLTMuMzg1NTMgMy42ODA4LC03LjEyOTQgNC4wNTM0NywtMTEuMzQ2Mjd2LTE0LjM5NjR6IiBmaWxsPSIjMDI3N2JkIj48L3BhdGg+PHBhdGggZD0iTTU5Ljg1MDU1LDEwMC44MTE3MWMtNC42MjM5MywtNC44MjQ2IC02Ljg3NzEzLC0xMS4zMTQ3MyAtNi4wMzE0NywtMTcuMzYwNTNjMC44MTcsLTUuODMzNjcgMC4zNTU0NywtMTEuNTQ0MDcgMC4xMDYwNywtMTQuNjE0MjdjLTAuMDgzMTMsLTEuMDIzNCAtMC4xMzc2LC0xLjc4NTkzIC0wLjEzNDczLC0yLjIwNzMzYzAsLTAuMDIyOTMgMC4wMDU3MywtMC4wNDMgMC4wMDg2LC0wLjA2NTkzYzAsLTAuMDExNDcgLTAuMDA1NzMsLTAuMDIwMDcgLTAuMDA1NzMsLTAuMDMxNTNjMC4zNDY4NywtOC42NjAyIDMuNjg2NTMsLTIyLjMyMjczIDEyLjg3OTkzLC0zMC40NDRjLTQuNDc3NzMsLTEuNzYzIC0xMS43NzA1MywtNC4wODc4NyAtMTguNjE2MTMsLTMuODM4NDdjLTEwLjcyNzA3LDAuMzg5ODcgLTIxLjExMDEzLDcuODA4OCAtMjAuMDY2NjcsMjguNjY2NjdjMC4zOTI3Myw3LjgyNiA5LjIzNjQsNTQuNzYxOTMgMjEuMzI4LDU0LjQ2NjY3YzEuNzI4NiwtMC4wNDMgMy41MjMxMywtMS4xNTI0IDUuMzY2NCwtMy4zNzEyYzIuOTE1NCwtMy41MDU5MyA1Ljc0NzY3LC02LjY4NTA3IDcuNzYyOTMsLTguODk4MTNjLTAuOTAzLC0wLjY4NTEzIC0xLjc3NDQ3LC0xLjQ0MTkzIC0yLjU5NzIsLTIuMzAxOTN6TTEyMi42NTYzNSw2MC4xNDUxOGMwLjA0MywwLjQ0MTQ3IDAuMDA1NzMsMC44MTk4NyAtMC4wNjMwNywxLjE2OTZjMC4wODg4NywyLjYzNzMzIC0wLjE5NDkzLDUuMTk3MjcgLTAuNDg0NDcsNy42NzQwN2MtMC4yMTIxMywxLjgyMzIgLTAuNDMsMy43MDY2IC0wLjQ5MDIsNS41OTU3M2MtMC4wNjAyLDEuODQ5IDAuMjAwNjcsMy42NzUwNyAwLjQ3NTg3LDUuNjA3MmMwLjY0NSw0LjUyMzYgMS4zMTU4LDkuNjI5MTMgLTIuMTkzLDE1LjU4NjA3YzAuNjQ1LDAuODQ4NTMgMS4yMTI2LDEuNjM2ODcgMS42NjU1MywyLjM5OTRjMTMuMjE1MzMsLTIxLjQyODMzIDE4LjU0MTYsLTQ2LjkwMTUzIDEzLjQ1OSwtNTMuMzk0NTNjLTcuNjkxMjcsLTkuODI2OTMgLTE4LjMzODA3LC0xMi42NzA2NyAtMjYuNzcxOCwtMTIuNTMzMDdjLTIuNjQwMiwwLjA0MyAtNS4wMzk2LDAuMzk4NDcgLTcuMDg5MjcsMC44NDI4YzE0LjU1MTIsNy4wNTIgMjEuMDMyNzMsMjIuMTY1MDcgMjEuNDkxNCwyNy4wNTI3M3pNMTM0LjA1NzA5LDEwNC4xMTk4NGMtNy42Mzk2NywxLjU3NjY3IC0xMS4zMTQ3MywwLjczNjczIC0xMy4wOTc4LC0wLjM2MTJjLTAuMjg2NjcsMC4yMDY0IC0wLjU3MzMzLDAuMzgxMjcgLTAuODM5OTMsMC41NDQ2N2MtMS4wNjY0LDAuNjQ1IC0yLjc1NDg3LDEuNjcxMjcgLTMuMTY3NjcsNy45NzUwN2MwLjIzNzkzLDAuMDQ1ODcgMC40NDcyLDAuMDcxNjcgMC43MDUyLDAuMTI2MTNsMS4yNDcsMC4xMTE4YzMuNzg0LDAuMTcyIDguNzQwNDcsLTAuODg4NjcgMTEuNjQ3MjcsLTIuMjM4ODdjNi4yNjM2NywtMi45MDY4IDkuNjc3ODcsLTcuNDMwNCAzLjUwNTkzLC02LjE1NzZ6TTc5LjY1NjM1LDEwOS45OTA3OGMtMC4xMDYwNywtMC44NTQyNyAtMC41Njc2LC0xLjU0NTEzIC0xLjQxMDQsLTIuMDk4NGwtMC4zMDk2LC0wLjEzNDczYy0xLjAzNDg3LC0wLjQ1NTggLTIuMjA3MzMsLTAuOTc0NjcgLTQuMDc5MjcsLTAuOTc0NjdoLTAuMDExNDdjLTAuMzY0MDcsMC4wMjg2NyAtMC43MjUyNywwLjA1NDQ3IC0xLjA4OTMzLDAuMDU0NDdjLTAuMTQ5MDcsMCAtMC4yOTUyNywtMC4wMjAwNyAtMC40NDQzMywtMC4wMjU4Yy0xLjM1ODgsMS4wNDYzMyAtMy4yOTA5MywxLjg1NDczIC04LjA3MjUzLDIuODM4Yy04LjU0MjY3LDIuMTc1OCAtMy41MDAyLDQuNzQ0MzMgLTAuMjIzNiw1LjE0MjhjMy4xNzA1MywwLjc5NDA3IDEwLjcwNywxLjc2MDEzIDE1LjcxMjIsLTIuMzE5MTNjLTAuMDE0MzMsLTEuMjg0MjcgLTAuMDM3MjcsLTIuMTY3MiAtMC4wNzE2NywtMi40ODI1M3oiIGZpbGw9IiMwMjc3YmQiPjwvcGF0aD48cGF0aCBkPSJNNzUuODA5MjksNzAuOTUyNTFjLTAuODM3MDcsMC44NjU3MyAtMi4xNTg2LDEuNjIyNTMgLTMuNjE3NzMsMS4zODc0N2MtMi4zNzM2LC0wLjM4NDEzIC00LjE5MzkzLC0zLjI0NzkzIC00LjA2MjA3LC00LjMyMjkzdjBjMC4xMjYxMywtMS4wNzIxMyAyLjE1Mjg3LC0xLjYzMTEzIDQuNTIzNiwtMS4yNDdjMC44MjI3MywwLjEzNDczIDEuNTcwOTMsMC4zNjY5MyAyLjIwMTYsMC42NTM2Yy0wLjkxNzMzLC0xLjk3MjI3IC0yLjU3NzEzLC0zLjExMDMzIC01LjEwODQsLTMuMzg4NGMtNC40ODYzMywtMC40OTg4IC05LjI0Nzg3LDEuODQ2MTMgLTEwLjIwNTMzLDMuMTQ0NzNjMC4wMjAwNywwLjMxNTMzIDAuMDU3MzMsMC43MTk1MyAwLjA5NDYsMS4xOTU0YzAuMjY2NiwzLjI4ODA3IDAuNzU5NjcsOS40MTQxMyAtMC4xNDMzMywxNS44NzI3M2MtMC41OTYyNyw0LjI1NyAxLjEyNjYsOS4wODQ0NyA0LjQ5MjA3LDEyLjU5OWMyLjE3MDA3LDIuMjY0NjcgNC43MDQyLDMuNjk4IDcuMjAzOTMsNC4xMjIyN2MwLjMxODIsLTEuMzcwMjcgMC44ODU4LC0yLjcwNjEzIDEuNDcwNiwtNC4wODVjMC4zMjM5MywtMC43NTk2NyAwLjY2NzkzLC0xLjU2ODA3IDAuOTkxODcsLTIuNDQyNGwwLjQ2NDQsLTEuMjI0MDdjMS4yNjk5MywtMy4zMTEgMi41OCwtNi43MzY2NyAyLjYwNTgsLTEzLjQ4MTkzYzAuMDExNDcsLTIuNTk0MzMgLTAuMzA2NzMsLTUuNTU1NiAtMC45MTE2LC04Ljc4MzQ3ek0xMTYuNDE4NDksODEuMDAzMDRjLTAuMjk4MTMsLTIuMDg5OCAtMC42MDQ4NywtNC4yNTQxMyAtMC41MzAzMywtNi42MDE5M2MwLjA2NTkzLC0yLjEyNzA3IDAuMzAxLC00LjEzMzczIDAuNTI3NDcsLTYuMDc0NDdjMC4xNzc3MywtMS41Mjc5MyAwLjMxNTMzLC0yLjk5NTY3IDAuMzk1NiwtNC40NDMzM2MtMy42OTUxMywwLjMwNjczIC02LjE0OSwxLjM3MzEzIC03LjMxMjg3LDMuMTc2MjdjMC40ODE2LC0wLjE2MzQgMS4wMjYyNywtMC4yOTI0IDEuNjI4MjcsLTAuMzY5OGMyLjU1NzA3LC0wLjMzMjUzIDQuNDIzMjcsMC40MDQyIDQuNjM4MjcsMS44MjYwN2MwLjE1NzY3LDEuMDQwNiAtMC43MjUyNywyLjAyMSAtMS4xMTIyNywyLjM5NjUzYy0wLjc5NDA3LDAuNzcxMTMgLTEuNzk0NTMsMS4yNjcwNyAtMi44MTIyLDEuMzk4OTNjLTAuMTgzNDcsMC4wMjI5MyAtMC4zNjk4LDAuMDM0NCAtMC41NTA0LDAuMDM0NGMtMS4wMTE5MywwIC0xLjk3OCwtMC4zNDY4NyAtMi43MjA0NywtMC44NmMwLjMyMTA3LDUuNjU1OTMgNC40OTIwNywxMy4yMjEwNyA2LjU0NDYsMTYuOTMzNGMwLjQzODYsMC43OTQwNyAwLjc3Njg3LDEuNDI3NiAxLjA1NzgsMS45NzIyN2MxLjEyNjYsLTMuMjA3OCAwLjcxMDkzLC02LjEzMTggMC4yNDY1MywtOS4zODgzM3oiIGZpbGw9IiMwMjc3YmQiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=');
                 }
                      // Crear un constructor de objetos de Urano
                 function css3() {
                     drawStar.call(this,0,-365,40,5799.095,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiMwYzZmYWIiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTM0LjczMzMzLDMxLjUzMzMzaC05Ny40NjY2N2w4LjYsOTcuNDY2NjdsNDAuMTMzMzMsMTEuNDY2NjdsNDAuMTMzMzMsLTExLjQ2NjY3bDguNiwtOTcuNDY2Njd6IiBmaWxsPSIjMDI3N2JkIj48L3BhdGg+PHBhdGggZD0iTTg2LDQwLjEzMzMzdjkxLjQ0NjY3bDMyLjEwNjY3LC05LjE3MzMzbDcuMTY2NjcsLTgyLjI3MzMzeiIgZmlsbD0iIzAzOWJlNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTIuMDg2NjcsNTQuNDY2NjdoLTI2LjA4NjY3djExLjQ2NjY3aDE0LjA0NjY3bC0wLjg2LDExLjQ2NjY3aC0xMy4xODY2N3YxMS40NjY2N2gxMi42MTMzM2wtMC44NiwxMi45bC0xMS43NTMzMyw0LjAxMzMzdjEyLjA0bDIyLjY0NjY3LC03LjQ1MzMzbDIuMDA2NjcsLTMyLjk2NjY3djB6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTg2LDU0LjQ2NjY3djExLjQ2NjY3aC0yNS41MTMzM2wtMC44NiwtMTEuNDY2Njd6TTcyLjgxMzMzLDc3LjRsMC41NzMzMywxMS40NjY2N2gxMi42MTMzM3YtMTEuNDY2Njd6TTczLjk2LDk0LjZoLTExLjQ2NjY3bDAuODYsMTUuNzY2NjdsMjIuNjQ2NjcsNy40NTMzM3YtMTIuMDRsLTExLjc1MzMzLC00LjAxMzMzeiIgZmlsbD0iI2VlZWVlZSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+');
                 }
                      // Crear un constructor de objetos Neptuno
                 function php() {
                     drawStar.call(this,0,-415,40,9799.095,'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiM3Mzc3YWQiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNODYsNTcuNzkyYy0xNC4wODcwNSwwIC0yNi44NjAzMiwyLjk0OTYzIC0zNi4yOTQwNyw3Ljg3NDE3Yy05LjQzMzc1LDQuOTI0NTQgLTE1Ljc4MjI0LDEyLjAxODkxIC0xNS43ODIyNCwyMC4zMzM4M2MwLDguMzE0OTIgNi4zNDg0OSwxNS40MDkzIDE1Ljc4MjI0LDIwLjMzMzgzYzkuNDMzNzQsNC45MjQ1MyAyMi4yMDcwMiw3Ljg3NDE3IDM2LjI5NDA3LDcuODc0MTdjMTQuMDg3MDUsMCAyNi44NjAzMiwtMi45NDk2MyAzNi4yOTQwNywtNy44NzQxN2M5LjQzMzc0LC00LjkyNDUzIDE1Ljc4MjI0LC0xMi4wMTg5MSAxNS43ODIyNCwtMjAuMzMzODNjMCwtOC4zMTQ5MiAtNi4zNDg0OSwtMTUuNDA5MyAtMTUuNzgyMjQsLTIwLjMzMzgzYy05LjQzMzc1LC00LjkyNDUzIC0yMi4yMDcwMiwtNy44NzQxNyAtMzYuMjk0MDcsLTcuODc0MTd6TTg2LDYyLjEzMTY5YzEzLjQ3Njc4LDAgMjUuNjU2NzQsMi44NzMzNSAzNC4yODUyNiw3LjM4MjU2YzguNjI4NTMsNC41MDA3NCAxMy40NTEzNSwxMC40MTY5NiAxMy40NTEzNSwxNi40ODU3NGMwLDYuMDY4NzkgLTQuODIyODIsMTEuOTg1MDEgLTEzLjQ1MTM1LDE2LjQ4NTc0Yy04LjYyODUzLDQuNTA5MjEgLTIwLjgwODQ4LDcuMzgyNTYgLTM0LjI4NTI2LDcuMzgyNTZjLTEzLjQ3Njc4LDAgLTI1LjY1Njc0LC0yLjg3MzM1IC0zNC4yODUyNiwtNy4zODI1NmMtOC42Mjg1MywtNC41MDA3MyAtMTMuNDUxMzUsLTEwLjQxNjk2IC0xMy40NTEzNSwtMTYuNDg1NzRjMCwtNi4wNjg3OSA0LjgyMjgyLC0xMS45ODUwMSAxMy40NTEzNSwtMTYuNDg1NzRjOC42Mjg1MywtNC41MDkyMSAyMC44MDg0OSwtNy4zODI1NiAzNC4yODUyNiwtNy4zODI1NnpNODAuNTkyMzQsNjYuNDcxMzhsLTUuNDQxNTcsMjYuMDM4MTVoNS42OTU4NWwyLjc0NjIxLC0xMy4wMTkwOGg0LjU1MTU5YzEuNDQ5MzksMCAyLjQxNTY1LDAuMjM3MzMgMi44NjQ4OCwwLjcyMDQ2YzAuNDQwNzUsMC40ODMxMyAwLjUzMzk5LDEuMzk4NTQgMC4yNzk3MSwyLjcxMjMxbC0yLjA3NjYxLDkuNTg2MzFoNS43ODA2bDIuMjU0NjEsLTEwLjM2NjFjMC40ODMxMywtMi40ODM0NiAwLjExODY2LC00LjMwNTc5IC0xLjA4NDkyLC01LjQxNjE0Yy0xLjIyOTAxLC0xLjEyNzMgLTMuMzkwMzgsLTEuNTc2NTMgLTYuNjExMjUsLTEuNTc2NTNoLTUuMDc3MWwxLjgwNTM4LC04LjY3OTM4ek01NS42MjIxNSw3NS4xNTA3N2wtNC4zOTkwMiwyMy44NjgzMWg1LjczODIzbDEuMTQ0MjUsLTYuNTA5NTRoMy41NzY4NmM3LjQ3NTgsMCAxMS41NDQyNiwtMS43MjkxIDEzLjA2MTQ2LC04LjE0NTRjMS4zMDUzLC01LjUxNzg1IC0yLjAzNDIzLC05LjIxMzM3IC03LjU1MjA4LC05LjIxMzM3ek0xMDEuMTg4OTIsNzUuMTUwNzdsLTQuMzk5MDIsMjMuODY4MzFoNS43MzgyM2wxLjE0NDI1LC02LjUwOTU0aDMuNTc2ODZjNy40NzU4LDAgMTEuNTQ0MjYsLTEuNzI5MSAxMy4wNjE0NiwtOC4xNDU0YzEuMzA1MywtNS41MTc4NSAtMi4wMzQyMywtOS4yMTMzNyAtNy41NTIwOCwtOS4yMTMzN3pNNjAuNTU1MTYsNzkuNDkwNDZoNC40NjY4M2MzLjcxMjQ3LDAgNC40OTIyNiwxLjY2OTc2IDQuMjk3MzEsMy41MjZjLTAuNTAwMDgsNC43ODg5MiAtMy40ODM2Miw1LjE1MzM4IC02LjY4NzUzLDUuMTUzMzhoLTMuNzIwOTV6TTEwNi4xMjE5Myw3OS40OTA0Nmg0LjQ2NjgzYzMuNzEyNDcsMCA0LjQ5MjI2LDEuNjY5NzYgNC4yOTczMSwzLjUyNmMtMC41MDAwOCw0Ljc4ODkyIC0zLjQ4MzYyLDUuMTUzMzggLTYuNjg3NTMsNS4xNTMzOGgtMy43MjA5NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==');
                 }
                      // Crear una instancia de objeto solar
                 var js=new js();
                      // Crear una instancia de objeto Mercury
                 var java = new java();
                      // Crear una instancia de objeto Venus
                 var html = new html();
                      // Crear instancia de objeto terrestre
                 var spring = new spring();
                      // Crear una instancia de objeto Mars
                 var angular = new angular();
                      // Crear una instancia de objeto Júpiter
                 var typescript = new typescript();
                      // Crear una instancia de objeto Saturno
                 var postgres = new postgres();
                      // Crear instancia de objeto Urano
                 var css3 = new css3();
                      // Crear una instancia de objeto Neptuno
                 var php = new php();
              
                 function play(){
                              // lienzo claro
                     cxt.clearRect(0,0,1000,1000);
                              // Dibuja la pista
                     drawTrack();
                              // Dibuja el planeta
                     js.draw();
                     java.draw();
                     html.draw();
                     spring.draw();
                     angular.draw();
                     typescript.draw();
                     postgres.draw();
                     css3.draw();
                     php.draw();
                 }
                      // hacer que el planeta se mueva
                 setInterval(play,100);
             });
});
