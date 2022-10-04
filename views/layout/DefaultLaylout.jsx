const React = require('react')

class DefaultLayout extends React.Component {
    render() {
   const  {title, shipName} = this.props
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel= "stylesheet" href = "/styles.css"/>
                
                </head>
                <body>
                        
                
                    <nav>
                    
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;