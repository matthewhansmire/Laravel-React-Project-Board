import * as React from 'react';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';

class ComboBox extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      options: [],
      selectedOption: {}
    }

    this.checkFields = { text: 'name', value: 'id' };
  }

  componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){    
    if(prevProps.options != this.props.options){
      this.setState({
        options: this.props.options
      })
    }
    if(prevProps.selectedOption != this.props.selectedOption){
      this.setState({
        selectedOption: this.props.selectedOption
      })
    }    
  }

  onChange = (e) => {    
    if(this.props.onSelect){
      this.props.onSelect(e.itemData);
    }
  }

  render(){
    return (
      <ComboBoxComponent 
        id="comboBox" 
        ref={(scope) => this.comboBoxObj = scope} 
        fields={this.checkFields} 
        dataSource={this.state.options} 
        placeholder='Select' 
        showClearButton={false}
        value={this.state.selectedOption?.id}
        change={this.onChange} />
    )
  }
}

export default ComboBox;

