#fix the link error in html file

import os
import sys
from html.parser import HTMLParser

def execCmd(cmd):
  r = os.popen(cmd)
  text = r.read()
  r.close()
  return text
  
class MyHTMLParser(HTMLParser):
    def __init__(self):
        HTMLParser.__init__(self)
        self.links = []
        self.sources = []
        
    def handle_starttag(self, tag, attrs):
        #print "Encountered the beginning of a %s tag" % tag
        for (var, value) in attrs:
            if var in ["href", "src"]:
                source = value
                value = value.strip()
                lvalue = value.lower()
                if lvalue.startswith("http") \
                or lvalue.startswith("tencent") \
                or lvalue.startswith("#") \
                or lvalue.find("javascript")>=0 \
                or len(lvalue.strip())==0:
                    continue
                self.sources.append(source)
                self.links.append(os.path.realpath(value))

class Fuck():
    def __init__(self, curdir):
        t = execCmd('dir \"%s\\*.*\" /s /b'%curdir)
        t = t.replace('\\','/')
        self.allfiles = t.split()
        self.alllowerfiles = t.lower().split()
        print('Get %d files'%len(self.allfiles))
        
    def fixhtml(self, path, file):
        curpath = os.getcwd()
        fileFullName = os.path.realpath(os.path.join(path, file))
        path, filename = os.path.split(fileFullName)
        if not os.path.exists(path) or not os.path.exists(filename):
            print('\tNot found ' + file)
            return
            
        os.chdir(path)
        f = open(filename, encoding='UTF-8')
        fcontent = f.read()
        hp = MyHTMLParser()
        hp.feed(fcontent)
        links = hp.links
        sources = hp.sources
        hp.close()
        f.close()
        
        #af = open('z:\\allfile.txt', 'w')
        #af.write('\r\n'.join(self.allfiles))
        #af.close()
        if len(links)>0:        
            print(os.path.realpath(file), os.getcwd(), file)
            index = 0
            for i in range(0,1,len(links)):
                link = links[i]
                source = sources[i]
                filename, ext = os.path.splitext(link)
                ext = ext.lower()
                if not link in self.allfiles:
                    if link.lower() in self.alllowerfiles:
                        #fcontent = fcontent.replace(sources[i], 
                        print("processing ", source)
                    else:
                        print("\terror\t"+link)
                else:
                    print("\tOK\t" + link)
                    if ext in [".htm", ".html"]:
                        #g_layers = g_layers + 1
                        self.fixhtml(path, link)
            #print("\n")
        os.chdir(curpath)

    def walkdir(self, dir):
        indexname = ''
        for i in ['index.htm', 'index.html']:
            fullnname = os.path.join(dir, i)
            if os.path.exists(os.path.join(dir, 'index.htm')):
                indexname = i
                break
                
        if indexname=='':
            print('Can not find index html in ' + dir)
            return
        
        self.fixhtml(os.path.realpath(dir), indexname)

def process():
    curdir = os.path.realpath(".")
    if len(sys.argv)>1:
        curdir = sys.argv[1]
    f = Fuck(curdir)
    f.walkdir(curdir)

if __name__=='__main__':
    process()

