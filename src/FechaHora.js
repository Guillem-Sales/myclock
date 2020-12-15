import React from 'react';
import styled from 'styled-components'

class Reloj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
                };
}
   tick(){ 
       this.setState({ date: new Date()});
    };

   componentDidMount(){
       this.timerID = setInterval ( () => this.tick(), this.props.interval);
    }
    componentWillUnmount() {
        clearInterval (this.timerID);
      }
    mostrarMensaje(){
        return <h1>Hora y fecha de hoy</h1>;
    }
    getFecha(){
        const mes = this.state.date.getMonth()+1;
        return this.state.date.getDate() + ' - ' + mes + ' -  ' + this.state.date.getFullYear();
}
  
    render() {
      return (
          <div>
         {this.mostrarMensaje()}
        <Display size={this.props.size} color={this.props.color}>
            {this.state.date.toLocaleTimeString()}<br></br>
            {this.getFecha()}
        </Display>
        </div>
    
      );
    }
  };

  const Display = styled.p`
    font-size: ${props => props.size || '30px'};
    color: ${props => props.color || 'blue'};
    

`;

  export default Reloj;