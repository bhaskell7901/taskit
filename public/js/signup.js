const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    const passwordVerify = document.getElementById('password-verify').value.trim();
  
    if (email && password && passwordVerify) {
      if (password === passwordVerify) {
            const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
      }
      else{ alert("Password don't match") }
    }
  };
  
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);