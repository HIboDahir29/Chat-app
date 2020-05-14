const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generatLocationMessage = (maps) => {
    return {
        maps,
        createdAt: new Date().getTime()
    }
}



module.exports = {
    generateMessage,
    generatLocationMessage
}