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
import CangooMonthlyAverages from "../images/cangoo_averages_per_month.jpg";
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
          <p className="byline">
            Valerie Chu
          </p>

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
            On a warm February evening, Weinberg fourth-year Alex Boyko stood on
            a small hill on Northwestern’s Lakefill, a pair of binoculars held
            to his eyes.
          </p>

          <p className="paragraph">
            “We have some migratory ducks on the lagoon right now,” Boyko said.
            “I'm going out to take a look at those.”
          </p>

          <p className="paragraph">
            In 45 minutes, Boyko counted 63 individual birds and 19 species.
            Among them were 10 Canada geese, six hooded mergansers, one common
            merganser and two buffleheads.
          </p>

          <p className="paragraph">
            “This is a beautiful area on campus — there's a lot of
            biodiversity,” Boyko said. “It (bird watching) is a good way to
            recharge after a busy day, to go out and spend some time with
            nature.”
          </p>

          <figure className="image">
            <img
              src={Lakefill01989}
              alt="A man with a pair of binoculars looks out across the lake."
            />
            <figcaption className="image-caption">
              Alex Boyle peers through a pair of binoculars toward Nortwestern's
              Lakefill on Feb. 18, 2026. (Photo by Valerie Chu)
            </figcaption>
          </figure>

          <p className="paragraph">
            There have been 490 unique bird species spotted in Cook County,
            according to eBird data. Bird watchers have recorded bird sightings
            in practically all corners of the county, with Montrose Point Bird
            Sanctuary and Northwestern University proving to be particularly
            fruitful locations.
          </p>

          <FlourishEmbed visualizationId="27686289" />

          <p className="paragraph">
            One bird in particular has gained what Field Museum’s senior
            conservation ecologist Doug Stotz described as a “love-hate
            relationship” — the Canada goose.
          </p>

          <p className="paragraph">
            Canada goose numbers in Cook County have been holding steady — for
            the past five years, bird watchers have spotted an average of 29
            geese a day around the shores of Lake Michigan.
          </p>

          <figure className="image">
            <img
              src={CangooMonthlyAverages}
              alt="A line chart with a minimal theme shows peaks and decreases that correspond to steady, cyclical trends every year."
            />
            <figcaption className="image-caption">
              Graphic by Valerie Chu
            </figcaption>
          </figure>

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
            called “The Giant Canada Goose” where he described how people tried
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
            billion birds have vanished since 1970. Stotz, whose work focuses on
            conservation, said birds are not just declining, but declining
            faster than expected due to both habitat loss from agricultural and
            housing development, as well as agricultural practices becoming less
            suitable to birds. Still, Stotz said this broad assertion of
            declining bird populations is not applicable to all types of birds.
            And to Bates, looking at the stories of individual bird species like
            the Canada goose brings him hope that various other species can
            recover.
          </p>

          <p className="paragraph">
            Dr. Eli Suzukovich III, who teaches Northwestern’s Maple Syrup and
            Climate Change class, said that over the years, he has also kept an
            eye on winter birds and the change in bird species on campus.
          </p>

          <p className="paragraph">
            “Right now, when the sap starts flowing, we get goldeneye ducks
            predominantly, and we get some buffleheads,” Suzukovich said. “And
            in the last couple of years, students and myself, we've only seen
            like maybe three pairs, nothing major. If we go back to the 90s and
            the 80s, you would have had like a couple 100 pairs out in the lake
            in January or February. These were common Chicago winter ducks.”
          </p>

          <p className="paragraph">
            While bird watching data on iNaturalist tends to be a record of
            human activity as much as one of birds, an analysis of
            research-grade sightings of buffleheads shows that the numbers of
            buffleheads spotted in Cook County have been generally decreasing
            since 2021.
          </p>

          <p className="paragraph">
            “The last 10 years since I've been doing maple tapping, the most
            I've ever seen at once — and it was a very cold winter — was 12
            pairs,” Suzukovich said. “That was like for a day, and then they
            were gone.”
          </p>

          <p className="paragraph">
            Suzukovich said that the decline of these two ducks appearing on the
            Lakefill could be due to a number of factors such as changed flight
            patterns or the weather being too warm for an arctic duck. But he’s
            noticed another pattern in a different species.
          </p>

          <p className="paragraph">
            The common merganser is a duck which Cornell Lab of Ornithology’s
            All About Birds guide has an{" "}
            <a
              href="https://www.allaboutbirds.org/guide/Common_Merganser/overview"
              target="_blank"
            >
              entry
            </a>{" "}
            for: females have “rich, cinnamon heads with a short crest,” while
            males have “clean white bodies, dark green heads, and a slender,
            serrated red bill.”
          </p>

          <figure className="image">
            <img
              src={Lakefill02227}
              alt="A common merganser swims on Northwestern's Lakefill."
            />
            <figcaption className="image-caption">
              A young common merganser swims on Northwestern's Lakefill at
              sundown on Feb. 26, 2026. (Photo by Valerie Chu)
            </figcaption>
          </figure>

          <p className="paragraph">
            “I don't know exactly what prompted it, but you see more of these
            common mergansers than you used to and it does also seem to coincide
            with warmer and unpredictable winters,” Suzukovich said.
          </p>

          <p className="paragraph">
            Suzukovich said that he thinks Canada geese, too, have enjoyed
            Northwestern’s slightly warmer winters. Bates said there are
            migratory populations of Canada geese across the Canadian Artic,
            then there are the geese that don’t migrate in the continental
            United States.
          </p>

          <p className="paragraph">
            That’s what Weinberg third-year Zach Wolk has noticed, too.
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

          <p className="paragraph">
            “I feel like I know them so well,” Wolk said. “I’m looking forward
            to seeing which geese nest around the mini lake this year.”
          </p>

          <p className="paragraph">
            Stotz, too, is excited about an upcoming event.
          </p>

          <p className="paragraph">
            “There’s nothing better than spring migration,” Stotz said. “It’s
            about to be the best time of year.”
          </p>

          <br></br>

          <h3 className="h3">Methodology</h3>

          <p className="paragraph">
            I gathered bird hotspot data and Canada geese numbers through
            multiple API calls to the eBird API 2.0. I used Python’s request
            library to extract this data, then worked with either Python, R or
            Flourish, depending on the specific dataset, to wrangle, analyze and
            visualize the data. Additional information on each specific data
            finding is below.
          </p>
          <p className="paragraph">
            Tools Used:
            <br></br>- Python — requests, pandas, time
            <br></br>- R — tidyverse (including ggplot2 and dplyr), tigris,
            janitor, sf, ggrepel
            <br></br>- React and Gatsby — to build this site
            <br></br>- Other — Flourish, RStudio, Jupyter Notebook, GitHub
            Pages, Adobe Lightroom Classic
          </p>
          <p className="paragraph">
            1. “There have been 490 unique bird species spotted in Cook County,
            according to eBird data.”
            <br></br>- Using the eBird API 2.0, I requested the number of bird
            species seen in Cook County, which only looks at species list
            (spplist) and doesn’t exclude any records based on dates.
          </p>
          <p className="paragraph">
            2. “Bird watchers have recorded bird sightings in practically all
            corners of the county, with Montrose Point Bird Sanctuary and
            Northwestern University proving to be particular places of
            interest.”
            <br></br>- Using the eBird API 2.0, I requested the bird hotspots of
            Cook County, which only looks at hotspots and doesn’t exclude any
            records based on dates.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
