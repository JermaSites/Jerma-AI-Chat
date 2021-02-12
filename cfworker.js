addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  const url = "https://raw.githubusercontent.com/JermaSites/Jerma-AI-Chat/main/generated.txt"
  /**
   * gatherResponse awaits and returns a response body as a string.
   * Use await gatherResponse(..) in an async function to get the response body
   * @param {Response} response
   */
  async function gatherResponse(response) {
    const { headers } = response
    const contentType = headers.get("content-type") || ""
    return await response.text()
  }
  
  async function handleRequest() {
    const init = {
      headers: {
        "Access-Control-Allow-Origin": "aichat.jerma.io",
        "content-type": "text/plain;charset=UTF-8",
      },
    }
  
    const response = await fetch(url, init)
    const results = await gatherResponse(response)
    const messages = results.split('\n')
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    return new Response(randomMessage)
  }