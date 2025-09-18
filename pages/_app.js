import '../public/css/reset.css'
import '../public/css/common.css'
import '../public/css/main.css'
import '../public/css/sub.css'
import '../public/css/popup.css'
import '../public/css/form.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}