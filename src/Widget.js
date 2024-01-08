import React from 'react'
import "./Widget.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widget'>
            <div className="widget_header">
                <h2>Connect-Turret News</h2>
                <InfoIcon />
            </div>
            {newsArticle("How to do Redux and React", "Top News")}
            {newsArticle("How to upload good Project", "Elon's Top Knowledge")}
            {newsArticle("Is ChatGPT new Age", "ChatGPT allows new Personal chatbots")}
        </div>
    )
}

export default Widget