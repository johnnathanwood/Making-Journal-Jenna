const url = "http://localhost:3000/entries"
const dataManager = {
  getEntries: () => {
    return fetch(`${url}`)
      .then(res => res.json())
  },
  saveEntry: (entry) => {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(res => res.json());
  },
  deleteEntries: (id) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(res => res.json());
  },
editEntry: (entry, id) => {
  return fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  }).then(res => res.json());
},
  singleEntry: (id) => {
    return fetch(`${url}/${id}`)
      .then(res => res.json())
  }
}



export { dataManager }
