// Основная функция для совершения запросов
// на сервер.

const createRequest = (options) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  xhr.withCredentials = true;
  
 
   if (options.method === "GET") {
     options.url += "?"
     for(let item in options.data) {
     options.url += `${item}=${options.data[item]}&`
     }
 
   } else {
     
     for (data in options.data) {
       formData.append(data, options.data[data]);
     }
   }
 
   try {
     xhr.open(options.method, options.url);
     xhr.send(formData);
   } catch (e) {
       options.callback(e);
   }
 
   xhr.addEventListener("readystatechange", () => {
       if (xhr.status === 200 && xhr.readyState === 4) {
           options.callback(false, JSON.parse(xhr.response));
       }
   });
 }

