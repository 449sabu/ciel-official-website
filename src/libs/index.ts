// import { format } from 'date-fns/fp';
import matter from 'gray-matter';
import { fetchArticleList, fetchMainText } from '@/libs/github';
import type { AllArticles, FrontMatter } from '@/types'

export const calculateADA = (
  lovelace: string,
  fixed: number,
  unit?: boolean,
) => {
  if (lovelace.length > 15) {
    const num = parseInt(lovelace) / 1000000000000000;
    if (unit) {
      return num.toFixed(fixed) + ' B';
    }
    return num.toFixed(fixed);
  }
  if (lovelace.length > 12) {
    const num = parseInt(lovelace) / 1000000000000;
    if (unit) {
      return num.toFixed(fixed) + ' M';
    }
    return num.toFixed(fixed);
  }
  if (lovelace.length > 9) {
    const num = parseInt(lovelace) / 1000000000;
    if (unit) {
      return num.toFixed(fixed) + ' K';
    }
    return num.toFixed(fixed);
  } else {
    const num = parseInt(lovelace) / 1000000;
    return num.toFixed(fixed);
  }
};

/**
 * ブログ関係
 * 
 * getStaticProps内で使用する場合は同期させる必要があるので
    Promise .all(）内で使用する
 */
export const getAllArticles = async () => {
  const articles = await fetchArticleList();
  const article = articles.map(async (e: string) => {
    const slug = e.replace(/\.md$/, '');
    const mainText = await fetchMainText(e);
    const { data }: FrontMatter = matter(mainText);

    return {
      frontMatter: data,
      slug,
    };
  });

  return article;
};

/*  getAllArticlesを引数に取る
    重複したトピックをカットしてトピックの配列を返す
*/
export const getAllTopics = (article: AllArticles[]): string[] => {
  const topics = article.map((e) => e.frontMatter.topics).flat();
  const topicList = topics.filter(
    (elem, index) => topics.indexOf(elem) === index,
  );
  return topicList;
};

/*  Paginationの関数。１ページに表示したい記事の数を引数に取る
    ページ数を返す
*/
export const getPagination = async (pageSize: number) => {
  const articles = await fetchArticleList();
  const range = (start: number, end: number, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);
  const pages = range(1, Math.ceil(articles.length / pageSize));

  return pages;
};