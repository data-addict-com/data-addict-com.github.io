---
layout: post
title:  How to push local files to git with a single line code
date:   2022-08-14 05-53-11 +0200
categories: git github gitlab CLI opensource
published: true
---

Have you ever typed `git asd .` instead of `git add .` ? Ever forgotten to write the `-m` part in `git commit -m "my message"` ? Been tired of writing down the same three lines over and over ? As a daily basis dev, we generally hate repetitive tasks and [GUI solutions](https://git-scm.com/downloads/guis){:target="_blank"} : this is why I created a simple bash script to wrap it all together through a single line code.

# Table of contents

* TOC
{:toc}

# Context
I have precisely **2 constraints** in my context :
1. Add **all** changed files from my local machine to my remote default branch.
2. Add an **optional** message to my commit, and if it's empty, there is a default message.

# The solution
In a bash file `push` at the root directory, add the following script.
{% highlight bash %}
{% include code/push %}
{% endhighlight %}

# Results
And now we are from this :
{% highlight bash %}
git add .
git commit -m "this is a commit message"
git push
{% endhighlight %}

to this :
{% highlight bash %}
bash push "this is a commit message"
{% endhighlight %}

Simple and efficient !
