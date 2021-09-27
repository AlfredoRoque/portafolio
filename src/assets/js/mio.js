addEventListener('load',()=>{
        var link = document.getElementById('cv');
        link.addEventListener('click',()=>{
                link.setAttribute("target","_blank");
                link.href = "https://drive.google.com/u/0/uc?id=14vCT8m2qgVvG2d6OxyJPsVNT7YWUzz67&export=download";
                link.download = "C.V.pdf";
        })
});