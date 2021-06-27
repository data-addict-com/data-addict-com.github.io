# Welcome to Data Addict repo.
Hey, thanks for visiting this repo!
It's basically my website content, that you definitely can clone to make it your own blogging CMS.

# Credits
I'm a data engineer and I actually don't build websites. All the front end elements here are from [jekyll-klise](https://github.com/piharpi/jekyll-klise).

# How to use this repo
The template I mentionned before might help you, but here are some tips:  
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