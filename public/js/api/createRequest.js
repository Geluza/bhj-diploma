// Основная функция для совершения запросов
// на сервер.

const createRequest = (options) => {

 const xhr = new XMLHttpRequest();
 xhr.withCredentials = true;

 xhr.responseType = 'json';
 

 if (options.method === "GET") {
  options.url = "?"
  for(let item in options.data) {
   options.url += `${item}=${options.data[item]}&`
  }
    xhr.open(options.method, options.url);
    xhr.send()
 } else {
   const formData = new FormData();
    for (data in options.data) {
    formData.append(data, options.data[data]);
  }
  xhr.open(options.method, options.url);
  xhr.send(formData);
  }

 xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
      options.callback(null, xhr.response);
    } else {
      options.callback(xhr.err, null);
    }
}
 }

