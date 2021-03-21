async function registerFormHandler(event) {
    event.preventDefault();
  
    const role = document.querySelector('#role-register').value.trim();
    const first_name = document.querySelector('#first-name-register').value.trim();
    const last_name = document.querySelector('#last-name-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const knowledgeable_in = document.querySelector('#knowledge-register').value.trim();

    if (role && first_name && last_name && email && password && knowledgeable_in) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          role,
          first_name,
          last_name,
          email,
          password,
          knowledgeable_in
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
          console.log('success');
      } else {
          alert(response.statusText);
      }
    }
  }
  
  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  document.querySelector('.register-form').addEventListener('submit', registerFormHandler);
  