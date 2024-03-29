import { AboutPage } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { PostDetailPage } from '@/pages/post-detail'
import { PostsPage } from '@/pages/posts'

const routes = (pathName: string) => {
  switch (pathName) {
    case '/':
      return HomePage()

    case '/posts':
      return PostsPage()

    case /^\/posts\/\d+$/.test(pathName) ? pathName : '':
      const postId = parseInt(pathName.split('/')[2])

      if (postId > 12 || postId <= 0) return NotFoundPage()
      return PostDetailPage({ id: String(postId) })

    case '/about':
      return AboutPage()

    default:
      return NotFoundPage()
  }
}

export default routes