import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Styles from './Articles.module.css';
import Slideshow from '../../components/Slider/Slideshow';
import SearchBar from '../../components/SearchBar/SearchBar';
import Article from '../../components/Article/Article';

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1) // default page is 1
  const { topic } = useParams();

  const highLightsArticles = (articles) => {
    // Sort the articles based on likes
    articles.sort((a, b) => b.likes - a.likes)
    // Take the top 5 articles
    return articles.slice(0, 5)
  }

  const [highLightArticles, setHighlightArticles] = useState([])

  useEffect(() => {
    // fetch articles of topic using pagination
    const url = `http://localhost:8000/articles/topic/${topic}/page/${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        const highlights = highLightsArticles(data);
        setHighlightArticles(highlights);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [page, topic])

 const handlePrevClick = () => {
   if(page > 1) {
     setPage(page - 1)
   }
  }

  const handleNextClick = () => {
    setPage(page + 1)
  }


  return (
    <>
      <MyNavbar />
      <Slideshow sliderData={articles} />
      <SearchBar topic={topic} page="Home" />
      <div id="articlesId" className={Styles["articles"]}>
        {
          articles.map((article, i) => {
            return <Article article_data={article} i={i} />
          })
        }
      </div>

      <div className={Styles["pagination"]}>
      <div onClick={handlePrevClick} className={`${Styles["prev"]} ${page===1?Styles['disabled']:''}`}>Prev</div>
      <div className={Styles["page"]}>Page <span className={Styles["page-num"]}>{page}</span></div>
      <div onClick={handleNextClick} className={`${Styles["next"]} ${articles.length<9?Styles['disabled']:''}`}>Next</div>
      </div>

      <Footer />
    </>
  )
}
