import { dataManager } from "./dataManager"
import { htmlEntry } from "./htmlEntry"

const dom = (entry) => {
  document.querySelector("#output").innerHTML += entry
}

const domRender = () => {
  document.querySelector("#output").innerHTML = ""
  dataManager.getEntries()
    .then(entries => {
      entries.forEach(entry => {
        const entryHTML = htmlEntry(entry)
        console.log(entryHTML)
        dom(entryHTML)
      })
    })
}

export { domRender }
