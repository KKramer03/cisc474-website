function browserInfo() {
    const userAgent = window.navigator.userAgent;
    // const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0"
    if(userAgent.includes("Firefox")) {
        return "Firefox";
    }
    else if (userAgent.includes("Edg")) {
        return "Edge";
    }
    else if (userAgent.includes("Chrome")) {
        return "Chrome";
    }
    else if (userAgent.includes("Safari")) {
        return "Safari";
    }
    else {
        return "Other";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.imageButton')
    const img = document.createElement('img');
    switch (browserInfo()) {
        case "Firefox":
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg';
            break;
        case "Edge":
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Chromium_Logo.svg/512px-Chromium_Logo.svg.png?20220330065025';
            break;
       
        default:
            img.src = 'https://www.freeiconspng.com/thumbs/question-mark-icon/black-question-mark-icon-clip-art-10.png';
            break;
    }

    button.addEventListener('click', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
            button.style.display = 'none';
            img.height = height * 0.25;
            img.width = width * 0.25;        
        const usedDiv = document.getElementById('primaryDiv')
        usedDiv.appendChild(img);
        })
    }
);