# htmlLesson
This is a prototype of a short lesson to teach HTML, CSS and Javascript.

# Github
Github is a web service which you can get account to save your files and make them visible to the public. Github uses the 'git' application to manage the files on your account. A brief introduction to Github and git may be found at www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiVhttps://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV

This tutorial leads you through the differences between git and github.

To summarize and expand the concepts a bit'
To initialize a directory for git
```
git init
```
changed files are "staged" for the commit with the 'git add' command.
```
git add README.md
```
Staged changes are "committed" with the 'git commit' command.
```
git commit 
```
Don't forget to put in a reason with the commit. The git command line is modeled after Unix/Linux command that include options as flags. A flag may be a hyphen followed by a command option character or it may be a double dash followed by a command option word. In either case there may be more information required by the option which is then included after the option. So to include a reason (or message) with the commit, use something like:
```
git commit -m 'updated the README file'
```
Differences between the latest commit of a file and the previous version:
```
git diff README.md
```
The status of git can be viewed at any time with:
```
git status
```
To link a local repository with a repository on github, use Google to find the use case you need. This linking allows you to work on local files on your local machine without being on-line. Changes may be commited while off-line, but to sync the off-line and on-line repositories, you will need to use 'git push' while on-line.

If you want you can publish a static web page on the github site following the instructions at https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site

# Getting Help
You can get help from the courses or you can use the slack channel at SCCodes.slack.com. If you need an invitation to join the channel use https://bit.ly/SCCodesSlack (case is important!) The slack channel may be faster as it is monitored by several mentors as well as others in your cohort. If you are having trouble, chances are others are having the same trouble. Don't be shy.
