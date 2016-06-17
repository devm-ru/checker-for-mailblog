package main

import(
    "fmt"
	"github.com/opesun/goquery"
)

func parseURL(url string) goquery.Nodes {
    content, err := goquery.ParseUrl(url)
    if err != nil {
        panic(err)
    }
    return content
}

func checkIframe(pageURL string)  {
    pageContent := parseURL(pageURL)
    iframe := pageContent.Find(".postbox__body__text p iframe")
    if len(iframe) > 0 {
        fmt.Println(pageURL)
        // fmt.Println(iframe.Attrs("width"), iframe.Attrs("height"))
    }
}

func getArticlesLinks(page int){
    pageContent := parseURL(fmt.Sprintf("https://mailblog.mail.ru/page/%v/",page))
    for _, link := range pageContent.Find(".post-link").Attrs( "href" ) {
        checkIframe(link)
    }
}

func main() {
    for i := 1; i <= 25; i++ {
        getArticlesLinks(i)
    }
}
