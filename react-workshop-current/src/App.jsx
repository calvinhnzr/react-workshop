import { useState, useEffect } from "react"

import Header from "./components/Header"
import { Footer } from "./components/Footer"
import Button from "./components/Button"
import Card from "./components/Card"

import { fetchData } from "./helpers/fetchData"

const App = () => {
  const [dataState, setDataState] = useState(0)

  const url =
    "https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/38c62965139a156d4a605be1e046ad8278235fff/articles.json"

  useEffect(() => {
    fetchData(url).then((data) => {
      setDataState(data)
    })
  }, [])

  return (
    <div>
      <Header />
      <Main>
        <section>
          <ul className="card-grid" id="article-container">
            {dataState ? (
              dataState.articles.map((item, index) => {
                return <Card key={index} item={item} />
              })
            ) : (
              <p> Loading...</p>
            )}
          </ul>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
export default App

const Main = (props) => {
  return <main>{props.children}</main>
}
