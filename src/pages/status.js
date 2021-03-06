import { Container, Iframe, CodeEditor } from 'components/elements'
import { Layout } from 'components/patterns'
import React from 'react'
import { layout } from 'theme'

const TITLE = 'Status'

export default () => (
  <Layout>
    <Container pt={5}>
      <Iframe
        mx='auto'
        width={[
          CodeEditor.width[0],
          CodeEditor.width[1],
          layout.large,
          layout.large
        ]}
        height='650px'
        title={TITLE}
        src='https://status.microlink.io'
      />
    </Container>
  </Layout>
)
