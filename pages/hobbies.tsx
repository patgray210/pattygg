import Link from 'next/link'
import Layout from '../components/Layout'

const HobbiesPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Hobbies</h1>
    <p>This is the page for my Hobbies</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default HobbiesPage
