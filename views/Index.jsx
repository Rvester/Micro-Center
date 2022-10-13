const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
const products = require('../models/seed')


class Index extends React.Component {
    render(){
        const {} = this.props
        return(
            <DefaultLayout>
                <nav>
                <a href = '/micro/new' className= 'menu'>New Product</a>
                </nav>
                <h1 className = 'title'>Inventory</h1>
                <div className = 'products'>
                   <ul className = 'products-list'>
                    {products.map((products) => {
                      return (
                        <li key = {products.id}>
                            <a href = {`${products.id}`}>
                                <img src = {products.image} height = '200'/> <br/>
                            </a>

                            <a href = {`/micro/${products.id}`}>{products.name}</a> <br/>
                            {'$' + products.price}  <br/>
                            {products.inventory === 0? 'Out of Stock': 'In Stock'}  <br/>
                        </li>

                      )
                      
                       
                    })}
                    </ul> 
                </div>


            </DefaultLayout>
        )
    }
}


module.exports = Index 