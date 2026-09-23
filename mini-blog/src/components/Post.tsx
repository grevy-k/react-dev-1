import { memo } from 'react'
import type { CSSProperties } from 'react'
import type { BlogPost } from '../types/post'
import { formatDate, getPreview, isNewPost } from '../utils/dateHelpers'

interface PostProps {
  post: BlogPost
  isHighlighted: boolean
}

function Post({ post, isHighlighted }: PostProps) {
  const isNew = isNewPost(post.datePosted)

  const highlightStyle: CSSProperties | undefined = isHighlighted
    ? { backgroundColor: '#fff7e0', borderLeft: '5px solid #f5a623' }
    : undefined

  return (
    <article className="post" style={highlightStyle}>
      <div className="post__top">
        <h2 className="post__title">{post.title}</h2>
        {isNew && <span className="post__badge">New!</span>}
      </div>

      <p className="post__meta">
        By {post.author} · {formatDate(post.datePosted)}
      </p>
      <p className="post__preview">{getPreview(post.content)}</p>
    </article>
  )
}

// Post only re-renders when its own props change
export default memo(Post)