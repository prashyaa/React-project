import React from "react";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import { useDetailsContextConsumer } from "../Context/detailsContext";
const BlogPage = ({category}) => {
  const {details} = useDetailsContextConsumer();
  const arrInd = ()=>{ return Math.floor(Math.random() * 50)};
  const topposts = [details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()]] 

  return (
    <div className="category_page bollywood_container">
      <div className="column_main">
        <h1 className="title head-title">{category}</h1>
        {details
          .filter((article) => {
            return article.category === category;
          })
          .map((n) => (
            <Card
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title}
              description={n.description.slice(0, 200)}
              author={n.author}
            />
          ))}
      </div>
      <div className="sub_column">
        <h1 className="side_title title">Top Posts</h1>
        {topposts
          .map((n) => (
            <SmallCard
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title.slice(0, 25)}
              category={n.category}
              date={n.date}
              description={n.description}
            />
          ))}
          <div className="advertisements"><img src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="ads"/>
          <h4>Advertisements</h4>
          </div>
      </div>
    </div>
  );
};

export default BlogPage;
