First Milestone Project: 

https://loulunds.github.io/1st_Milestone_Project/

--------

---
A Salon Website with HTML and CSS
===

UX
-----------

_**Pure Ambitions Salon**_

A salon, in a neighborhood in Östermalm, Stockholm, needs an upgrade. 
While making this website, I envisioned the salon's interior and services.

For english and swedish-speaking customers.

**USER STORIES**

* As a CUSTOMER, I want to get the feel of the salon. 

* As an OWNER, I want customers to book a call.

<a href="/mockup_wireframe/mockup.jpg">Mockup</a>

<a href="/mockup_wireframe/wireframe.jpg">Wireframe</a>

---

FEATURES
---------------

**EXISTING FEATURES**

* Carousel for images from Bootstrap

* Animate on Scroll 

**FEATURES LEFT TO IMPLEMENT**

* A photo gallery for the salon's works (optional because of Instagram)



**TECHNOLOGIES USED**


1. HTML
2. CSS
3. Bootstrap 4.4.1 (for the image carousel)
4. Animation on scroll from https://github.com/michalsnik/aos
5. Font Awesome 4.7.0

---
TESTING
----

Intentions for customer user story was reached by styling the website in such a way that it reflects the salon's environment.
Intentions for owner user story was reached by making a form and providing a ``form control`` for required input. 

Contact form has `form control` to make users input required texts. There is an issue with the Phonenumber input because it cannot check for letters. I just provided a `min-length`
and `max-length` just to have some control. The `Book a Call button` does not have a `form action` ans cannot send form inputs. 

All external links in the footer will open in a new tab, the navbar links will not; thus will open the chosen part of the website. 

Google maps link opens to the street address of the salon.

The _**Animate on Scroll**_ effect will function upon scrolling upwards and downwards and upon opening a link from navbar.

The _**Carousel for images**_ automatically srolls the images but the scroll buttons on both sides can make users scroll manually.

The site was tested on multiple browsers (Chrome, Internet Explorer, Safari) and on multiple devices (Samsung Note and Galaxy, Samsung galaxy tab, Iphone 5, Ipad) to ensure compatibility and reponsiveness. 
During the testing phase, there was no issues regarding responsiveness but there was a layout problem on Samsung tab for the Google maps location. 

---

DEPLOYMENT
---

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. 
In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone`
 https://loulunds.github.io/1st_Milestone_Project/ into your terminal. To cut ties with this GitHub repository,
 type git remote rm origin into the terminal.

 ---

CREDITS
------

**CONTENT**

Image carousel  source: https://getbootstrap.com/docs/4.0/components/carousel/  
Animate on scroll source: https://github.com/michalsnik/aos

Other contents were written by me. 

**MEDIA**

The photos were obtained from google as to this website is for educational purposes only.

Google search: Lana del Rey  
Google search: Hairsalon

**ACKNOWLEDGEMENT**

I received inspiration from https://www.youtube.com/watch?v=fzwOBOjSto8 (Top 5 Web Design Trends 2019). 
I got some ideas that I incorporated in the website like asymetrical layouts and animations on scroll. 

