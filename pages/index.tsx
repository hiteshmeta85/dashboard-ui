import type {NextPage} from 'next'
import Layout from "./layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="font-semibold text-2xl m-4">Hello, World!</div>
    </Layout>
  )
}

export default Home
