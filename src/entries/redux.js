import { createStore } from 'redux'

const $form = document.getElementById('form')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault() // Para que no recarga la página
    const data = new FormData($form)
    if(data.get('title') !== ''){
        const title = data.get('title') // Se agarra el elemento title del form.
        console.log(title)
        store.dispatch({
            type: 'ADD_SONG', //Type es lo único obligatorio. Type es lo que dice qué se va a hacer.
            payload: {
                title, // title: title
            }
        })
    }
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
    },
]

const reducer = function(state, action) {
    switch(action.type){
        case 'ADD_SONG':
            return [...state, action.payload] //Aquí es donde descomponemos lo que ya hay y luego agregamos la que entra en el action.payload
        default:
            return state
    }
}

const store = createStore(
    // (state) => state, //reducer -> Debería retornar el estado
    reducer,
    initialState,
    enhancer,
)

function render() {
    const $container = document.getElementById('playlist')

    const playlist = store.getState() //  Es una lista, ergo, es iterable
    $container.innerHTML = ''
    playlist.map((item) => {
        const template = document.createElement('p') // Le estoy diciendo qué tipo de elemento HTML voy a crear
        template.textContent = item.title
        $container.appendChild(template)
    })
}

render()


function handleChange() {
    render()
}

store.subscribe(handleChange)

