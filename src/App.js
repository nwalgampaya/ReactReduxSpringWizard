import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Modal from 'react-responsive-modal';
// import logo from './logo.svg';
//import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import  'bootstrap/dist/css/bootstrap.min.css';
import { addPerson } from "./components/AddPerson";
import { connect } from "react-redux";
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import './App.css';
import './index.css';
// import './radio.css';
import Background from '../src/img/error.png';
import RadioGroup from './RadioGroup'
// import { ComboBox } from '@progress/kendo-react-dropdowns';
import HRpopulation from '../src/img/HRpopulationScreeningRisk.png';
import UomLogo from '../src/img/ausUomLogo.png';
// import { Navbar, Jumbotron, Button , styles} from 'react-bootstrap';

class App extends Component {

  year = ["1978", "1979", "1980", "1981"]
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onSexChange = this.onSexChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.onRelationChange = this.onRelationChange.bind(this);
    this.onEducationChange = this.onEducationChange.bind(this);
    this.oncolonoscopyChange = this.oncolonoscopyChange.bind(this);
    this.onscreening1Change = this.onscreening1Change.bind(this);
    this.onscreening2Change = this.onscreening2Change.bind(this);
    this.oninfographChange = this.oninfographChange.bind(this);

    // onscreening1Changehange = this.oncolonoscopyChange.bind(this);
    // this.   onscree = this.onscreening1Change.bind(this);
    

    // this.onPublishedChange = this.onPublishedChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: props.person ? props.person.name : "",
      year: props.person ? props.person.year : "1978",
      sex: props.person ? props.person.sex : "",
      country: props.person ? props.person.country : "",
      language: props.person ? props.person.language : "",
      relation: props.person ? props.person.relation : "",
      education: props.person ? props.person.education : "",
      colonoscopy: props.person ? props.person.colonoscopy:"",
      screening1:  props.person ? props.person.screening1:"",
      screening2:  props.person ? props.person.screening2:"",
      infograph:   props.person ? props.person.infograph:"",
      showResults: false,
      open: false
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  // connect()
  endSession = () =>
    this.setState(state => ({
      // page: Math.max(state.page - 1, 0)
      page: 0
    }))
  onNameChange(e) {
    const name = e.target.value;
    this.setState(() => ({ name: name }));
  }

  onYearChange(e) {
    const year = e.target.value;
    this.setState(() => ({ year: year }));
  }

  onSexChange(e) {
    const sex = e.target.value;
    this.setState(() => ({ sex: sex }));
  }
  setGender(event) {
    console.log(event.target.value);
    this.setState({
      sex: event.target.value
    });
    // this.setState({checked: !this.state.checked})
    console.log(this.props.sex);
  }
  onCountryChange(e) {
    const country = e.target.value;
    this.setState(() => ({ country: country }));
  }
  onLanguageChange(e) {
    const language = e.target.value;
    this.setState(() => ({ language: language }));
  }
  onRelationChange(e) {
    const relation = e.target.value;
    this.setState(() => ({ relation: relation }));
  }
  onEducationChange(e) {
    const education = e.target.value;
    this.setState(() => ({ education: education }));
  }
  oncolonoscopyChange(e) {
    const colonoscopy = e.target.value;
    this.setState(() => ({ colonoscopy: colonoscopy }));
  }
  onscreening1Change(e) {
    const screening1 = e.target.value;
    this.setState(() => ({ screening1: screening1 }));
  }
  onscreening2Change(e) {
    const screening2 = e.target.value;
    this.setState(() => ({ screening2: screening2 }));
  }
  
  oninfographChange(e) {
    const infograph = e.target.value;
    this.setState(() => ({ infograph: infograph }));
  }
  // validate(event) {
  //   console.log("In validate");
  //   let name = event.target.name;
  //   let errors = this.state.errors;
  //   if (!event.target.value) {
  //     errors[name] = true;
  //     this.setState({ errors: errors })
  //   }
  // }
  setOtherCountry(event) {
    console.log(event.target.value);
    this.setState({
      country: event.target.value,
    });

  }
  setCountry(event) {
    console.log(event.target.value);
    this.setState({
      country: event.target.value,
    });
    // console.log("before" + this.state.country);
    if (event.target.value == "OTHERCOUNTRY") {
      console.log("In if " + event.target.value);
      this.state.showResults = true
    } else {
      this.state.showResults = false
    }
  }
  setRelationStatus(event) {
    console.log(event.target.value);
    this.setState({
      relation: event.target.value
    });
  }
  setEducationStatus(event) {
    console.log(event.target.value);
    const education = event.target.value;
    this.setState(() => ({ education: education }));
    // this.setState({
    //   education: event.target.value
    // });
  }

  setLanguage(event) {
    console.log(event.target.value);
    const language = event.target.value;
    this.setState(() => ({ language: language }));
  }

  setColonoscopy(event) {
    console.log(event.target.value);
    const colonoscopy = event.target.value;
    this.setState(() => ({ colonoscopy: colonoscopy }));

  }
  setScreening1(event) {
    console.log(event.target.value);
    const screening1 = event.target.value;
    this.setState(() => ({ screening1: screening1 }));

  }
  setInfograph(event) {
    console.log(event.target.value);
    const infograph = event.target.value;
    this.setState(() => ({ infograph: infograph }));

  }
  setScreening2(event) {
    console.log(event.target.value);
    const screening2 = event.target.value;
    this.setState(() => ({ screening2: screening2 }));

  }createSelectItems() {
    let items = [];
    for (let i = 0; i <= this.props.maxValue; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
      //here I will be creating my options dynamically based on
      //what props are currently passed to the parent component
    }
    return items;
  }

  onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }
  
  render() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
      await sleep(300)
      if ( !this.state.year || !this.state.sex) {
        // !this.state.name ||
        console.log("In submit If" + this.state.colonoscopy);
        this.setState(() => ({
          error: "Please set name & year & sex!"
        }));
      } else {
        console.log("In submit else"+ this.state.colonoscopy);
        this.setState(() => ({ error: "" }));
        this.props.onSubmitPerson({
          // name: this.state.name,
          year: this.state.year,
          sex: this.state.sex,
          country: this.state.country ,
          language: this.state.language ,
          relation: this.state.relation ,
          education: this.state.education ,
          colonoscopy: this.state.colonoscopy,
          // published: this.state.published
        });
        // window.alert(JSON.stringify(values, 0, 2))
      }
      // window.alert(JSON.stringify(values, 0, 2))
    }

    const Error = ({ name }) => (
      <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? <span>{error}</span> : null
        }
      />
    )


    // const required = value => (value ? undefined : 'Required')

    function required(value) {
      return value ? undefined : 'Required'
    }

    this.countryData = [
      { value: 'USA', name: 'USA' },
      { value: 'CANADA', name: 'CANADA' }

    ];

    const styles = {
      marginbottom:'100px',
      color: "red",
      // background: "#0f0",
      // fontSize: "32px"
  };
 
    return (
      
      <Wizard
        initialValues={{ employed: true }}
        onSubmit={onSubmit}
      >

       {/* <Wizard.Page > */}
       {/* <b><p>After considering this information about the costs and potential harms of tests, what test would you use for screening if you were at INCREASED RISK of colorectal cancer?</p></b>
            
           
          <div className="custom-control custom-radio">
            <label className="radio-inline">
          <input type="radio" id="customRadio1" value="NOTOGELE" class="custom-control-input" name='test'/>
          <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>  */}
          
                {/* <input type="radio" value="NOSCREENING" id="customRadio2"  class="custom-control-input" name='test'/> 
                <label class="custom-control-label" for="customRadio2">No bowel cancer screening  </label> */}
          
                {/* <input type="radio" value="FAECALBLOOD"  id="customRadio3"  class="custom-control-input" name='test'/>
                 <label class="custom-control-label" for="customRadio3">Faecal occult blood test (FOBT)</label> */}
            {/* </label>
          

            </div>
    </Wizard.Page> */}
     <Wizard.Page >
        <div >
        <p><b>The CRISP-Q study.</b></p>
        <p>Researchers: Yena (Grace) Kim (Scholarly Selective Student), Prof Jon Emery, A/Prof Marie Pirotta and Dr Jennifer Walker The Department of General Practice, University of Melbourne</p>

        <p>Thank you for taking part in this study. We are interested in how people think about their risk of bowel cancer and their use of bowel cancer screening tests</p>          
        <p><b>Who can participate? </b></p>
        <p>Any person 40 years or older but younger than 75, attending a GP appointment at Deepdene Surgery can participate in the study.</p>
        <p><b>What are the risks?</b></p>
        <p>This survey is completely anonymous and therefore confidential, so there is no risk that we will know who said what. This study is completely voluntary and to withdraw during the study simply stop answering the questions. Due to the anonymous nature of the study we will not be able to delete your data if you withdraw.</p>
        <p>If you are concerned about your risk of bowel cancer, please discuss this with your doctor today.</p>
       
 
        {/* <label className="control-margin-lbl" onClick={this.onOpenModal}>link</label> */}
        {/* <a href="#" className="control-margin-lbl" data-target={this.onOpenModal}>link</a>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '} */}
        <Modal onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    </Wizard.Page>
    
    <Wizard.Page >
      <div >
        <p><b>What I need to do?</b> This study will take between 10 to 15 minutes to complete, prior to your appointment with your doctor today. You will not miss your appointment.</p>
        <p>You will be shown some scenarios about bowel cancer risk. We would like you to imagine that the information is about your risk of bowel cancer.</p>

        <p>After each scenario, you will be asked to say whether you would choose to do one of the following options:</p>
        <ol type="1">
        
        <b><li >No screening for bowel cancer.</li> </b>
        <li><b>Screening using the faecal occult blood test (FOBT). </b><p>This involves taking tiny samples from two separate bowel motions (poo) using a test kit. The samples are then posted to a laboratory for testing.</p> </li> 
        <li><b>Screening by colonoscopy.</b></li><p>A colonoscopy is a medical procedure that examines the large bowel, while the person is under a light sedation.</p>
        <p>The colonoscope is a long, firm and flexible plastic tube with a tiny digital camera and light at one end.</p>
        <p>Colonoscopy is generally a safe procedure, although complications may rarely occur.</p>
        <p>Complications include: excessive bleeding and perforation or puncture of the colon wall.</p>
        <p>Having a colonoscopy means staying at home the day before for 'bowel preparation' using laxatives that stimulate bowel movements and 'cleanse the bowel'. The person would not be able to work on the day of the procedure.</p>
        </ol>
        <p><b>Clicking Start means that you understand the information on this page and consent to being involved in this study.</b></p>
      </div>
            {/* <button type="button" onClick={this.endSession }>End sessiont</button> */}
            {/* <button>start</button> */}
    </Wizard.Page> 
    <Wizard.Page>
            <p>The next pages will show you different information about bowel cancer risk.</p>
            <p>Simply imagine this information is about you. </p>
    </Wizard.Page>
    <Wizard.Page validate={values => {
          const errors = {}

          if (!this.state.sex) {
            errors.sex = 'Please select the appropriate option'
          }

          if (!this.state.year) {
            errors.year = 'Please select the appropriate option'
          }
          if (!this.state.country) {
            errors.country = 'Please select the appropriate option'
          }
          if (!this.state.language) {
            errors.language = 'Please select the appropriate option'
          }
          if (!this.state.relation) {
            errors.relation = 'Please select the appropriate option'
          }
          if (!this.state.education) {
            errors.education = 'Please select the appropriate option'
          }
          if (!this.state.colonoscopy) {
            errors.colonoscopy = 'Please select the appropriate option'
          }


          if (!this.state.language) {
            errors.language   = 'Please select the appropriate option'
          }
          return errors
        }}>
          {/*
     
       
</div>      
      <div className="radio-inline-x" onChange={this.setGender.bind(this)}>
      <label>Are you male or female?</label><br></br>
              
          <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female

        </div>
        
      <div>
        <label>Gender</label>
        <Field
          name="sex"
          component="input"
          type="text"
          placeholder="Male"
          validate={required}
        />
        <Error name="year" />
      </div>
      <div>
        <label>Year</label>
        <Field
          name="year"
          component="input"
          type="text"
          placeholder="1999"
          validate={required}
        />
        <Error name="year" />
      </div>
      */}

          <div>
            <table>
              <tbody>

                <tr>
                  <td className="control-margin-lbl" >ID number:              </td>


                  <td> <Field name="Id" component="input" type="text" placeholder="444" readOnly="true" />  </td>
                </tr>

              </tbody>

              {/* </table> */}
              {/* </div> */}
              {/* <div > */}
              {/* <table> */}
              <tbody>
                <tr>
                  <td className="control-margin-lbl">What year were you born?</td>
                  <td>

                    {/* <select name="country" value={this.state.country}>
                      {this.countryData.map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                      })}
                    </select> */}
                    <select value={this.state.value} onChange={this.onYearChange}>
                      <option value="1978">1978</option>
                      <option value="1979">1979</option>
                      <option value="1980">1980</option>
                    </select>
                    {/* <ComboBox
                      name="year"
                      data={this.sizes}
                      value={this.state.vyearalue}
                      onChange={this.onYearChange}
                      allowCustom={true}
                    /> */}
                    {/* <input
                    name="year"
                    component="input"
                    type="text"
                    placeholder="2000"
                    // validate={required}
                    value={this.state.year}
                    onChange={this.onYearChange}
                  /> */}
                    <div className="validationMsg" >
                      {/* <Error name="year" /> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>
            {/* <div>


        <RadioGroup
          name="test"
          onChange={this.handleChange}
          options={[
            ['dairy', 'Cheese'],
            ['fruit', 'Apple'],
            ['meat', 'Ham'],
          ]}
          value={this.state.test}
        />
</div> */}

          </div>
          <div className="form-group ">
            <div className="radio-button-container radio-container-inline" onChange={this.setGender.bind(this)}>
              {/* <div className=""> */}
              <label className="control-margin-lbl">Are you male or female?</label><br></br>
              {/* </div> */}
              <div className="col-sm-12 ">

                <input className="col-sm-12 radio-button-display" type="radio" value="MALE" name="sex" /> Male
            <input className="col-sm-12" type="radio" value="FEMALE" name="sex" /> Female
            </div>
              {/* </div> */}
              <br></br>
              <div className="validationMsg" >
                {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                <Error name="sex" />
              </div>
            </div></div>

          <table>
            <tbody>

              <tr>
                <td >
                  <div className="form-group ">
                    <div className="radio-button-container radio-container-inline" onChange={this.setCountry.bind(this)}>
                      <label className="control-margin-lbl">Which country were you born in?</label><br></br>
                      <div className="col-sm-12 ">
                        <input type="radio" value="AUSTRALIA" name="country" /> Australia
                <input type="radio" value="OTHERCOUNTRY" name="country" /> Other (please specify)
        
                {/* // <label >hello</label> : null} */}
                        {/* onFocusCapture={this.setOtherCountry.bind(this)} */}
                      </div>
                      <br></br>
                      <div className="validationMsg" >
                        {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                        <Error name="country" />
                      </div>
                    </div>
                  </div></td>
                <td>

                <div>
                  {this.state.showResults ? <input name="country" component="input" onChange={this.setOtherCountry.bind(this)} type="text" defaultValue={this.state.country} /> : null}

                </div>
                </td>
              </tr>
              </tbody>
</table>
            <div className="form-group ">
              <div className="radio-button-container radio-container-inline" onChange={this.setLanguage.bind(this)}>
                <label className="control-margin-lbl">What language do you speak at home?</label><br></br>
                <div className="col-sm-12 ">
                  <input type="radio" value="English" name="language" /> English
                  <input type="radio" value="OTHERLANGUAGE" name="language" /> Other (please specify)
              </div>
                <br></br>
                <div className="validationMsg" >
                  {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                  <Error name="language" />
                </div>
              </div>
            </div>


            <div className="form-group ">
              <div className="radio-button-container radio-container-inline" onChange={this.setRelationStatus.bind(this)}>
                <label className="control-margin-lbl">What is your relationship status?</label><br></br>
                <div className="col-sm-12 ">
                  <input type="radio" value="SINGLE" name="relation" /> single <br></br>
                  <input type="radio" value="INRELATION" name="relation" /> in relationship<br></br>
                  <input type="radio" value="DIVORCED" name="relation" /> separated/divorced<br></br>
                  <input type="radio" value="WIDOWED" name="relation" /> widowed<br></br>
                </div>
                <br></br>
                <div className="validationMsg" >
                  {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                  <Error name="relation" />
                </div>
              </div></div>
            <div className="form-group ">
              <div className="radio-button-container radio-container-inline" onChange={this.setEducationStatus.bind(this)}>
                <label className="control-margin-lbl">Please show how much formal education you have received:</label><br></br>
                <div className="col-sm-12 ">
                  <input type="radio" value="NOHIGHSCHOOL" name="education" /> never completed high school <br></br>
                  <input type="radio" value="HIGHSCHOOL" name="education" /> completed high school only<br></br>
                  <input type="radio" value="TAFE" name="education" /> TAFE qualification or similar<br></br>
                  <input type="radio" value="DEGREE" name="education" /> University degree or higher<br></br>
                </div>
                <br></br>
                <div className="validationMsg" >
                  {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                  <Error name="education" />
                </div>
              </div></div>
            <br></br>


          <div className="form-group ">
            <div className="radio-button-container radio-container-inline" onChange={this.setColonoscopy.bind(this)}>
              {/* <div className=""> */}
              <label className="control-margin-lbl">Have you ever had a colonoscopy?</label><br></br>
              {/* </div> */}
              <div className="col-sm-12 ">

                <input type="radio" value="YES" name="colonoscopy" /> Yes
            <input type="radio" value="NO" name="colonoscopy" /> No
            </div>
              {/* </div> */}
              <br></br>
              <div className="validationMsg" >
                {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                <Error name="colonoscopy" />
              </div>
            </div></div>
            <div >

              {/* <label>Name
          <input
                  type="text"
                  placeholder="name"
                  autoFocus
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
                <Error className="inline-error " name="name" />
              </label> */}
            </div>


        </Wizard.Page>
        <Wizard.Page validate ={values => {
          const errors = {}
          if (!this.state.screening2) {
            errors.screening2 = 'Please select the appropriate option'
          }return errors}}>

        {/* <div className='img-responsive center-block' > */}
              <a href="#"><img src={UomLogo} alt={"UomLogo"} className='rounded mx-auto d-block' /> </a>
        {/* </div> */}
            <p>Your risk of developing bowel cancer in the next 5 years is <b> 0.2%..</b></p>
            {/* styles={{float : 'left', paddingRight : '5px'}} {{margin-bottom:'100px'}} */}
            <p styles= 'margin-bottom:100px'>Most people like you would choose to have a faecal occult blood test.</p>
            <p>If this was your bowel cancer risk, would you choose to have now</p>
            <p><i>(please select ONE of the following options):</i></p>
            <div className="control-margin-lbl-select">
            <div className="form-check  col-sm-12 "  onChange={this.setScreening2.bind(this)}>
                  <input type="radio" value="NOSCREENING" name="screening2" />   
            <label className="radio-inline">No bowel cancer screening</label>
                  <input type="radio" value="FAECALBLOOD" name="screening2" /> 
            <label className="radio-inline">Faecal occult blood test (FOBT)</label>
            <input type="radio" value="COLONOSCOPY" name="screening2" />
            <label className="radio-inline"> Colonoscopy</label>
            {/* <button onClick={() => {alert('Faecal occult blood testing (FOBT)');}}>popup open</button> */}
            
              </div>
              </div>
              <div>
                
              </div>
              <div className="validationMsg" >
                <Error name="screening2" />
              </div>
            <br></br>
              
    </Wizard.Page>
    <Wizard.Page validate={values => {
          const errors = {}
          if (!this.state.screening1) {
            errors.screening1 = 'Please select the appropriate option'
          }return errors
        }}
          
          >
          

        {/* <div className='img-responsive center-block' > */}
              <a href="#"><img src={UomLogo} alt={"UomLogo"} className='rounded mx-auto d-block' /> </a>
        {/* </div> */}
            <p>Your risk of developing bowel cancer in the next 5 years is <b>1.6%.</b></p>
            {/* styles={{float : 'left', paddingRight : '5px'}} {{margin-bottom:'100px'}} */}
            <p styles= 'margin-bottom:100px'>Australian National Health guidelines recommend you have a colonoscopy.</p>
            <p>If this was your bowel cancer risk, would you choose to have now</p>
            <p><i>(please select ONE of the following options):</i></p>
              {/* <div   onChange={this.setScreening1.bind(this)}> */}
              <div className="control-margin-lbl-select">
              <div className="form-check col-sm-12 "  onChange={this.setScreening1.bind(this)}>
            {/* <div className="col-sm-12 "> */}
            {/* <div className="form-check control-margin-lbl-select col-sm-12 "> */}
            <label className="radio-inline">  
                  <input type="radio" value="NOSCREENING" name="screening1" /> No bowel cancer screening  
              </label><label className="radio-inline">
                  <input type="radio" value="FAECALBLOOD" name="screening1" /> Faecal occult blood test (FOBT)
              </label><label className="radio-inline">    
                  <input type="radio" value="COLONOSCOPY" name="screening1" /> Colonoscopy
                  </label>    
              </div></div>
              <div className="validationMsg" >
                <Error name="screening1" />
              </div>
              {/* </div> */}

              <br></br>

              
    </Wizard.Page>

        <Wizard.Page validate={values => {
          const errors = {}
          if (!this.state.infograph) {
            errors.infograph = 'Please select the appropriate option'
          } return errors
        }}>
          <div className="form-group ">
            <div className="radio-button-container radio-container-inline" onChange={this.setColonoscopy.bind(this)}>
              {/* <div className=""> */}
              {/* </div> */}

              <label >This diagram shows you what would happen to 100,000 people like you if they have either a faecal occult blood test (FOBT), no bowel cancer screening or a colonoscopy.</label>
              <div className="col-sm-12 ">
                <a href="#"><img src={HRpopulation} alt={"HRpopulation"} /> </a>
              </div><br></br>
              <label >Based on this information, would you choose to have (please select ONE of the following options):</label><br></br>
              <div className="control-margin-lbl-select">
                <div className="form-check col-sm-12 " onChange={this.setInfograph.bind(this)}>
              <label className="radio-inline">
                    <input type="radio" value="NOSCREENING" name="infograph" /> No bowel cancer screening
              </label> <label className="radio-inline">
                    <input type="radio" value="FAECALBLOOD" name="infograph" /> Faecal occult blood test (FOBT)
              </label> <label className="radio-inline">
                    <input type="radio" value="COLONOSCOPY" name="infograph" /> Colonoscopy
              </label>
                </div></div>
               
                
              {/* </div> */}
              <br></br>
              <div className="validationMsg" >
                {/* // style={ { backgroundImage: `url(${Background})` } }  > */}
                <Error name="infograph" />
              </div>
            </div>
          </div>

        </Wizard.Page>

        <Wizard.Page validate ={values => {
          const errors = {}
          // if (!this.state.screening2) {
          //   errors.screening2 = 'Please select the appropriate option'
          // }return errors
        }}>

        {/* <div className='img-responsive center-block' > */}
              
        {/* </div> */}
            <p>Please consider the following information and answer the questions below:</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p><b>Faecal occult blood testing (FOBT)</b></p>
                      <ul>
                        <li>Cost to you of approximately $32.50 per kit</li>
                        <li>No time off work/duties</li>
                        <li>No risk of harm or death</li>
                      </ul>
                  </td>
                  <td>
                    <p><b>Colonoscopy</b></p>
                    <ul>
                        <li>Cost to you of approximately $32.50 per kit</li>
                        <li>No time off work/duties</li>
                        <li>No risk of harm or death</li>
                      </ul>
                  </td>
         
                </tr>
              </tbody>
            </table>
            <p><b>How likely is the cost of these tests to influence your choice of screening test?</b></p>

            {/* styles={{float : 'left', paddingRight : '5px'}} {{margin-bottom:'100px'}} */}
            {/* <p styles= 'margin-bottom:100px'>Most people like you would choose to have a faecal occult blood test.</p>
            <p>If this was your bowel cancer risk, would you choose to have now</p>
            <p><i>(please select ONE of the following options):</i></p> */}
            {/* <div className="control-margin-lbl-select"> */}
            {/* <div className="form-check  col-sm-12 "  onChange={this.setScreening2.bind(this)}> */}
            <table className="custom-matrix-cost modern-browser">
              <tbody>
                <tr><td className="radio-button-container">
                   {/* <span className="radio-button-display radio_middle"></span> */}
                    {/* <label className="radio-inline answer-label radio-button-label no-touch touch-sensitive clearfix"> */}
                          <input type="radio" value="NOSCREENING" name="screening2"/> Very likely to make me change to an FOBT test
                          {/* <span class="radio-button-display radio_middle"></span> */}
                          {/* <span class="radio-button-label-text question-body-font-theme user-generated">Very likely to make me change to an FOBT test</span> */}
                    {/* </label> */}
                  </td>
                  <td className="radio-button-container"> 
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="FAECALBLOOD" name="screening2"/> Likely to make me consider an FOBT
                    </label>
                  </td>
                  <td className="radio-button-container">
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Unlikely to influence my choice of test
                    </label>
                  </td>
                  <td className="radio-button-container">
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Likely to make me consider a colonoscopy
                    </label>
                  </td>
                   <td className="radio-button-container">
                   <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Very likely to make me change to an colonoscopy
                    </label>
                  </td></tr>{/* <button onClick={() => {alert('Faecal occult blood testing (FOBT)');}}>popup open</button> */}
            
                
              </tbody>
            </table>
              {/* </div> */}
              {/* </div> */}
              <div className="validationMsg" >
                <Error name="screening2" />
              </div>
            <br></br>
              
 {/* // Row 2 */}

             <p><b>How likely are the risks of colonoscopy to influence your choice of screening test?</b></p>

            {/* styles={{float : 'left', paddingRight : '5px'}} {{margin-bottom:'100px'}} */}
            {/* <p styles= 'margin-bottom:100px'>Most people like you would choose to have a faecal occult blood test.</p>
            <p>If this was your bowel cancer risk, would you choose to have now</p>
            <p><i>(please select ONE of the following options):</i></p> */}
            {/* <div className="control-margin-lbl-select"> */}
            {/* <div className="form-check  col-sm-12 "  onChange={this.setScreening2.bind(this)}> */}
            <table className="custom-matrix-cost modern-browser">
              <tbody>
                <tr><td className="radio-button-container">
                   {/* <span className="radio-button-display radio_middle"></span> */}
                    {/* <label className="radio-inline answer-label radio-button-label no-touch touch-sensitive clearfix"> */}
                          <input type="radio" value="NOSCREENING" name="screening2"/> Very likely to make me change to an FOBT test
                          {/* <span class="radio-button-display radio_middle"></span> */}
                          {/* <span class="radio-button-label-text question-body-font-theme user-generated">Very likely to make me change to an FOBT test</span> */}
                    {/* </label> */}
                  </td>
                  <td className="radio-button-container"> 
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="FAECALBLOOD" name="screening2"/> Likely to make me consider an FOBT
                    </label>
                  </td>
                  <td className="radio-button-container">
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Unlikely to influence my choice of test
                    </label>
                  </td>
                  <td className="radio-button-container">
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Likely to make me consider a colonoscopy
                    </label>
                  </td>
                   <td className="radio-button-container">
                   <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Very likely to make me change to an colonoscopy
                    </label>
                  </td></tr>{/* <button onClick={() => {alert('Faecal occult blood testing (FOBT)');}}>popup open</button> */}
            
                
              </tbody>
            </table>
              <div className="validationMsg" >
                <Error name="screening2" />
              </div>
            <br></br>

             <p><b>How likely is the time away from work/duties to influence your choice of screening test?</b></p>
            <table className="custom-matrix-cost modern-browser">
              <tbody>
                <tr><td className="radio-button-container">
                   {/* <span className="radio-button-display radio_middle"></span> */}
                    {/* <label className="radio-inline answer-label radio-button-label no-touch touch-sensitive clearfix"> */}
                          <input type="radio" value="NOSCREENING" name="screening2"/> Very likely to make me change to an FOBT test
                          {/* <span class="radio-button-display radio_middle"></span> */}
                          {/* <span class="radio-button-label-text question-body-font-theme user-generated">Very likely to make me change to an FOBT test</span> */}
                    {/* </label> */}
                  </td>
                  <td className="radio-button-container"> 
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="FAECALBLOOD" name="screening2"/> Likely to make me consider an FOBT
                    </label>
                  </td>
                  <td className="radio-button-container">
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Unlikely to influence my choice of test
                    </label>
                  </td>
                  <td className="radio-button-container">
                  <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Likely to make me consider a colonoscopy
                    </label>
                  </td>
                   <td className="radio-button-container">
                   <span className="radio-button-display radio_middle"></span>
                    <label className="radio-inline">
                          <input type="radio" value="COLONOSCOPY" name="screening2"/> Very likely to make me change to an colonoscopy
                    </label>
                  </td></tr>{/* <button onClick={() => {alert('Faecal occult blood testing (FOBT)');}}>popup open</button> */}
            
                
              </tbody>
            </table>
              {/* </div> */}
              {/* </div> */}
              <div className="validationMsg" >
                <Error name="screening2" />
              </div>
            <br></br>

           
            <b><p>After considering this information about the costs and potential harms of tests, what test would you use for screening if you were at AVERAGE RISK of colorectal cancer?</p></b>
            
              {/* <div   onChange={this.setScreening1.bind(this)}> */}
              <div className="control-margin-lbl-select">
              <div className="form-check col-sm-12 "  onChange={this.setScreening1.bind(this)}>
            {/* <div className="col-sm-12 "> */}
            {/* <div className="form-check control-margin-lbl-select col-sm-12 "> */}
            <label className="radio-inline">  
                  <input type="radio" value="NOSCREENING" name="screening1" /> No bowel cancer screening  
              </label><label className="radio-inline">
                  <input type="radio" value="FAECALBLOOD" name="screening1" /> Faecal occult blood test (FOBT)
              </label><label className="radio-inline">    
                  <input type="radio" value="COLONOSCOPY" name="screening1" /> Colonoscopy
                  </label>    
              </div></div>
              <div className="validationMsg" >
                <Error name="screening1" />
              </div>
              {/* </div> */}

              <br></br>


          <b><p>After considering this information about the costs and potential harms of tests, what test would you use for screening if you were at INCREASED RISK of colorectal cancer?</p></b>
            
            {/* <div   onChange={this.setScreening1.bind(this)}> */}
            <div className="control-margin-lbl-select">
            <div className="form-check col-sm-12 "  onChange={this.setScreening1.bind(this)}>
          {/* <div className="col-sm-12 "> */}
          {/* <div className="form-check control-margin-lbl-select col-sm-12 "> */}
          <label className="radio-inline">  
                <input type="radio" value="NOSCREENING" name="screening1" /> No bowel cancer screening  
            </label><label className="radio-inline">
                <input type="radio" value="FAECALBLOOD" name="screening1" /> Faecal occult blood test (FOBT)
            </label><label className="radio-inline">    
                <input type="radio" value="COLONOSCOPY" name="screening1" /> Colonoscopy
                </label>    
            </div></div>
            <div className="validationMsg" >
              <Error name="screening1" />
            </div>
            {/* </div> */}

            <br></br>
    </Wizard.Page>

    <Wizard.Page>
            <p>Thank you for completing this research.</p><br></br>
            <p>If you have any questions please contact us at:<a href="mailto:ykim1@student.unimelb.edu.au"> ykim1@student.unimelb.edu.au</a> or <a href="mailto:walker@unimelb.edu.au">walker@unimelb.edu.au</a></p><br></br>
            <p>If you would like a copy of the final results of this study, please contact <a href="mailto:walker@unimelb.edu.au">walker@unimelb.edu.au</a></p>
    </Wizard.Page>
          

          
      </Wizard>
        );
      }
    }
export default (App);