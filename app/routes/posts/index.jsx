import { useLoaderData, Link } from '@remix-run/react';

export const loader = () => {
  const data  = {
    posts: [
      {id:1, title: 'Post 1', body: 'This is a test Post'},
      {id:2, title: 'Post 2', body: 'This is a test Post'},
      {id:3, title: 'Post 3', body: 'This is a test Post'}
    ]
  }
  
  return data
};

function PostItems() {

  const {posts} = useLoaderData()

  return (
    <>
      <div className="header-header">
      <h1>Posts</h1>
      <Link to="posts/new" className='btn'>
        
      </Link>
      </div>
      <ul className='posts-list'>
      {
        posts.map((post) =>  (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>
                {post.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;
