import React, { Component } from 'react';
import CardItem from './CartItem';
import CardResult from './CartResult';

class Cart extends Component {
   render() {
      return (
         <section className="section">
            <div className="table-responsive">
               <table className="table product-table">
                  <thead>
                     <tr>
                        <th></th>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     <CardItem/>
                     <CardItem/>
                     <CardItem/>
                     <CardResult/>
                  </tbody>
               </table>
            </div>
         </section>
      );
   }
}

export default Cart;
