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
});
