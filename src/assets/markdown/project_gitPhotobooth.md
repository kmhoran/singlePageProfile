## Git Photobooth


My Photobooth library is a fun exploration into Git Hooks, and Python Distribution tools. The idea is simple: for a given Git repository, committing a change will snap a webcam picture of the Developer, and save it to their photos.
<br/>
![alt text](./assets/images/capture-2018-1-30_17_29_24-small.jpg "Commit: initialize project")
<br/>

In building this demo project, my goal was really to get a feel for Git Hooks and Python Package Distribution, giving little regard to user experience. This distribution is Unix dependent (sorry Windows), runs on Python3, and is built around OpenCv -- which itself is not the most straight-forward install.

</br/>
![alt text](./assets/images/capture-2018-2-2_9-19-9-small.jpg "Deep in the code")
<br/>

So the real focus of this project is the Git Hooks. Git Hooks actually come built-in with your Git download, and really only take some un-commenting to get a 'hello world.' In all, there are about a dozen hooks for triggering custom scripts around typical Git actions. For this project, I turned my attention specifically to the 'post-commit' hook, which is recommended for custom notifications. 

</br/>
![alt text](./assets/images/capture-2018-2-2_15-31-44-small.jpg "Commit: Add photocapture logic")
<br/>

The Trickest part of this project was actually building out the installation process. I got a lot of inspiration from the [Capitain Hook](https://github.com/alexcouper/captainhook) project which, as the name suggests, is another GitHook-driven project. Photobooth gave me an upclose look at Python Setuptools and the tricks needed to run scripts after a normal install.

<br/>
### setup.py
```python
from setuptools import setup
from setuptools.command.install import install

from lib import configure_directories

class install_photobooth(install):
      def run(self):
            configure_directories.run()
            install.run(self)

setup(
      cmdclass={
            'install': install_photobooth
      },
)
```
<br/>

Though I probably won't register Photobooth with pypi, if I were to continue building out the project, I would focus first on being able to distribute this project to Windows. Then I'd have a ball. Updating social-media profile pictures and sending notifications to my parents would be at the top of my TODO list. 

