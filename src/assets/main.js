const options = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e1a1619599msh7234d56112d4d04p13db99jsnf8f287b55eb5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

};

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC2ZEvOVFpda3dUCmiv5ZjhA&part=snippet%2Cid&order=date&maxResults=14';
const content = null || document.getElementById('content');


async function fetchData(urlApi){

    const response = await fetch(urlApi, options);
    const data = await response.json();

    return data;

}

// Fetch calling when doc is charging on browser.

(async () =>{

    try{

        const videos = await fetchData(API);

        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,12).join('')}
        `;

        content.innerHTML = view;

    }
    catch(error){

        console.error(error);

    }

})();
