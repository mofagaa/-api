addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

	var background_urls = [
'https://s6.jpg.cm/2022/01/26/LpDg3Q.jpg',
'https://s6.jpg.cm/2022/01/28/LvjWkR.jpg',
'https://s6.jpg.cm/2022/01/28/Lvjnyz.jpg',
'https://s6.jpg.cm/2022/01/28/Lvj77u.png',
'https://s6.jpg.cm/2022/01/28/LvjQSG.png'
 /*需要随机到的图片的链接*/
    ]
	var index = Math.floor((Math.random()*background_urls.length));
	res = await fetch(background_urls[index])
    return new Response(res.body, {
        headers: { 'content-type': 'image/jpeg' },
    })
}
