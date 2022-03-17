import getData from "./app.js";

(async () => {
    const sonuc = await getData(1);
    console.log(sonuc);
})();