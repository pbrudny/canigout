import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: '-50px',
      marginLeft: '-100px',
      textAlign: 'center',
      fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
      fontSize: '80pt'
    }}>
      Non.
    </div>
    <div style={{
      "position": "fixed",
      "bottom": "0",
      "width": "100%",
      "marginBottom": "2vh",
      "textAlign": "right"
    }}>
      <span style={{
        "paddingRight": "2vw",
        "color": "#777",
        "fontFamily": "Helvetica Neue,Helvetica,Arial,sans-serif"
      }}>Par contre, vous pouvez trouver un bon travail en remote sur <a
          href={'https://jobsforit.fr/filters/all/remote'}
          target={'_blank'}
          style={{
            "textDecoration": "none",
            "color": "#337ab7",
           }}>
          JobsForIT.fr
        </a>
      </span>
    </div>
  </Layout>
)
