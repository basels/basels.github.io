HTML_HEADER_START = '''<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Basel Shbita - Academic</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="css/styles.css" rel="stylesheet" type="text/css" media="all">
    <link rel="icon" type="image/png" href="images/myicon.png">
    <link rel="stylesheet" href="https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/2bcd4e2c08.js" crossorigin="anonymous"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KG4E7K5KKQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-KG4E7K5KKQ');
    </script>
  </head>
  <body>
    <header>
      <nav class="navbar navbar-default navbar-static-top navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <span>
              <a id="logo_h2" href="index.html"><span style="color:#33cccc">Basel Shbita</span></a>
            </span>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="index.html">Home</a></li>
              <li><a href="projects.html">Academic</a></li>
              <li><a href="art.html">Art</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
'''

HTML_HEADER_END = '''
  </body>
</html>
'''

HTML_FOOTER = '''
  <footer class="footer">
    <small>© 2022 Basel Shbita</small>
  </footer>
'''

CARD_TAG_TOOL = '''
<span class="badge">%s</span>
'''

CARD_TAG_FIELD = '''
<span class="badge" style="background-color: #333333">%s</span>
'''