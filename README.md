# Homepage

## Projects Description

Personal homepage where I share informations about myself, posts and the projects I am working on. I offer a newsletter that is sent out once a week and summarizes the posts and projects I've been working on over the past week. The idea is to pass this newsletter on to my family as well to keep them up to date.

## Overview

- [x] create a header witht my name, about, posts, projects and subscribe + twitter in the format like matt rickard
- [ ] create a main section which is supporting full markdown functionality and add some text for the about section
- [ ] create a universal class or something where i can change the color of the font everywhere
- [ ] create a posts section where each entry gets automatically the date of today added to. headline gets created via parsing from header of markdown file 
- [ ] create a first post who demonstrates code blocks, images, bullet points, lists, distances and equations and on the bottom add a subscribe button in the matt style
- [ ] add my projects site (need to make it completely new)
- [ ] share it to my family and to my friends (also daan because he once had the idea of creating a newsletter)
- [ ] best case build it as reuseable framework for other people because i would love to see other people tracking their projects and its a unique frame work which i havtn seen yet so really interesting. perhaps i can even build a small simple gui which makes it super simple adding your projects 
- [ ] create post for myersbriggs project and share to Jan 
- [ ] share the project tracking page to christina cacioppo
- [ ] share to matt and thank him for inspiration 

## Steps 

- [x] create repo 
- [x] create a react app 
- [x] add same header like matt rickard but with my categories 
    - [x] add all my categories 
    - [x] same font size 
    - [x] change to fist from mouse when on link 
    - [x] add line under header 
    - [x] add distance to right and left
    - [x] add distance between name and categories
    - [x] add my universal orange 
    - [x] change background navbar to same black like matt rickard 
    - [x] add spacing between navbar elements
    - [x] reduce size tiwttter icon
    - [x] adjust line exact to container
- [x] create a js file for the about page
- [x] render the file with black background
- [x] create a folder for md files
- [x] add a md file with some content
- [x] render this md file so that the content appears 
- [x] change the style of my links to my orange and remove the underline
- [x] make background black
- [x] make font white
- [x] make bottom line fitting
- [x] center text
- [x] adjust font size
- [x] make background completely black
- [x] increase distance between spaces in text - vertical and horizontal
- [x] make line move with text when shrinking + text below 
- [x] make headlines in wpure white color (check color matt)
- [x] make bullet points to grey like matt 
- [x] same with numbering
- [x] check if adding images works
- [x] make color change after link waas clicked work
- [x] check hoq qoutes look like
- [x] distance between number and bullets same like distance between two text 
- [x] add white color to text at respective positions
- [x] check that responsiveness is working when moving the text
- [x] fix problem that images occur right 
- [x] add some appropriate text of mine
- [x] add social netoworks  
- [x] add site posts and if click on posts a site with white main and nav opens up
- [x] archive folder with a sample md 
- [x] add md file to google cloud storage
- [x] display current date and take as header filename 
- [x] add container like in about section but cut off at the end of my nanme
- [x] make correct date and also same format and also name
- [x] make media query that date is on same position like name
- [x] background black, date white, font orange 
- [x] fix size of navbar - orient att matt site 
- [x] fix size post site
- [x] add about 
- [x] add blocksatz
- [x] on click of respective markdown file open a new site which is open a site where the file is rendered
- [x] apply the markdown settings from about page 
- [x] display all files out from the archive folder
- [x] add only the files to the archive folder which are not already in there
- [x] check that the last md file which i added is on the top of the website 
- [x] remove bullet point from ## headers
- [x] remove max book and toc and projects header
- [x] remove samples and rather write a intro and explain the system
- [x] workflow so that pushes are getting reflected
- [x] update the whole content from the project file so that it looks more professional 
- [x] create a subspription site
    - [x] add subscription button and above add "Subscribe for getting short posts about engineering, startups, and everything else in your inbox."
    - [x] add margin like matt
    - [x] on hover make subscribe button darker  
- [x] setup flask app from youtube guy and test if this works 
- [x] look into the logs and try to nachvollziehen
- [x] find the central point for all this apps so that i can delete each respective app eventually
- [x] remove docker shit
- [x] put server online which is printing the email into the logs 
- [x] setup a server on gcp which is hosting my python script so that i can send the mail to that server and the script is manipulating the json file
- [x] add to prev script functionality that confirmation mail is send to given mail
- [x] test if it works 
- [x] setup create yaml
- [x] add margins to emails 
- [x] create py script for sending mails
- [x] check if it works 
- [ ] deploy react app and add continous development to it
    - [x] check first if it works with .io domain
    - [x] try with custom domain 
- [x] schedule for daily 24:00
- [x] fix that posts are not displayed
- [x] if email is already in email list or email not an valid email "Something went wrong." in red else "Success. You are on the list" in green
- [x] check that email appears only once after adding twice. check that second times red something went wrong and if no valid email address was added error appears 
- [ ] check that each workflows are working
    - [ ] on push project ste is getting updated if new entries
    - [ ] add titles of new articles with add_json yml 
    - [ ] via main.yml add new pushed articles to the bucket
    - [ ] check everyday 24:00 if new posts if yes send all users new post
- [ ] when reload on subdomain it shouldnt happen an error 

- [ ] change color of links from about page to yellow if clicked 
- [ ] add handpointer for all clickable links
- [ ] check grammatic on about page
- [ ] check grammatic on projects page
- [ ] on click of max hager go back to about site and not add #home if max hager is clicked
- [ ] remove white hover from max hager 
- [ ] add twitter 
- [ ] change hover color submit button  
- [ ] remove blue border around input button 
- [ ] add icon and tabname
- [ ] checkout how listing in google looks like and if necessary adjust 
- [ ] Create readme which is describing each functionality like how the posts work and how the subscribe button works 

## Publishing

- [ ] share johannes my projects list and point to his twitter link in my project list 
- [ ] write post about blogging site 


as name i take the title from the markdown file and left by i use the date with some js library. continous integration. because everything is on a server 

## Future

- build a working prototype for the project overview site which could be used from other people. the application would look like the project site is looking now besides that in the header section is a form where you can add new entries. https://psycnet.apa.org/record/2002-15790-003

addd