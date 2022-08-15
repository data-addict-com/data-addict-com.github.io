---
layout: post
title:  How to setup gitlab pages domain and subdomain step by step
date:   2022-08-15 00-00-00 +0200
categories: gitlab pages subdomain tutorial namecheap
published: true
---

* TOC
{:toc}

# Backstory
Recently I've been struggling with **Gitlab Pages custom domains**. I followed the [documentation][documentation]{:target="_blank"} meticulously, and it did not work. I kept receiving the following errors no matter how hard I tried :
![Subdomain not verified in Gitlab Pages 1/2][errors]   

![Subdomain not verified in Gitlab Pages 2/2][errors2]   

If you are here, you probably had the same issue !   
So what's the matter ? It seems that **[gitlab documentation is actually wrong][doc-wrong]{:target="_blank"}**. 


After many tests and failures by myself, I finally found out the always-working solution thanks to a [namecheap article][namecheap-article]{:target="_blank"}.

# Benefits
Gitlab Pages is a **free** hosting solution for a **static app**, but it requires some technical skills ad the building process has to be managed by yourself. Here are few advantages :
1. It can host a **private repo** unlike Github pages
2. A **config file is useable** in multiple repos
3. There are **[many available templates][gitlab-templates]{:target="_blank"}** that are ready to start with   

If you want to have a whole comparison between Github pages and Gitlab pages, here is a [more detailed article](/why-gitlab-is-sometimes-better-than-github){:target="_blank"} .


# Before we start
## Prerequisites
Make sure that you have :
- Deployed your Gitlab Pages (check [this][react-app-gitlab] out if you ever want to deploy a react app)
- A domain name registered

In this specific example, I'm going to use **[namecheap][namecheap]{:target="_blank"}** as registar.   

## Keywords replacement
The name of my subdomain is `jsonvizz` and my original app `aaa` will be hosted at [`jsonvizz.jadynekena.com`](https://jsonvizz.jadynekena.com){:target="_blank"}. I <u>hightly recommand</u> you to name **your subdomain** as same as your **repo name**, in order to not be confused. In summary :
- `jsonvizz` : replace it with `yoursubdomain`
- `jadynekena.com` : replace it with `yourdomain.com`
- `jadynekena.gitlab.io.` : replace it with `yourusername.gitlab.io.`
- `yourverificationcodefromgitlab` : replace it with your verification code [in your gitlab pages settings][Gitlab Pages settings]

Let's dive right in !

# In your Gitlab Pages settings
Go to **Settings** > **Pages** > **New domain**, then write down your subdomain URL in the **Domain** field. In my case, I wrote down `jsonvizz.jadynekena.com`. Now on **Create New Domain**.
![Create a new domain in Gitlab Pages][new-subdomain]

You will now have the following screen :
![Gitlab Pages domain settings][page-domain-settings.png]

**⚠️ DO NOT FOLLOW GITLAB INSTRUCTIONS UP THERE !⚠️**   
As stated [before](#backstory), those instructions are wrong. The only thing you will need later on is the **`gitlab-pages-verification-code=...`** part in `Verification status`.   
Now let's open another one with [your advanced DNS settings](#in-your-advanced-dns-settings).

# In your advanced DNS settings
## Step 1 : add a **`A` record**
In your DNS advanced settings, add a A record as follows: 
{% highlight ruby %}
Type: A
Host: @
IP: 35.185.44.232
{% endhighlight %}

The IP address here is pointing to the Gitlab Pages server.

## Step 2 : add a **`CNAME` record**

<details markdown=block>
<summary markdown=span><strong>Domain case</strong></summary>
There is no need to add a `CNAME` record in domain case.
</details>

<details markdown=block>
<summary markdown=span><strong>Subdomain case</strong></summary>
{% highlight ruby %}
Type: CNAME
Host: jsonvizz
Value: jadynekena.gitlab.io.
{% endhighlight %}


**Do not forget the `.` at the end of the `Value` field, it is an important detail.**
> Please kindly refer to the [keywords replacement](#keywords-replacement) if you have any doubt.
</details>

## Step 3 : add a **`TXT` record**
From your **[Gitlab Pages settings][Gitlab Pages settings]** , you will need the `gitlab-pages-verification-code` value.


<details markdown=block>
<summary markdown=span><strong>Domain case</strong></summary>
{% highlight ruby %}
Type: TXT
Host: _gitlab-pages-verification-code
Value: gitlab-pages-verification-code=yourverificationcodefromgitlab
{% endhighlight %}
</details>


<details markdown=block>
<summary markdown=span><strong>Subdomain case</strong></summary>
{% highlight ruby %}
Type: TXT
Host: _gitlab-pages-verification-code.jsonvizz
Value: gitlab-pages-verification-code=yourverificationcodefromgitlab
{% endhighlight %}
</details>

> Please kindly refer to the [keywords replacement](#keywords-replacement) if you have any doubt.

## Step 4 : refresh your `Verification status`
Go back to your [Gitlab Pages settings][Gitlab Pages settings], and click on the `Retry verification` button. You should now have the **success message** as follows :
![Success verification status][success-domain.png]

Now go to your website is available at **`yourdomain.com`** / **`subdomain.yourdomain.com`**.   

If this article ever helped you, please let me know down below.   
Happy hacking !


[baseimg]: ../assets/img/2022-08-15/
[documentation]: https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/index.html#for-both-root-and-subdomains
[doc-wrong]: https://www.namecheap.com/support/knowledgebase/article.aspx/10446/2208/how-do-i-link-my-domain-to-gitlab-pages/#comment-5413227032
[errors]: ../assets/img/2022-08-15/errors-gitlab-pages-subdomain.png
[errors2]: ../assets/img/2022-08-15/errors-gitlab-pages-subdomain-2.png
[namecheap-article]: https://www.namecheap.com/support/knowledgebase/article.aspx/10446/2208/how-do-i-link-my-domain-to-gitlab-pages/ 
[react-app-gitlab]: /create-and-deploy-react-JS-app-for-free/#steps
[namecheap]: https://www.namecheap.com/
[gitlab-templates]: https://gitlab.com/pages
[Gitlab Pages settings]: #in-your-gitlab-pages-settings
[new-subdomain]: ../assets/img/2022-08-15/new-subdomain.png
[page-domain-settings.png]: ../assets/img/2022-08-15/page-domain-settings.png
[success-domain.png]: ../assets/img/2022-08-15/success-domain.png