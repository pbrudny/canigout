import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Est-ce que je peux sortir de chez moi?</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div>
      {children}
    </div>
  </div>
)
