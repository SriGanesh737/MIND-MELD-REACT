import React from 'react'
import TopicCard from '../../components/TopicCard/TopicCard'
import styles from './HomePage.module.css' 
import healthImage from '../../assets/images/healthmain.jpg'
import fashionImage from '../../assets/images/fashionmain.jpg'
import educationImage from '../../assets/images/educationmain.jpg'
import sportsImage from '../../assets/images/sportsmain.jpg'
import entertainmentImage from '../../assets/images/entertainmentmain.cms'
import newsImage from '../../assets/images/newsheadlines.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <h1 className={`${styles.title} wow fadeInDown`}>MIND MELD</h1>
      <div className={styles.cards}>
        <TopicCard topicName="Health" id="health" imageSrc={healthImage} description="It features informative and
          well-researched blogs on various health topics like nutrition,mental health and disease prevention.These
          are written by healthcare professionals, offering valuable insights and tips for maintaining optimal
          health and wellness."/>
          
        <TopicCard topicName="Fashion" id="lifestyle" imageSrc={fashionImage} description="This offers a diverse collection of
              lifestyle blogs that cover topics such as fashion, beauty, travel, and home decor.
              Written by expert writers with a passion for lifestyle and provide inspiration, tips, and advice for
              enhancing your daily life and living your best life."/>
          
        <TopicCard topicName="Education" id="education" imageSrc={educationImage} description="It features a range of high-quality
              education blogs covering topics like educational technology and educational psychology.
              written by experienced educators and researchers and offer insights and advice for learning outcomes at
              all levels of education."/>
          
        <TopicCard topicName="Sports" id="sports" imageSrc={sportsImage} description="We provide in-depth coverage of all your
              favorite sports, from the latest scores and highlights to in-depth analysis of the biggest stories in
              sports. writers bring a wealth of knowledge and passion to every post."/>
          
        <TopicCard topicName="Entertainment" id="entertainment" imageSrc={entertainmentImage} description="It provides content
              related to movies, TV shows, music and pop culture. It typically features articles,
              reviews, news, and opinions written by journalists, critics.It aim to engage
              and entertain their audience by providing them with interesting and informative content."/>
          
        <TopicCard topicName="News Updates" id="news_updates" imageSrc={newsImage} description="It
              provides up-to-date and informative content on current events and breaking news from various fields such
              as politics, economics, sports, technology, and entertainment. It typically features articles
              and analysis written by journalists or experts in their fields."/>
          
      </div>
      <Footer/> 
    </>
  )
}
