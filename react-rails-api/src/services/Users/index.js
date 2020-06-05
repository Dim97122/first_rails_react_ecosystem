
export const DeleteUser = (user) => {
  const url = 'http://localhost:3000/users/' + user.id + '.json'
  fetch(url, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(console.log("SUPPRIME"))
}

export const ModifyUserRequest = (id, first_name, last_name, username, email) => {
  const data = {
    user: {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
    }
  }
  const url = 'http://localhost:3000/users/' + id + '.json'
  return fetch(url, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => console.log(response))
}

export const Logout = () => {
  fetch('http://localhost:3000/users/sign_out.json', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
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

  return fetch('http://localhost:3000/users/sign_in.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
    return response
  })
}

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

  return fetch('http://localhost:3000/users.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
    return response;
  })
}
