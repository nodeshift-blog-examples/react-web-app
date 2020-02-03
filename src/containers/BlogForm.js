import React, { Component } from 'react';
import { Button, FormGroup, Form, RadioButtonGroup, Checkbox, RadioButton, NumberInput, Toggle, FileUploader, Search, Select, SelectItem, TextInput, TextArea } from 'carbon-components-react'


/**
 * Display BlogForm page
 *
 * @visibleName BlogForm
 */
class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      published_date: '',
      author: [{ email: '' }],
      exec_summary: '',
      article: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
   
  }

  onChange(e) {
    console.log('louise change', e.target.value);
  }
  onSubmit(e) {
    console.log('louise submit', e);
  }

  render() {
    console.log('BlogForm detail=', this.props, this.state);
    return (
      <div className="display-flex" >
        <Form className="some-class" onSubmit={(e) => this.onSubmit}>
          <FormGroup className="some-class" legendText="Checkbox heading">
            <Checkbox
              defaultChecked
              className="some-class"
              labelText="Checkbox label"
              id="checkbox-0"
            />
            <Checkbox className="some-class" labelText="Checkbox label" id="checkbox-1" />
            <Checkbox
              disabled
              className="some-class"
              labelText="Checkbox label"
              id="checkbox-2"
            />
          </FormGroup>
          <NumberInput
            className="some-class"
            id="number-input-1"
            label="Number Input"
            min={0}
            max={100}
            value={50}
            step={10}
          />
          <FormGroup className="some-class" legendText="Toggle heading">
            <Toggle className="some-class" id="toggle-1" />
            <Toggle disabled className="some-class" id="toggle-2" />
          </FormGroup>
          <FormGroup className="some-class" legendText="File Uploader">
            <FileUploader
              buttonLabel="Add files"
              className="some-class"
              id="file-1"
              labelDescription="Choose Files..."
            />
          </FormGroup>
          <FormGroup className="some-class" legendText="Radio Button heading">
            <RadioButtonGroup onChange={(e) => this.onChange} name="radio-button-group" defaultSelected="default-selected">
              <RadioButton
                value="standard"
                id="radio-1"
                labelText="Standard Radio Button"
                className="some-class"
              />
              <RadioButton
                value="default-selected"
                labelText="Default Selected Radio Button"
                id="radio-2"
                className="some-class"
              />
              <RadioButton
                value="blue"
                labelText="Standard Radio Button"
                id="radio-3"
                className="some-class"
              />
              <RadioButton
                value="disabled"
                labelText="Disabled Radio Button"
                id="radio-4"
                disabled
                className="some-class"
              />
            </RadioButtonGroup>
          </FormGroup>
          <FormGroup className="some-class" legendText="Search">
            <Search
              className="some-class"
              id="search-1"
              labelText="Search"
              placeHolderText="Search"
            />
          </FormGroup>
          <Select className="some-class" id="select-1" defaultValue="placeholder-item">
            <SelectItem
              disabled
              hidden
              value="placeholder-item"
              text="Choose an option"
            />
            <SelectItem value="option-1" text="Option 1" />
            <SelectItem value="option-2" text="Option 2" />
            <SelectItem value="option-3" text="Option 3" />
          </Select>
          <TextInput
            className="some-class"
            id="test2"
            labelText="Text Input label"
            placeholder="Placeholder text"
          />
          {/* <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            className="some-class"
            id="test3"
            labelText="Password"
          />
          <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            className="some-class"
            id="test4"
            labelText="Password"
            invalid
            invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
          /> */}
          <TextArea
            labelText="Text Area label"
            className="some-class"
            placeholder="Placeholder text"
            id="test5"
          />
          <Button type="submit" className="some-class">
            Submit
          </Button>
        </Form>

      </div>
    )
  }
}

export default BlogForm;
