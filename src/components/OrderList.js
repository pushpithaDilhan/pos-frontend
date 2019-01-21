import React, { Component } from 'react';

class OrderList extends Component {
  render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Name</th>
                        <th scope="col">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Evening list</td>
                        <td>$ 51.00</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Micheal's order</td>
                        <td>$ 27.00</td>                        
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>park Street</td>
                        <td>$ 52.75</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrderList;