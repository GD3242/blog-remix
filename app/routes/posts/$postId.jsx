import { useParams } from '@remix-run/react'

function Posts() {
  const params = useParams();
  return (
    <div> Posts {params.postId} </div>
  )
}

export default Posts