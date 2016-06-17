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

func main() {
    pageContent := parseURL("https://mailblog.mail.ru/cloud2016/")
    iframe := pageContent.Find(".postbox__body__text p iframe")
    if len(iframe) > 0 {
        fmt.Println("Found iframe")
    }
}
