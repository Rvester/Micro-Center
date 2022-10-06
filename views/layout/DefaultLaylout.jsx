const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel= "stylesheet" href = "/styles.css"/>
                
                </head>
                <body>
                        
                
                    <nav>
                    
                    </nav>
                   
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;