addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  const url = "https://aichat.jerma.io/generated.txt"
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
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    }
  
    const response = await fetch(url, init)
    const results = await gatherResponse(response)
    const messages = results.split('\n')
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    var obj = { string: randomMessage }
    const jsonrm = JSON.stringify(obj)
    return new Response(jsonrm)
  }