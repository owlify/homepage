import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import '@/styles/Home.css'

export default function App({ Component, pageProps }) {
  return <section>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </section> 
}
