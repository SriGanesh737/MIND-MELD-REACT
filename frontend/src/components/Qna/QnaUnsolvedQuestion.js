import React from 'react'
import Styles from '../../pages/QnA/QnA.module.css';
export default function QnaUnsolvedQuestion({data, i, role}) {



  const handleAnswerClick = ()=>{
    document.querySelector(`.${Styles["solution-"+i]}`).classList.remove("dontshow");
  }

  const handleCancelClick = ()=>{
    document.querySelector(`.${Styles["solution-"+i]}`).classList.add("dontshow");
  }

  return (
    <div key={i} className={`${Styles["question-wrapper"]} ${data.is_answered?'dontshow':" "}`}>
                <div className={Styles["not_answered_wrapper"]}>
                  <div className={Styles["not-answered-question"]}>
                    {data.question}
                  </div>

                  <button onClick={handleAnswerClick} className={`${i} ${Styles.answer} ${data.is_blocked|| role=='user'?"dontshow":""}`}>
                    Answer
                  </button>
                </div>
                <div className={`${Styles["solution-"+i]} ${Styles["solution-form"]} dontshow`}>
                  <form>
                    <textarea required className={Styles["faq-solution"]} name="faq-solution" cols="100" rows="4"></textarea>
                    <div className={Styles["actn_btns"]}>
                      <button onClick={handleCancelClick} type="button" className={`${Styles["cancel-"+i]} btn btn-danger ${Styles.cancel_btn}`}>Cancel</button>
                      <button type="submit" className="btn btn-success post_btn">Post</button>
                    </div>

                  </form>

                </div>

              </div>
  )
}
