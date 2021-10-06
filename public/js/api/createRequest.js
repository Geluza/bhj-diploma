// Основная функция для совершения запросов
// на сервер.


const createRequest = (options) => {

const xhr = new XMLHttpRequest();
let url = "http://localhost:8000";
xhr.responseType = "json";
xhr.withCredentials = true;
let formData;



if(options.method === "GET") {
    for (let key in options.data) {
        url += "?" + `$key` + "&" + `options.data[key]`;
    }
} else  {
    url += options.url;
    formData = new formData();
    for(let item in options.data) {
    formData.append(item, options.data[item]);
}
}
xhr.open(options.method, url)
xhr.send(formData)

xhr.addEventListener("readysatechange", function() {
if(xhr.readyState === xhr.DONE && xhr.status === 200) {
    options.callback(null, this.response)
} else if(xhr.status !== 200) {
    options.callback(this.response, null)
}
})
}