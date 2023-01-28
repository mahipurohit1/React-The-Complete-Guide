import { useRouter } from "next/router";

function detailPage() {
  const router = useRouter();
  console.log(router.query.newsId);
  return <div>detailPage</div>;
}
export default detailPage;
