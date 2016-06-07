/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import glob from "glob"
import { join } from "path"
import sortBy from "lodash.sortby"

function capitalize(string) {
  return string.split(" ")
    .map(word => word.replace(/(?:^|\s)\S/g, a => a.toUpperCase()))
    .join(" ")
}

const PRESERVED = {
  nye: "NYE",
  usa: "USA",
}

function formattedTag(tag) {
  const lowerTag = tag.toLowerCase()
  return PRESERVED[lowerTag] || capitalize(lowerTag)
}

module.exports = function tagLoader(source) {
  this.cacheable()
  const target = this.target
  const callback = this.async()

  if (target === "node") {
    source = source.replace("import 'babel/polyfill';", "") // eslint-disable-line no-param-reassign
  }

  glob("**/*.{js,jsx,markdown}", { cwd: join(__dirname, "../../pages/blog") }, (err, files) => {
    if (err) {
      return callback(err)
    }

    const tagList = {}
    files.forEach(file => {
      const tags = require(`../../pages/blog/${file}`).metadata.tags // eslint-disable-line global-require
      tags.forEach(tag => (tagList[formattedTag(tag)] = tag))
    })

    const tags = sortBy(Object.keys(tagList))

    if (tags.length) {
      return callback(null,
                      source.replace(" tags = []",
                                     (` tags = ${JSON.stringify(tags)}`)))
    }

    return callback(new Error("Cannot find any blog pages."))
  })
}
