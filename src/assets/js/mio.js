addEventListener('load',()=>{
        var link = document.getElementById('cv');
        link.addEventListener('click',()=>{
                link.setAttribute("target","_blank");
                link.href = "https://drive.google.com/u/0/uc?id=1OL7nNRWKJ3tmtPCD2lQPuWE32PAHAu-4&export=download";
                link.download = "C.V.pdf";
        })
});