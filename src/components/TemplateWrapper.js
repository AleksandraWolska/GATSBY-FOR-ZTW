import React from "react"
import Helmet from "react-helmet"
import "./template-wrapper.css"
import SearchHeader from "./SearchHeader.js"


export const TemplateWrapper = ({children}) => {

    return (
        <div>
            <SearchHeader />
            <Helmet
                title="Static Blog"
                meta={[
                    { name: "description", content: "Sample" },
                    { name: "keywords", content: "sample, something" },
                ]}
            />
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}
            >
                {children()}
            </div>
        </div>
    )
}

export default TemplateWrapper