import React from "react"
import FlickrImageLegacy from "../../components/FlickrImageLegacy"
import Link from "../../components/Link"

import BlogPost from "../../components/BlogPost"

export const metadata = {
  "date": "2015-05-13 14:33",
  "title": "Two Years Later",
  "travel_dates": "2015-05-13",
  "tags": [
    "Retrospective"
  ],
  "formattedDate": "May 13th 2015, 2:33:00 pm",
  "canonicalPath": "/2015/05/13/two-years-later"
}

export const intro = <div className="postIntro">
<FlickrImageLegacy flickrID="17568248432" linkUrl="/2015/05/13/two-years-later" caption="Roatan Sunset" />

<p>
So today marks two years since <Link to="/2013/05/12/its-go-time/">I last set
foot in Australia</Link>.
</p>
</div>

export const body = <div className="postBody">
<FlickrImageLegacy flickrID="17568248432" linkUrl="https://www.flickr.com/photos/lucasthenomad/17568248432" caption="Roatan Sunset" />

<p>
So today marks two years since <Link to="/2013/05/12/its-go-time/">I last set
foot in Australia</Link>.
</p>
<p>
I can't claim it's been two years of real travelling, since I've been stopped in
the one place since January, but Roatan is a holiday island so my life still has
the same feel to it. People are always coming and going, which means meeting new
friends and having to say goodbye to them sooner than I'd like. I'm just no
longer the one having to lug my bag along to somewhere new all the time.
</p>

<p>
Looking back and thinking about all the beautiful places I've been in those two
years, the incredible things I've been lucky enough to do, and the amazing
people that I've gotten to meet, it's fair enough to say that I have no regrets
about the sacrifices I had to make to make this all possible.
</p>

<p>
I've gotten to dive all along the Mesoameican Barrier Reef. I've climbed
volcanoes and seen them erupt with my own eyes. I've swam in the lakes of now
extinct volcano craters. I've made massive progress towards some day being
properly bi-lingual. I've been to my first Burning Man and spent 8 days in the
desert. I've explored some of the most raved about Cities in the USA. I've
wandered through the ruins of a bunch of ancient civilisations. I've dived in
the cenotes of the Yucatan. I've eaten the cheapest tacos from the dodgiest
looking street vendors you can imagine. I ate a cooked spider; on purpose. I've
been to the most extravagant Day of the Dead celebrations in Mexico. I got to
see Cuba before the trade embargo lifts and rode around in beautiful cars nearly
twice my age. I've lived on a beautiful Caribbean island and gotten paid to
dive. I've made some life-long friends from all over the world who I look
forward to visiting some day (or yet again!). It's been a wonderful year! Some
day I hope I'll catch up on writing about it all :P
</p>

<p>
Nothing lasts forever, but the changes can always be seen in a positive light. I
can feel this trip beginning to draw to a close, so I'll probably be seeing a
lot of my Australian friends again in the not too distant future. I'd love to
hold out just long enough to miss Melbourne's winter, but I'm not sure that I'm
going be able to make it that far. I see challenges in my future readjusting to
life in Australia and the ridiculously high price of everything, finding a new
place to live, a new job to keep me busy, and trying to fit back into a
friendship circle that has evolved so much since I last saw them; but those are
all bridges I will cross as I come to them. For now I'm still relishing the last
few months of this amazing journey. Thanks for following along the ride!
</p>
</div>
const blogPages = []

export default () => <BlogPost metadata={metadata} body={body} />
