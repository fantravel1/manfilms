// movies-data.js
const moviesData = [
    {
        id: 'a-separation',
        rank: 1,
        title: 'A Separation',
        year: 2011,
        country: 'Iran',
        director: 'Asghar Farhadi',
        actors: ['Peyman Moaadi', 'Leila Hatami', 'Sareh Bayat', 'Shahab Hosseini'],
        duration: 'PT2H3M',
        contentRating: 'PG-13',
        genre: ['Drama', 'Family'],
        shortDescription: 'Asghar Farhadi\'s masterpiece presents complex male characters who navigate moral dilemmas with nuance rather than aggression, showing Iranian men grappling with family responsibilities.',
        description: 'Asghar Farhadi\'s Academy Award-winning masterpiece presents complex male characters who navigate moral dilemmas with nuance rather than aggression. The film depicts masculinity through emotional restraint and ethical consideration, showing Iranian men grappling with family responsibilities and social expectations in ways that challenge traditional patriarchal norms. The story follows a middle-class Iranian couple on the brink of divorce whose lives become entangled with those of a religious working-class family in a series of tragic events.',
        tags: ['Drama', 'Family', 'Moral Complexity', 'Iranian Cinema'],
        trailer: 'https://www.youtube.com/embed/58Onuy5USTc',
        trailerThumbnail: 'https://img.youtube.com/vi/58Onuy5USTc/maxresdefault.jpg',
        characters: [
            {
                name: 'Nader',
                description: 'A principled man torn between caring for his father with dementia and his wife\'s desire to leave Iran. Shows emotional depth and moral complexity.'
            },
            {
                name: 'Simin',
                description: 'Nader\'s wife who wants a better future for their daughter. Represents agency and determination while navigating traditional expectations.'
            },
            {
                name: 'Termeh',
                description: 'Their teenage daughter caught between her parents\' separation, displaying wisdom beyond her years.'
            }
        ],
        reviews: [
            {
                quote: 'Farhadi provides a useful portrait of Iran today... this film portrays a more nuanced nation, and its decent characters are trying to do the right thing.',
                source: 'Roger Ebert'
            },
            {
                quote: 'Consider how heavily censored filmmakers are in Iran, director Asghar Farhadi\'s accomplishment starts to seem downright astonishing.',
                source: 'NPR\'s Bob Mondello'
            },
            {
                quote: 'A masterclass in moral ambiguity that treats every character with empathy and understanding.',
                source: 'The Guardian'
            }
        ],
        whyIncluded: 'A Separation exemplifies healthy masculinity through its male characters who face complex moral situations without resorting to violence or dominance. Nader shows emotional vulnerability while maintaining his principles, demonstrating that true strength comes from ethical consideration and emotional honesty. The film presents masculinity as compatible with caregiving, moral reflection, and emotional depth.'
    },
    {
        id: 'spirited-away',
        rank: 2,
        title: 'Spirited Away',
        year: 2001,
        country: 'Japan',
        director: 'Hayao Miyazaki',
        actors: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki', 'Takashi Naito'],
        duration: 'PT2H5M',
        contentRating: 'PG',
        genre: ['Animation', 'Adventure', 'Family'],
        shortDescription: 'Miyazaki\'s masterpiece features Haku, who embodies healthy masculinity through protective yet nurturing guidance, helping Chihiro navigate the spirit world with wisdom and care.',
        description: 'Hayao Miyazaki\'s Academy Award-winning animated masterpiece features Haku as an exemplary male character who embodies healthy masculinity through his assertive yet protective nature. Haku is determined, disciplined, and firm, but stands out for his dedication to helping Chihiro/Sen while discovering his own identity. He protects Sen even when wounded and helps her navigate the hostile spirit world. The film demonstrates how masculinity can be expressed through care, guidance, and emotional support rather than dominance.',
        tags: ['Animation', 'Coming of Age', 'Fantasy', 'Japanese Cinema'],
        trailer: 'https://www.youtube.com/embed/ByXuk9QqQkk',
        trailerThumbnail: 'https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg',
        characters: [
            {
                name: 'Haku',
                description: 'A mysterious boy who helps Chihiro navigate the spirit world. Shows protection through guidance rather than dominance, emotional vulnerability, and personal growth.'
            },
            {
                name: 'Chihiro/Sen',
                description: 'A young girl who must rescue her parents from the spirit world, showing courage and resilience as she grows from a sullen child to a determined hero.'
            },
            {
                name: 'Zeniba',
                description: 'A wise witch who teaches Chihiro about the power of love and genuine friendship, representing nurturing wisdom.'
            }
        ],
        reviews: [
            {
                quote: 'Spirited Away is a dazzling, enchanting, and gorgeously drawn fairy tale that will leave viewers a little more curious and fascinated by the world around them.',
                source: 'Rotten Tomatoes Critics Consensus'
            },
            {
                quote: 'Miyazaki\'s most personal and deeply felt work, a film that speaks to the child in all of us.',
                source: 'Rolling Stone'
            },
            {
                quote: 'A masterpiece of animation that explores themes of identity, courage, and environmental consciousness.',
                source: 'The New York Times'
            }
        ],
        whyIncluded: 'Spirited Away makes our list because Haku represents a new model of masculine strength - one based on emotional intelligence, protective care without possessiveness, and the courage to be vulnerable. He guides Chihiro not through dominance but through wisdom and support, showing that true masculine power lies in helping others discover their own strength. His relationship with Chihiro is built on mutual respect and emotional honesty.'
    },
    {
        id: 'moonlight',
        rank: 3,
        title: 'Moonlight',
        year: 2016,
        country: 'USA',
        director: 'Barry Jenkins',
        actors: ['Trevante Rhodes', 'Ashton Sanders', 'Alex Hibbert', 'Mahershala Ali', 'Naomie Harris'],
        duration: 'PT1H51M',
        contentRating: 'R',
        genre: ['Drama', 'LGBTQ+'],
        shortDescription: 'A groundbreaking film following Chiron\'s journey that challenges traditional masculinity through emotional depth, vulnerability, and the courage to embrace authentic identity.',
        description: 'This groundbreaking film follows Chiron\'s journey from childhood to adulthood, challenging traditional notions of masculinity by showcasing emotional depth and vulnerability. It explores how societal expectations can shape identity while emphasizing the importance of self-acceptance. The film presents masculinity as multifaceted and allows for sexual fluidity and emotional expression, showing a Black man\'s struggle to define himself in a world that demands conformity to harmful stereotypes.',
        tags: ['LGBTQ+', 'Coming of Age', 'Identity', 'American Cinema'],
        trailer: 'https://www.youtube.com/embed/9NJj12tJzqc',
        trailerThumbnail: 'https://img.youtube.com/vi/9NJj12tJzqc/maxresdefault.jpg',
        characters: [
            {
                name: 'Chiron (Little/Chiron/Black)',
                description: 'The protagonist at three stages of life, struggling with identity, sexuality, and societal expectations while learning to embrace his authentic self.'
            },
            {
                name: 'Juan',
                description: 'A drug dealer who becomes a father figure to young Chiron, showing kindness and acceptance while grappling with his own moral contradictions.'
            },
            {
                name: 'Kevin',
                description: 'Chiron\'s childhood friend and later love interest, representing both the pain and possibility of authentic connection.'
            }
        ],
        reviews: [
            {
                quote: 'A potent and poetic coming-of-age story that uses its protagonist\'s journey to explore themes of identity, family, love and acceptance.',
                source: 'Variety'
            },
            {
                quote: 'Moonlight is a film of uncommon grace and power, managing to be both achingly specific and deeply universal.',
                source: 'The Washington Post'
            },
            {
                quote: 'Barry Jenkins has crafted a tender, devastating portrait of masculinity in crisis and renewal.',
                source: 'Entertainment Weekly'
            }
        ],
        whyIncluded: 'Moonlight revolutionizes our understanding of Black masculinity by showing a man who finds strength through vulnerability and self-acceptance rather than conforming to toxic stereotypes. Chiron\'s journey demonstrates that true masculine courage lies in being authentic to oneself, even when society demands otherwise. The film shows that emotional expression, gentleness, and same-sex love are compatible with masculine identity.'
    },
    {
        id: 'call-me-by-your-name',
        rank: 4,
        title: 'Call Me By Your Name',
        year: 2017,
        country: 'Italy/USA',
        director: 'Luca Guadagnino',
        actors: ['Timothée Chalamet', 'Armie Hammer', 'Michael Stuhlbarg', 'Amira Casar'],
        duration: 'PT2H12M',
        contentRating: 'R',
        genre: ['Romance', 'Drama', 'LGBTQ+'],
        shortDescription: 'Luca Guadagnino\'s tender romance challenges gender stereotypes through Elio\'s emotional journey, showing masculinity through vulnerability, first love, and authentic self-expression.',
        description: 'Luca Guadagnino\'s tender and sensual coming-of-age romance challenges gender stereotypes through its portrayal of Elio, who takes control of his masculinity and shows that being a man means being able to love, lose, win, fail, and be proud despite troubling stereotypes. Timothée Chalamet\'s performance fosters vulnerability, queerness, and emotional authenticity. Set in 1980s Italy, the film explores the intense romance between a 17-year-old and a graduate student, presenting love and desire without shame or judgment.',
        tags: ['Romance', 'LGBTQ+', 'Coming of Age', 'Italian Cinema'],
        trailer: 'https://www.youtube.com/embed/Z9AYPxH5NTM',
        trailerThumbnail: 'https://img.youtube.com/vi/Z9AYPxH5NTM/maxresdefault.jpg',
        characters: [
            {
                name: 'Elio Perlman',
                description: 'A precocious 17-year-old who experiences his first profound love. Shows emotional honesty, intellectual curiosity, and the courage to pursue authentic connection.'
            },
            {
                name: 'Oliver',
                description: 'An American graduate student whose confidence and warmth awaken Elio\'s desires while maintaining respect and emotional maturity.'
            },
            {
                name: 'Professor Perlman',
                description: 'Elio\'s father who delivers one of cinema\'s most compassionate speeches about love and acceptance, representing ideal supportive masculinity.'
            }
        ],
        reviews: [
            {
                quote: 'A sensual and emotional tour de force that captures the intensity and pain of first love with remarkable authenticity.',
                source: 'The Hollywood Reporter'
            },
            {
                quote: 'Guadagnino has created something rare: a gay love story that feels completely natural and unforced.',
                source: 'Time Magazine'
            },
            {
                quote: 'Chalamet\'s performance is a masterclass in vulnerability and emotional truth.',
                source: 'The Guardian'
            }
        ],
        whyIncluded: 'Call Me By Your Name presents masculinity as compatible with emotional openness, same-sex desire, and intellectual sensitivity. Elio embodies a new kind of male protagonist who isn\'t afraid to express his feelings, pursue beauty, and embrace vulnerability. The film shows that authentic masculinity includes the full spectrum of human emotion and connection, particularly through Professor Perlman\'s wisdom about preserving one\'s capacity to feel deeply.'
    },
    {
        id: 'good-will-hunting',
        rank: 5,
        title: 'Good Will Hunting',
        year: 1997,
        country: 'USA',
        director: 'Gus Van Sant',
        actors: ['Matt Damon', 'Robin Williams', 'Ben Affleck', 'Minnie Driver', 'Stellan Skarsgard'],
        duration: 'PT2H6M',
        contentRating: 'R',
        genre: ['Drama', 'Romance'],
        shortDescription: 'A powerful story about trauma and healing where Robin Williams\' therapist shows that asking for help is strength, not weakness, through the transformative power of emotional connection.',
        description: 'Good Will Hunting addresses trauma, repression, and the importance of connection through the relationship between Will, a troubled young genius, and his therapist Sean. Robin Williams\' therapist delivers the iconic line "It\'s not your fault," breaking through emotional walls and illustrating that asking for help is not weakness but strength. The film emphasizes that healing begins with connection and trust, showing how men can support each other through emotional honesty and professional guidance.',
        tags: ['Drama', 'Therapy', 'Trauma', 'Mentorship'],
        trailer: 'https://www.youtube.com/embed/ReIJ7v1ns6c',
        trailerThumbnail: 'https://img.youtube.com/vi/ReIJ7v1ns6c/maxresdefault.jpg',
        characters: [
            {
                name: 'Will Hunting',
                description: 'A brilliant but damaged young man who learns to open up emotionally and accept help, showing growth from isolation to connection.'
            },
            {
                name: 'Sean Maguire',
                description: 'A therapist who uses empathy and personal vulnerability to help Will heal, demonstrating emotional intelligence and professional compassion.'
            },
            {
                name: 'Chuckie Sullivan',
                description: 'Will\'s best friend who shows loyalty and tough love, representing authentic working-class friendship and support.'
            }
        ],
        reviews: [
            {
                quote: 'Robin Williams delivers a career-defining performance that perfectly balances humor and heartbreak.',
                source: 'Roger Ebert'
            },
            {
                quote: 'A moving exploration of friendship, therapy, and the courage it takes to be vulnerable.',
                source: 'The New York Times'
            },
            {
                quote: 'Damon and Affleck have written a screenplay that treats working-class characters with dignity and complexity.',
                source: 'Chicago Tribune'
            }
        ],
        whyIncluded: 'Good Will Hunting demonstrates healthy masculinity through Sean\'s therapeutic approach and Will\'s emotional growth. The film shows that true masculine strength involves seeking help when needed, expressing emotions honestly, and building genuine connections. Sean models emotional intelligence and professional care, while Will\'s journey proves that vulnerability and healing are signs of courage, not weakness.'
    },
    {
        id: 'pursuit-of-happyness',
        rank: 6,
        title: 'The Pursuit of Happyness',
        year: 2006,
        country: 'USA',
        director: 'Gabriele Muccino',
        actors: ['Will Smith', 'Jaden Smith', 'Thandiwe Newton', 'Brian Howe'],
        duration: 'PT1H57M',
        contentRating: 'PG-13',
        genre: ['Biography', 'Drama'],
        shortDescription: 'Will Smith portrays a father whose determination to build a better life demonstrates that true masculine strength lies in love, sacrifice, and perseverance through adversity.',
        description: 'Based on a true story, The Pursuit of Happyness follows Chris Gardner\'s struggle to build a better life for himself and his young son while facing homelessness and professional challenges. Chris\'s determination to build a better life for himself and his son exemplifies resilience and dedication—qualities central to positive masculinity. The film serves as a reminder that true strength lies not just in physical prowess but also in love, sacrifice, and perseverance through seemingly impossible circumstances.',
        tags: ['Biography', 'Father-Son', 'Perseverance', 'Inspiration'],
        trailer: 'https://www.youtube.com/embed/89Kq8SDyvfg',
        trailerThumbnail: 'https://img.youtube.com/vi/89Kq8SDyvfg/maxresdefault.jpg',
        characters: [
            {
                name: 'Chris Gardner',
                description: 'A struggling salesman and devoted father who demonstrates resilience, determination, and unconditional love for his son despite extreme hardship.'
            },
            {
                name: 'Christopher Jr.',
                description: 'Chris\'s young son who represents hope and motivation, showing the importance of protecting and nurturing the next generation.'
            },
            {
                name: 'Jay Twistle',
                description: 'A stockbroker who gives Chris a chance, representing the importance of recognizing potential and offering opportunities.'
            }
        ],
        reviews: [
            {
                quote: 'Will Smith delivers his most powerful performance as a man determined to overcome impossible odds.',
                source: 'USA Today'
            },
            {
                quote: 'A deeply moving portrait of fatherhood and the American dream that avoids sentimentality.',
                source: 'The Wall Street Journal'
            },
            {
                quote: 'Smith and his real-life son Jaden create an authentic father-son bond that anchors the entire film.',
                source: 'People Magazine'
            }
        ],
        whyIncluded: 'The Pursuit of Happyness showcases masculinity through caregiving, emotional resilience, and the willingness to sacrifice for others. Chris Gardner demonstrates that true masculine strength comes from nurturing relationships, persistent effort in the face of adversity, and the courage to pursue dreams while maintaining family responsibilities. His devotion to his son shows that being a provider means more than financial success.'
    },
    {
        id: 'princess-mononoke',
        rank: 7,
        title: 'Princess Mononoke',
        year: 1997,
        country: 'Japan',
        director: 'Hayao Miyazaki',
        actors: ['Yoji Matsuda', 'Yuriko Ishida', 'Yuko Tanaka', 'Kaoru Kobayashi'],
        duration: 'PT2H14M',
        contentRating: 'PG-13',
        genre: ['Animation', 'Action', 'Adventure'],
        shortDescription: 'Ashitaka represents healthy masculinity through his balanced approach to conflict, seeking understanding rather than dominance while showing respect for nature and women as equals.',
        description: 'Hayao Miyazaki\'s epic animated film features Ashitaka, who represents healthy masculinity through his balanced approach to conflict resolution, respect for nature and women as equals, and his ability to seek understanding rather than dominance. The film presents a protagonist who uses wisdom and compassion to navigate complex moral situations involving environmental destruction and human conflict. Ashitaka\'s journey shows how masculine strength can be expressed through empathy, mediation, and the courage to stand between opposing forces.',
        tags: ['Animation', 'Environmental', 'Epic', 'Japanese Cinema'],
        trailer: 'https://www.youtube.com/embed/4OiMOHRDs14',
        trailerThumbnail: 'https://img.youtube.com/vi/4OiMOHRDs14/maxresdefault.jpg',
        characters: [
            {
                name: 'Ashitaka',
                description: 'A young prince cursed by a demon who seeks to find balance between human civilization and nature, showing wisdom and compassion in conflict resolution.'
            },
            {
                name: 'San (Princess Mononoke)',
                description: 'A fierce young woman raised by wolves who fights to protect the forest, representing the power of environmental activism and female strength.'
            },
            {
                name: 'Lady Eboshi',
                description: 'The leader of Iron Town who represents complex antagonism, showing that even opponents can have understandable motivations.'
            }
        ],
        reviews: [
            {
                quote: 'A sweeping epic that successfully balances spectacular action with deep environmental and social themes.',
                source: 'The Los Angeles Times'
            },
            {
                quote: 'Miyazaki has created a protagonist who embodies the best qualities of leadership without resorting to violence.',
                source: 'Animation Magazine'
            },
            {
                quote: 'Princess Mononoke proves that animated films can tackle complex moral questions with sophistication.',
                source: 'The Guardian'
            }
        ],
        whyIncluded: 'Princess Mononoke presents Ashitaka as an ideal of healthy masculinity through his approach to conflict resolution and relationship with nature. Rather than choosing sides in the human-nature conflict, he seeks understanding and balance. His respect for San as an equal partner and his willingness to suffer for his principles demonstrate that true masculine strength comes from empathy, wisdom, and the courage to stand for what\'s right.'
    },
    {
        id: 'twelve-angry-men',
        rank: 8,
        title: '12 Angry Men',
        year: 1957,
        country: 'USA',
        director: 'Sidney Lumet',
        actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam', 'Jack Warden', 'E.G. Marshall'],
        duration: 'PT1H36M',
        contentRating: 'NR',
        genre: ['Drama', 'Crime'],
        shortDescription: 'This courtroom drama explores masculinity through an all-male jury, showing how reason and empathy can overcome prejudice and demonstrating moral courage in action.',
        description: 'Sidney Lumet\'s classic courtroom drama takes a firm look at masculinity through an all-male jury discussing a murder case. The film is honest about exploring the arrogance, confidence, and sometimes lack of understanding that men may exhibit, while showing how reason and empathy can overcome prejudice. Juror #8, played by Henry Fonda, demonstrates moral courage by standing alone against initial consensus, using logic and compassion to challenge assumptions and seek truth.',
        tags: ['Drama', 'Courtroom', 'Social Justice', 'Classic'],
        trailer: 'https://www.youtube.com/embed/_13J_9B5jEk',
        trailerThumbnail: 'https://img.youtube.com/vi/_13J_9B5jEk/maxresdefault.jpg',
        characters: [
            {
                name: 'Juror #8 (Davis)',
                description: 'The architect who stands alone for justice, demonstrating moral courage, logical thinking, and the patience to change minds through reason rather than force.'
            },
            {
                name: 'Juror #3 (Lee J. Cobb)',
                description: 'An angry man whose personal issues cloud his judgment, representing how unexamined emotions can lead to injustice.'
            },
            {
                name: 'Juror #4 (E.G. Marshall)',
                description: 'A logical stockbroker who shows how rational thinking can evolve when presented with new evidence.'
            }
        ],
        reviews: [
            {
                quote: 'A masterpiece of tight, economical filmmaking that explores the American justice system with intelligence and passion.',
                source: 'The New York Times'
            },
            {
                quote: 'Lumet has created a film that serves as both gripping drama and civics lesson about the importance of standing up for justice.',
                source: 'Chicago Sun-Times'
            },
            {
                quote: 'Henry Fonda delivers a performance that embodies moral integrity and quiet strength.',
                source: 'Variety'
            }
        ],
        whyIncluded: '12 Angry Men demonstrates healthy masculinity through Juror #8\'s approach to conflict and justice. He shows that true masculine strength lies in moral courage, rational thinking, and the patience to change minds through reason rather than intimidation. The film illustrates how men can use their influence responsibly and demonstrates that standing alone for justice requires both intellectual and emotional strength.'
    },
    {
        id: 'kings-speech',
        rank: 9,
        title: 'The King\'s Speech',
        year: 2010,
        country: 'UK',
        director: 'Tom Hooper',
        actors: ['Colin Firth', 'Geoffrey Rush', 'Helena Bonham Carter', 'Guy Pearce'],
        duration: 'PT1H58M',
        contentRating: 'R',
        genre: ['Biography', 'Drama', 'History'],
        shortDescription: 'Colin Firth\'s portrayal of King George VI shows masculinity through vulnerability and personal growth, demonstrating courage in overcoming internal obstacles rather than external enemies.',
        description: 'Tom Hooper\'s historical drama centers on King George VI\'s struggle with stuttering as he prepares to lead Britain during World War II. The film portrays masculinity through vulnerability, personal growth, and the courage to overcome internal obstacles rather than external enemies. Colin Firth\'s performance shows how true leadership can emerge from facing one\'s fears and accepting help, while the relationship with his speech therapist demonstrates the power of supportive male friendship.',
        tags: ['Biography', 'Historical', 'Disability', 'British Cinema'],
        trailer: 'https://www.youtube.com/embed/EcxBrTvLbBM',
        trailerThumbnail: 'https://img.youtube.com/vi/EcxBrTvLbBM/maxresdefault.jpg',
        characters: [
            {
                name: 'King George VI (Bertie)',
                description: 'A reluctant king who overcomes his speech impediment through determination and vulnerability, showing that leadership requires personal courage.'
            },
            {
                name: 'Lionel Logue',
                description: 'An unconventional speech therapist who treats the king as an equal, demonstrating the power of supportive friendship and professional dedication.'
            },
            {
                name: 'Queen Elizabeth',
                description: 'The supportive wife who encourages her husband\'s growth while maintaining her own strength and dignity.'
            }
        ],
        reviews: [
            {
                quote: 'Colin Firth delivers a masterful performance that transforms a speech impediment into a metaphor for finding one\'s voice.',
                source: 'The Guardian'
            },
            {
                quote: 'A stirring portrait of courage that shows how personal struggles can forge great leaders.',
                source: 'The Telegraph'
            },
            {
                quote: 'Hooper has crafted an intimate epic about the power of friendship and the courage to overcome fear.',
                source: 'Rolling Stone'
            }
        ],
        whyIncluded: 'The King\'s Speech exemplifies healthy masculinity through its portrayal of vulnerability as strength and the importance of asking for help. King George VI demonstrates that true leadership comes not from perfection but from the courage to face one\'s limitations and grow. His relationship with Lionel Logue shows how men can support each other through professional and personal challenges while maintaining dignity and respect.'
    },
    {
        id: 'bicycle-thieves',
        rank: 10,
        title: 'Bicycle Thieves',
        year: 1948,
        country: 'Italy',
        director: 'Vittorio De Sica',
        actors: ['Lamberto Maggiorani', 'Enzo Staiola', 'Lianella Carell', 'Gino Saltamerenda'],
        duration: 'PT1H29M',
        contentRating: 'NR',
        genre: ['Drama'],
        shortDescription: 'Vittorio De Sica\'s neorealist masterpiece explores masculine vulnerability through a father\'s search for his stolen bicycle, presenting masculinity as complex and emotionally rich.',
        description: 'Vittorio De Sica\'s neorealist masterpiece explores masculine subjectivity through the story of a father searching for his stolen bicycle, which he needs for work to support his family. The film represents the emergence of male melodrama in art cinema, presenting masculinity as vulnerable and complex rather than dominating. Antonio\'s desperate search with his young son reveals the emotional weight of economic pressure and paternal responsibility, showing how external circumstances can challenge traditional masculine roles.',
        tags: ['Neorealism', 'Italian Cinema', 'Social Drama', 'Classic'],
        trailer: 'https://www.youtube.com/embed/8CUIl0fzpfw',
        trailerThumbnail: 'https://img.youtube.com/vi/8CUIl0fzpfw/maxresdefault.jpg',
        characters: [
            {
                name: 'Antonio Ricci',
                description: 'A working-class father whose bicycle is stolen, leading him on a desperate search through Rome while grappling with pride, desperation, and paternal responsibility.'
            },
            {
                name: 'Bruno Ricci',
                description: 'Antonio\'s young son who witnesses his father\'s struggle, representing innocence and the next generation affected by economic hardship.'
            },
            {
                name: 'Maria Ricci',
                description: 'Antonio\'s wife who supports the family through domestic work while encouraging her husband\'s efforts to find employment.'
            }
        ],
        reviews: [
            {
                quote: 'A perfect example of neorealism that finds profound drama in everyday struggles and human dignity.',
                source: 'Sight & Sound'
            },
            {
                quote: 'De Sica has created a universal story about economic anxiety and paternal love that remains painfully relevant.',
                source: 'The Criterion Collection'
            },
            {
                quote: 'A masterpiece that shows how external circumstances can reveal internal character.',
                source: 'Film Quarterly'
            }
        ],
        whyIncluded: 'Bicycle Thieves presents masculinity through economic vulnerability and emotional complexity rather than traditional strength. Antonio\'s journey shows how external pressures can challenge masculine identity while revealing deeper truths about fatherhood, dignity, and human connection. The film demonstrates that authentic masculinity includes the full range of human emotions and struggles, particularly the vulnerability that comes with caring for others.'
    }
];

// SEO and metadata helper functions
function updatePageMetadata(title, description) {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
    
    // Update Open Graph
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    
    // Update Twitter
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', title);
    document.querySelector('meta[property="twitter:description"]').setAttribute('content', description);
}

// Export for potential Node.js usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { moviesData, updatePageMetadata };
}
