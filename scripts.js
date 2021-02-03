twitchEmoji.add('jerma985');

const getRandomMessage = async () => {
    const response = await fetch('https://jerma-ai.herokuapp.com/api/', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(twitchEmoji.parse( myJson.string ), { emojiSize : 'medium' } );
};

getRandomMessage();