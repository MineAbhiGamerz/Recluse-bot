module.exports = {
    name: "ready",
    async execute(client) {
        console.log('Iam ready')
        let i = 0

        setInterval(() => {
            const textArray = [
                `servers ${client.guilds.cache.size}`,
                `My users ${client.users.cache.size}`,
                "TEAM MINE",
                "Spotify"
            ]
            const activityArray = [
                "WATCHING",
                "PLAYING",
                "PLAYING",
                "LISTENING"
            ]
      
            client.user.setActivity(textArray[i], { type: activityArray[i] })
    
            i++ 
    
            if (i == 3) i = 0
        }, 60000)
    }
}
