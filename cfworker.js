addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  /**
   * Example someHost at url is set up to respond with HTML
   * Replace url with the host you wish to send requests to
   */
  const url = "https://raw.githubusercontent.com/JermaSites/Jerma-AI-Chat/main/generated.txt"
  /**
   * gatherResponse awaits and returns a response body as a string.
   * Use await gatherResponse(..) in an async function to get the response body
   * @param {Response} response
   */
  async function gatherResponse(response) {
    const { headers } = response
    const contentType = headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      return JSON.stringify(await response.json())
    }
    else if (contentType.includes("application/text")) {
      return await response.text()
    }
    else if (contentType.includes("text/html")) {
      return await response.text()
    }
    else {
      return await response.text()
    }
  }
  
  async function handleRequest() {
    const init = {
      headers: {
        'Content-Type': 'application/text',
        'Access-Control-Allow-Origin': '*',
      },
    }
  
    const response = await fetch(url, init)
    const results = await gatherResponse(response)
    const messages = results.split('\n')
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    return new Response(randomMessage)
  }