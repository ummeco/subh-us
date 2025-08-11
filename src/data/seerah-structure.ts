export interface Lecture {
  id: number
  title: string
  audioFile: string
  duration?: string
  description?: string
}

export interface Section {
  id: string
  title: string
  description: string
  lectures: Lecture[]
}

export const seerahSections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction & Foundation',
    description: 'Understanding the importance of studying the Seerah and setting the historical context',
    lectures: [
      { id: 1, title: 'Specialities of Prophet Muhammed - Part 1', audioFile: '001 Seerah of Prophet Muhammed 1 - Specialities of Prophet Muhammed - Yasir Qadhi  April 2011.mp3' },
      { id: 2, title: 'Specialities of Prophet Muhammed - Part 2', audioFile: '002 Seerah of Prophet Muhammed 2 - Specialities of Prophet Muhammed Part 2 - Yasir Qadhi  May 2011.mp3' },
      { id: 3, title: 'Why Study the Seerah & Pre-Islamic Arabia', audioFile: '003 Seerah of Prophet Muhammed 3 - Why study the Seerah & Pre-Islamic Arabia - Yasir Qadhi  May 2011.mp3' },
      { id: 4, title: 'Religious Status of the World Before Islam', audioFile: '004 Seerah of Prophet Muhammed 4 - Religious status of the world before Islam - Yasir Qadhi  June 2011.mp3' },
      { id: 5, title: 'Genealogy & Year of the Elephant', audioFile: '005 Seerah of Prophet Muhammad 5 - Genealogy & Year of the Elephant ~ Dr. Yasir Qadhi  14th Jan 2015.mp3' }
    ]
  },
  {
    id: 'early-life',
    title: 'Birth & Early Life',
    description: 'The blessed birth and childhood of Prophet Muhammad ﷺ',
    lectures: [
      { id: 6, title: 'The Birth of Prophet Muhammed & Why Arabia', audioFile: '006 Seerah of Prophet Muhammed 6 - The Birth of Prophet Muhammed & Why Arabia - Yasir Qadhi  June 2011.mp3' },
      { id: 7, title: 'The Early Childhood of Prophet Muhammed', audioFile: '007 Seerah of Prophet Muhammed 7 - The early childhood of Prophet Muhammed - Yasir Qadhi  June 2011.mp3' },
      { id: 8, title: 'The Early Manhood of Prophet Muhammed', audioFile: '008 Seerah of Prophet Muhammed 8 - The early manhood of Prophet Muhammed - Yasir Qadhi  September 2011.mp3' },
      { id: 9, title: 'Marriage to Khadija & Re-building Ka\'aba', audioFile: '009 Seerah of Prophet Muhammed 9 - Marriage to Khadija & Re-building Kaa\'ba - Yasir Qadhi  Sept 2011.mp3' },
      { id: 10, title: 'Zayd ibn Harithah & Beginning of Revelation', audioFile: '010 Seerah of Prophet Muhammed 10 - Zayd b. Harithah & Beginning of Revelation - Yasir Qadhi  Sept 2011.mp3' }
    ]
  },
  {
    id: 'revelation-prophethood',
    title: 'Revelation & Early Prophethood',
    description: 'The beginning of revelation and the early days of Islam',
    lectures: [
      { id: 11, title: 'The Second Revelation', audioFile: '011 Seerah of Prophet Muhammed 11 - The Second Revelation - Yasir Qadhi  October 2011.mp3' },
      { id: 12, title: 'Declaration of Prophethood', audioFile: '012 Seerah of Prophet Muhammed 12 - Declaration of Prophethood - Yasir Qadhi  October 2011.mp3' },
      { id: 13, title: 'Opposition from the Quraysh', audioFile: '013 Seerah of Prophet Muhammed 13 - Opposition from the Quraysh - Yasir Qadhi  October 2011.mp3' },
      { id: 14, title: 'Torture and Persecution of the Weak', audioFile: '014 Seerah of Prophet Muhammed 14 - Torture and persecution of the weak - Yasir Qadhi  November 2011.mp3' },
      { id: 15, title: 'Torture to the Prophet & Abyssinia', audioFile: '015 Seerah of Prophet Muhammed 15 - Torture to the Prophet & Abyssinia - Yasir Qadhi  November 2011.mp3' }
    ]
  },
  {
    id: 'meccan-trials',
    title: 'Meccan Trials & Perseverance',
    description: 'The trials, tribulations, and miracles during the Meccan period',
    lectures: [
      { id: 16, title: 'The Incident of the Satanic Verses', audioFile: '016 Seerah of Prophet Muhammed 16 - The Incident of the Satanic Verses - Yasir Qadhi  November 2011.mp3' },
      { id: 17, title: 'The Second Migration to Abyssinia', audioFile: '017 Seerah of Prophet Muhammed 17 - The second migration to Abyssinia - Yasir Qadhi  November 2011.mp3' },
      { id: 18, title: 'Conversion of Omar & Hamza and Boycott', audioFile: '018 Seerah of Prophet Muhammed 18 - Conversion of Omar & Hamza and Boycott - Yasir Qadhi  December 2011.mp3' },
      { id: 19, title: 'Death of Khadija & Abu Talib', audioFile: '019 Seerah of Prophet Muhammed 19 - Death of Khadija & Abu Talib - Yasir Qadhi  January 2012.mp3' },
      { id: 20, title: 'Incident of Ta\'if', audioFile: '020 Seerah of Prophet Muhammed 20 - Incident of Ta\'if - Yasir Qadhi  January 2012.mp3' }
    ]
  },
  {
    id: 'isra-miraj',
    title: 'Al-Isra wal-Mi\'raj',
    description: 'The miraculous Night Journey and Ascension to the Heavens',
    lectures: [
      { id: 21, title: 'Night Journey & Ascension to Heavens - Part 1', audioFile: '021 Seerah of Prophet Muhammed 21 - Night Journey & Ascension to Heavens 1 - Yasir Qadhi  January 2012.mp3' },
      { id: 22, title: 'Night Journey & Ascension to Heavens - Part 2', audioFile: '022 Seerah of Prophet Muhammed 22 - Night Journey & Ascension to Heavens 2 - Yasir Qadhi  February 2012.mp3' },
      { id: 23, title: 'Night Journey & Ascension to Heavens - Part 3', audioFile: '023 Seerah of Prophet Muhammed 23 - Night Journey & Ascension to Heavens 3 - Yasir Qadhi  February 2012.mp3' }
    ]
  },
  {
    id: 'hijrah',
    title: 'The Hijrah',
    description: 'The migration to Madinah and establishment of the Islamic state',
    lectures: [
      { id: 24, title: 'Planting the Seeds for Yathrib', audioFile: '024 Seerah of Prophet Muhammed 24 - Planting the seeds for Yathrib - Yasir Qadhi  February 2012.mp3' },
      { id: 25, title: 'The Covenant of Women & War Protection', audioFile: '025 Seerah of Prophet Muhammed 25 - The Covenant of Women & War protection - Yasir Qadhi  February 2012.mp3' },
      { id: 26, title: 'The Early Emigration to Madinah', audioFile: '026 Seerah of Prophet Muhammed 26 - The Early Emigration to Madinah - Yasir Qadhi  March 2012.mp3' },
      { id: 27, title: 'The Hijrah - Emigration to Madinah', audioFile: '027 Seerah of Prophet Muhammed 27 - The Hijrah - Emigration to Madinah - Yasir Qadhi  March 2012.mp3' },
      { id: 28, title: 'Lessons from Hijrah & Blessings of Madinah', audioFile: '028 Seerah of Prophet Muhammed 28 - Lessons from Hijrah Blessings of Madinah - Yasir Qadhi  March 2012.mp3' }
    ]
  },
  {
    id: 'madani-foundation',
    title: 'Establishing the Muslim Community',
    description: 'Building the foundations of the Islamic society in Madinah',
    lectures: [
      { id: 29, title: 'Introduction to the Madani Phase', audioFile: '029 Seerah of Prophet Muhammed 29 - Introduction to the Madani Phase - Yasir Qadhi  March 2012.mp3' },
      { id: 30, title: 'The Beginning of the Madani Era', audioFile: '030 Seerah of Prophet Muhammed 30 - The Beginning of the Madani Era - Yasir Qadhi  April 2012.mp3' },
      { id: 31, title: 'Building of the First Mosques in Islam', audioFile: '031 Seerah of Prophet Muhammed 31 - Building of the first Mosques in Islam - Yasir Qadhi  April 2012.mp3' },
      { id: 32, title: 'The People of As-Suffa', audioFile: '032 Seerah of Prophet Muhammed 32 - The People of As-Suffa - Yasir Qadhi  April 2012.mp3' },
      { id: 33, title: 'The Treaty & Constitution of Madinah', audioFile: '033 Seerah of Prophet Muhammed 33 - The Treaty & Constitution of Madinah - Yasir Qadhi  May 2012.mp3' },
      { id: 34, title: 'Change of the Qiblah & Abrogation in Qur\'an', audioFile: '034 Seerah of Prophet Muhammed 34 - Change of the Qiblah & Abrogation in Qur\'an - Yasir Qadhi  May 2012.mp3' }
    ]
  },
  {
    id: 'battle-badr',
    title: 'The Battle of Badr',
    description: 'The first major battle and turning point for the Muslim community',
    lectures: [
      { id: 35, title: 'The Preparation for Badr', audioFile: '035 Seerah of Prophet Muhammed 35 - The Preparation for Badr - Yasir Qadhi  May 2012.mp3' },
      { id: 36, title: 'The Battle of Badr - Part 1', audioFile: '036 Seerah of Prophet Muhammed 36 - The Battle of Badr 1 - Yasir Qadhi  10th October 2012.mp3' },
      { id: 37, title: 'The Battle of Badr - Part 2', audioFile: '037 Seerah of Prophet Muhammed 37 - The Battle of Badr 2 - Yasir Qadhi  17th October 2012.mp3' },
      { id: 38, title: 'The Battle of Badr - Part 3', audioFile: '038 Seerah of Prophet Muhammed 38 - The Battle of Badr 3 - Yasir Qadhi  24th October 2012.mp3' },
      { id: 39, title: 'The Battle of Badr - Part 4', audioFile: '039 Seerah of Prophet Muhammed 39 - The Battle of Badr 4 - Yasir Qadhi  31st October 2012.mp3' },
      { id: 40, title: 'The Battle of Badr - Part 5', audioFile: '040 Seerah of Prophet Muhammad 40 - The Battle of Badr 5 - Yasir Qadhi  7th November 2012.mp3' },
      { id: 41, title: 'The Battle of Badr - Part 6', audioFile: '041 Seerah of Prophet Muhammed 41 - The Battle of Badr 6 - Yasir Qadhi  14th November 2012.mp3' },
      { id: 42, title: 'The Battle of Badr - Part 7', audioFile: '042 Seerah of Prophet Muhammed 42 - The Battle of Badr 7 - Yasir Qadhi  28th November 2012.mp3' }
    ]
  },
  {
    id: 'between-battles',
    title: 'Between Badr and Uhud',
    description: 'Events and incidents between the major battles',
    lectures: [
      { id: 43, title: 'Events between Badr & Uhud', audioFile: '043 Seerah of Prophet Muhammed 43 - Events between Badr & Uhud - Yasir Qadhi  5th December 2012.mp3' },
      { id: 44, title: 'Assassination of Ka\'b ibn al-Ashraf', audioFile: '044 Seerah of Prophet Muhammed 44 - Assassination of Ka\'b ibn al-Ashraf - Yasir Qadhi  12th Dec 2012.mp3' },
      { id: 45, title: 'Summary of Meccan Period', audioFile: '045 Seerah of Prophet Muhammed 45 - Summary of Meccan period - Yasir Qadhi  9th January 2013.mp3' }
    ]
  },
  {
    id: 'battle-uhud',
    title: 'The Battle of Uhud',
    description: 'The second major battle and its lessons',
    lectures: [
      { id: 46, title: 'The Battle of Uhud - Part 1', audioFile: '046 Seerah of Prophet Muhammad 46 - The Battle of Uhud Part 1 - Yasir Qadhi  23rd January 2013.mp3' },
      { id: 47, title: 'The Battle of Uhud - Part 2 (with Maps)', audioFile: '047 Seerah of Prophet Muhammad 47 - The Battle of Uhud Part 2 (with Maps) - Yasir Qadhi  30th Jan 2013.mp3' },
      { id: 48, title: 'Martyrdom of Hamza - Uhud Part 3', audioFile: '048 Seerah of Prophet Muhammad 48 - Martyrdom of Hamza  Uhud Part 3 - Yasir Qadhi  6th February 2013.mp3' },
      { id: 49, title: 'Muhammad Injured - Uhud Part 4', audioFile: '049 Seerah of Prophet Muhammad 49 - Muhammad Injured  Uhud Part 4 - Yasir Qadhi  13th February 2013.mp3' },
      { id: 50, title: 'The Battle of Uhud - Part 5', audioFile: '050 Seerah of Prophet Muhammad 50 - The Battle of Uhud Part 5 - Yasir Qadhi  20th February 2013.mp3' }
    ]
  },
  {
    id: 'trials-tribulations',
    title: 'Trials & Tribulations',
    description: 'Major challenges faced by the Muslim community',
    lectures: [
      { id: 51, title: 'Massacres of Al Raji & Bir Ma\'una', audioFile: '051 Seerah of Prophet Muhammad 51 - Massacres of Al Raji & Bir Ma\'una - Yasir Qadhi  27th February 2013.mp3' },
      { id: 52, title: 'Background of the Wives of Muhammad', audioFile: '052 Seerah of Prophet Muhammad 52 - Background of the wives of Muhammad - Yasir Qadhi  6th March 2013.mp3' },
      { id: 53, title: 'Expulsion of Banu Nadheer', audioFile: '053 Seerah of Prophet Muhammad 53 - Expulsion of Banu Nadheer - Yasir Qadhi  13th March 2013.mp3' },
      { id: 54, title: 'Expedition of al-Muraysi & Banu al-Mustaliq', audioFile: '054 Seerah of Muhammad 54 - Expedition of al-Muraysi & Banu al-Mustaliq - Yasir Qadhi  20th March 2013.mp3' },
      { id: 55, title: 'Return from Al-Muraysi & Slander of Aisha Part 1', audioFile: '055 Seerah of Muhammad 55 - Return from Al-Muraysi\' & Slander of Aisha P1 - Yasir Qadhi  3rd April 2013.mp3' },
      { id: 56, title: 'The Slander of Aisha (ra) Part 2', audioFile: '056 Seerah of Prophet Muhammad 56 - The Slander of Aisha (ra) Part 2 - Yasir Qadhi  10th April 2013.mp3' }
    ]
  },
  {
    id: 'battle-khandaq',
    title: 'The Battle of Khandaq (Ahzab)',
    description: 'The Battle of the Trench and defense of Madinah',
    lectures: [
      { id: 57, title: 'The Battle of Khandaq/Ahzab - Part 1', audioFile: '057 Seerah of Prophet Muhammad 57 - The Battle of KhandaqAhzab - Dr. Yasir Qadhi  17th April 2013.mp3' },
      { id: 58, title: 'The Battle of Khandaq/Ahzab - Part 2', audioFile: '058 Seerah of Prophet Muhammad 58 - The Battle of KhandaqAhzab p2 - Dr. Yasir Qadhi  24th April 2013.mp3' },
      { id: 59, title: 'The Battle of Khandaq/Ahzab - Part 3', audioFile: '059 Seerah of Prophet Muhammad 59 - The Battle of KhandaqAhzab p3 - Dr. Yasir Qadhi  1st May 2013.mp3' },
      { id: 60, title: 'The Battle of Khandaq/Ahzab - Part 4', audioFile: '060 Seerah of Prophet Muhammad 60 - The Battle of KhandaqAhzab p4 - Dr. Yasir Qadhi  8th May 2013.mp3' },
      { id: 61, title: 'The Tribe of Banu Quraytha', audioFile: '061 Seerah of Prophet Muhammad 61 - The Tribe of Banu Quraytha - Dr. Yasir Qadhi  15th May 2013.mp3' }
    ]
  },
  {
    id: 'hudaybiyyah',
    title: 'The Treaty of Hudaybiyyah',
    description: 'The historic peace treaty and its significance',
    lectures: [
      { id: 62, title: 'Minor Expeditions between Khandaq & Hudaybiyyah', audioFile: '062 Seerah of Prophet Muhammad 62 - Minor expeditions between Khandaq & Hudaybiyyah - Dr. Yasir Qadhi.mp3' },
      { id: 63, title: 'Between the Battle of Khandaq & Hudaybiyya - Part 1', audioFile: '063 Seerah of Prophet Muhammad 63 - Between the Battle of Khandaq & Hudaybiyya - P1 - Dr. Yasir Qadhi.mp3' },
      { id: 64, title: 'The Treaty of Hudaybiyya - Part 2', audioFile: '064 Seerah of Prophet Muhammad 64 - The Treaty of Hudaybiyya - Part 2 - Dr. Yasir Qadhi  11th Sept 2013.mp3' },
      { id: 65, title: 'The Treaty of Hudaybiyya - Part 3', audioFile: '065 Seerah of Prophet Muhammad 65 - The Treaty of Hudaybiyya - Part 3 - Dr. Yasir Qadhi  18th Sept 2013.mp3' },
      { id: 66, title: 'The Treaty of Hudaybiyya - Part 4', audioFile: '066 Seerah of Prophet Muhammad 66 - The Treaty of Hudaybiyya - Part 4 - Dr. Yasir Qadhi  25th Sept 2013.mp3' },
      { id: 67, title: 'The Treaty of Hudaybiyya - Part 5', audioFile: '067 Seerah of Prophet Muhammad 67 - The Treaty of Hudaybiyya - Part 5 - Dr. Yasir Qadhi  2nd Oct 2013.mp3' }
    ]
  },
  {
    id: 'khaybar-expansion',
    title: 'Khaybar & Expansion',
    description: 'The conquest of Khaybar and spreading of Islam',
    lectures: [
      { id: 68, title: 'The Battle of Khaybar - Part 1', audioFile: '068 Seerah of Prophet Muhammad 68 - The Battle of Khaybar Part 1 - Dr. Yasir Qadhi  9th Oct 2013.mp3' },
      { id: 69, title: 'The Prophet\'s Marriage to Zaynab', audioFile: '069 Seerah of Prophet Muhammad 69 - The Prophet\'s Marriage to Zaynab - Dr. Yasir Qadhi  23rd Oct 2013.mp3' },
      { id: 70, title: 'The Battle of Khaybar - Part 2', audioFile: '070 Seerah of Prophet Muhammad 70 - The Battle of Khaybar Part 2 - Dr. Yasir Qadhi  30th Oct 2013.mp3' },
      { id: 71, title: 'Letters to Various Rulers', audioFile: '071 Seerah of Prophet Muhammad 71 - Letters to various Rulers - Dr. Yasir Qadhi  6th November 2013.mp3' },
      { id: 72, title: 'Umrah Al Qadah', audioFile: '072 Seerah of Prophet Muhammad 72 - Umrah Al Qadah - Dr. Yasir Qadhi  13th November 2013.mp3' }
    ]
  },
  {
    id: 'mutah-conquest',
    title: 'Mu\'tah & Path to Conquest',
    description: 'The Battle of Mu\'tah and events leading to the Conquest of Makkah',
    lectures: [
      { id: 73, title: 'Battle of Mu\'tah - Part 1', audioFile: '073 Seerah of Prophet Muhammad 73 - Battle of Mu\'tah Part 1 - Dr. Yasir Qadhi  4th December 2013.mp3' },
      { id: 74, title: 'Battle of Mu\'tah - Part 2', audioFile: '074 Seerah of Prophet Muhammad 74 - Battle of Mu\'tah Part 2 - Dr. Yasir Qadhi  11th December 2013.mp3' },
      { id: 75, title: 'Recap & Battle of Dhat Al Salasil', audioFile: '075 Seerah of Prophet Muhammad 75 - Recap & Battle of Dhat Al Salasil ~ Dr. Yasir Qadhi  5th Feb 2014.mp3' }
    ]
  },
  {
    id: 'conquest-makkah',
    title: 'The Conquest of Makkah',
    description: 'The triumphant return to Makkah',
    lectures: [
      { id: 76, title: 'The Conquest of Makkah - Part 1', audioFile: '076 Seerah of Prophet Muhammad 76 - The Conquest of Makkah Part 1 ~ Dr. Yasir Qadhi  19th Feb 2014.mp3' },
      { id: 77, title: 'The Conquest of Makkah - Part 2', audioFile: '077 Seerah of Prophet Muhammad 77 - The Conquest of Makkah Part 2 ~ Dr. Yasir Qadhi  26th Feb 2014.mp3' },
      { id: 78, title: 'The Conquest of Makkah - Part 3', audioFile: '078 Seerah of Prophet Muhammad 78 - The Conquest of Makkah Part 3 ~ Dr. Yasir Qadhi  5th March 2014.mp3' },
      { id: 79, title: 'The Conquest of Makkah - Part 4', audioFile: '079 Seerah of Prophet Muhammad 79 - The Conquest of Makkah Part 4 ~ Dr. Yasir Qadhi  19th March 2014.mp3' },
      { id: 80, title: 'The Conquest of Makkah - Part 5', audioFile: '080 Seerah of Prophet Muhammad 80 - The Conquest of Makkah Part 5 ~ Dr. Yasir Qadhi  26th March 2014.mp3' },
      { id: 81, title: 'The Conquest of Makkah - Part 6', audioFile: '081 Seerah of Prophet Muhammad 81 - The Conquest of Makkah Part 6 ~ Dr. Yasir Qadhi  2nd April 2014.mp3' }
    ]
  },
  {
    id: 'hunayn-taif',
    title: 'Hunayn & Ta\'if',
    description: 'The battles after the Conquest of Makkah',
    lectures: [
      { id: 82, title: 'Battle of Hunayn - Part 1', audioFile: '082 Seerah of Prophet Muhammad 82 - Battle of Hunayn Part 1 ~ Dr. Yasir Qadhi  16th April 2014.mp3' },
      { id: 83, title: 'Battle of Hunayn - Part 2', audioFile: '083 Seerah of Prophet Muhammad 83 - Battle of Hunayn Part 2 ~ Dr. Yasir Qadhi  23rd April 2014.mp3' },
      { id: 84, title: 'Conversion of Ka\'b ibn Zuhayr', audioFile: '084 Seerah of Prophet Muhammad 84 - Conversion of Ka\'b ibn Zuhayr ~ Dr. Yasir Qadhi  7th May 2014.mp3' },
      { id: 85, title: 'Miracles of Prophet Muhammad', audioFile: '085 Seerah of Prophet Muhammad 85 - Miracles of Prophet Muhammad ~ Dr. Yasir Qadhi  28th May 2014.mp3' },
      { id: 86, title: 'Recap & Lessons from Hunayn & Ta\'if', audioFile: '086 Seerah of Prophet Muhammad 86 - Recap & Lessons from Hunayn & Ta\'if ~ Dr. Yasir Qadhi  13 Aug 2014.mp3' }
    ]
  },
  {
    id: 'battle-tabuk',
    title: 'The Battle of Tabuk',
    description: 'The last major expedition led by the Prophet ﷺ',
    lectures: [
      { id: 87, title: 'Battle of Tabuk - Part 1', audioFile: '087 Seerah of Prophet Muhammad 87 - Battle of Tabuk 1 ~ Dr. Yasir Qadhi  20th August 2014.mp3' },
      { id: 88, title: 'Battle of Tabuk - Part 2', audioFile: '088 Seerah of Prophet Muhammad 88 - Battle of Tabuk 2 ~ Dr. Yasir Qadhi  27th August 2014.mp3' },
      { id: 89, title: 'Story of Ka\'b ibn Malik', audioFile: '089 Seerah of Prophet Muhammad 89 - Story of Ka\'b b. Malik ~ Dr. Yasir Qadhi  3rd September 2014.mp3' },
      { id: 90, title: 'Battle of Tabuk - Part 3', audioFile: '090 Seerah of Prophet Muhammad 90 - Battle of Tabuk 3 ~ Dr. Yasir Qadhi  10th September 2014.mp3' },
      { id: 91, title: 'Battle of Tabuk - Part 4', audioFile: '091 Seerah of Prophet Muhammad 91 - Battle of Tabuk 4 ~ Dr. Yasir Qadhi  17th September 2014.mp3' },
      { id: 92, title: 'Battle of Tabuk - Part 5', audioFile: '092 Seerah of Prophet Muhammad 92 - Battle of Tabuk 5 ~ Dr. Yasir Qadhi  15th October 2014.mp3' },
      { id: 93, title: 'Tafsir of Surat At-Tawbah & Tabuk', audioFile: '093 Seerah of Prophet Muhammad 93 - Tafsir of Surat At-Tawbah & Tabuk ~ Dr. Yasir Qadhi  22nd Oct 2014.mp3' }
    ]
  },
  {
    id: 'year-delegations',
    title: 'The Year of Delegations',
    description: 'When tribes from across Arabia came to embrace Islam',
    lectures: [
      { id: 94, title: 'The Year of Delegations - Part 1', audioFile: '094 Seerah of Prophet Muhammad 94 - The Year of Delegations - Part 1 ~ Dr. Yasir Qadhi  29th Oct 2014.mp3' },
      { id: 95, title: 'The Year of Delegations - Part 2', audioFile: '095 Seerah of Prophet Muhammad 95 - The Year of Delegations - Part 2 ~ Dr. Yasir Qadhi  5th Nov 2014.mp3' },
      { id: 96, title: 'The Year of Delegations - Part 3', audioFile: '096 Seerah of Prophet Muhammad 96 - The Year of Delegations - Part 3 ~ Dr. Yasir Qadhi  12th Nov 2014.mp3' }
    ]
  },
  {
    id: 'final-days',
    title: 'Final Period',
    description: 'The last years of the Prophet\'s ﷺ blessed life',
    lectures: [
      { id: 97, title: 'Maria the Copt & Death of Ibrahim', audioFile: '097 Seerah of Prophet Muhammad 97 - Maria the Copt & Death of Ibrahim ~ Dr. Yasir Qadhi  19th Nov 2014.mp3' },
      { id: 98, title: 'Marital Dispute with the Wives', audioFile: '098 Seerah of Prophet Muhammad 98 - Marital dispute with the Wives ~ Dr. Yasir Qadhi  3rd December 2014.mp3' },
      { id: 99, title: 'Verse of Sword & Hajj of Abu Bakr', audioFile: '099 Seerah of Prophet Muhammad 99 - Verse of Sword & Hajj of Abu Bakr ~ Dr. Yasir Qadhi  10th Dec 2014.mp3' },
      { id: 100, title: 'The Farewell Hajj', audioFile: '100 Seerah of Prophet Muhammad 100 - The Farewell Hajj ~ Dr. Yasir Qadhi  21st January 2015.mp3' },
      { id: 101, title: 'The Death of Prophet Muhammad', audioFile: '101 Seerah of Prophet Muhammad 101 - The Death of Prophet Muhammad ~ Dr. Yasir Qadhi  24th Jan 2015.mp3' },
      { id: 102, title: 'The Mosque & Grave of Muhammad', audioFile: '102 Seerah of Prophet Muhammad 102 - The Mosque & Grave of Muhammad ~ Dr. Yasir Qadhi  4th Feb 2015.mp3' }
    ]
  },
  {
    id: 'after-prophet',
    title: 'After the Prophet ﷺ',
    description: 'The immediate aftermath and succession',
    lectures: [
      { id: 103, title: 'The 1st Rightful Khalifah - Part 1: Incident of the Scrolls', audioFile: '103 Seerah 103 - The 1st Rightful Khalifah of Islam Part 1 Incident of the Scrolls ~ Dr. Yasir Qadhi.mp3' },
      { id: 104, title: 'The 1st Rightful Khalifah - Part 2: Election of Abu Bakr', audioFile: '104 Seerah 104 - The 1st Rightful Khalifah of Islam Part 2 Election of Abu Bakr ~ Dr. Yasir Qadhi.mp3' }
    ]
  }
]