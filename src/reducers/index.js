// action={
//     type:'CREATE_EVENT',
//     title:'test'
//     body:'test content'
// }
//動画講座１２番　１５分くらいから
// state =[]
//state=[{id:1,title:'test',body:'test body'}...]
import {
    CREATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS
  } from '../actions'

const events = (state=[], action) =>{
    switch (action.type){
        case CREATE_EVENT:
            const event = { title: action.title, content: action.content }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id )
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state

    }
}

export default events;