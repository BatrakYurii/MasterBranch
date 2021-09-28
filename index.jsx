class Power extends React.Component {
    
    render() {
        return <h2><b>Число {this.props.m} в степени {this.props.n} = {Math.pow(this.props.m, this.props.n)}</b></h2>;
    }
}

class Square extends React.Component{
    render(){
        return <>
        
        <svg>
            <rect width={this.props.m} height={this.props.m}  style={{fill: this.props.n}}/>
        </svg>
        </>
    }
}

class Application extends React.Component{

    render(){
        return<>
        <Power m={3} n={6} />
        <Square m="100px" n="red"/>
        </>
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById("app")
)
