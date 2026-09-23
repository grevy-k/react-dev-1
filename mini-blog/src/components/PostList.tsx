import Post from './Post'
import type { BlogPost } from '../types/post'
import { hoursAgo } from '../utils/dateHelpers'
import '../styles/posts.css'

// Sample data is hardcoded for now. It lives outside the component so the
// objects keep the same reference on every render, which lets memo(Post) skip work.
const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: 'Stop fighting with useEffect',
    author: 'Emmanuel Annor',
    content:
      'Most useEffect bugs come from a missing dependency, so let the linter guide you before you add hacks.',
    datePosted: hoursAgo(3),
  },
  {
    id: 2,
    title: 'Vite makes dev servers feel instant',
    author: 'Grevy karuretwa',
    content:
      'Vite serves files over native ES modules, so the dev server starts fast even when the project grows.',
    datePosted: '2026-09-15T10:30:00.000Z',
  },
  {
    id: 3,
    title: 'Type your props and thank yourself later',
    author: 'Sam Mensah',
    content:
      'A small interface for your props catches typos and wrong data before the browser ever sees them.',
    datePosted: '2026-09-10T08:00:00.000Z',
  },
]

const FEATURED_AUTHOR = 'Grevy karuretwa'

function PostList() {
  return (
    <main className="post-list">
      <h1 className="post-list__heading">Latest Tips and Insights</h1>

      {samplePosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          isHighlighted={post.author === FEATURED_AUTHOR}
        />
      ))}
    </main>
  )
}

export default PostList