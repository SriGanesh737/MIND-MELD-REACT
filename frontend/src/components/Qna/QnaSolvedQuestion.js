import React from 'react'
import Styles from '../../pages/QnA/QnA.module.css';

export default function QnaSolvedQuestion({data, i}) {
  return (
    <div className={`${Styles["question-wrapper"]} ${!data.is_answered?'dontshow':" "}`}>

                <div className={Styles["fa-ques"]}>

                  <div className={Styles["faq-first-part"]}>
                    <i className="fa-solid fa-caret-up"></i>
                    <span className={Styles["faq-scr-cnt"]}>
                      {data.popularity}
                    </span>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>

                  <div className={Styles["faq-left-part"]}>

                    <div className={Styles["question-part"]}>
                      {data.question}
                    </div>
                    <div className={Styles["solution-part"]}>
                      {data.answer.substring(0,100)}...
                        <a className={`${i} ${Styles.viewFullAnswer}`} href="#"> view full answer</a>
                    </div>
                  </div>

                  <div className={Styles["faq-right-part"]}>
                    Answered by :
                    <br />
                    <a href={`/user?id=${data.expert_id}`}>
                      <img src={data["profile-image-link"]} alt="" className={Styles["faq-profile"]} />
                    </a>
                  </div>

                </div>

                <div className={`${Styles["answer-box"]} ${Styles["answer-box-"+i]}`}>
                  <i className={`${i} fa-solid fa-xmark`}></i>
                  {/* <br> */}
                  <span className={Styles["answer_text"]}>
                    {data.answer}
                  </span>

                </div>

              </div>
  )
}
