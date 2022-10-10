const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component{
    render(){
        const {products} = this.props
        return(
            <DefaultLayout title={products.name}>
                <div id='showpagecontainer'>
                <div id='imageshowpage'>
                    <img src={products.image}/>   
                </div>
                <div id='productinfo'>
                <h1>{products.name}</h1>
                <p id='productprice'>
                    {'$'+products.price}
                </p>
                <p>
                    {products.productDescription}
                </p>
                <p id='productinventory'>
                    {products.inventory == 0? 'OUT OF STOCK' : products.inventory + ' In Stock'} 
                </p>
            {products.inventory == 0? <button id='outofstock'> Out Of Stock</button> : 
                <form action={`/micro/${products._id}/purchase?_method=PUT`} method='POST'>
                        <button id='purchaseBtn'>
                            Buy Now
                        </button>
                </form>}
                <button>
                    <a href={`/micro/${products._id}/edit`} id='editbutton' className='menulink' >Edit Product</a>
                </button>
                <form action={`/micro/${products._id}?_method=DELETE`}  method="POST">
                    <input type='submit' value="Delete" id='deletebutton'/>
                </form>
                
                </div>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Show