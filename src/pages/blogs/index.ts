import { PostList } from '@/components/post-list'

import styles from './styles.module.css'

export const BlogsPage = () => {
  document.title = 'Blogs'

  return `
    <main class="container">
      <h2 class="${styles.title}">Latest Blogs</h2>
      ${PostList()}
    </main>
  `
}
