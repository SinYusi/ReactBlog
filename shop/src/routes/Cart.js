import { useState } from "react"
import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function Cart() {

    let user = useSelector((state) => { return state.user })
    let basket = useSelector((state) => { return state.basket })

    return (
        <div>
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
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}

export default Cart