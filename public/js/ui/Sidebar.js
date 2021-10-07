/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const btnToggle = document.getElementsByClassName("sidebar-toggle")[0];
    const sidebarMini = document.getElementsByClassName("sidebar-mini")[0];

    btnToggle.onclick = function() {
      sidebarMini.classList.toggle("sidebar-open", "sidebar-collapse");
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const register = document.querySelector(".menu-item_register");
    const enter = document.querySelector(".menu-item_login");
    const output = document.querySelector(".menu-item_logout");
    
    register.onclick = function() {
      App.getModal(document.getElementById("modal-register"));
      const modalRegister = App.getModal('register')
      modalRegister.open();
    }
    
    enter.onclick = function() {
      const modalLogin = App.getModal('login');
      modalLogin.open()
    }
    
    output.onclick = function() {
       User.logout();
       if(response.success === true) {
         App.setState('init')
       }
    }
 
  }
}


