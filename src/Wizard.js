import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
// import FormContainer from './containers/FormContainer';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../src/img/logo1.png';
import logoM from '../src/img/logoM.png';
import background from '../src/img/headervector.png';
import Styles from './Styles'

import './App.css';


export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  static Page = ({ children }) => children

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {}
    }
  }

  rndno = (min, max) => {
    return Math.floor(Math.random() * (max - min));

  }
  next = values => {
    console.log("this.page" + this.state.page);
    // if(this.state.page == 3){
    //   const rnd=  this.rndno(0,6);
    //   console.log("******************** If: "+rnd);
    //   this.setState(state => ({
    //   page: Math.min(rnd  , this.props.children.length - 1),
    //   values  
    // }))}
    // else{
    console.log("********************@@@@@@" + this.rndno(0, 4));
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))
    // }
  }
  // this.setState(state => ({
  //   page: Math.min(state.page + 1, this.props.children.length - 1),
  //   values
  // }))}

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }))

  endSession = () =>
    this.setState(state => ({
      // page: Math.max(state.page - 1, 0)
      page: 0
    }))
  /**
 * NOTE: Both validate and handleSubmit switching are implemented
 * here because 🏁 Redux Final Form does not accept changes to those
 * functions once the form has been defined.
 */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = values => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1

    // isLastPage ||
    if (this.state.page == 3) {
      this.next(values)
      return onSubmit(values)
    } else {
      this.next(values)
    }
  }

  render() {

    // var sectionStyle = {
    //   width: "100%",
    //   height: "400px",
    //   backgroundImage: `url(${background})`
    // };

    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1
    return (
      <div>
        <div className="container">

          <div className="header">
            <div className="pull-left logo">
              {/* <a href="/"><img class="img-responsive" src="img/logo1.png"/></a> */}
              <a href="http://www.crisp.org.au/"><img src={logo1} alt={"logo"} /> </a>
            </div>
            <div className="pull-right top_menu">
              <a href="http://www.crisp.org.au/"><img src={logoM} alt={"logoM"} /> </a>
            </div>
          </div>
        </div>
        <p></p>
        <div >
        </div>
        <div className="container">
          <div className='content_body centered' >

            <Form
              initialValues={values}
              validate={this.validate}
              onSubmit={this.handleSubmit}>
              {({ handleSubmit, submitting, values }) => (
                <form onSubmit={handleSubmit}>
                  {activePage}
                  <div className="buttons">
                    {/* {page > 0 && (
                      <button type="button" onClick={this.previous}>
                        « Previous
                </button>

                    )} */}
                    {page == 0 && (
                      <button className="invisible" type="button" onClick={this.endSession}>
                        End session
                </button>


                    )}
                    {page > 0 && (
                      <button className="btn btn-primary" styles={{ float: 'left', paddingLeft: '10px' }} type="button" onClick={this.endSession}>
                        End session
                </button>


                    )}
                    {/* {page ==2 && (
                      <button type="submit" disabled={submitting}>
                        Submit
                </button>
                    )}  */}
                    {page != 1 && page != 3 && !isLastPage && <button className="btn btn-primary pull-right " type="submit">  Next  </button>}
                    {page == 1 && (<button className="btn btn-primary pull-right" type="submit" disabled={submitting}>
                      Start
                </button>
                    )}
                    {/* {(isLastPage ) && ( */}
                    {(page == 3 &&
                      <button className="btn btn-primary pull-right" type="submit" disabled={submitting}>Next</button>
                    )}
                    {(isLastPage &&
                      <button className="btn btn-primary pull-right" type="button" disabled={submitting} onClick={this.endSession}>Finish</button>
                    )}

                  </div>

                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
              )}
            </Form>
          </div>  </div>
      </div>
    )
  }
}
