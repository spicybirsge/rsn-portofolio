document.addEventListener("DOMContentLoaded", function () { 
    new TypeIt("#typingaboutme", { 
        strings: ["I am a gaming YouTuber that uploads videos about free fire, and more!"], 
        speed: 50,
        afterComplete: (step, i) => {
          
                    document.getElementById("note").style.display="block"
                    document.getElementById("border").style.display="block"
                    const element = document.getElementById("thankyoufor100kanimation");

                    element.classList.remove("before-thank-youtyped");
                    element.classList.add("thank-you-animation");
                    function createConfetti() {
                        const confettiContainer = document.getElementById("confetti-container");
                        for (let i = 0; i < 100; i++) {
                          const confetti = document.createElement("div");
                          confetti.classList.add("confetti");
                          confetti.style.left = `${Math.random() * window.innerWidth}px`;
                          confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
                          confetti.style.animationDelay = `${Math.random()}s`;
                          confettiContainer.appendChild(confetti);
                        }
                      }
                  
                      createConfetti();
        }
    

    }).go(); 
});



document.addEventListener('DOMContentLoaded', async function() {
    const url = `https://api.rsngaming.tk/api/v1/latest_video?key=810c76f9d289e2db2ca07c3a5b9298d4d50eb6be221211d1c51e1a968d6696f43b57a53923ff326beb565ca1a0b0e8a1ea206ffac6592af2c03d02be3bf97804afca5d5c7f42bd8d`
try {
    const fetchLV = await fetch(url, {
        method: 'GET'
    })

    const data = await fetchLV.json()

    document.getElementById('latest-vid-iframe').src=`https://www.youtube.com/embed/${data.last_video_id}`
} catch{
    document.getElementById('latest-vid-iframe').src=`https://www.youtube.com/embed/3u1LhSCX5Gw`   
}
})

