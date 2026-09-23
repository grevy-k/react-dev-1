import Header from './components/Header'
import PostList from './components/PostList'
import withLogger from './hoc/withLogger'
const LoggedHeader = withLogger(Header, 'Header')
const LoggedPostList = withLogger(PostList, 'PostList')

function App() {
  return (
    <>
      <LoggedHeader />
      <LoggedPostList />
    </>
  )
}

export default App