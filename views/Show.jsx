const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
const products = require('../models/seed')

class Show extends React.Component{
   
    render(){
        const {} = this.props
        return(
            <DefaultLayout title={this.props.name}>
                <div id='show'>
                    <a href = '/micro' className = 'showMenu'>Inventory</a>
                    <br/>
                <div id='imageShow'>
                    <img src={this.props.image}/>   
                </div>
                <div id='productinfo'>
                <h1>{this.props.name}</h1>
                <p id='productprice'>
                    {'$'+this.props.price}
                </p>
                <p>
                    {this.props.productDescription}
                </p>
                <p id='productinventory'>
                    {this.props.inventory === 0 ? 'OUT OF STOCK' : `${this.props.inventory}  In Stock`} 
                </p>
            {this.props.inventory === 0? <button id='outofstock'> Out Of Stock</button> : 
                <form action={`/micro/${this.props._id}/?_method=PUT`} method='POST'>
                        <button className ='buyBtn'>
                            Buy
                        </button>
                </form>}
                
                <form action={`/micro/${this.props._id}?_method=DELETE`}  method="POST">
                    <input className = 'deleteBtn' type='submit' value="Delete" id='deletebutton'/>
    
                </form>
                
                </div>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Show