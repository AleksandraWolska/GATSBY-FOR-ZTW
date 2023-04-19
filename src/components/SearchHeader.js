import React from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from "gatsby"

import Search from "./search"

const SearchHeader = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <div style={{
        background: "blue",
        marginBottom: "5px",
        marginTop: "0px",
        display: "block",
        boxShadow: "0px 0px 7px black",
        color: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"

      }}>

        <h1>HEADER</h1>
        <Search searchIndex={data.siteSearchIndex.index} />
      </div>
    )}
  />
)

export default SearchHeader