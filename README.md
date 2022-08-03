# Welcome to Data Addict repo
Hey, thanks for visiting this repo!  
This website is live on [data-addict.com](https://data-addict.com).  

It's basically my website content, that you definitely can clone/[fork](https://github.com/jadynekena/jadynekena.github.io/fork)/[use as a template](https://github.com/jadynekena/jadynekena.github.io/generate) to make it your own blogging CMS.

# How to use this repo
Here are some tips to get started :  
- `_config.yml` : for the main configuration of your website. You can see the [beautiful-jekyll config](https://github.com/daattali/beautiful-jekyll/blob/master/_config.yml) to understand how to fill it with your own datas.
- `_posts` : where your articles will be stored, with a specific filename to make the datetimes work.  
- `assets` : for images, css style, and favicons.  
- `_sass/main.scss` : for generic parameters such as colors, font-family, size of few elements, etc.  
- `_includes` : for the templates that will be used to render your website : navbar, posts contents, and even comments section.  

# Run it locally
```
bundle install
bundle exec jekyll serve --incremental --trace
```
Then go to: **http://127.0.0.1:4000**

# Few possible errors
As I was running the server locally with Windows OS, I have encountered few errors, that I write down here to help anyone facing the same issues :

## `Please add the following to your Gemfile to avoid polling for changes:`
Verify that your **Gemfile** has both lines :
```
gem "wdm", "~> 0.1.0" if Gem.win_platform?
gem "webrick", "~> 1.7"
```

## `require': cannot load such file -- webrick (LoadError)`
Before serving your website, execute `bundle add webrick` and it will be fixed.

# Credits
I'm a data engineer and I actually don't build websites. All the front end elements here are from [jekyll-klise](https://github.com/piharpi/jekyll-klise).

# Maintainer
This repo is owned by [@Jady](https://twitter.com/jadyrama).
