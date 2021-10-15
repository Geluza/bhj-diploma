// Основная функция для совершения запросов
// на сервер.


const createRequest = (options) => {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.responseType = options.responseType;

  if (options.method === "GET") {
     let url= options.url + options.data;
     xhr.open(options.method, url);
     xhr.send()
  } else {
    const formData = new FormData();
    for (data in options.data) {
      formData.append(data, options.data[data]);
    }
    xhr.open(options.method, options.url);
    xhr.send(formData);
  }

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState == this.DONE && this.status == 200) {
      options.callback(err = null, this.response);
    } else {
      options.callback(this.response, null);
    }
  });
};






