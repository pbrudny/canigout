import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Can I go out?</title>
    </Helmet>
    <div>
      {children}
    </div>
  </div>
)
