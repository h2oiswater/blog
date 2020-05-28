import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = String.raw`
# This is a header
And this is a paragraph

<blockquote>
  var React = require('react');

  
  var Markdown = require('react-markdown');

  React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
  );
</blockquote>
`

export default () => {
  return <ReactMarkdown source={input} escapeHtml={false} />
}
