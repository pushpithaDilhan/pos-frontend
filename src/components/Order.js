import React, { Component } from 'react';

class Order extends Component {
  render() {
        return (
            <div class="container">
   	            <div class="row">
	                <div class="col-md-6">
				        <div class="panel panel-primary">
					        <div class="panel-heading">
						        <h3 class="panel-title"># 1</h3>					        
					        </div>					       
					        <table class="table table-hover" id="dev-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kilgore</td>
                                        <td>Trout</td>
                                        <td>kilgore</td>
                                        <td>kilgore</td>
                                        <td>
                                        <div className="btn-group">
                                            <button type="button" class="btn btn-success">Edit</button>
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Bob</td>
                                        <td>Loblaw</td>
                                        <td>boblahblah</td>
                                        <td>kilgore</td>
                                        <td>
                                        <div className="btn-group">
                                            <button type="button" class="btn btn-success">Edit</button>
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Holden</td>
                                        <td>Caulfield</td>
                                        <td>penceyreject</td>
                                        <td>kilgore</td>
                                        <td>
                                        <div className="btn-group">
                                            <button type="button" class="btn btn-success">Edit</button>
                                            <button type="button" class="btn btn-danger">Delete</button>
                                        </div>
                                        </td>
                                    </tr>
                                </tbody>
					        </table>
				        </div>
			        </div>    
                </div>
            </div>        
        );
    }
}

export default Order;