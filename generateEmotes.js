const { EmoteFetcher, EmoteParser } = require('@mkody/twitch-emoticons');

const fetcher = new EmoteFetcher();

// fetcher.fetchTwitchEmotes("23936415").then(() => {
//     console.log(fetcher.emotes.forEach(async (emote) => {
//         console.log(emote.code + ": \"" + "<img alt='" + emote.code + "' title='" + emote.code + "' class='twitch-emote twitch-emote-0' src='" + emote.toLink() + "'>\", ");
//     }));
// });

fetcher.fetchTwitchEmotes(null).then(() => {
    console.log(fetcher.emotes.forEach(async (emote) => {
        console.log(emote.code + ": \"" + "<img alt='" + emote.code + "' title='" + emote.code + "' class='twitch-emote twitch-emote-0' src='" + emote.toLink() + "'>\", ");
    }));
});

fetcher.fetchBTTVEmotes(null).then(() => {
    console.log(fetcher.emotes.forEach(async (emote) => {
        console.log(emote.code + ": \"" + "<img alt='" + emote.code + "' title='" + emote.code + "' class='twitch-emote twitch-emote-0' src='" + emote.toLink() + "'>\", ");
    }));
});

// fetcher.fetchBTTVEmotes("23936415").then(() => {
//     console.log(fetcher.emotes.forEach(async (emote) => {
//         console.log(emote.code + ": \"" + "<img alt='" + emote.code + "' title='" + emote.code + "' class='twitch-emote twitch-emote-0' src='" + emote.toLink() + "'>\", ");
//     }));
// });


// fetcher.fetchTwitchEmotes().then(() => {
//     const text = 'Hello ::):!';
//     const parsed = parser.parse(text);
//     console.log(parsed);
//     // Hello ![PogChamp](https://static-cdn.jtvnw.net/emoticons/v1/88/1.0 "PogChamp")!
// });

// fetcher.fetchBTTVEmotes("23936415").then(() => {
//     console.log(fetcher.emotes);
// });

// fetcher.fetchBTTVEmotes("23936415").then(() => {
//     console.log(fetcher.emotes);
// });

// const parseMessage = async (message) => {
//     words = message.split(" ");
//     for(i = 0; i < words.length; i++) {
//         try()
//     }
// };

