import { createStore } from 'redux'

const $form = document.getElementById('form')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault() // Para que no recarga la página
    const data = new FormData($form)
    const title = data.get('title') // Se agarra el elemento title del form.
    console.log(title)
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const initialState = [
    {
        "title": "Garota",
    },
    {
        "title": "One More Time",
    },
    {
        "title": "Summernight City",
    }
]

const store = createStore(
    (state) => state, //reducer -> Debería retornar el estado
    initialState,
    enhancer,
)

const $container = document.getElementById('playlist')

const playlist = store.getState() //  Es una lista, ergo, es iterable

playlist.map((item) => {
    const template = document.createElement('p') // Le estoy diciendo qué tipo de elemento HTML voy a crear
    template.textContent = item.title
    $container.appendChild(template)
})