import React from 'react'
import { onPageLoad } from 'meteor/server-render'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { ServerStyleSheet } from 'styled-components'

import Routes from '../both/routes'

onPageLoad(sink => {
  const context = {}
  const stylesheet = new ServerStyleSheet()

  const app = stylesheet.collectStyles(
    <StaticRouter
      location={sink.request.url}
      context={context}
    >
      <Routes />
    </StaticRouter>
  )

  const htmlStream = stylesheet.interleaveWithNodeStream(
    renderToNodeStream(app)
  )

  sink.renderIntoElementById('app', htmlStream)
})
