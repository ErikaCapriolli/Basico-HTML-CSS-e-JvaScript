import { API } from "./API.js"
import { DOM } from "./DOM.js"

const noticias = await API.getNews()

DOM.mostrarNews(noticias)