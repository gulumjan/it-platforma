import ArticleBefore from '@/components/pages/ArticleBefore/ArticleBefore';
import ArticleSection3 from '@/components/pages/ArticleBefore/ArticleSection3';
import OtherArticle from '@/components/pages/ArticleBefore/OtherArticle';
import SectionArticle2 from '@/components/pages/ArticleBefore/SectionArticle2';
import React from 'react';

const page = () => {
    return (
        <div>
            <ArticleBefore/>
            <SectionArticle2/>
            <ArticleSection3/>
            <OtherArticle/>
        </div>
    );
};

export default page;