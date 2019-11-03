/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See:
 *
 * - https://www.gatsbyjs.org/docs/node-apis/
 * - https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-static-pages-using-gatsbys-node-api
 */

// Create pages
import createSitePages from './src/gatsby-node/createPages'
import onCreateNode from './src/gatsby-node/onCreateNode'
import onCreateWebpackConfig from './src/gatsby-node/onCreateWebpackConfig'

const createPages = (ctx: any) => {
  const SheetTemplate = require.resolve(
    './src/gatsby-templates/SheetTemplate.tsx'
  )

  createSitePages(ctx, { SheetTemplate })
}

export { onCreateNode, onCreateWebpackConfig, createPages }
