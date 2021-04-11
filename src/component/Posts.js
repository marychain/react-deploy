import React from 'react';

const Posts = (props) => {
    return(
      <div className="App">
        <div className="post">
          <div className="author_photo">
          <img
            className="photo_author"
            src={ props.photo }
            alt="#"
            />
          </div>
          <div className="author_post">
            <div className="author">
              <h3 className="name">{ props.postName }</h3>
              <img
              className="photo_check"
              src={ props.photoCheck }
              alt="#"
              />
              <a
              className="link_nickname"
              href="https://www.google.com/search?q=dr+house&oq=dr+house&aqs=chrome.0.69i59j46j69i59j0l7.8516j0j7&sourceid=chrome&ie=UTF-8"
              >@{ props.nickname }
              </a>  
              
              <time className="date">&#8226; { props.time }</time>
            </div>
            <div className="content">
              <h2 className="content_message">{ props.text }</h2>
              <img
              className="content_photo"
              src={ props.contentPhoto }
              alt="#"
              />
            </div>
            <div className="activity">
              <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoComment }
                alt="#"
                />
                <p>{ props.comment }</p>
              </div>
              <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoRepost }
                alt="#"
                />
                <p>{ props.retvit }</p> 
              </div>
              <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoLike }
                alt="#"
                />
                <p>{ props.like }</p>
                </div>
              <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoShare }
                alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Posts;
  