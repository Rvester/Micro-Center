const React = require('react')


class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.name}</title>
                    <link rel= "stylesheet" href = "/styles.css"/>
                
                </head>
                <body>
                      <nav className= 'header' >
                        <h2 className = 'Macro'>Macro Center</h2>
                        
                       
                       
                        
                      
                        
                        </nav>  
                
                    <nav>
                    
                    </nav>
                   {this.props.children}
                   <div>
                   <div className = 'helpContainer'>
                     <ul className = 'helpList'>
                    <h5>Help Area</h5>
                        <li>Have Questions? Contact Us</li>
                        <li>Return Policy</li>
                        <li>Copyright Policy</li>
                        <li>Shipping&Handling Policy</li>
                        <li>Privacy Policy</li>
                     </ul>
                   </div>
                    <div className = 'aboutList'>
                        <h6>About Me</h6>
                        <p className = 'para'>This is a passion project for everything I love tech, this is based on Micro Center, a popular website (although not as good as new egg in my opinion)that sells multiple appliances from graphics cards to tv's</p>
                        <p className = 'para'>Here is my info below</p>
                        <p className = 'para'>Email: rasheem.khan94@gmail.com </p>
                        <a href = 'https://github.com/Rvester'target = "_blank" className = 'git'>GitHub</a> <br/>
                        <a href = 'https://www.linkedin.com/in/rasheem-khan-9a6b38250/' target = "_blank" className = 'git'>LinkedIn</a>

                    </div>
                 </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout