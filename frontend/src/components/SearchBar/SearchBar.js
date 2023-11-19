import React from 'react'
import Styles from './SearchBar.module.css'

export default function SearchBar({topic,page}) {
  return (
    <div className={`${Styles["searchbar-container"]} d-flex`}>
    <form className={`${Styles["searchbar-form"]} d-flex`} method='post'>
        <input name="search_value" className={`${Styles["mysearchbar"]} form-control me-5`} type="search" placeholder="Search" aria-label="Search" />
        <input type="hidden" name="topic_name" value={topic} />
        <div className={`form-group ${Styles["tags_or_title"]}`}>
          <select className="form-control" name="based_on" id="filter_based_on">
            <option value="title">Based on Title</option>
            <option value="tags">Based on Tags </option>
          </select>
        </div>

        <div className={`form-group myfilterdropdown ${page=="bookmarks"?"dontshow":""}`}>
            <select name="filter_option" className={`${Styles.myselect} form-control`} id="filterSelect">
              <option value="newest first">Newest First </option>
              <option value="oldest first">Oldest First</option>
              <option value="most liked">Most Liked First</option>
            </select>
        </div>

        <div  className={`form-group topic_choose ${page=="posts"?"dontshow":"" }`}>
          <select className={Styles["topic_choose_select"]} name="choose_topic">
            <option value="">Choose a topic</option>
            <option value="health">HEALTH</option>
            <option value="sports">SPORTS</option>
            <option value="education">EDUCATION</option>
            <option value="news_updates">NEWS UPDATES</option>
            <option value="lifestyle">LIFESTYLE</option>
            <option value="entertainment">ENTERTAINMENT</option>
          </select>
        </div>

        <button className={`${Styles["searchbar_btn"]} btn btn-outline-success`} type="submit">Search</button>


    </form>
</div>
  )
}




