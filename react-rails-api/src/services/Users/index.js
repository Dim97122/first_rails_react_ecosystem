export const RegisterUserRequest = (first_name, last_name, username, email, password, password_confirmation) => {
  const data = {
    user: {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
  }

  fetch('http://localhost:3000/users.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => console.log(response))
}

export const SignInUserRequest = (email, password) => {
  const data = {
    user: {
      email: email,
      password: password,
    }
  }

  fetch('http://localhost:3000/users/sign_in.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => console.log(response))
}
