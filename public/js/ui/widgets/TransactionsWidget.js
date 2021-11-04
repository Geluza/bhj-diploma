/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(element) {
      this.element = element;
    } else {
      throw new Error("Элемент не существует!")
    }
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
     document.querySelector(".create-income-button").onclick = function(e) {
       e.preventDefault();
       App.getModal("newIncome").open();
     }

     document.querySelector(".create-expense-button").onclick = function(e) {
       e.preventDefault();
       App.getModal("newExpense").open();
     }
  }
}
