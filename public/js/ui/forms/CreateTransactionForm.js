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
   Account.list(User.current(), (error, response) => {
    if (response.success) {
      const accountSelect = document.querySelector(`#${this.element.id} .accounts-select`);
      accountSelect.innerHTML = '';
      response.data.forEach((account) => {
        accountSelect.insertAdjacentHTML('beforeend', `<option value="${account.id}">${account.name}</option>`);
      });
    }
     })
   }




  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
   onSubmit(data) { 
    Transaction.create(data, (error, response) =>{
      if(response.success) {
        App.update();
        this.element.reset();
          App.getModal("newIncome").close()
          App.getModal("newExpense").close()
        
      }  
    }); 
  }
}
  
