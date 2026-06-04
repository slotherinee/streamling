// @ts-nocheck
export interface Media {
  id: number
  tmdbId: number
  title: string
  year: number
  rating: number
  duration: string
  genre: string[]
  description: string
  backdrop: string
  poster: string
  type: 'movie' | 'series'
  episodes?: number
  seasons?: number
  cast: { name: string; role: string; avatar: string; personId?: number }[]
  director?: string
  trending?: boolean
  new?: boolean
  featured?: boolean
  progress?: number
  trailerKey?: string
  collectionId?: number
  collectionName?: string
}

const backdrops = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80',
  'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1920&q=80',
  'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&q=80',
  'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=80',
  'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1920&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80',
]

const posters = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80',
  'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&q=80',
  'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80',
  'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
  'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&q=80',
  'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=400&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80',
]

const avatarUrls = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
  'https://i.pravatar.cc/150?img=7',
  'https://i.pravatar.cc/150?img=8',
]

export const allMedia: Media[] = [
  {
    id: 1,
    tmdbId: 157336,
    title: 'Echoes of the Void',
    year: 2024,
    rating: 8.4,
    duration: '2h 18m',
    genre: ['Sci-Fi', 'Thriller'],
    description: 'A lone astronaut discovers a derelict space station harboring a consciousness unlike anything humanity has ever encountered. As she delves deeper, the line between reality and simulation begins to dissolve.',
    backdrop: backdrops[0],
    poster: posters[0],
    type: 'movie',
    director: 'Aria Chen',
    cast: [
      { name: 'Mara Voss', role: 'Commander Elena Reyes', avatar: avatarUrls[0], personId: 1 },
      { name: 'Jin Park', role: 'Dr. Kiran Mehta', avatar: avatarUrls[1], personId: 2 },
      { name: 'Sam Okafor', role: 'ARIA (Voice)', avatar: avatarUrls[2] },
      { name: 'Lena Brandt', role: 'Mission Control', avatar: avatarUrls[3] },
    ],
    trending: true,
    featured: true,
    trailerKey: 'zSWdZVtXT7E',
    collectionId: 1,
    collectionName: 'Echoes Universe',
  },
  {
    id: 2,
    tmdbId: 1396,
    title: 'Midnight Protocol',
    year: 2024,
    rating: 9.1,
    duration: '45m',
    genre: ['Crime', 'Drama'],
    description: 'An elite detective unit operates in the shadows of a corrupt city, navigating moral ambiguity to bring down a criminal syndicate that has infiltrated the highest levels of government.',
    backdrop: backdrops[1],
    poster: posters[1],
    type: 'series',
    seasons: 2,
    episodes: 16,
    cast: [
      { name: 'Rafael Ortega', role: 'Detective Noa Reiss', avatar: avatarUrls[4], personId: 3 },
      { name: 'Yuki Tanaka', role: 'Commissioner Adler', avatar: avatarUrls[5], personId: 4 },
      { name: 'Clara Mason', role: 'Informant "Ghost"', avatar: avatarUrls[6] },
      { name: 'Omar Saeed', role: 'The Broker', avatar: avatarUrls[7] },
    ],
    trending: true,
    new: true,
    trailerKey: 'HhesaQXLuRY',
  },
  {
    id: 3,
    tmdbId: 27205,
    title: 'The Last Garden',
    year: 2023,
    rating: 7.8,
    duration: '1h 52m',
    genre: ['Drama', 'Romance'],
    description: 'In a world where nature has been reduced to a single preserved garden, two strangers find connection and conflict as they compete for the last botanical research position.',
    backdrop: backdrops[2],
    poster: posters[2],
    type: 'movie',
    director: 'Sofia Laurent',
    cast: [
      { name: 'Aisha Bello', role: 'Dr. Lyra Vance', avatar: avatarUrls[0], personId: 5 },
      { name: 'Kai Eriksen', role: 'Marcus Cole', avatar: avatarUrls[1] },
    ],
    trending: false,
    trailerKey: 'YoHD9XEInc0',
    collectionId: 2,
    collectionName: 'Wanderer Chronicles',
  },
  {
    id: 4,
    tmdbId: 438631,
    title: 'Fractured Skies',
    year: 2024,
    rating: 8.7,
    duration: '2h 5m',
    genre: ['Action', 'Sci-Fi'],
    description: 'When Earth\'s atmosphere begins to collapse, a rogue pilot and a disgraced scientist must work together to deliver a cure across hostile airspace.',
    backdrop: backdrops[3],
    poster: posters[3],
    type: 'movie',
    director: 'Marcus Webb',
    cast: [
      { name: 'Zoe Castillo', role: 'Ace Dayo', avatar: avatarUrls[2], personId: 6 },
      { name: 'Finn O\'Brien', role: 'Dr. Hana Sato', avatar: avatarUrls[3] },
    ],
    trending: true,
    new: true,
    trailerKey: 'Way9Dexny3w',
    collectionId: 1,
    collectionName: 'Echoes Universe',
  },
  {
    id: 5,
    tmdbId: 71446,
    title: 'Neon Requiem',
    year: 2023,
    rating: 8.0,
    duration: '55m',
    genre: ['Neo-Noir', 'Mystery'],
    description: 'A jazz musician in a rain-soaked cyberpunk city uncovers a conspiracy that stretches from the underground clubs to the corporate towers above the clouds.',
    backdrop: backdrops[4],
    poster: posters[4],
    type: 'series',
    seasons: 1,
    episodes: 8,
    cast: [
      { name: 'Leo Morrow', role: 'Sol Vega', avatar: avatarUrls[4], personId: 7 },
      { name: 'Nina Bauer', role: 'Iris', avatar: avatarUrls[5] },
    ],
    new: true,
    progress: 45,
    trailerKey: '_InqQJRqGW4',
  },
  {
    id: 6,
    tmdbId: 335984,
    title: 'Deep Current',
    year: 2024,
    rating: 7.5,
    duration: '1h 44m',
    genre: ['Thriller', 'Adventure'],
    description: 'A marine biologist\'s routine survey dive turns into a fight for survival when she discovers a classified underwater facility that someone wants kept secret forever.',
    backdrop: backdrops[5],
    poster: posters[5],
    type: 'movie',
    director: 'Priya Nair',
    cast: [
      { name: 'Cleo Andersen', role: 'Dr. Mila Ross', avatar: avatarUrls[6], personId: 8 },
      { name: 'Jared Stone', role: 'Commander Walsh', avatar: avatarUrls[7] },
    ],
    progress: 72,
    trailerKey: 'gD6kgQrvSBE',
  },
  {
    id: 7,
    tmdbId: 66732,
    title: 'Ember and Ash',
    year: 2023,
    rating: 8.9,
    duration: '50m',
    genre: ['Fantasy', 'Drama'],
    description: 'In a world where fire mages are hunted to extinction, the last ember-keeper must decide whether to hide her gift or ignite a revolution.',
    backdrop: backdrops[6],
    poster: posters[6],
    type: 'series',
    seasons: 3,
    episodes: 24,
    cast: [
      { name: 'Aria Storm', role: 'Kira Embermane', avatar: avatarUrls[0], personId: 9 },
      { name: 'Theo Black', role: 'The Warden', avatar: avatarUrls[1] },
    ],
    trending: true,
    progress: 30,
    trailerKey: 'b9EkMc79ZSU',
  },
  {
    id: 8,
    tmdbId: 155,
    title: 'Cold Signal',
    year: 2024,
    rating: 8.2,
    duration: '1h 58m',
    genre: ['Espionage', 'Thriller'],
    description: 'A retired signals intelligence officer is pulled back into service when encrypted messages bearing her old codename begin appearing in hostile communications.',
    backdrop: backdrops[7],
    poster: posters[7],
    type: 'movie',
    director: 'Ivan Petrov',
    cast: [
      { name: 'Helene Dubois', role: 'Agent Miriam Cross', avatar: avatarUrls[2], personId: 10 },
      { name: 'Andre Visser', role: 'Director Holt', avatar: avatarUrls[3] },
    ],
    new: true,
    trailerKey: 'kmJLuwBeTFk',
  },
  {
    id: 9,
    tmdbId: 693134,
    title: 'The Cartographer',
    year: 2023,
    rating: 7.9,
    duration: '2h 10m',
    genre: ['Adventure', 'Drama'],
    description: 'Following an ancient map hidden inside a stolen painting, an unlikely trio traverses unmapped territories where geography itself seems to shift around them.',
    backdrop: backdrops[8],
    poster: posters[8],
    type: 'movie',
    director: 'Elena Vasquez',
    cast: [
      { name: 'Sam Rivers', role: 'Professor Hale', avatar: avatarUrls[4] },
      { name: 'Mia Chen', role: 'Zoe Park', avatar: avatarUrls[5] },
    ],
    trailerKey: '8g18jFHCLXk',
    collectionId: 2,
    collectionName: 'Wanderer Chronicles',
  },
  {
    id: 10,
    tmdbId: 71912,
    title: 'White Noise Protocol',
    year: 2024,
    rating: 8.5,
    duration: '48m',
    genre: ['Sci-Fi', 'Horror'],
    description: 'A research station in the Arctic begins receiving transmissions from the future. Each message is a warning. None of them match.',
    backdrop: backdrops[9],
    poster: posters[9],
    type: 'series',
    seasons: 1,
    episodes: 6,
    cast: [
      { name: 'Nico Ferrer', role: 'Dr. Odin Marsh', avatar: avatarUrls[6] },
      { name: 'Asha Wolfe', role: 'Lieutenant Vane', avatar: avatarUrls[7] },
    ],
    trending: true,
    new: true,
    trailerKey: 'ndl5d1lCv8I',
  },
  {
    id: 11,
    tmdbId: 475557,
    title: 'Glass Horizon',
    year: 2023,
    rating: 7.6,
    duration: '1h 47m',
    genre: ['Drama', 'Sci-Fi'],
    description: 'A glass sculptor discovers that her creations are windows into parallel timelines, forcing her to choose between infinite possibilities and the life she already has.',
    backdrop: backdrops[10],
    poster: posters[10],
    type: 'movie',
    director: 'Tomas Berg',
    cast: [
      { name: 'Vera Lindqvist', role: 'Aelys Quinn', avatar: avatarUrls[0] },
      { name: 'Marco Diaz', role: 'The Archivist', avatar: avatarUrls[1] },
    ],
    trailerKey: 'zAGVQLHvwOY',
  },
  {
    id: 12,
    tmdbId: 69740,
    title: 'Saltwater Kings',
    year: 2024,
    rating: 8.3,
    duration: '52m',
    genre: ['Crime', 'Drama', 'Action'],
    description: 'Three siblings inherit their father\'s fishing empire and discover it was built on blood money, facing rival gangs, corrupt officials, and their own darkest impulses.',
    backdrop: backdrops[11],
    poster: posters[11],
    type: 'series',
    seasons: 2,
    episodes: 18,
    cast: [
      { name: 'Dante Reyes', role: 'Marco Salinas', avatar: avatarUrls[2] },
      { name: 'Isabel Novas', role: 'Carmen Salinas', avatar: avatarUrls[3] },
      { name: 'Elio Cruz', role: 'Paulo Salinas', avatar: avatarUrls[4] },
    ],
    trending: true,
    trailerKey: '5hAXVqrljbs',
  },
]

export const genres = ['Sci-Fi', 'Thriller', 'Drama', 'Crime', 'Action', 'Fantasy', 'Romance', 'Horror', 'Mystery', 'Adventure', 'Neo-Noir', 'Espionage']

export const trendingMedia = allMedia.filter(m => m.trending)
export const newReleases = allMedia.filter(m => m.new)
export const continueWatching = allMedia.filter(m => m.progress !== undefined)
export const featuredMedia = allMedia.find(m => m.featured) || allMedia[0]

// ─── Reviews ─────────────────────────────────────────────────────────────────

export interface Review {
  id: number
  mediaId: number
  user: string
  avatar: string
  rating: number
  comment: string
  date: string
  likes: number
}

export const reviews: Review[] = [
  { id: 1, mediaId: 1, user: 'StargazerKai', avatar: 'https://i.pravatar.cc/150?img=11', rating: 9, comment: 'Visually stunning and philosophically rich. The slow-burn tension keeps you glued to the screen. One of the best sci-fi experiences in years — reminds me of classic Kubrick but with a modern soul.', date: '3 days ago', likes: 48 },
  { id: 2, mediaId: 1, user: 'CinephileNora', avatar: 'https://i.pravatar.cc/150?img=23', rating: 8, comment: 'The atmosphere is unmatched. Sound design does half the work here. My only gripe is the third act feels slightly rushed but the journey there is absolutely worth it.', date: '1 week ago', likes: 31 },
  { id: 3, mediaId: 1, user: 'MovieBuff_Rex', avatar: 'https://i.pravatar.cc/150?img=33', rating: 10, comment: 'A masterpiece. Watched it twice already and noticed things I missed the first time. The ending hit differently on rewatch.', date: '2 weeks ago', likes: 72 },
  { id: 4, mediaId: 2, user: 'CrimeWatcher', avatar: 'https://i.pravatar.cc/150?img=14', rating: 9, comment: 'Season 2 completely blew me away. The writing is so sharp — every character has real weight and no one is cleanly good or evil. Binged it in a weekend.', date: '5 days ago', likes: 55 },
  { id: 5, mediaId: 2, user: 'SeriesJunkie', avatar: 'https://i.pravatar.cc/150?img=26', rating: 8, comment: 'Slow start but worth sticking with. By episode 4 you\'re completely hooked. The detective duo has phenomenal chemistry.', date: '2 weeks ago', likes: 29 },
  { id: 6, mediaId: 3, user: 'RomanceFan88', avatar: 'https://i.pravatar.cc/150?img=45', rating: 8, comment: 'Beautifully shot and surprisingly emotional. The world-building around the last garden is clever — an unusual backdrop for a love story that actually works.', date: '1 week ago', likes: 41 },
  { id: 7, mediaId: 4, user: 'ActionHound', avatar: 'https://i.pravatar.cc/150?img=52', rating: 9, comment: 'Non-stop from minute one. The aerial sequences are insane — I have no idea how they filmed some of this. The chemistry between the two leads elevates what could\'ve been generic action.', date: '4 days ago', likes: 63 },
  { id: 8, mediaId: 4, user: 'FilmCritic_J', avatar: 'https://i.pravatar.cc/150?img=17', rating: 7, comment: 'Spectacle over substance in places, but as pure blockbuster entertainment it absolutely delivers. See it on the biggest screen you can find.', date: '1 week ago', likes: 22 },
  { id: 9, mediaId: 5, user: 'NeonDreamer', avatar: 'https://i.pravatar.cc/150?img=38', rating: 10, comment: 'This is the noir series I\'ve been waiting for. Every frame looks like a painting. The jazz soundtrack is perfection. Please give us season 2.', date: '2 days ago', likes: 87 },
  { id: 10, mediaId: 5, user: 'MysteryReader', avatar: 'https://i.pravatar.cc/150?img=29', rating: 8, comment: 'The mystery kept me guessing right until the end. Some plot threads feel unresolved but in a way that makes you desperate for more.', date: '1 week ago', likes: 34 },
  { id: 11, mediaId: 6, user: 'ThrillSeeker', avatar: 'https://i.pravatar.cc/150?img=43', rating: 7, comment: 'Solid underwater thriller. The claustrophobia is real and the pacing is tight. Nothing groundbreaking but a very satisfying watch.', date: '6 days ago', likes: 18 },
  { id: 12, mediaId: 7, user: 'FantasyFanatic', avatar: 'https://i.pravatar.cc/150?img=55', rating: 10, comment: 'Best fantasy series since Game of Thrones\' golden years. The magic system is inventive, the lore goes deep, and Kira is one of the best protagonists in the genre. Season 3 was a masterclass.', date: '3 days ago', likes: 104 },
  { id: 13, mediaId: 7, user: 'WorldBuilder', avatar: 'https://i.pravatar.cc/150?img=18', rating: 9, comment: 'The production value on a show like this is staggering. They clearly care deeply about the source material. Every season raises the stakes in a satisfying way.', date: '5 days ago', likes: 67 },
  { id: 14, mediaId: 8, user: 'SpyThrillFan', avatar: 'https://i.pravatar.cc/150?img=31', rating: 8, comment: 'Tense and cerebral — more Le Carré than Bond. The lead performance is exceptional and the cryptographic plot is surprisingly accurate. Ending left me wanting more.', date: '1 week ago', likes: 39 },
  { id: 15, mediaId: 9, user: 'AdventureSeeker', avatar: 'https://i.pravatar.cc/150?img=47', rating: 8, comment: 'Charming adventure with genuine heart. The trio dynamic is the best thing about it — feels like a modern classic in the making. Gorgeous location work.', date: '4 days ago', likes: 26 },
  { id: 16, mediaId: 10, user: 'SciFiNerd', avatar: 'https://i.pravatar.cc/150?img=22', rating: 9, comment: 'The premise is terrifying and brilliantly executed. Each episode reveals just enough to keep the dread building. The Arctic setting adds real menace. Can\'t wait for season 2.', date: '2 days ago', likes: 58 },
  { id: 17, mediaId: 11, user: 'ArtHouseVibes', avatar: 'https://i.pravatar.cc/150?img=36', rating: 8, comment: 'Meditative and visually inventive. The parallel timeline concept is handled with more intelligence than most films attempt. Not for everyone but deeply rewarding if you engage with it.', date: '1 week ago', likes: 44 },
  { id: 18, mediaId: 12, user: 'CrimeDramaFan', avatar: 'https://i.pravatar.cc/150?img=48', rating: 9, comment: 'Gripping family crime drama with incredible performances across all three leads. The show never takes the easy route — moral complexity all the way. Season 2 finale destroyed me.', date: '3 days ago', likes: 76 },
]

// ─── Persons ─────────────────────────────────────────────────────────────────

export interface PersonCredit {
  mediaId: number
  character: string
  type: 'movie' | 'series'
}

export interface Person {
  id: number
  name: string
  birthday: string
  birthplace: string
  bio: string
  profileImage: string
  knownFor: string[]
  credits: PersonCredit[]
}

export const persons: Person[] = [
  {
    id: 1,
    name: 'Mara Voss',
    birthday: '1988-03-14',
    birthplace: 'Berlin, Germany',
    profileImage: 'https://i.pravatar.cc/400?img=1',
    bio: 'Mara Voss is a critically acclaimed German-American actress who rose to international prominence with her intense, physically demanding performances. Trained at the Berlin University of the Arts, she spent years in European theatre before breaking into film. Her ability to convey complex interiority with minimal dialogue has made her one of the most sought-after actresses of her generation. She is known for preparing extensively for every role, often spending months researching technical fields before filming.',
    knownFor: ['Commander Elena Reyes', 'Best Actress — Nova Awards 2024', 'Forbes 30 Under 40 Film'],
    credits: [
      { mediaId: 1, character: 'Commander Elena Reyes', type: 'movie' },
    ],
  },
  {
    id: 2,
    name: 'Jin Park',
    birthday: '1985-07-22',
    birthplace: 'Seoul, South Korea',
    profileImage: 'https://i.pravatar.cc/400?img=2',
    bio: 'Jin Park is a South Korean-American actor and producer whose career spans theatre, television, and blockbuster cinema. After graduating from Yale School of Drama, he built a reputation for playing intellectually sharp characters caught in moral dilemmas. His dry wit and subtle emotional range have made him a critics\' favourite and a consistent awards contender.',
    knownFor: ['Dr. Kiran Mehta', 'Best Supporting Actor — Screen Guild Awards', 'BAFTA nominee 2023'],
    credits: [
      { mediaId: 1, character: 'Dr. Kiran Mehta', type: 'movie' },
    ],
  },
  {
    id: 3,
    name: 'Rafael Ortega',
    birthday: '1982-11-05',
    birthplace: 'Mexico City, Mexico',
    profileImage: 'https://i.pravatar.cc/400?img=3',
    bio: 'Rafael Ortega is a Mexican actor whose brooding screen presence and instinctive physicality have defined a generation of crime drama. He trained under Alejandro Caballero in Mexico City before relocating to New York, where he earned a string of prestigious stage awards. His portrayal of Detective Noa Reiss in Midnight Protocol is considered one of the defining TV performances of the decade.',
    knownFor: ['Detective Noa Reiss', 'Golden Globe winner 2024', 'Emmy nominated — two years running'],
    credits: [
      { mediaId: 2, character: 'Detective Noa Reiss', type: 'series' },
    ],
  },
  {
    id: 4,
    name: 'Yuki Tanaka',
    birthday: '1979-02-18',
    birthplace: 'Osaka, Japan',
    profileImage: 'https://i.pravatar.cc/400?img=4',
    bio: 'Yuki Tanaka is a Japanese-British actress celebrated for her commanding authority and precise emotional control. A veteran of the Royal Shakespeare Company, she transitioned into film and television in her thirties, quickly establishing herself as a scene-stealer in every project she joined. Her portrayal of Commissioner Adler brought moral complexity and unexpected warmth to what could have been a one-dimensional antagonist.',
    knownFor: ['Commissioner Adler', 'Olivier Award winner', 'OBE for services to drama'],
    credits: [
      { mediaId: 2, character: 'Commissioner Adler', type: 'series' },
    ],
  },
  {
    id: 5,
    name: 'Aisha Bello',
    birthday: '1993-09-30',
    birthplace: 'Lagos, Nigeria',
    profileImage: 'https://i.pravatar.cc/400?img=5',
    bio: 'Aisha Bello is a Nigerian-British actress who has rapidly become one of the most exciting emerging talents in international cinema. She studied at RADA and made her feature film debut to widespread critical acclaim, earning comparisons to a young Cate Blanchett for her effortless ability to inhabit complex female protagonists. Off-screen, she is an outspoken advocate for biodiversity and climate action.',
    knownFor: ['Dr. Lyra Vance', 'Rising Star — BAFTA 2023', 'Cannes Best Actress nominee'],
    credits: [
      { mediaId: 3, character: 'Dr. Lyra Vance', type: 'movie' },
    ],
  },
  {
    id: 6,
    name: 'Zoe Castillo',
    birthday: '1990-05-11',
    birthplace: 'Buenos Aires, Argentina',
    profileImage: 'https://i.pravatar.cc/400?img=6',
    bio: 'Zoe Castillo is an Argentine actress and stunt practitioner known for her fearless commitment to action roles. She trained as a professional pilot before entering acting, a background that lends extraordinary authenticity to her performance in Fractured Skies. Her combination of genuine athleticism and deep emotional intelligence has made her one of the most bankable action stars working today.',
    knownFor: ['Ace Dayo in Fractured Skies', 'Licensed commercial pilot', 'MTV Movie Award — Best Action Performance'],
    credits: [
      { mediaId: 4, character: 'Ace Dayo', type: 'movie' },
    ],
  },
  {
    id: 7,
    name: 'Leo Morrow',
    birthday: '1987-12-03',
    birthplace: 'New Orleans, USA',
    profileImage: 'https://i.pravatar.cc/400?img=7',
    bio: 'Leo Morrow is an American actor and jazz musician who brings rare authenticity to the intersection of music and performance. Born and raised in New Orleans, he played professionally in jazz clubs from the age of sixteen before moving to New York to pursue acting. His performance as Sol Vega in Neon Requiem is considered a breakthrough — a role that demanded equal mastery of both his arts.',
    knownFor: ['Sol Vega in Neon Requiem', 'Released two jazz albums', 'Sundance Special Jury Prize'],
    credits: [
      { mediaId: 5, character: 'Sol Vega', type: 'series' },
    ],
  },
  {
    id: 8,
    name: 'Cleo Andersen',
    birthday: '1991-04-07',
    birthplace: 'Copenhagen, Denmark',
    profileImage: 'https://i.pravatar.cc/400?img=8',
    bio: 'Cleo Andersen is a Danish actress who built her reputation in Scandinavian noir before crossing over to international productions. A certified open-water diver, she brought unscripted physicality to the underwater sequences in Deep Current. She is known for her minimalist acting style — a quality critics describe as magnetic stillness — and for her commitment to telling stories rooted in the natural world.',
    knownFor: ['Dr. Mila Ross in Deep Current', 'Nordic Film Prize 2022', 'Certified master diver'],
    credits: [
      { mediaId: 6, character: 'Dr. Mila Ross', type: 'movie' },
    ],
  },
  {
    id: 9,
    name: 'Aria Storm',
    birthday: '1995-08-19',
    birthplace: 'Edinburgh, Scotland',
    profileImage: 'https://i.pravatar.cc/400?img=9',
    bio: 'Aria Storm is a Scottish actress who has become the defining face of prestige fantasy television. Discovered in an Edinburgh fringe production at nineteen, she was cast in Ember and Ash directly from the stage with no prior screen experience. Her portrayal of Kira Embermane over three seasons — from frightened outcast to revolutionary leader — is widely regarded as one of the finest arc performances in television history.',
    knownFor: ['Kira Embermane in Ember and Ash', 'Emmy Award winner 2024', 'Screen Actors Guild Award winner'],
    credits: [
      { mediaId: 7, character: 'Kira Embermane', type: 'series' },
    ],
  },
  {
    id: 10,
    name: 'Helene Dubois',
    birthday: '1980-01-25',
    birthplace: 'Lyon, France',
    profileImage: 'https://i.pravatar.cc/400?img=10',
    bio: 'Helene Dubois is a French actress whose intelligence and precision have made her the go-to choice for roles requiring both cerebral depth and physical restraint. A former linguist and cryptographer by training, she brings unusual technical credibility to spy and espionage roles. Her French-language films have won multiple César Awards, and her English-language debut in Cold Signal introduced her to a global audience.',
    knownFor: ['Agent Miriam Cross in Cold Signal', 'César Award winner — three times', 'Polyglot — speaks six languages'],
    credits: [
      { mediaId: 8, character: 'Agent Miriam Cross', type: 'movie' },
    ],
  },
]

// ─── Seasons & Episodes ───────────────────────────────────────────────────────

export interface Episode {
  episodeNumber: number
  name: string
  overview: string
  airDate: string
  stillPath: string
  runtime: number
}

export interface Season {
  id: number
  mediaId: number
  seasonNumber: number
  name: string
  overview: string
  posterPath: string
  airDate: string
  episodes: Episode[]
}

const episodeTitleSets: Record<number, string[][]> = {
  2: [
    ['Pilot', 'The Informant', 'Blind Spots', 'The Drop', 'Internal Affairs', 'Ghost Protocol', 'Crossfire', 'Checkmate'],
    ['Recon', 'The Syndicate', 'Double Cross', 'Red Board', 'Safe House', 'The Mole', 'Last Move', 'Endgame'],
  ],
  5: [
    ['Neon City Blues', 'The First Note', 'Ivory Keys', 'Below the Clouds', 'Static', 'The Long Con', 'Last Set', 'Resolution'],
  ],
  7: [
    ['The Ember-Keeper', 'First Flame', 'Ash and Blood', 'The Warden Comes', 'Hidden Fire', 'Flare', 'The Trial', 'Into the Dark'],
    ['Return', 'Embers Scattered', 'The Order', 'Smoke and Mirrors', 'Kindling', 'The Pyreborn', 'Revolution Starts', 'The Last Pyre'],
    ['A New World', 'Scars', 'Rekindled', 'The Council', 'Siege', 'Ash Crown', 'The Final Flame', 'Epilogue'],
  ],
  10: [
    ['Signal One', 'Transmission', 'Static Noise', 'White Room', 'The Frequency', 'End of Signal'],
  ],
  12: [
    ['Blood Tide', 'The Will', 'Salt and Sin', 'The Rival', 'Undercut', 'Rip Current', 'Family Business', 'Harbour of Bones'],
    ['Inheritance', 'The Ledger', 'Hostile Waters', 'Takeover', 'Undertow', 'The Reckoning', 'Broken Nets', 'Kings No More', 'Tide Turns', 'Legacy'],
  ],
}

const episodeOverviews = [
  'Secrets surface as loyalties are tested in a tense confrontation no one saw coming.',
  'A seemingly routine task spirals into chaos when an unexpected figure appears.',
  'The past resurfaces, forcing our protagonist to make a choice they cannot take back.',
  'Alliances shift dramatically after a revelation changes everything the characters thought they knew.',
  'An uneasy truce breaks down as the true stakes of the conflict become clear.',
  'A quiet episode that builds devastating tension toward an explosive climax.',
  'Sacrifices are made. Some wounds cannot be healed.',
  'The road ahead narrows. Every decision now has permanent consequences.',
]

function buildEpisodes(mediaId: number, seasonNumber: number): Episode[] {
  const titles = episodeTitleSets[mediaId]?.[seasonNumber - 1] ?? []
  return titles.map((name, i) => ({
    episodeNumber: i + 1,
    name,
    overview: episodeOverviews[i % episodeOverviews.length],
    airDate: `202${3 + Math.floor((mediaId + seasonNumber + i) % 2)}-0${((mediaId + i) % 9) + 1}-${String(((i * 7 + 1) % 28) + 1).padStart(2, '0')}`,
    stillPath: backdrops[(mediaId + seasonNumber + i) % backdrops.length],
    runtime: 38 + ((mediaId + seasonNumber + i) % 20),
  }))
}

export const seasons: Season[] = [
  {
    id: 1, mediaId: 2, seasonNumber: 1,
    name: 'Season 1',
    overview: 'Detective Noa Reiss is assigned to a case that will pull her deep into the criminal underworld — and into the corrupt heart of the city\'s police force.',
    posterPath: posters[1],
    airDate: '2023-09-10',
    episodes: buildEpisodes(2, 1),
  },
  {
    id: 2, mediaId: 2, seasonNumber: 2,
    name: 'Season 2',
    overview: 'With the syndicate weakened but not broken, Reiss must navigate internal betrayal and a new threat that reaches the highest levels of government.',
    posterPath: posters[1],
    airDate: '2024-04-22',
    episodes: buildEpisodes(2, 2),
  },
  {
    id: 3, mediaId: 5, seasonNumber: 1,
    name: 'Season 1',
    overview: 'Jazz musician Sol Vega stumbles into a conspiracy that could bring down the most powerful corporation in Neon City — if it doesn\'t kill him first.',
    posterPath: posters[4],
    airDate: '2023-11-03',
    episodes: buildEpisodes(5, 1),
  },
  {
    id: 4, mediaId: 7, seasonNumber: 1,
    name: 'Season 1 — The Hidden Flame',
    overview: 'Kira Embermane discovers her power and learns that hiding it is no longer an option when the Warden\'s hunters arrive in her village.',
    posterPath: posters[6],
    airDate: '2023-03-15',
    episodes: buildEpisodes(7, 1),
  },
  {
    id: 5, mediaId: 7, seasonNumber: 2,
    name: 'Season 2 — The Order of Ash',
    overview: 'Forced from hiding, Kira must unite the scattered ember-keepers against a ruthless new faction that seeks to weaponise fire magic for conquest.',
    posterPath: posters[6],
    airDate: '2023-10-08',
    episodes: buildEpisodes(7, 2),
  },
  {
    id: 6, mediaId: 7, seasonNumber: 3,
    name: 'Season 3 — Revolution',
    overview: 'The final battle for the fate of the mages begins. Every alliance will be tested and not everyone will survive the last flame.',
    posterPath: posters[6],
    airDate: '2024-06-20',
    episodes: buildEpisodes(7, 3),
  },
  {
    id: 7, mediaId: 10, seasonNumber: 1,
    name: 'Season 1',
    overview: 'Scientists at an Arctic research station begin receiving transmissions from the future. The messages are warnings — and they\'re getting worse.',
    posterPath: posters[9],
    airDate: '2024-02-14',
    episodes: buildEpisodes(10, 1),
  },
  {
    id: 8, mediaId: 12, seasonNumber: 1,
    name: 'Season 1 — Blood Tide',
    overview: 'The Salinas siblings inherit their father\'s fishing empire and discover the horrifying source of the family\'s wealth.',
    posterPath: posters[11],
    airDate: '2023-07-01',
    episodes: buildEpisodes(12, 1),
  },
  {
    id: 9, mediaId: 12, seasonNumber: 2,
    name: 'Season 2 — The Reckoning',
    overview: 'With rivals closing in and loyalties fracturing within the family, the Salinas siblings face a reckoning that will define their legacy — or end it.',
    posterPath: posters[11],
    airDate: '2024-03-12',
    episodes: buildEpisodes(12, 2),
  },
]

// ─── Collections ─────────────────────────────────────────────────────────────

export interface Collection {
  id: number
  name: string
  overview: string
  backdropPath: string
  posterPath: string
  partIds: number[]
}

export const collections: Collection[] = [
  {
    id: 1,
    name: 'Echoes Universe',
    overview: 'A shared cinematic universe exploring consciousness, identity, and humanity\'s place in the cosmos. Beginning with the discovery of an alien intelligence aboard a derelict station, the Echoes Universe expands across planets, timelines, and the very nature of what it means to exist.',
    backdropPath: backdrops[0],
    posterPath: posters[3],
    partIds: [1, 4],
  },
  {
    id: 2,
    name: 'Wanderer Chronicles',
    overview: 'Two films united by a single theme: people compelled to journey into the unknown, guided by maps — literal or metaphorical — toward something that changes them forever. Together they form a meditation on exploration, loss, and the roads we cannot walk twice.',
    backdropPath: backdrops[8],
    posterPath: posters[8],
    partIds: [3, 9],
  },
]

// ─── Getters ─────────────────────────────────────────────────────────────────

export function getReviewsByMediaId(id: number): Review[] {
  return reviews.filter(r => r.mediaId === id)
}

export function getMediaById(id: number): Media | undefined {
  return allMedia.find(m => m.id === id)
}

export function getMediaByGenre(genre: string): Media[] {
  return allMedia.filter(m => m.genre.includes(genre))
}

export function searchMedia(query: string): Media[] {
  const q = query.toLowerCase()
  return allMedia.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.some(g => g.toLowerCase().includes(q)) ||
    m.description.toLowerCase().includes(q)
  )
}

export function getPersonById(id: number): Person | undefined {
  return persons.find(p => p.id === id)
}

export function getSeasonsByMediaId(mediaId: number): Season[] {
  return seasons.filter(s => s.mediaId === mediaId)
}

export function getSeasonByNumber(mediaId: number, seasonNumber: number): Season | undefined {
  return seasons.find(s => s.mediaId === mediaId && s.seasonNumber === seasonNumber)
}

export function getCollectionById(id: number): Collection | undefined {
  return collections.find(c => c.id === id)
}

export function mediaDetailPath(media: Media): string {
  return media.type === 'series' ? `/tv/${media.id}` : `/movie/${media.id}`
}
