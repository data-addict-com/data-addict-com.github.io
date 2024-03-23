---
layout: post
title:  I discovered the largest files in my Windows C disk
description: Have you ever wondered what are the largest files in your local disk ? Well, I also did. But at the same time, I had two constraints on mind 1) I didn't want to use any third party tool to process the disk scan 2) I was absolutely not going to scan it manually.
date:   2022-08-17 08-14-02 +0200
categories: tableau dataviz vizualisation disk windows os 
tags: tableau dataviz vizualisation disk windows os 
image: ../assets/img/2022-08-17/summary.png
published: true
---


* TOC
{:toc}

# Motivation

Have you ever wondered what are the largest files in your local disk ? Well, I also did. But at the same time, I had two constraints on mind :
- I **didn't want to use any third party tool** to process the disk scan.
- I **was absolutely not going to scan it manually**.

This article will show you step by step how I did it. But before we're diving in, let me show you the final **Tableau** data vizualisations, which are quite satisfying !

# Dataviz results

## First dataviz

| [   ![Extension total sizes, grouped by usefulness][summary]   ][summary]{:target="_blank"}
|:--:| 
| *Extension total sizes, grouped by usefulness* |

  
<details markdown=block>
<summary markdown=span><strong>Insights</strong></summary>
- There are **a lot** of files without any extension (light blue on the left-hand side).
- The **ucas** files from Unreal Engine archives actually make sense, as I do play **Fortnite**.
- The **vsix** files are some visual code extensions. I still wonder how they came into my computer, **I only use Sublime text as main editor**...
- I didn't realize how big my **png photos** were until this chart showed it up.
</details>
	



## Second dataviz

| [   ![Extensions with their total sizes and number of files, grouped by usefulness][extensions]   ][extensions]{:target="_blank"}
|:--:| 
| *Extensions with their total sizes and number of files, grouped by usefulness* |

  
<details markdown=block>
<summary markdown=span><strong>Insights</strong></summary>
- On average, **OS files** are **bigger** than non-OS ones.
- There are **more than 150k files without any extension** (I assumed they are for the OS but who knows?).
- There are **only 171 ucas files**, which means that **1 ucas file is larger than the average**.
- I honestly **should remove the useless 2Gb used by vsix** files.
</details>
	
## Third dataviz


| [   ![Number of files per folder depth][files-depth]   ][files-depth]{:target="_blank"}
|:--:| 
| *Number of files per folder depth* |



  
<details markdown=block>
<summary markdown=span><strong>Insights</strong></summary>
- There are **24 levels of folders**, where the first one is the disk itself `C:/`.
- **Most used directories** are generally **between 4th and 12th depth**.
- **6th level don't contain a lot of files** : there must be only subdirectories in this folder depth.
</details>
	

## Fourth dataviz

| [   ![Folders depths grouped by usefulness][folders-depths]   ][folders-depths]{:target="_blank"}
|:--:| 
|*Folders depths grouped by usefulness*
|*1 dot = 1 file*  
|*1 color = 1 folder*  
|*Y axis = folder depth starting with 1, from top to bottom* |   

  
<details markdown=block>
<summary markdown=span><strong>Insights</strong></summary>
- The far we go down (to **greater directories depth**), the **less are the amount of files**.
- Empty spaces that are created in non-OS files stand for **exclusive OS folders**.
- **Among OS files**, those large lined-up areas stand for **Microsoft Services** files :   
	![os-folder-1][os-folder-1] ![os-folder-2][os-folder-2] 
- **Among non-OS files**, the large pink and green lines stands for `%AppData%` subfolders, where all **caching** processes are happening and stored :   
	![pink-line][pink-line]

</details>
	


# How did I do it
## Gathering files details
Before having the above final vizualisation, the first step is obviously to gather data. I just used the following two lines code from my **cmd terminal** :
{% highlight cmd %}
cd C:/
where "*.*" /r . /t > f:\list-of-c-files.txt 
{% endhighlight %}

> Note that **the output file is stored out of the scanned disk** so that it doesn't interfer while scanning.

### Initial output
The output will look like shown below :
[   ![First raw data outputed from script][initial-output]   ][initial-output]{:target="_blank"}
Quite ugly, right ? Let's do some cleaning.

### Data cleaning
This step can be done in any software or programming language that you like. In my case, I directly used **Tableau Software**.   

- I **import the initial file** as a text file with a **random non-used character as delimiter**. From this way, I can customize all new calculated fields from raw data manually. In my case, I used `^` as the seen in this (french version) screenshot from **Tableau Software Desktop** : ![delimiter][delimiter]
- I create all the **new calculated fields** and **hide** the single raw column `src_all` :   
[![calculated-fields][calculated-fields]][calculated-fields]{:target="_blank"}
- I **preview final output data** to make sure everything fits to what I expected :
[![final-output][final-output]][final-output]{:target="_blank"}


And that's it, **we are [ready to dataviz](#dataviz-results)** !

# If you want to preview your own files...
Just ping me on [Twitter](https://twitter.com/jadyrama){:target="_blank"} and I will be glad to give you the **Tableau template** to get started quickly !

Feel free to **tell me what are your thoughts** on this side-project of mine on the comments section below.


[baseimg]: ../assets/img/2022-08-17/
[summary]: ../assets/img/2022-08-17/summary.png
[extensions]: ../assets/img/2022-08-17/most-used-extensions.png
[folders-depths]: ../assets/img/2022-08-17/folders-depths.png
[files-depth]: ../assets/img/2022-08-17/files-depth.png
[pink-line]: ../assets/img/2022-08-17/pink-line.png
[os-folder-1]: ../assets/img/2022-08-17/os-folder-1.png
[os-folder-2]: ../assets/img/2022-08-17/os-folder-2.png
[delimiter]: ../assets/img/2022-08-17/delimiter.png
[calculated-fields]: ../assets/img/2022-08-17/calculated-fields.png
[final-output]: ../assets/img/2022-08-17/final-output.png

[initial-output]: ../assets/img/2022-08-17/first-raw-data.png

