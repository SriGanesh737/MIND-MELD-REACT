import React from 'react'
import Styles from './CommentsSection.module.css'
import { useUser } from '../../providers/UserProvider'

export default function CommentsSection({comments_data}) {
  const {user} = useUser();
  return (
    <>
    {

    comments_data.map((comment_info,i)=>{
      return(
          <div className={Styles["comment-parent-wrapper"]}>
            <div className={Styles["comment-container"]}>
              <div className={Styles["upvotes-part"]}>
                <div className={Styles["upvotes-wrapper"]}>
                  <button className='plus'><i className="fa-solid fa-2x fa-caret-up" style={{"color":"hsl(238, 40%, 52%)"}}></i></button>
                  <span className={Styles["upvotes-cnt"]}>
                    {comment_info['main_comment'].popularity}
                  </span>
                  <button className='minus'><i className="fa-solid fa-2x fa-caret-down" style={{"color":"hsl(238, 40%, 52%)"}}></i></button>
                </div>
              </div>
              <div className={Styles["right-part"]}>
                <div className={Styles["comment-header"]}> <a href={"/user/"+comment_info['main_comment'].user_id}> <img className={`${Styles["comment-profile-image"]} rounded-circle`} src={comment_info['main_comment'].profile_image_link}
                    alt=""/></a>
                  <span className={Styles["name"]}>{comment_info['main_comment'].user_name}</span>
                  <span className={Styles["youTag"]}>You</span>
                  <div className={Styles["time"]}>{comment_info['main_comment'].posted_date}</div>
                  <a id={"ri-"+i} className={Styles["reply"]}><i className="fa-solid fa-reply"></i> Reply</a>


                  <span className={Styles["edit"]}><i className="fa-solid fa-edit"></i> Edit</span>
                  <span className={`${Styles["edit"]} ${Styles["edit-2"]}`}><i className="fa-solid fa-edit"></i></span>
                  <span data-article_id={comment_info['main_comment']['_id']} className={"del-"+comment_info['main_comment']['_id']+" delete"}><i className="fa-solid fa-trash"></i> delete</span>
                  <span data-article_id={comment_info['main_comment']['_id']} className={"del-"+comment_info['main_comment']['_id']+" delete delete-2"}><i className="fa-solid fa-trash"></i> </span>
              </div>
            </div>
            </div>

            {/* reply bar */}
            <div id = {"reply-box-"+i} className={`${Styles["reply-bar"]} dontshow`}>
              <form action={"/posts/replycomment/"+comment_info['main_comment']['_id']} method="post">
                <input name="reply_box_value" placeholder="Enter your reply here" required type="text" className={Styles["reply-input-box"]}/>
                <button type="button" id={"ci-"+i} className="btn btn-danger cancel_reply">Cancel</button>
                <button type="submit" className="btn btn-success">Send</button>
              </form>
            </div>

            {/* replies for maincomment  */}
            {
              comment_info['replies'].map((single_reply,j)=>{
                return(
                  <>
                  <div className={`${Styles["single-reply"]} ${Styles["comment-container"]} ${single_reply.user_id==user["_id"]?"your-comment":" "}`}>
                    <div className={Styles["upvotes-part"]}>
                      <div className={Styles["upvotes-wrapper"]}>
                        <button className='plus'><i className="fa-solid fa-2x fa-caret-up" style={{"color":"hsl(238, 40%, 52%)"}}></i></button>
                        <span className={Styles["upvotes-cnt"]}>
                          {single_reply.popularity}
                        </span>
                        <button className='minus'><i className="fa-solid fa-2x fa-caret-down" style={{"color":"hsl(238, 40%, 52%)"}}></i></button>
                      </div>
                    </div>
                    <div className={Styles["right-part"]}>
                      <div className={Styles["comment-header"]}> <a href={"/user/"+single_reply.user_id}> <img className={`${Styles["comment-profile-image"]} rounded-circle`} src={single_reply.profile_image_link}
                          alt=""/></a>
                        <span className={Styles["name"]}>{single_reply.user_name}</span>
                        <span className={Styles["youTag"]}>You</span>
                        <div className={Styles["time"]}>{single_reply.posted_date}</div>
                        <a id={"ri-"+i+"-"+j} className={Styles["reply"]}><i className="fa-solid fa-reply"></i> Reply</a>

                        <span className={Styles["edit"]}><i className="fa-solid fa-edit"></i> Edit</span>
                        <span className={`${Styles["edit"]} ${Styles["edit-2"]}`}><i className="fa-solid fa-edit"></i></span>
                        <span data-article_id={single_reply._id} className={"del-"+single_reply._id+" delete"}><i className="fa-solid fa-trash"></i> delete</span>
                        <span data-article_id={single_reply._id} className={"del-"+single_reply._id+" delete delete-2"}><i className="fa-solid fa-trash"></i> </span>
                      </div>

                      <div className={Styles["comment-info"]}>@<span className={Styles["tag-person"]}>{single_reply.reply_for}</span>{single_reply.comment_info}</div>
                    </div>
                  </div>

                  {/* reply bar */}
                  <div id={"reply-boxn-"+i+"-"+j} className = {`${Styles["reply-bar"]} dontshow`} >
                    <form action={""} method="post">
                      <input name = "reply_box_value" placeholder='Enter your reply here' required type="text" className={Styles["reply-input-box"]}/>
                      <button type="button" id={"cin-"+i+"-"+j} className={`btn btn-danger ${Styles["cancel_reply"]}`}>Cancel</button>
                      <button type="submit" className="btn btn-success">Send</button>
                    </form>
                  </div>

                  </>
                )
              })
            }
          </div>
      )
    })
  
    }

    <div className={`${Styles["comment-container"]} ${Styles["write-comment"]}`}>
      <a href={"/user/"+user["_id"]}>
      <img className={`${Styles["comment-profile-image"]} rounded-circle`} src={user["profile_image_link"]} alt=""/>
      </a>
      <form action="/posts/comment/" method="post">
        <textarea placeholder='Add a comment...' name="comment-message" style={{height:"100px"}} cols="55" rows="3"></textarea>
        <button type="submit" className={Styles["send-btn"]}>Send</button>
      </form>
    </div>
    </>
  )
}

