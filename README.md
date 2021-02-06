# [Jerma AI Chatroom](https://aichat.jerma.io/chat)

To clarify, this is cheating, its not actually generating these messages in real time (I dont have the budget for that), I just generated 50k lines from GPT-2 trained on Jerma's chat (using logs from [here](https://drive.google.com/drive/folders/1fSQV_MVUlqOkG49eIcHBFSpKNuSoBm8q)) and let it pick a random one from them. 

The data is filtered to only be messages with > 7 words and no more than 3 duplicate words to prevent the AI from just generating one word messages over and over.

Some tools used to generate and filter the data are avalible in `tools/` such as generating the emote map and filtering the data. The code there is really bad though, I wouldn't recommend using them.