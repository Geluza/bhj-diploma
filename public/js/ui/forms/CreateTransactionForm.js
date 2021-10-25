/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
   Account.list({}, (err, response) => {
    if(response.success) {
      const selectExpense = this.element.getElementById("expense-accounts-list");
      const selectIncome = this.element.getElementById("income-accounts-list");
     response.data.forEach(item => selectExpense.insertAdjacentHTML('beforeend', `<option value="${item.id}">${item.name}</option>`));
     response.data.forEach(item => selectIncome.insertAdjacentHTML('beforeend', `<option value="${item.id}">${item.name}</option>`));
     }
    })
  } 



  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
   onsubmit(data) { 
    Transaction.create(data, (error, response) =>{
      if(response.success) {
        App.update();
        this.element.reset();
        if(this.element.id == 'new-income-form') {
          App.getModal('newIncome').close()
        } else {
          App.getModal('newExpense').close();
        }
      } 
    });
  }
}
  
