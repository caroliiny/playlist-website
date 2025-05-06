const musicas = [
    {
      name: "Annie's song",
      artist:"John Denver"
    },
    {
      name: "Soldier, Poet, King",
      artist:"The Oh Hellos"
    },
    {
      name: "Still Loving You",
      artist: "Scorpions"
    },
    {
      name: "Don't Cry",
      artist: "Guns N' Roses"
    },
    {
      name: "Always Somewhere",
      artist: "Scorpions"
    },
    {
      name: "Wind Of Change",
      artist: "Scorpions"
    },
    {
      name: "Send Me An Angel",
      artist: "Scorpions"
    },
    {
      name: "Nothing Else Matters",
      artist: "Metallica"
    },
    {
      name: "Heaven",
      artist: "Bryan Adams"
    },
    {
      name: "Sweet Child O' Mine",
      artist: "Guns N' Roses"
    },
    {
      name: "Have You Ever Seen The Rain",
      artist: "Creedence Clearwater Revival"
    },
    {
      name: "Everybody Hurts",
      artist: "REM"
    },
    {
      name: "Imagine",
      artist: "John Lennon"
    },
    {
      name: "Spending My Time",
      artist: "Roxette"
    },
    {
      name: "Slipping Through My Fingers",
      artist: "ABBA"
    },
    {
      name: "The Moon Will Sing",
      artist: "The Crane Wives"
    },
    {
      name: "No Surprises",
      artist: "Radiohead"
    },
    {
      name: "The Temple Of The King",
      artist: "Rainbow"
    },
    {
      name: "Dreams",
      artist: "The Cranberries"
    },
    {
      name: "Piano Man",
      artist: "Billy Joel"
    },
    {
      name: "Girls Just Want to Have Fun",
      artist: "Cyndi Lauper"
    },
    {
      name: "Vienna",
      artist: "Billy Joel"
    },
    {
      name: "Wasted On You",
      artist: "Evanescence"
    },
    {
      name: "There Is a Light That Never Goes Out",
      artist: "The Smiths"
    },
    {
      name: "Beautiful Boy (Darling Boy)",
      artist: "John Lennon"
    },
    {
      name: "Your Song",
      artist: "Elton John"
    },
    {
      name: "Take My Breath Away - Love Theme from Top Gun",
      artist: "Berlin"
    },
    {
      name: "Iris",
      artist: "The Goo Goo Dolls"
    },
    {
      name: "Wherever You Will Go",
      artist: "The Calling"
    },
    {
      name: "Wonderwall - Remastered",
      artist: "Oasis"
    },
    {
      name: "Stop Crying Your Heart Out",
      artist: "Oasis"
    },
    {
      name: "Somewhere Only We Know",
      artist: "Keane"
    },
    {
      name: "Chasing Cars",
      artist: "Snow Patrol"
    },
    {
      name: "I Don't Want to Miss a Thing - From Armageddon Soundtrack",
      artist: "Aerosmith"
    },
    {
      name: "Hero",
      artist: "Chad Kroeger"
    },
    {
      name: "It Hurt So Bad",
      artist: "Susan Tedeschi"
    },
    {
      name: "Knockin' On Heaven's Door",
      artist: "Guns N' Roses"
    },
    {
      name: "One Of Us",
      artist: "Joan Osborne"
    },
    {
      name: "Time in a Bottle",
      artist: "Jim Croce"
    },
    {
      name: "Tears in Heaven",
      artist: "Eric Clapton"
    },
    {
      name: "Blackbird",
      artist: "The Beatles"
    },
    {
      name: "The Reason",
      artist: "Hoobastank"
    },
    {
      name: "California Dreamin' - Single Version",
      artist: "The Mamas & The Papas"
    },
    {
      name: "Kiss Me",
      artist: "Sixpence None The Richer"
    },
    {
      name: "Every Breath You Take",
      artist: "The Police"
    },
    {
      name: "Dust in the Wind",
      artist: "Kansas"
    },
    {
      name: "Hey Jude",
      artist: "The Beatles"
    },
    {
      name: "Bitter Sweet Symphony - Remastered 2016",
      artist: "The Verve"
    },
    {
      name: "Bohemian Rhapsody - Remastered 2011",
      artist: "Queen"
    },
    {
      name: "Livin' On A Prayer",
      artist: "Bon Jovi"
    },
    {
      name: "Somebody To Love - The Voice Performance",
      artist: "Jordan Smith"
    },
    {
      name: "Always",
      artist: "Bon Jovi"
    },
    {
      name: "Don't Let Me Down - Remastered 2009",
      artist: "The Beatles"
    },
    {
      name: "Total Eclipse of the Heart",
      artist: "Bonnie Tyler"
    },
    {
      name: "Sweet Niobrara",
      artist: "The Wildwoods"
    },
    {
      name: "Making Love Out of Nothing at All",
      artist: "Air Supply"
    },
    {
      name: "Take Me Home, Country Roads - Original Version",
      artist: "John Denver"
    },
    {
      name: "Everybody's Changing",
      artist: "Keane"
    },
    {
      name: "Starlight",
      artist: "Muse"
    },
    {
      name: "Ordinary World",
      artist: "Duran Duran"
    },
    {
      name: "It Must Have Been Love - From the Film Pretty Woman",
      artist: "Roxette"
    },
    {
      name: "Numb",
      artist: "Linkin Park"
    },
    {
      name: "In My Life",
      artist: "The Beatles"
    },
    {
      name: "Don't Stop Believin' (2022 Remaster)",
      artist: "Journey"
    },
    {
      name: "Bring Me To Life",
      artist: "Evanescence"
    },
    {
      name: "In the End",
      artist: "Linkin Park"
    },
    {
      name: "Don't Look Back in Anger - Remastered",
      artist: "Oasis"
    },
    {
      name: "Still Loving You",
      artist: "Scorpions"
    },
    {
      name: "Everybody Wants To Rule The World",
      artist: "Tears For Fears"
    },
    {
      name: "I Still Haven't Found What I'm Looking For",
      artist: "U2"
    },
    {
      name: "Lonely Day",
      artist: "System Of A Down"
    },
    {
      name: "Leaving, On a Jet Plane - Greatest Hits Version",
      artist: "John Denver"
    },
    {
      name: "Somebody To Love - Remastered 2011",
      artist: "Queen"
    },
    {
      name: "Purple Rain",
      artist: "Prince"
    },
    {
      name: "Listen To Your Heart",
      artist: "Roxette"
    }
  
]