import React, { Component } from "react";

// import $ from "jquery";
import "./ExpertProfile.css";

import { render } from "react-dom";

// import "./ExpertProfile.js";
const firebase = require('firebase');
const axios = require('axios')
export default class ExpertProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "student",
      colleges: ["A", "B", "C"],
      user:{},
      TopThreeExperts:[],
     
    }
  }
  async fillData(){
    const topexperts = await axios.get('/topexperts');
    console.log(topexperts);
    this.setState({TopThreeExperts:topexperts.data})
    // here are the questions
    const n = 2 // no. of questions you want in one page
    const questions = await axios.get('/questionss/'+n);
    console.log(questions.data) // response.data has all the questions
    // if questions.data.answered == true , then that question has been answered
    // all the questions have a "date" field , to use this user "date.toDateString()"
    
  }
    componentDidMount(prevProps, prevState, snapshot){
      var p=this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          p.setState({user:user})
          console.log("logged in")
          console.log(p.state.user)
          p.fillData();

        } else {
          // No user is signed in.
          alert("log in again")
        }
      });
    }
  render() {
    return (
      <>
        <div class="ui container">
          <div class="ui grid">
            <div class="four wide column">
              <div class="ui items">
                <h3 class="ui header">Leaderboard</h3>
                <div class="item">
                  <a class="ui mini image">
                    <img src="https://semantic-ui.com/images/avatar/large/justen.jpg" />
                  </a>
                  <div class="middle aligned content">
                    <h5 class="ui header">User</h5>
                    <p>100 answers</p>
                  </div>
                </div>
                <div class="item">
                  <a class="ui mini image">
                    <img src="https://semantic-ui.com/images/avatar/large/justen.jpg" />
                  </a>
                  <div class="middle aligned content">
                    <h5 class="ui header">User</h5>
                    <p>55 answers</p>
                  </div>
                </div>
                <div class="item">
                  <a class="ui mini image">
                    <img src="https://semantic-ui.com/images/avatar/large/justen.jpg" />
                  </a>
                  <div class="middle aligned content">
                    <h5 class="ui header">User</h5>
                    <p>28 answers</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="twelve wide column">
              <button class="ui primary button">All Q&A</button>
              <button class="ui button">Unanswered</button>
              <button class="ui button">Answered</button>

              <div class="ui dropdown dropdown--date">
                <div class="text">Order by: Latest</div>
                <i class="dropdown icon"></i>
              </div>

              <div class="ui divider"></div>

              <div class="ui divided items">
                <div class="item">
                  <div class="content">
                    <div class="meta">
                      <span>User asked 1 hour ago</span>
                    </div>
                    <div class="header">
                      How does the choice of housing affect collage students?
                    </div>
                    <div class="meta">
                      <a class="ui label">
                        <i class="dollar sign icon"></i>1
                      </a>
                      <a class="ui label">
                        <i class="comment icon"></i> 0
                      </a>
                      <button class="compact ui primary button button--answer">
                        Answer
                      </button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <div class="meta">
                      <span>User asked 1 hour ago</span>
                    </div>
                    <div class="header">Is a college degree necessary?</div>
                    <div class="meta">
                      <a class="ui label">
                        <i class="dollar sign icon"></i>5
                      </a>
                      <a class="ui label">
                        <i class="comment icon"></i> 3
                      </a>
                      <button class="compact ui primary button button--answer">
                        Answer 
                      </button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <div class="meta">
                      <span>User asked 1 hour ago</span>
                    </div>
                    <div class="header">
                      How much writing and reading are expected?
                    </div>
                    <div class="meta">
                      <a class="ui label">
                        <i class="dollar sign icon"></i>1
                      </a>
                      <a class="ui label">
                        <i class="comment icon"></i> 1
                      </a>
                      <button class="compact ui primary button button--answer">
                        Answer
                      </button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <div class="meta">
                      <span>User asked 1 hour ago</span>
                    </div>
                    <div class="header">
                      What type of tutoring program do you have?
                    </div>
                    <div class="meta">
                      <a class="ui label">
                        <i class="dollar sign icon"></i>1
                      </a>
                      <a class="ui label">
                        <i class="comment icon"></i> 1
                      </a>
                      <button class="compact ui primary button button--answer">
                        Answer
                      </button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <div class="meta">
                      <span>User asked 1 hour ago</span>
                    </div>
                    <div class="header">
                      What time management strategies will help a college
                      student?
                    </div>
                    <div class="meta">
                      <a class="ui label">
                        <i class="dollar sign icon"></i>1
                      </a>
                      <a class="ui label">
                        <i class="comment icon"></i> 1
                      </a>
                      <button class="compact ui primary button button--answer">
                        Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ui divider"></div>

              <div class="ui pagination menu">
                <a class="disabled item">
                  <i class="angle left icon"></i>
                </a>
                <a class="active item">1</a>
                <a class="item">2</a>
                <a class="item">
                  <i class="angle right icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
