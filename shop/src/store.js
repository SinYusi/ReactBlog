import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        changeName(state) {
            return 'john ' + state
        }
    }
})

export let { changeName } = user.actions

let basket = createSlice({
    name: 'basket',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        plusCount(state, action) {
            state[action.payload].count++
            return state
        },
        plusGoods(state, action) {
            console.log(state)
            let tem = { id: action.payload.id, name: action.payload.title, count: 1 }
            state.push(tem)
        }
    }
})

export let { plusCount, plusGoods } = basket.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        basket: basket.reducer
    }
}) 