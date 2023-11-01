// 'https://api.sampleapis.com/coffee/hot'

export const coffeeModel = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await resp.json();
    console.log(data);
    return data;
}
