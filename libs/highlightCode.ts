import hljs from "highlight.js"
import javascript from "highlight.js/lib/languages/javascript"
import * as cheerio from "cheerio"
hljs.registerLanguage("javascript", javascript)

export const highlightCode = (content: string) => {
  const $ = cheerio.load(content)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  return $.html()
}