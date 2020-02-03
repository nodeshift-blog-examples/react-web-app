// import React, { Component } from 'react';
// import { Button, FormGroup, Form, RadioButtonGroup, Checkbox, RadioButton, NumberInput, Toggle, FileUploader, Search, Select, SelectItem, TextInput, TextArea } from 'carbon-components-react'
// import IconTitleSummary from '../components/basic/IconTitleSummary';
// import axios from 'axios';

// /**
//  * Display FeedbackForm page
//  *
//  * @visibleName FeedbackForm
//  */
// class FeedbackForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       published_date: '',
//       author: [{ email: '' }],
//       exec_summary: '',
//       article: ''
//     }
//     this.onSubmit = this.onSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   componentDidMount() {

//   }

//   onChange(e) {
//     console.log('louise change', e.target.value);
//   }
//   onSubmit(e) {
//     e.preventDefault();
//     console.log('louise submit', e);
//     return axios.post(`https://hooks.slack.com/services/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`, {
//       headers: {
//           'Access-Control-Allow-Origin': '*',
//           'content-type': 'text/html'
//       }
//   }, { "text": "Hello - from the community page" })
//       .then(res => {
//           console.log(res);
//           console.log(res.data);
//       })

//   }

//   render() {
//     console.log('FeedbackForm detail=', this.props, this.state);
//     return (
//       <div className="display-flex">
//         <div className="cols-12">
//           <div className="panel">
//             <IconTitleSummary
//               title="Let us know what you think..."
//               icon="chat"
//               color={this.props.iconColor ? this.props.iconColor : "blue"}
//               summary="We are still on our journey to transition from the <a target='_blank' rel='noopener noreferrer'  href='https://apps.na.collabserv.com/communities/service/html/communitystart?communityUuid=c83b42e5-2186-42f1-b498-2871621e2984' >old style community</a> to this site.  <br>Please let us know what you think and how we can make it work better for you.</br>"
//             />            
//             <Form className="padding-top" onSubmit={(e) => this.onSubmit}>
//               <div className="padding-top" >
//                 <TextArea
//                   labelText="Feedback relating to content"
//                   className="padding-top"
//                   placeholder="Comments..."
//                   id="content"
//                 />
//               </div>
//               <div className="padding-top" >
//                 <TextArea
//                   labelText="Feedback on website functionality"
//                   className="padding-top"
//                   placeholder="Comments..."
//                   id="website"
//                 />
//               </div>
//               <div className="padding-top" >
//                 <Button type="submit" className="some-class">
//                   Submit
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default FeedbackForm;
