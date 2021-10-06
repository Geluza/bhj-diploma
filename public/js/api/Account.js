/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  static url() {
    let url = "/account";
  }
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
     createRequest({
       data: id,
       method: GET,
       url: url,
       callback: callback
     })
  }
}
