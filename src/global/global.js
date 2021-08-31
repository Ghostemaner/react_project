export const authors = {
    person: 'Guest',
    bot: "BOT"
}


export const scrollToBottom = () => {
    const div = document.getElementById("mess-list");
    if(div) {
        div.scrollTop = div.scrollHeight - div.clientHeight;
    }
    
}


