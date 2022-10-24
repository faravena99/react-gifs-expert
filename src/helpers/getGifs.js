export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?key=0LuRzn190D6N45UV3de26nDtTrGt9lxQ&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}