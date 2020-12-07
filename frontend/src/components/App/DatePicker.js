import * as React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class DatePicker extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      date: ''
    }
  }

  componentDidUpdate(prevProps, prevState){    
    if(prevProps.date != this.props.date){
      this.setState({
        date: this.props.date
      })
    }
  }

  onChangeDate = (e) => {
    if(this.props.onChange){
      this.props.onChange(e.value);
    }
  }

  render() {
    return (
      <DatePickerComponent value={this.state.date} change={this.onChangeDate} showClearButton={false}></DatePickerComponent>
    );
  }
}

export default DatePicker;