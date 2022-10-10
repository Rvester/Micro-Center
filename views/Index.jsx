const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {
    render(){
        const {products} = this.props
        return(
            <DefaultLayout>
                <h1 className = 'title'>Inventory</h1>
                <div className = 'products'>
                   <ul className = 'products-list'>
                    {products?.maps((products) => {
                      return (
                        <li key = {products._id}>
                            <a href = {`/micro/${products._id}`}>
                                <img src = {products.image} height = '500'></img>
                            </a>

                            <a href = {`/micro/${products._id}`}>{products.name}</a> &nbsp; <br/>
                            {'$' + products.price} &nbsp; <br/>
                            {products.inventory === 0? 'Out of Stock': 'In Stock'} &nbsp; <br/>
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