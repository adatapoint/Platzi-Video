import api from '../api.json'

import { normalize, schema } from 'normalizr'

// const media = new schema.Entity(key, definición_de_mi_schema, opciones)
const media = new schema.Entity('media', {}, {
    idAttribute: 'id', // ¿Qué es lo que quiero que sea el id de ese objeto? ¿Qué atributo debo coger como id?
    processStrategy: (value, parent, key) => ({ //Le estoy agregando otros campos del padre
        ...value, category: parent.id // Definimos que nuestro elemento de media va a extraer los ids de su key
    }) 
})

const category = new schema.Entity('categories', {
    playlist: new schema.Array(media) // Dentro de mis categories tengo unas playlist y las playlist son una lista de media.
})

const categories = { categories: new schema.Array(category)}


const normalizedData = normalize(api, categories)

export default normalizedData