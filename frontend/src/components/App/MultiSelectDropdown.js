import * as React from 'react';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';

class MultiSelectDropdown extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectedList: []
    }

    this.options = this.props.options ? this.props.options : [];
    this.checkFields = { text: 'name', value: 'id' };
  }

  onSelect = (e) => {
    var item = e.itemData;
    var {selectedList} = this.state;
    var index = selectedList.findIndex(element=>element.id == item.id);
    if(index == -1) selectedList.push(item);
    
    if(this.props.onSelect){
      this.props.onSelect(selectedList);
    }    
  }

  onDeselect = (e) => {
    var item = e.itemData;
    var {selectedList} = this.state;
    var index = selectedList.findIndex(element=>element.id == item.id);
    if(index != -1) selectedList.splice(index, 1);
    
    if(this.props.onSelect){
      this.props.onSelect(selectedList);
    }    
  }

  render() {
    return (
      <div id="multichecbox" className='control-pane' style={{width: 300, minHeight: 250, paddingTop: 15}}>
        <div className='control-section col-lg-8'>
          <div id="multigroup" className="control-styles">
            <MultiSelectComponent 
              id="checkbox" 
              ref={(scope) => { this.mulObj = scope; }} 
              dataSource={this.options} 
              fields={this.checkFields} 
              placeholder="Select" 
              mode="CheckBox" 
              showSelectAll={true} 
              showDropDownIcon={true} 
              enableSelectionOrder={true} 
              filterBarPlaceholder="Search" 
              popupHeight="350px"    
              select={this.onSelect}
              removed={this.onDeselect}
            >
              <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiSelectDropdown;