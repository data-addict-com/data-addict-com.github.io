---
layout: post
title:  "Pull datas from Supabase to Google Sheets"
date:   2022-07-27 00:00:00 +0200
categories: datas postgresql google-sheets supabase google-appscripts
tags: datas postgresql google-sheets supabase google-appscripts
published: true
---

* TOC
{:toc}

In this article, you will see how to **pull datas from your supabase project using Supabase API to a Google Sheet**. No matter **how many fields and rows** you want to pull, this **should** always work. If not, feel free to contact me so that we can look at your issue.


# The code
You can get it [here](https://github.com/jadynekena/supabase-googlesheet/blob/main/Code.gs){:target="_blank"}.



# Prerequisites
This project assumes that you are already familiar to supabase and Google appscript.   


You will need :
- the **URL** of your supabase project
- its **API KEY** (service role or anon one, depending your RLS)

![supabase-project-details.png](https://raw.githubusercontent.com/jadynekena/supabase-googlesheet/main/img/supabase-project-details.png)

And of course : your **Google account**.

# How often can I refresh datas ?
- Every **minute**
- Every **hour**
- Every **day**
- At a **specific date**
- On a **special event** (event-driven triggers)
 
More informations about Google script triggers [here](https://developers.Google.com/apps-script/guides/triggers/installable){:target="_blank"}.

**CAUTION** : be careful of your daily quotas on your Google account. For a free account, you can have 90 minutes of runtime per day (**July 2022**). Check out the details of Google triggers quotas [here](https://developers.Google.com/apps-script/guides/services/quotas){:target="_blank"}.

# Motivation
Google Scripts can't handle postsgresql connections yet, so here is a workaround to pull datas everyday at the same hour. We don't really want a realtime update. Just a snapshot is enough.   

Once the datas are available on your Google Sheet, you can explore many possibilities, like using **Google Data Studio** that pulls datas from Google Sheets **[every 15 minutes](https://support.Google.com/datastudio/answer/7020039?hl=en#zippy=%2Cin-this-article%2Cdata-refresh-rates-by-connector){:target="_blank"}**. 

# Errors handling
If you find any issue related to the code, please contact me so that I can help you.

# Limits and recommandation

- Your [daily quota](https://developers.Google.com/apps-script/guides/services/quotas){:target="_blank"} from your Google account as stated before
- Your supabase max rows limit, which can be changed here :

![max-rows-supabase-api.png](https://raw.githubusercontent.com/jadynekena/supabase-googlesheet/main/img/max-rows-supabase-api.png)

**I highly recommand you to** :
- **set this parameter according to the average amount of datas you are going to pull** (here for me is ~3.5k rows so I have 500 as an offset)
- **NOT set this parameter too high (as low as possible actually) or/and to create a strong [RLS](https://supabase.com/docs/guides/auth/row-level-security){:target="_blank"} to make sure that** :
	+ **your supabase API is not over loading** (I already tried with 10k rows and it's definitely NOT a good idea)
	+ **your users don't over pull your datas**
	
Have fun with your datas !


