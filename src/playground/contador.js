class Contador extends  React.Component {
    constructor(props) { super(props);
        this.state = {contador:0};
        this.sumaUno = this.sumaUno.bind(this);
        this.restaUno = this.restaUno.bind(this);
        this.controlarReset = this.controlarReset.bind(this);
    }
    componentDidMount() {
        // sin comillas parseInt 
        const contadorString = localStorage.getItem('contador');
        const contador = parseInt(contadorString);
        if (!isNaN(contador)) { this.setState(() => ({contador}));}
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.contador !== this.state.contador) {
            localStorage.setItem('contador', this.state.contador);
        }
    }
       

    sumaUno() { this.setState((prevState) => {
        return { contador: prevState.contador + 1};
    }); }
    restaUno () { this.setState((prevState) => {
        return { contador: prevState.contador - 1};
    });}
    controlarReset() { this.setState(() => {
        return {contador: 0};
    }); }
    render() { 
        return (<div>
            <h2>contador:{this.state.contador} </h2>
            <button onClick={this.sumaUno}>+1</button>
            <button onClick={this.restaUno}>-1</button>
            <button onClick={this.controlarReset}>reset</button>
            </div>  ); }
}
//Contador.defaultProps = {contador:0};
ReactDOM.render(<Contador/>, document.getElementById('app'));
 
