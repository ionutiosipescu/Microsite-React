import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'
import NewsCard from '../../../components/cards/NewsCard'

const News = () => {
  let news = {
		title: 'Card Title',
		date: '15/5/2020',
		content:
			'Some quick example text to build on the card title and make  Some quick example text to build on the card title and make  Some quick example text to build on the card title and make ',
	}
  return (
    <>
			<Row>
				<Col>
					<NewsCard
						title={news.title}
						content={news.content}
						date={news.date}
					/>
					<NewsCard
						title={news.title}
						content={news.content}
						date={news.date}
					/>
					<NewsCard
						title={news.title}
						content={news.content}
						date={news.date}
					/>
				</Col>
				<Col>
					<NewsCard
						title={news.title}
						content={news.content}
						date={news.date}
					/>
					<NewsCard
						title={news.title}
						content={news.content}
						date={news.date}
					/>
					<NewsCard
						title={news.title}
						content={news.content}
						date={news.date}
					/>
				</Col>
			</Row>
		</>
  );
};

export default News;
