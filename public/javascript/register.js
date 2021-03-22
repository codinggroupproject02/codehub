async function registerFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#first-name-register').value.trim();
    const last_name = document.querySelector('#last-name-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const knowledgeable_in = document.querySelector('#knowledge-register').value.trim();

    if (first_name && last_name && email && password && knowledgeable_in) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
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
  
  document.querySelector('.register-form').addEventListener('submit', registerFormHandler);