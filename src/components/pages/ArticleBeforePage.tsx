import React from 'react';
import ArticleBefore from './ArticleBefore/ArticleBefore';
import SectionArticle2 from './ArticleBefore/SectionArticle2';
import ArticleSection3 from './ArticleBefore/ArticleSection3';
import OtherArticle from './ArticleBefore/OtherArticle';

const ArticleBeforePage = () => {
    return (
        <div>
            <ArticleBefore/>
            <SectionArticle2/>
            <ArticleSection3/>
            <OtherArticle/>
        </div>
    );
};

export default ArticleBeforePage;