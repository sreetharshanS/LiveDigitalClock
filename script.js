function clockCall(){
    const now = new Date();

    const hours24 = now.getHours().toString().padStart(2,'0');
    const hours12 = hours24 % 12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const ampm = hours24 >= 12 ? 'AM' : 'PM';
    document.getElementById("clockId").innerText =`${hours12}: ${minutes}:${seconds} ${ampm}`;
}

clockCall()
setInterval(clockCall,1000);