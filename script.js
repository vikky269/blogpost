const shareBtn = document.getElementById('socialsharebtn')

shareBtn.addEventListener('click', () => {
    if(navigator.share){
        navigator.share({
            title: "Check this Out",
            text: "Amazing content I found",
            url: window.location.href
        })
        .then(()=> console.log('Content shared successfully'))
        .catch(err => console.error("Error Sharing Content: ", err))
    }else{
        alert("Web share Api not supported in this browser")
    }
})