######## This file contains the setup evolved for Movie Streaming project ######

a) Login by remote desktop to the server 192.168.2.9
b) Run the eclipse and start the tomcat server for one of the war packages
c) All the WAR's will start serving the endpoints.
d) http://192.168.2.9:8080/app-video.jsp will launch our app.
e) Local file on developer environment will launch app-video.html and point for JSON service to 192.168.2.9
d) Rest of the web stuff will be served by the local node.js server locally during dev.
f) Post development all data will be packaged in WAR and placed in tomcat server.
g) The Web App will refer to JS, Fonts, CSS, Templates locally
