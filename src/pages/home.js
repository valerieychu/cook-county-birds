import React from "react";
import "../styles/global.less";
import "../styles/home.less";
import image from "../images/valeriechu.png";
import divider from "../images/divider.svg";
import Header from "./header";
import Footer from "./footer";
import FlourishEmbed from "./flourishembed";
import Lakefill02227 from "../images/Lakefill-02227.jpg";
import Cangoo2023 from "../images/Cangoo-2023.jpg";
import CangooMainPhoto from "../images/4-1-23-DSC05336.jpeg";
import LotsofCangoo from "../images/1-26-23-DSC04347.jpeg";
import CangooAverages from "../images/cangoo_averages_per_year.jpg";
import Lakefill01989 from "../images/Lakefill-01989.jpg";

const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="centered-text">
          <h1 className="h1">
            "A Spectacular Success": The birds of Cook County
          </h1>
          <h2 className="h2">
            Northwestern's bird species illustrate stories of recovery
          </h2>

          <figure className="image">
            <img
              src={CangooMainPhoto}
              alt="A Canada goose swims in the middle of the lake toward a large glass building in the background. It is looking off to the distance."
            />
            <figcaption className="image-caption">
              A Canada goose swims on Northwestern University's Lakefill on
              April 1, 2023. (Photo by Valerie Chu)
            </figcaption>
          </figure>

          <p className="paragraph">
            Canada goose numbers in Cook County are holding steady — for the
            past five years, bird watchers have spotted an average of 29 geese a
            day around the shores of Lake Michigan.
          </p>

          <p className="paragraph">
            Yet, despite their prevalence on Northwestern’s Lakefill today, this
            wasn’t always the case.
          </p>

          <p className="paragraph">
            “The crazy thing about Canada geese is that back in the 1950s,
            people thought that the large, non-migratory Canada goose was
            extinct,” said John Bates, Curator of Birds at the Field Museum.
          </p>

          <p className="paragraph">
            Bates pointed to the research of Harold Hanson, who wrote a book
            called “The giant Canada goose” where he described how people tried
            to reestablish Canada geese across the United States.
          </p>

          <p className="paragraph">
            “It was a spectacular success from the Canada goose perspective,”
            Bates said. “So all those non-migratory Canada geese that are here
            year-round are actually descended from those 100 birds in Rochester,
            Minnesota in 1950.”
          </p>

          <p className="paragraph">
            A prominent ornithological study published in 2019 found that 2.9
            billion birds have vanished since 1970. Yet to Bates, looking at the
            stories of individual bird species also brings him hope that various
            other species can recover.
          </p>

          <p className="paragraph">
            There have been 490 unique bird species spotted in Cook County,
            according to eBird data. Birdwatchers have recorded bird sightings
            in practically all corners of the county, with Montrose Point Bird
            Sanctuary and Northwestern University proving to be particular
            places of interest.
          </p>

          <FlourishEmbed visualizationId="27686289" />

          <p className="paragraph">
            Dr. Eli Suzukovich III, who teaches Northwestern’s Maple Syrup and
            Climate Change class, said that over the years, he has kept an eye
            on winter birds and the change in bird species on campus.
          </p>

          <p className="paragraph">
            “Right now, when the sap starts flowing, we get goldeneye ducks
            predominantly, and we get some buffleheads,” Suzukovich said. “And
            in the last couple of years, students and myself, we've only seen
            like maybe three pairs, nothing major. If we go back to the 90s and
            the 80s, you would have had like a couple 100 pairs out in the lake
            in January or February. These were common Chicago winter ducks.”
          </p>

          <p className="paragraph">[Insert iNaturalist data here]</p>

          <p className="paragraph">
            “But the last 10 years since I've been doing maple tapping, the most
            I've ever seen at once — and it was a very cold winter — was 12
            pairs. That was like for a day, and then they were gone.”
          </p>

          <p className="paragraph">
            Suzukovich said that the decline of these two ducks appearing on the
            Lakefill could be due to a number of factors such as changed flight
            patterns or the weather being too warm for an arctic duck. But he’s
            noticed another pattern in a different species.
          </p>

          <p className="paragraph">
            The common merganser is a duck which Cornell Lab of Ornithology’s
            All About Birds guide has an entry for: females have “rich, cinnamon
            heads with a short crest,” while males have “clean white bodies,
            dark green heads, and a slender, serrated red bill.”
          </p>

          <figure className="image">
            <img
              src={Lakefill02227}
              alt="A common merganser swims on Northwestern's Lakefill."
            />
            <figcaption className="image-caption">
              A common merganser swims on Northwestern's Lakefill at sundown on
              Feb. 26, 2026. (Photo by Valerie Chu)
            </figcaption>
          </figure>

          <p className="paragraph">
            “I don't know exactly what prompted it, but you see more of these
            common mergansers than you used to and it does also seem to coincide
            with warmer and unpredictable winters,” Suzukovich said.
          </p>

          <p className="paragraph">
            On a warm February evening, Weinberg fourth-year Alex Boyko stood on
            a small hill at the curve of Northwestern’s Lakefill, a pair of
            binoculars held to his eyes.
          </p>

          <figure className="image">
            <img
              src={Lakefill01989}
              alt="A man with a pair of binoculars looks out across the lake."
            />
            <figcaption className="image-caption">
              Alex Boyle peers through a pair of binoculars toward Nortwestern's Lakefill on Feb. 18, 2026. (Photo
              by Valerie Chu)
            </figcaption>
          </figure>

          <p className="paragraph">
            “We have some migratory ducks on the lagoon right now,” Boyko said.
            “So I'm going out to take a look at those.”
          </p>

          <p className="paragraph">
            In the span of 45 minutes, Boyko counted 63 individual birds and 19
            species. Among them were 10 Canada Geese, 6 Hooded Mergansers, 1
            Common Merganser, 2 Buffleheads and 5 Red-winged Blackbirds.
          </p>

          <p className="paragraph">
            “There's a lot of biodiversity,” Boyko said. “It (birdwatching) is a
            good way to recharge after a busy day — go out, spend some time
            around nature.”
          </p>

          <p className="paragraph">
            That’s exactly what Weinberg third-year Zach Wolk does too.
          </p>

          <p className="paragraph">
            Wolk likes Canada geese. On Northwestern’s version of the social
            media app Fizz, he’s become known as the “Goose Whisperer.” He even
            has a stuffed Canada goose sitting in his living room — a mini-model
            of the real thing that Wolk admits might not be the most
            true-to-life, yet still shows the cheek patches that he uses
            alongside other features like a goose’s number of offspring to
            distinguish Evanston’s Canada geese.
          </p>

          <p className="paragraph">
            In the fall and spring when the geese are around, he visits them
            once a day, a few times a week at Evanston’s Arrington Lagoon and
            around Northwestern’s Lakefill. And despite recent construction, he
            said that over the past three years, he hasn’t observed any
            significant difference in the numbers of Canada geese.
          </p>

          <figure className="image">
            <img
              src={CangooAverages}
              alt="A line chart with a minimal theme shows a mostly horizontal line."
            />
            <figcaption className="image-caption">
              Graphic by Valerie Chu
            </figcaption>
          </figure>

          <p className="paragraph">
            “I feel like I know them so well,” Wolk said. “I’m looking forward
            to seeing which geese nest around the mini lake this year.”
          </p>

          <h3 className="h3">Methodology</h3>

          <p className="paragraph">
            Most of the data in this article was from eBird API 2.0.
          </p>
          <p className="paragraph">
            I scraped the data using Python and analyzed it using Python or R.
          </p>
          <p className="paragraph">
            The data for bird hotspots of Cook County was gathered through using
            eBird's API to collect the location names and coordinates of every
            bird activity logged.
          </p>
          <p className="paragraph">
            The data for Canada geese was gathered through using eBird's API to
            collect Canada geese numbers for every single day in Cook County,
            from 2020 to now (Feb. 23, 2026).
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
