// our-domain.com/news/[some-dynamic-name

import { useRouter } from "next/router";

const DynamicPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

  return (
    <>
      <h1>The Dynamic Page</h1>
      <h2>{`Dynamic page name is: ${newsId}`}</h2>
    </>);
};

export default DynamicPage;
