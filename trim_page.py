from bs4 import BeautifulSoup, Comment
import os
import re


def decompose(node):
    if node:
        node.decompose()


book_id = '9781788835831'
dir = f'html/{book_id}/'
href_regex = f'{book_id}.*'

for file in os.listdir(dir):
    if file.endswith(".htm"):
        print(file)
        with open(os.path.join(dir, file), 'r') as f:
            soup = BeautifulSoup(f, "lxml")

            [tag.decompose() for tag in soup.find_all('script', text=lambda t: t and 'lukaszf6@gmail.com' in t)]

            if (node := soup.find('body', class_='prototype-nav home-body sidebar-open')):
                node['class'] = 'prototype-nav home-body'

            soup.find('main-nav').decompose()
            soup.find('timed-unlock-upsell').decompose()
            soup.find('product-sidebar').decompose()
            soup.find('early-access').decompose()
            soup.find('project-end-modal').decompose()
            soup.find(id='product-claim-modal').decompose()
            soup.find(class_='container book-page').find(class_='col-sm-12').decompose()
            decompose(soup.find('timed-unlock-soft-upsell'))
            # decompose(soup.find(class_='row ns'))
            [tag.decompose() for tag in soup.find_all(class_='row ns ng-hide')]
            decompose(soup.find(id='intercom-container'))
            decompose(soup.find(id='_hj_feedback_container'))
            soup.select_one('script[src*="cookieconsent.min.js"]').find_next_sibling('script').decompose()
            soup.select_one('link[href*="cookieconsent.min.css"]').decompose()
            soup.find("div", {"aria-label": "cookieconsent"}).decompose()
            decompose(soup.find(class_='alert alert-logged-out mb25 reader-container col-sm-12 ng-hide'))
            soup.find('subs-footer').decompose()
            [tag.decompose() for tag in soup.find_all('noscript')]
            [tag.extract() for tag in soup.find_all(string=lambda text: isinstance(text, Comment))]
            decompose(soup.find('spinner'))
            decompose(soup.find(class_='mb15 ng-hide'))
            [tag.decompose() for tag in soup.find_all(class_='toolbar clearfix')]
            # soup.select_one('link[href*="app.104d50d2c3a3114104d18ba8a565ba3d.bundle.css"]').decompose()
            decompose(soup.find(id='video-content'))
            soup.find('error-dialog').decompose()
            decompose(soup.find(class_='col-sm-12 ng-scope ng-hide'))
            decompose(soup.find(class_='mt50'))
            decompose(soup.find(class_='mt50 ng-scope'))
            decompose(soup.find(class_='text-center mt100 mb35'))
            decompose(soup.find(class_='info-block info-block--orange mt20 mb20 ng-hide'))
            # decompose(soup.find(class_='button-group text-right ng-scope'))
            decompose(soup.find('sidebar-overlay'))
            decompose(soup.find(class_='clearfix'))
            decompose(soup.find(class_='alertbox'))

            if (node := soup.find('a', class_='btn btn-primary pull-right btn-lg btn-block')):
                href = re.findall(href_regex, node['href'])[0]
                href = href.replace('/', ':')
                node['href'] = href


        with open(os.path.join(dir, file), 'w') as f:
            f.write(str(soup))
