const URL = "http://localhost:4000/lobbies/"
const userURL = "http://localhost:4000/users/"
const loggedUserURL = "http://localhost:4000/loggedInUser/"

class Adapter {
  static getGamePage (id) {
    return fetch(`${URL}${id}`)
      .then(r => r.json())
  }

  static getLobbies () {
    return fetch(URL)
      .then(r => r.json())
  }

  static submit (newGame) {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGame)
    }
    return fetch(URL, configObj)
      .then(r => r.json())
  }

  static joinGame (user, id, players) {
    const updatedPlayers = players.slice(1, 4)
    const playersObj = {
      players: [...updatedPlayers, user]
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playersObj)
    }
    return fetch(`${URL}${id}`, configObj)
      .then(r => r.json())
  }

  static delete (id) {
    const configObj = { method: "DELETE" }
    return fetch(`${URL}${id}`, configObj)
  }

  static getUsers () {
    return fetch(userURL)
      .then(r => r.json())
  }

  static createAccount (newAccount) {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAccount)
    }
    return fetch(userURL, configObj)
      .then(r => r.json())
  }

  static addPoints (id, player) {
    const playerObj = {
      points: player[0].points + 10
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playerObj)
    }
    return fetch(`${userURL}${id}`, configObj)
      .then(r => r.json())
  }

  static getLoggedInUser () {
    return fetch(loggedUserURL)
      .then(r => r.json())
  }

  static signIn (user) {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
    return fetch(loggedUserURL, configObj)
      .then(r => r.json())
  }

  static signOut () {
    const signedOut = {
      id: 1,
      name: "",
      password: "",
      points: 0
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signedOut)
    }
    return fetch(loggedUserURL, configObj)
      .then(r => r.json())
  }
}

export default Adapter
