function inTheBible (text) {
  console.log(text)
  const original = text.toLowerCase().split(' ').filter(w => w.length > 0)
  const inBible = original.filter(word => bibleStrings.includes(word))
  return JSON.stringify({
    original: original.length,
    inBible: inBible.length,
    percent: inBible.length / original.length,
    bibleWords: inBible
  })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const headers = { 'Access-Control-Allow-Origin': '*' }
  if (request.method === "OPTIONS") return new Response(null, { status: 200, headers });
  if (!request.body) return new Response("No text provided, use request body", { status: 400, headers })
  const text = await request.text()
  console.log(text)
  if (text.length === 0) return new Response(null, { status: 204, headers })
  return new Response(inTheBible(text), { headers: { ...headers, 'Content-Type': 'application/json' }})
}