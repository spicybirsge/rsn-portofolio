document.addEventListener("DOMContentLoaded", function () { 
    new TypeIt("#typingaboutme", { 
        strings: ["I am a gaming YouTuber that uploads videos about free fire, and more!"], 
    }).go(); 
});

document.addEventListener('DOMContentLoaded', async function() {
    const url = `https://getlatestvideofromchannel.vercel.app/latest_video?channel_id=UCo-Z-aFPvCJ-YCOAmUPBVTw&key=810c76f9d289e2db2ca07c3a5b9298d4d50eb6be221211d1c51e1a968d6696f43b57a53923ff326beb565ca1a0b0e8a1ea206ffac6592af2c03d02be3bf97804afca5d5c7f42bd8d`
try {
    const fetchLV = await fetch(url, {
        method: 'GET'
    })

    const data = await fetchLV.json()

    document.getElementById('latest-vid-iframe').src=`https://www.youtube.com/embed/${data.last_video_id}`
} catch{
    document.getElementById('latest-vid-iframe').src=`https://www.youtube.com/embed/DnH1xyk9xK0`   
}
})

