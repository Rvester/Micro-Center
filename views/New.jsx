const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class New extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <h1 className = 'newTitle'>New Product</h1> 
                <form className = 'newForm' action='/micro' method='POST'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name'/> <br/>
                    
                    <label htmlFor='productimage'>Image:</label>
                    <input type='text' id='productimage' name='productimage'/><br/>

                    <label htmlFor='price'>Price:</label>
                    <input type='number' step='0.01' id='price' name='price'/><br/>

                    <label htmlFor='productDescription'>Product Description:</label>
                    <input type='textarea' id='productDescription' name='productDescription'/><br/>

                    <label htmlFor='inventory'>Inventory:</label>
                    <input type='number' id='inventory' name='inventory'/><br/>
                    

                    <input type='submit' value='Submit' className='subBtn'/>
                </form>
            </DefaultLayout>
            

        )
    }
}

module.exports = New