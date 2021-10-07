/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    function callbackLogin() {
    if(response.success === true) {
      let formData = new FormData(document.getElementById('login-form'));
      FormData.reset();
      App.setState('user-logged');
      App.getModal('modal');
      Modal.close()
    }}

    User.login(data, callbackLogin);
  }
}