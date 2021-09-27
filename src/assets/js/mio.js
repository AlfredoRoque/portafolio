addEventListener('load',()=>{
        var link = document.getElementById('cv');
        link.addEventListener('click',()=>{
                link.setAttribute("target","_blank");
                link.href = "https://drive.google.com/u/0/uc?id=1SCzWyOeMY_ug-SwVItDL3vQXR5w6odJS&export=download";
                link.download = "C.V.pdf";
        })
});