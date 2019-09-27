from bs4 import BeautifulSoup, Comment
import os


dir = "html/9781788996662/"

for file in os.listdir(dir):
    if file.endswith(".htm"):
        with open(os.path.join(dir, file), 'r') as f:
            soup = BeautifulSoup(f, "lxml")
            
            soup.find('main-nav').decompose()
            soup.find('timed-unlock-upsell').decompose()
            soup.find('product-sidebar').decompose()
            soup.find('early-access').decompose()
            soup.find('project-end-modal').decompose()
            soup.find(id='product-claim-modal').decompose()
            soup.find(class_='container book-page').find(class_='col-sm-12').decompose()
            soup.find('timed-unlock-soft-upsell').decompose()
            soup.find(class_='row ns').decompose()
            [tag.decompose() for tag in soup.find_all(class_='row ns ng-hide')]
            soup.find(id='intercom-container').decompose()
            soup.find(id='_hj_feedback_container').decompose()
            soup.select_one('script[src*="cookieconsent.min.js"]').find_next_sibling('script').decompose()
            soup.select_one('link[href*="cookieconsent.min.css"]').decompose()
            soup.find("div", {"aria-label": "cookieconsent"}).decompose()
            soup.find(class_='alert alert-logged-out mb25 reader-container col-sm-12 ng-hide').decompose()
            soup.find('subs-footer').decompose()
            [tag.decompose() for tag in soup.find_all('noscript')]
            [tag.extract() for tag in soup.find_all(string=lambda text: isinstance(text, Comment))]
            soup.find('spinner').decompose()
            soup.find(class_='mb15 ng-hide').decompose()
            [tag.decompose() for tag in soup.find_all(class_='toolbar clearfix')]
            # soup.select_one('link[href*="app.104d50d2c3a3114104d18ba8a565ba3d.bundle.css"]').decompose()
            soup.find(id='video-content').decompose()
            soup.find('error-dialog').decompose()
            soup.find(class_='col-sm-12 ng-scope ng-hide').decompose()
            [tag.decompose() for tag in soup.find_all('script', text=lambda t: t and 'lukaszf6@gmail.com' in t)]

        with open(os.path.join(dir, file), 'w') as f:
            f.write(str(soup))
