---
layout: post
title:  "How to create access token to push files to github or gitlab ?"
date:   2022-08-12 00:00:00 +0200
categories: access token github gitlab repository
published: false
---

* TOC
{:toc}

# What is an access token ?
According to wikipedia :
> In computer systems, an access token contains the security credentials for a login session and identifies the user, the user's groups, the user's privileges, and, in some cases, a particular application.

So basically, it's a kind of **password system** but generalized to an whole entity. It helps applications to create sessions by using third party authentication credentials, for example.

# What is git ?
Git is a solid versioning system mainly used in IT, in order to handle files history and applications deployment. There are many related platforms in the industry, but I will only talk about **Github** and **Gitlab** here.

# Motivation
If you are new to git, this article is made for you. Since [github stopped using password-based SSH authentication](https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/){:target="_blank"}, it may be difficult for newbies to connect to their github account from their PC. Let's start.

# Prerequisites
This article assumes that you :
- have installed [git CLI](https://git-scm.com/downloads){:target="_blank"}
- already have created an empty repository in your [github](https://docs.github.com/en/get-started/quickstart/create-a-repo)/[gitlab](https://docs.gitlab.com/ee/user/project/working_with_projects.html#create-a-project) account
- have a local folder that you want to push into your remote repository.

# Steps
## Create access token
todo

## Fetch the access token
todo


## Store access token
### In github
todo

### In gitlab
todo

## Push your files

# Bonus
See the next article : [push your files into two (or more) remote repositories](#todo).
