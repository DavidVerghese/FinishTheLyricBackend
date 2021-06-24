const db = require('../db/connection')
const Lyric = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const lyrics = 
    [
        {
          "songTitle": "The World Is Yours",
          "artist": "Nas",
          "lyric": "I sip the Dom P, watching",
          "imageAddress": "https://i.gifer.com/MnQZ.gif",
        "answer": "Gandhi",
          "wrongAnswers": ["TV","the Simpsons","Yanni"]
        },
        {
          "songTitle": "Juicy",
          "artist": "Notorious B.I.G.",
          "lyric": "Super Nintendo, Sega Genesis, when I was dead broke, man, I couldn't",
          "imageAddress": "https://media1.giphy.com/media/AsDBIwyLjHc9G/giphy.gif?cid=ecf05e47nfxmozgja2q11hbcuuk9x47h0x4m6c0ojlx9v78v&rid=giphy.gif",
        "answer": "picture this",
          "wrongAnswers": ["configure this","repair this","afford this"]
        },
        {
          "songTitle": "Smells Like Teen Spirit",
          "artist": "Nirvana",
          "lyric": "Here we are now, entertain us, I feel stupid and",
          "imageAddress": "https://64.media.tumblr.com/8944ac37eb01f195b2f1c99634376830/tumblr_mhk457ePzS1rn29sdo1_500.gif",
        "answer": "contagious",
          "wrongAnswers": ["sagacious","cretaceous","outrageous"]
        },
        {
          "songTitle": "Blowin' In the Wind",
          "artist": "Bob Dylan",
          "lyric": "How many seas must a white dove sail, Before she sleeps in the",
          "imageAddress": "https://media3.giphy.com/media/kpgzE7I82DNfO/giphy.gif?cid=ecf05e475h9l3cjbmyx4jfuto5pfhjh77hmjyp9whtkc3iuu&rid=giphy.gif",
        "answer": "sand",
          "wrongAnswers": ["nest","soft bed","blue whale"]
        },
        {
          "songTitle": "Thinkin' Out Loud",
          "artist": "Ed Sheeran",
          "lyric": "Cause honey your soul can never grow old, it's",
          "imageAddress": "https://media2.giphy.com/media/35yNLTW7Eba9ZuVtbh/giphy.gif?cid=ecf05e4756eff247fe03f8aa0d9d7065fc4a2aec39214b00&rid=giphy.gif",
        "answer": "evergreen",
          "wrongAnswers": ["gold","nonexistant","immortal"]
        },
        {
          "songTitle": "Tennessee Whiskey",
          "artist": "Chris Stapleton",
          "lyric": "Used to spend my nights out in a",
          "imageAddress": "https://media1.giphy.com/media/BCe5xbtqwTh7NcmmR5/giphy.gif?cid=ecf05e470bb6e9f9f00a2666c21a87c05146b0085df4f6f9&rid=giphy.gif",
        "answer": "barroom",
          "wrongAnswers": ["jail cell","slump","library"]
        },
        {
          "songTitle": "Penny Lane",
          "artist": "Beatles",
          "lyric": "In Penny Lane there is a barber showing",
          "imageAddress": "https://media3.giphy.com/media/SQFoY6QupT5V6/giphy.gif?cid=ecf05e47thqni4iz9zmuw8lwdmu9mwfpxfovg3sxrxc0na4n&rid=giphy.gif",
        "answer": "photographs",
          "wrongAnswers": ["paintings","haircuts","his photo collection"]
        },
        {
          "songTitle": "Bohemian Rhapsody",
          "artist": "Queen",
          "lyric": "Scaramouch, Scaramouch, will you do the",
          "imageAddress": "https://media4.giphy.com/media/YWlGAzJti8XIHamqKu/giphy.gif?cid=ecf05e476ilh3hbvzlfj4l354gwhcm6ag74x6f1vdg3hovtf&rid=giphy.gif",
        "answer": "Fandango",
          "wrongAnswers": ["flamenco","waltz","fast Tango"]
        },
        {
          "songTitle": "Respect",
          "artist": "Aretha Franklin",
          "lyric": "All I'm askin'(Oo) Is for a little respect when you",
          "imageAddress": "https://media1.giphy.com/media/OjIM4Rgkv8gKj4KWku/giphy.gif",
        "answer": "get home",
          "wrongAnswers": ["see me","hear me","get here"]
        },
        {
          "songTitle": "Rolling in the Deep",
          "artist": "Adele",
          "lyric": "The scars of your love, they leave me",
          "imageAddress": "https://media1.giphy.com/media/13vJHSyname1Hy/giphy.gif?cid=ecf05e475i7tkh57yz14gzd1fwmz4zabtoi8o85sweoe5l3p&rid=giphy.gif",
        "answer": "breathless",
          "wrongAnswers": ["drained","pained","bleeding"]
        },
        {
          "songTitle": "Lean On Me",
          "artist": "Bill Withers",
          "lyric": "Please swallow your pride, If I have things you need to",
          "imageAddress": "https://media1.giphy.com/media/xT1R9KovfllTplpkkM/giphy.gif?cid=ecf05e47svkyzsudcvb54rzaakenout5d3044ucktmytrary&rid=giphy.gif",
        "answer": "borrow",
          "wrongAnswers": ["hide","steal","know"]
        },
        {
          "songTitle": "Seven Nation Army",
          "artist": "The White Stripes",
          "lyric": "Back and forth through my mind, Behind a",
          "imageAddress": "https://media1.giphy.com/media/8cSaoSQ9Wokcq3Qm51/giphy.gif?cid=ecf05e473b341herv7lvxkr071enz16u7blrxqvqt3mfs4j2&rid=giphy.gif",
        "answer": "cigarette",
          "wrongAnswers": ["paywall","riddle","brain fog"]
        },
        {
          "songTitle": "Karma Police",
          "artist": "Radiohead",
          "lyric": "Arrest this man, He talks in",
          "imageAddress": "https://thumbs.gfycat.com/PoliticalAdmirableBird.webp",
        "answer": "maths",
          "wrongAnswers": ["stats","French","riddles"]
        },
        {
          "songTitle": "God's Plan",
          "artist": "Drake",
          "lyric": "I finessed down",
          "imageAddress": "https://media4.giphy.com/media/3o85xosW6qQsCsZ3Ve/giphy.gif?cid=ecf05e4793d86e0ac4d7c3776f31f3445a8a54085c6ec850&rid=giphy.gif",
        "answer": "Weston Road",
          "wrongAnswers": ["Westville Road","Old Town Road","Westeros"]
        },
        {
          "songTitle": "Jailhouse Rock",
          "artist": "Elvis",
          "lyric": "The prison band was there, and they began to",
          "imageAddress": "https://media3.giphy.com/media/2in9K8r6lnAPjPJNZt/giphy.gif?cid=ecf05e47zahlbq0nwwsrqe470oc2ltjs86eiswqxsedf7xn2&rid=giphy.gif",
        "answer": "wail",
          "wrongAnswers": ["rock","fight","dance"]
        },
      ]

    await Lyric.insertMany(lyrics)
    console.log("Created lyrics!")
}
const run = async () => {
    await main()
    db.close()
}

run()