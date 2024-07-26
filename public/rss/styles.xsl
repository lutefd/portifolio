<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <style type="text/css">
        body {
          background: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>') white;
          font-family: "JetBrains Mono", monospace;
          text-align: center;
          margin: 0;
          padding: 0;
          overflow:hidden
        }
          .container {
          background-color: white;
            margin: auto;
            max-width: 856px;
            margin-block: 2.5rem;
            border: 1px solid black;
            height: calc(100vh - 5rem);
            overflow-y: auto;
          }
          h1 {
            font-size: 2em;
            margin-bottom: 0.5em;
          }
          h2 {
            font-size: 1.5em;
            margin-bottom: 0.5em;

          }
          p {
            margin: 0.5em 0;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin: 0.5em 0;
          }
          a {
            color: var(--color-primary);
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          ::-webkit-scrollbar {
	width: 0.5rem;
	height: 0.5rem;
          }
          ::-webkit-scrollbar-thumb {
	background: #737373;
          }
          .item{
              padding-block: 1.5rem;
          }

        </style>
      </head>
      <body>
        <div class="container">
          <xsl:apply-templates/>
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="rss/channel">
    <h1><xsl:value-of select="title"/></h1>
    <p><xsl:value-of select="description"/></p>
    <xsl:apply-templates select="item"/>
  </xsl:template>

  <xsl:template match="item">
    <div class="item">
      <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
      <p><xsl:value-of select="pubDate"/></p>
      <p><xsl:value-of select="description"/></p>
    </div>
  </xsl:template>

</xsl:stylesheet>
