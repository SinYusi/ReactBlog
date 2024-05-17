import { useState } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, plusCount } from "../store.js"

function Cart() {

    let user = useSelector((state) => { return state.user })
    let basket = useSelector((state) => { return state.basket })
    let dispatch = useDispatch()

    return (
        <div>

            {user}의 장바구니

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                    </tr>
                </thead>
                {
                    basket.map((a, i) => {
                        return (
                            <tbody>
                                <th>{i + 1}</th>
                                <th>{basket[i].name}</th>
                                <th>{basket[i].count}</th>
                                <th>
                                    <button onClick={() => {
                                        dispatch(plusCount(i))
                                    }}>+</button>
                                </th>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}

export default Cart