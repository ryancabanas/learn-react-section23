// our-domain.com/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/great">Next.js is Great!</Link>
        </li>
        <li>
          <Link href="/news/stinks">Biden stinks!</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
