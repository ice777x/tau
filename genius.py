import requests
from bs4 import BeautifulSoup
import re

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
}
r = requests.get("https://genius.com/Ados-and-sanser-dayan-lyrics", headers=headers)
soup = BeautifulSoup(r.text, "html.parser")
pattern = re.compile(
    r'Lyrics__Container-sc-1ynbvzw-6 YYrds">(.*)</div><div class="RightSidebar__Container-pajcl2-0 jOFKJt">'
)
# text = re.match(pattern, r.text)
text = re.findall(pattern, r.text)
lyrics: str = text[0].split(
    '</div><div class="RightSidebar__Container-pajcl2-0 jOFKJt"'
)[0]
print(lyrics)
