import Link from "next/link";

function newsPage() {
  return (
    <div>
      news items list
      <ul>
        <li>
          <Link href="news/id1">the new news</Link>
        </li>
        <li>
          <Link href="news/id2">the 2 new news</Link>
        </li>
      </ul>
    </div>
  );
}

export default newsPage;
