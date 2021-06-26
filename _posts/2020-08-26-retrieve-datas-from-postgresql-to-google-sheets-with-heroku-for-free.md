---
layout: post
title:  "Retrieve datas from postgreSQL to Google Sheets with Heroku for free"
date:   2021-06-26 12:29:20 +0700
categories: datas postgresql google-sheets heroku python
published: false
---


# Motivation
Connecting postgreSQL to Google Sheets might be tricky, as there is no explicit solution to do so, unless you use third party tools such as Zapier, Kloud.io or Blend.co. Moreover, some of those solutions are not forever free.
As a developer, I'd rather create my own things, and share them with people who might need them for their own projects. Let's see how it goes.

# Why doing this?
The main goal is to retrieve datas from a place to another : basically for **better monitoring**. As you may know, Google Sheets is available from Desktop and mobile, and it's free to use. You will see some scripts on Google Appscripts that will empower your app easily. You can also connect your sheets to Tableau Public for some magical Data Viz, and refresh datas daily without any effort from you. You can find how to do so [here](#soon).



# Let's do it in 5 Steps
## 1. Create few accounts
You will need to register to the following tools:
- [Google Drive](https://accounts.google.com) of course
- [Github](https://github.com/join) for creating a postgreSQL database on [Supabase](https://app.supabase.io/) and hosting your future python code 
- [Heroku](https://signup.heroku.com/) for your python server, using flask

Once you're done signing up to these 3 platforms, let's go to step 2.

## 2. (Optional) PostgreSQL database on Supabase in less than 2 minutes
If you already have a database that you want to connect, discard this step and go to [step 3](#3-create-your-python-server-hosted-in-github-and-deployed-on-heroku) directly.

### The database
If you never heard about Supabase, it's the open source firebase alternative, using postgreSQL. They are offering a free tier pricing for 3 hobby projects, that you may use for the purpose we have here.
To get started, just sign up with your Github account, and allow all required credentials.

Once logged in, click on New Project > Your org's name.

Provide the project name, the database password, and the region closest to your current location.
In this example, I'm going to use these

**Name** : `my-super-project`

**Database password**: `hellothisisapasswordandihopeitsstrongenough2021`

**Region**: `West EU (London)`

Just let the magic process for 1 minute or 2.

### The table that will be fetched
Once your database is ready, use the button on the left side bar: ![supabase-SQL](/assets/img/supabase-SQL.png) to run the following SQL query. It will create the table you will retrieve datas from later on.
{% highlight SQL %}
CREATE TABLE public.conv
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    sender character varying COLLATE pg_catalog."default",
    receiver character varying COLLATE pg_catalog."default",
    content text COLLATE pg_catalog."default",
    datetime timestamp with time zone DEFAULT now(),
    CONSTRAINT conv_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

COMMENT ON COLUMN public.conv.sender
    IS 'the one who sends the message';

COMMENT ON COLUMN public.conv.receiver
    IS 'the one supposed to receive the message';

COMMENT ON COLUMN public.conv.content
    IS 'the actual message';

COMMENT ON COLUMN public.conv.datetime
    IS 'the date time the sender sends the content to the receiver';

ALTER TABLE ONLY public.conv ADD CONSTRAINT conv_pkey PRIMARY KEY (id);
{% endhighlight %}

Now, let's insert some datas in it.
{% highlight TSV %}
d5f67084-c0ca-4ae5-8957-348237ba51be	A	B	Hey! It's been a while. How you're doing?	2021-06-26 12:03:22+00
5287170c-b6f6-47fe-ad0c-9f724ef60acb	B	A	Hey.\nThanks for your message. I'm doing fine, thanks!\nWhat's up?	2021-06-26 12:03:31+00
1c927c51-dd2f-4f1c-9ead-609f71b7747e	A	B	Nothing much. Wanna hang out tonight?	2021-06-26 12:04:10+00
f243838c-1596-46d1-86d5-304def0840db	B	A	Sure, I must be free at 7pm. What was the name of the bar we used to hang out in?	2021-06-26 12:04:50+00
a3ce9c80-8333-4fc7-8d27-7c19c31326d4	A	B	Foo. The Foo Bar.	2021-06-26 12:05:45+00
8f990cc9-35e7-4fa8-baac-d87bcf9f213e	B	A	Oh, yeah. How could I forget something that is so obvious. LOL	2021-06-26 12:06:14+00
02c18b5f-098e-479e-bcf5-42946cf34fe1	A	B	See you there btw, is 7:30pm ok for you?	2021-06-26 12:07:02+00
6fb02446-263d-4bf9-bdc1-51ad7f03c40c	B	A	Perfect. See you!	2021-06-26 12:07:23+00
{% endhighlight %}

Your supabase table must now look like this:
![final-supabase-datas](/assets/img/final-datas.png)

## 3. Create your python server hosted in Github and deployed on Heroku
### Option 1: fork the project
Directly from the [github project]().

### Option2: create your own repo and your own files
#### The python server
Our goal here is to create the controller that receives a SQL statement (such as `SELECT * FROM NAMETABLE`), and gives back the datas as JSON. It's actually a REST API controller.

**Important cautions**:
- The following method is **not** secure. You will write down your postgreSQL database password inside your code, so be sure to host the file in a **private repo** on github.
- If your datas are sensitive, you should consider implementing some authentication layer before accessing to your Heroku app.

Create a local directory, named `python-server` for example. From now on, you will need to create **5 files**. **2 of those 5 files will be auto-generated**, you will read more about it later, just right [here](#certpem-and-keypem)

#### **app.py**
{% highlight python %}
def TODO:
    pass
{% endhighlight %}

#### cert.pem and key.pem
Those 2 files are auto-generated, generally from openssl in terminal, or an easier solution from this [website that provides auto-signed certificates](https://www.ssl.com/online-csr-and-key-generator/).
Once you provide the Common Name, you can generate both files and have some kind of texts like this:
![cert-key-generated](/assets/img/cert-key-generated.PNG)

In your root directory (`python-server` in our example), copy and paste the :
- CSR in a file named `cert.pem` 
- Private Key in a file named `key.pem` 

#### requirements.txt
{% highlight txt %}
psycopg2
Flask
flask_cors
gunicorn
{% endhighlight %}

#### Procfile
{% highlight txt %}
web: gunicorn app:app
{% endhighlight %}



I promise we're almost done!
Now push all those files in a private repo on github.
Once you're done, go to your Heroku account, we're going to create your app.

## 4. The Heroku project

## 5. Fetch datas into Google Sheets
 

# Drawbacks
- blabla
- blabla
- blabla

# So what's next?

 


