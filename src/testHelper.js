const mockResults = [
  {
    adult: false,
    backdrop_path: "/hJXxDoCwchAuJ4K3gwtno2chgr8.jpg",
    genre_ids: [18],
    id: 491283,
    media_type: "movie",
    original_language: "en",
    original_title: "Judy",
    overview:
      "Winter 1968 and showbiz legend Judy Garland arrives in Swinging London to perform a five-week sold-out run at The Talk of the Town.",
    popularity: 21.379,
    poster_path: "/iqJhHjD6k6T07waELjMKDpQJUP.jpg",
    release_date: "2019-09-27",
    title: "Judy",
    video: false,
    vote_average: 6.8,
    vote_count: 723,
  },

  {
    backdrop_path: "/fTCoAXkLRxg9mWXzCFK2RTC4PFr.jpg",
    first_air_date: "1999-03-28",
    genre_ids: [16, 35, 10765],
    id: 615,
    media_type: "tv",
    name: "Futurama",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Futurama",
    overview:
      "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry, who, after being unwittingly cryogenically frozen for one thousand years, finds employment at Planet Express, an interplanetary delivery company in the retro-futuristic 31st century.",
    popularity: 117.105,
    poster_path: "/4olv2DdNUdg7oE6zoevbZbgEPsB.jpg",
    vote_average: 8.3,
    vote_count: 1676,
  },

  {
    adult: false,
    gender: 2,
    id: 5292,
    known_for: [
      {
        adult: false,
        backdrop_path: "/9vAoubhoZE8aSkUZoSfxs3UWZhO.jpg",
        genre_ids: [53, 28, 80],
        id: 156022,
        media_type: "movie",
        original_language: "en",
        original_title: "The Equalizer",
        overview:
          "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
        poster_path: "/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
        release_date: "2014-09-24",
        title: "The Equalizer",
        video: false,
        vote_average: 7.2,
        vote_count: 6373,
      },
      {
        adult: false,
        backdrop_path: "/aPrrrGtSjXbw8XnpzsVJgF0ioq3.jpg",
        genre_ids: [28, 53, 878],
        id: 20504,
        media_type: "movie",
        original_language: "en",
        original_title: "The Book of Eli",
        overview:
          "A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.",
        poster_path: "/1H1y9ZiqNFaLgQiRDDZLA55PviW.jpg",
        release_date: "2010-01-11",
        title: "The Book of Eli",
        video: false,
        vote_average: 6.8,
        vote_count: 4497,
      },
      {
        adult: false,
        backdrop_path: "/wOH0JO1QBfLyrkV5VJDR957LhNL.jpg",
        genre_ids: [12, 28, 37],
        id: 333484,
        media_type: "movie",
        original_language: "en",
        original_title: "The Magnificent Seven",
        overview:
          "Looking to mine for gold, greedy industrialist Bartholomew Bogue seizes control of the Old West town of Rose Creek. With their lives in jeopardy, Emma Cullen and other desperate residents turn to bounty hunter Sam Chisolm for help. Chisolm recruits an eclectic group of gunslingers to take on Bogue and his ruthless henchmen. With a deadly showdown on the horizon, the seven mercenaries soon find themselves fighting for more than just money once the bullets start to fly.",
        poster_path: "/ezcS78TIjgr85pVdaPDd2rSPVNs.jpg",
        release_date: "2016-09-14",
        title: "The Magnificent Seven",
        video: false,
        vote_average: 6.3,
        vote_count: 4468,
      },
    ],
    known_for_department: "Acting",
    media_type: "person",
    name: "Denzel Washington",
    popularity: 24.682,
    profile_path: "/cEU2Vrdo83izpGmOvbVAOz5jCof.jpg",
  },
];

const mockDetailsTv = {
  backdrop_path: "/fTCoAXkLRxg9mWXzCFK2RTC4PFr.jpg",
  created_by: [
    {
      id: 5741,
      credit_id: "52538acb19c2957940246e70",
      name: "Matt Groening",
      gender: 2,
      profile_path: "/2HmAw3AN93DGESPi3ibLZgBa8cT.jpg",
    },
  ],
  episode_run_time: [22],
  first_air_date: "1999-03-28",
  genres: [
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
  ],
  homepage: "http://www.comedycentral.com/shows/futurama",
  id: 615,
  in_production: false,
  languages: ["en"],
  last_air_date: "2013-09-04",
  last_episode_to_air: {
    air_date: "2013-09-04",
    episode_number: 26,
    id: 35130,
    name: "Meanwhile",
    overview:
      "Professor Farnsworth invents a button that can take a person 10 seconds back in time, inadvertently causing major consequences.",
    production_code: "7ACV26",
    season_number: 7,
    still_path: "/qkbNNqSa90wN69l2CraTxYWTGCS.jpg",
    vote_average: 8.8,
    vote_count: 18,
  },
  name: "Futurama",
  next_episode_to_air: null,
  networks: [
    {
      name: "FOX",
      id: 19,
      logo_path: "/1DSpHrWyOORkL9N2QHX7Adt31mQ.png",
      origin_country: "US",
    },
    {
      name: "Comedy Central",
      id: 47,
      logo_path: "/6ooPjtXufjsoskdJqj6pxuvHEno.png",
      origin_country: "US",
    },
  ],
  number_of_episodes: 124,
  number_of_seasons: 7,
  origin_country: ["US"],
  original_language: "en",
  original_name: "Futurama",
  overview:
    "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry, who, after being unwittingly cryogenically frozen for one thousand years, finds employment at Planet Express, an interplanetary delivery company in the retro-futuristic 31st century.",
  popularity: 119.42,
  poster_path: "/4olv2DdNUdg7oE6zoevbZbgEPsB.jpg",
  production_companies: [
    {
      id: 90107,
      logo_path: null,
      name: "30th Century Fox Television",
      origin_country: "",
    },
    {
      id: 1556,
      logo_path: "/31h94rG9hzjprXoYNy3L1ErUya2.png",
      name: "20th Century Fox Television",
      origin_country: "US",
    },
    {
      id: 29500,
      logo_path: "/a3ltwX7b1opYeG7MxaxxswDmkeg.png",
      name: "The Curiosity Company",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  seasons: [
    {
      air_date: "2008-03-23",
      episode_count: 6,
      id: 1874,
      name: "Specials",
      overview: "",
      poster_path: "/k4MbPg0Tp3vSptVdXGxkiqDOD90.jpg",
      season_number: 0,
    },
    {
      air_date: "1999-03-28",
      episode_count: 9,
      id: 1868,
      name: "Season 1",
      overview: "",
      poster_path: "/4Q62c2J1EtqYoGLb6sER8BSWuqo.jpg",
      season_number: 1,
    },
    {
      air_date: "1999-09-26",
      episode_count: 20,
      id: 1869,
      name: "Season 2",
      overview: "",
      poster_path: "/73wNUIJoi50I8RozwncfPurfk8g.jpg",
      season_number: 2,
    },
    {
      air_date: "2000-11-05",
      episode_count: 15,
      id: 1870,
      name: "Season 3",
      overview: "",
      poster_path: "/3b7s0n9vpyrSQkohX8wxnmNKA9l.jpg",
      season_number: 3,
    },
    {
      air_date: "2001-12-09",
      episode_count: 12,
      id: 1871,
      name: "Season 4",
      overview: "",
      poster_path: "/mOc2Cd9cpCn5uaOjHqNNMrvNbzi.jpg",
      season_number: 4,
    },
    {
      air_date: "2002-11-10",
      episode_count: 16,
      id: 1872,
      name: "Season 5",
      overview:
        "In the fifth season, Bender grows jealous when Fry attempts to clone his beloved fossilized dog; when Kif gets pregnant, Amy questions her readiness to become a parent; when Fry and Leela discover a mysterious cream that gives them unusual powers, they form a Superhero team along with Bender; and Fry makes a deal with the Robot Devil so he can become a skillful musician and win Leela's heart.",
      poster_path: "/r5nGE66fq69uR4FKA3j7TKSL8uP.jpg",
      season_number: 5,
    },
    {
      air_date: "2010-06-24",
      episode_count: 26,
      id: 1873,
      name: "Season 6",
      overview: "",
      poster_path: "/9QGsYuRe7XHa9ARu9XHKz0h0cra.jpg",
      season_number: 6,
    },
    {
      air_date: "2012-06-20",
      episode_count: 26,
      id: 1875,
      name: "Season 7",
      overview: "",
      poster_path: "/sKkMifpyEHPqqfMsmkOJ7oFgfpb.jpg",
      season_number: 7,
    },
  ],
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Ended",
  tagline: "1000 years in the making!",
  type: "Scripted",
  vote_average: 8.3,
  vote_count: 1678,
};

const mockDetailsMovie = {
  adult: false,
  backdrop_path: "/hJXxDoCwchAuJ4K3gwtno2chgr8.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
  ],
  homepage: "",
  id: 491283,
  imdb_id: "tt7549996",
  original_language: "en",
  original_title: "Judy",
  overview:
    "Winter 1968 and showbiz legend Judy Garland arrives in Swinging London to perform a five-week sold-out run at The Talk of the Town. It is 30 years since she shot to global stardom in The Wizard of Oz, but if her voice has weakened, its dramatic intensity has only grown. As she prepares for the show, battles with management, charms musicians and reminisces with friends and adoring fans, her wit and warmth shine through. Even her dreams of love seem undimmed as she embarks on a whirlwind romance with Mickey Deans, her soon-to-be fifth husband.",
  popularity: 22.443,
  poster_path: "/iqJhHjD6k6T07waELjMKDpQJUP.jpg",
  production_companies: [
    {
      id: 288,
      logo_path: "/wdmwQuV4R1MIr8A78izZkC184uC.png",
      name: "BBC Films",
      origin_country: "GB",
    },
    {
      id: 26369,
      logo_path: null,
      name: "Calamity Films",
      origin_country: "GB",
    },
    {
      id: 7981,
      logo_path: "/6Yv1gIAuGkHS5Vis4UjnqHhCPWV.png",
      name: "Pathé!",
      origin_country: "FR",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
  ],
  release_date: "2019-09-27",
  revenue: 38981322,
  runtime: 118,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Judy Garland: The Legend Behind the Rainbow.",
  title: "Judy",
  video: false,
  vote_average: 6.8,
  vote_count: 724,
};

const mockDetailsPerson = {
  adult: false,
  also_known_as: [
    "Дензел Вашингтон",
    "丹泽尔·华盛顿",
    "دنزل واشنطن",
    "덴절 워싱턴",
    "デンゼル・ワシントン",
    "เดนเซล วอชิงตัน",
    "Denzel Hayes Washington, Jr.",
    "Ντένζελ Ουάσινγκτον",
  ],
  biography:
    'Denzel Hayes Washington, Jr. (born December 28, 1954) is an American actor, screenwriter, director and film producer. He first rose to prominence when he joined the cast of the medical drama St. Elsewhere, playing Dr. Philip Chandler for six years. He has received much critical acclaim for his work in film since the 1990s, including for his portrayals of real-life figures, such as Steve Biko, Malcolm X, Rubin "Hurricane" Carter, Melvin B. Tolson, Frank Lucas, and Herman Boone.\n\nWashington has received two Academy Awards, two Golden Globe awards, and a Tony Award. He is notable for winning the Best Supporting Actor Oscar for his part in Glory in 1989, and the Academy Award for Best Actor in 2001 for his role in the film Training Day.\n\nDescription above from the Wikipedia article Denzel Washington, licensed under CC-BY-SA, full list of contributors on Wikipedia.',
  birthday: "1954-12-28",
  deathday: null,
  gender: 2,
  homepage: null,
  id: 5292,
  imdb_id: "nm0000243",
  known_for_department: "Acting",
  name: "Denzel Washington",
  place_of_birth: "Mount Vernon, New York, United States",
  popularity: 21.405,
  profile_path: "/cEU2Vrdo83izpGmOvbVAOz5jCof.jpg",
};

const mockCreditsTv = [
  {
    adult: false,
    gender: 2,
    id: 198,
    known_for_department: "Acting",
    name: "Dan Castellaneta",
    original_name: "Dan Castellaneta",
    popularity: 4.13,
    profile_path: "/AmeqWhP4A46AWkM4kVphg6jOTQX.jpg",
    character: "Homer Simpson",
    credit_id: "5256bdc319c2956ff600157c",
    order: 0,
  },
  {
    adult: false,
    gender: 1,
    id: 199,
    known_for_department: "Acting",
    name: "Julie Kavner",
    original_name: "Julie Kavner",
    popularity: 5.364,
    profile_path: "/x3oG3OXtBfTFgqXPqxI1GKVEiaQ.jpg",
    character: "Marge Simpson",
    credit_id: "5256bdc319c2956ff60015a0",
    order: 1,
  },
];

const mockCreditsMovie = [
  {
    adult: false,
    gender: 1,
    id: 18277,
    known_for_department: "Acting",
    name: "Sandra Bullock",
    original_name: "Sandra Bullock",
    popularity: 14.76,
    profile_path: "/u2tnZ0L2dwrzFKevVANYT5Pb1nE.jpg",
    cast_id: 3,
    character: "Dr. Ryan Stone",
    credit_id: "52fe4783c3a36847f8139d6b",
    order: 0,
  },
  {
    adult: false,
    gender: 2,
    id: 1461,
    known_for_department: "Acting",
    name: "George Clooney",
    original_name: "George Clooney",
    popularity: 4.403,
    profile_path: "/kHiVY6r1k6juXrNetAYk2jILqn9.jpg",
    cast_id: 4,
    character: "Lt. Matt Kowalski",
    credit_id: "52fe4783c3a36847f8139d6f",
    order: 1,
  },
];

const mockCreditsPerson = [
  {
    adult: false,
    backdrop_path: "/8b4vDh7hNSLZKyAYUnZJalExbJb.jpg",
    genre_ids: [80, 18, 53],
    id: 388,
    original_language: "en",
    original_title: "Inside Man",
    overview:
      "When an armed, masked gang enter a Manhattan bank, lock the doors and take hostages, the detective assigned to effect their release enters negotiations preoccupied with corruption charges he is facing.",
    poster_path: "/mf4i9zZVXMmqWsEb9D0OAY7k3t.jpg",
    release_date: "2006-03-17",
    title: "Inside Man",
    video: false,
    vote_average: 7.4,
    vote_count: 3976,
    popularity: 17.347,
    character: "Detective Keith Frazier",
    credit_id: "52fe423dc3a36847f800ebc1",
    order: 0,
    media_type: "movie",
  },
  {
    vote_count: 39,
    backdrop_path: "/2C30ZKyYyj0AKxFuBC9atFPN0XL.jpg",
    origin_country: ["US"],
    genre_ids: [10764],
    first_air_date: "1953-03-18",
    original_language: "en",
    overview:
      "The Academy Awards or The Oscars is an annual American awards ceremony honoring cinematic achievements in the film industry. The various category winners are awarded a copy of a statuette, officially the Academy Award of Merit, that is better known by its nickname Oscar. The awards, first presented in 1929 at the Hollywood Roosevelt Hotel, are overseen by the Academy of Motion Picture Arts and Sciences (AMPAS).\n\nThe awards ceremony began in 1929 and was first televised in 1953, making it the oldest entertainment awards ceremony.",
    poster_path: "/wF43fJ8D85i79ZrLZsnUZ2JurbP.jpg",
    id: 27023,
    name: "The Academy Awards",
    vote_average: 6.8,
    original_name: "The Academy Awards",
    popularity: 6.75,
    character: "Himself - Best Actor nominee",
    credit_id: "5fe09053fd4a96004032feca",
    episode_count: 1,
    media_type: "tv",
  },
];

module.exports = {
  mockResults,
  mockDetailsTv,
  mockDetailsMovie,
  mockDetailsPerson,
  mockCreditsTv,
  mockCreditsMovie,
  mockCreditsPerson,
};
