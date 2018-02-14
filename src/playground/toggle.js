// palanca
class Toggle extends React.Component {
    constructor(){ super();
    this.state = {visible:false} 
    this.unTruco = this.unTruco.bind(this); }
    unTruco() {this.setState((prevState) => {
        return {visible: !prevState.visible}
    }); }
    render() { 
        
        return(<div>
            <button onClick={this.unTruco}>{this.state.visible ? 'mostrar':'ocultar'}</button>
           {this.state.visible && <div><h2>mues</h2></div>}
        </div>); } 
}
ReactDOM.render(<Toggle/>, document.getElementById('app') );