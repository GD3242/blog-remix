import { useParams } from '@remix-run/react';

function Posts() {
  const params = useParams();
  return <Document> Posts {params.postId} </Document>;
}

export default Posts;
