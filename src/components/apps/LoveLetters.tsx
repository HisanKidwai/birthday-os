import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, Home, Mail, Calendar, Clock } from 'lucide-react';
import { useOS } from '../../context/OSContext';

// Update the component to receive props
const LoveLetters = ({ fromFileManager = false }) => {
  const { dispatch } = useOS();
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Enhanced letter data
  const letters = [
    {
      id: 1,
      title: "100 Reasons Why I Love You.txt",
      date: "2 days ago",
      size: "2.1 KB",
      emoji: "💌",
      preview: "My Sweet Sunshine",
      content: ` Happy Birthday to the most important person in my life. I actually don't have much to say sunshine, since I'm out of words at the moment, but below are the 100 reasons why I love you. I could write millions but that would've takes days hehe. 

1. You make me happy
2. You make me feel worthy
3. You take care of me
4. You make me feel seen in the sea of people who’ve never wanted me
5. You make me get out of my bed and work harder everyday
6. You make my heart go crazy 
7. You call me bae
8. You want to build a future with me
9. Your infectious smile
10. Your eyes where I just want to drown
11. Your smile that makes me the happiest man on this planet
12. Your pretty cheeks that make me wanna pull them
13. Your pretty hands that make me want to put a ring in that finger
14. You’re insanely pretty
15. You know how I feel at any point
16. You are there when I need you
17. You’re super smart
18. You’ve a set career goal and work towards it
19. You invest in yourself
20. You invest in me
21. You’ve fought your family for me
22. You’ve put me first in your life
23. You listen to me 
24. You beat and scold me to make myself better
25. You are my favourite traffic police
26. You love me
27. You care about this relationship
28. I see a future with you
29. I want to take care of you
30. I want to make you the happiest person
31. You’re the missing piece of my life
32. Everyone in my family loves you
33. I want my kids to have the same eyes as yours
34. You are patient with me
35. You love sleeping in my arms
36. With you I can be my true self
37. All my problems dissapear when I’m with you
38. You’re my best friend
39. Love the way you look at me
40. Love the way you teach me vnmese
41. You make me smile like a little kiddo
42. You give me the meaning of what it’s like to love someone
43. When I cry, you keep me in your arms
44. You’re always there for me
45. You work soo hard
46. I love to walk with you
47. I love going to restaurants and eating seafood with you hehe
48. I love just existing in the same space as you
49. I love knowing that when I call BAE you answer 
50. I love thart you love mee soo much
51. You lime my family
52. You make time for us even when you’re super busy
53. Your arms feel more home than my house ever did
54. You always keep your promises
55. You comfort me
56. I can always talk to you
57. I can share my sorrows with you
58. You let me hug you
59. You’re sweeter than all the desserts in the world
60. You let me open car doors for you hehe
61. You picked me out of the millions of better guys around
62. We’re different but also soo same
63. Because you’re kind
64. You treat everyone good despite what type of person they are
65. You do everything to become a better person for the both of us
66. I love you because you put so much thought with me
67. You protect me from this world
68. Because you let me pull you towards me on the bed
69. Because you make me feel special
70. Because your voice is the best thing to hear in the morning
71. Because you make me want to cook breakfast for you
72. Because everytime I wakeup in the morning I see your prettty face
73. Because you let me kiss you when you sleep
74. Because you mean everything to me
75. You trust me
76. You make my dreams come true
77. You make me laugh without worries
78. You push me to try new things
79. I can’t imagine a life without you
80. I can imagine a day where I can’t call you bae
81. I can’t imagine spending 7 lifetimes without you
82. Because I want to marry you
83. Be the best husband 
84. Be the best dad to that little Misa
85. You show that you love me
86. You tell that you love me
87. You cheer me up
88. You make me feel cherished 
89. You make me feel adored
90. You’re always there when I need you
91. You give me butterflies everytime you look pretty
92. You’re soo cute
93. You’re strict
94. You want everything in order
95. Your hands perfectly fit mine
96. You’re everything
97. You’re my world
98. Your’re my planet
99. You’re my whole entire universe
100.  I woud’nt be able to do it without you

      Thank you for choosing me sunshine, it means a lot to me. And I hope I can love you forevahh and ever, until the end of time. 

      Em oi, anh yeu em and anh nyeu em Misa❤️
`
    },
    {
      id: 2,
      title: "Our First Time Seeing Each Other.txt",
      date: "A month ago",
      size: "1.8 KB",
      emoji: "💘",
      preview: "I still remember every detail of our first date...",
      content: `Hey My pretty lady, 
      Coming to you in Vietnam was probably one of the boldest decision of my life. Trusting someone whom I never met in person and going on a vacation with them is like what crime movies are made off. But all this vanished the very second I saw you at the airport. 
      
      You saw you first crossing the road, and the very moment I understood, yeah she's the one. The way she walks, talks, and carries herself is just my favourite thing. You crossed the road looked me in the eyes and gave me a hug. And I was shit scared. It was my brain froze and I had nothing to think, except the fact that I felt safe. 
      
      And that's what how it's been with ever sense. You're my safe space, away from all the headaches of the world. A place where I can be who I truly am, and be appreciated for it. And I love you soo much for that. You're just the BEST.`
    },
    {
      id: 3,
      title: "Future Dreams.txt",
      date: "3 days ago",
      size: "2.5 KB",
      emoji: "💝",
      preview: "When I think about our future together...",
      content: `My love,

When I think about our future together, there comes a million things. But the best way to put it, is that I want to do my life with you. The boring tasks, of doing laundry, cooking food. Yeah, that's what I want with you.

I want a future where I wakeup next to you, and we decide what would we cook for breakfast, or who's gonna go drop the kids at school. Because, yes I want to be your husband and also the best dad to our kid. I wanna take care of you, until the day I cant walk anymore. Carry you around until there is power in me, and make you the happiest girl ever. 

I wish we can celebrate all our birthday's together, and live the best life possible, as one. Love You Soo Much Sunshine.`
    },
    {
      id: 4,
      title: "My Promise.txt",
      date: "Yesterday",
      size: "1.9 KB",
      emoji: "💞",
      preview: "I promise to always be there for you...",
      content: `My flower,

This is my promise to you, I'll always stand by you. Be your calm in this stormy world, and be the best man possible. There would never be a day where you look back, and not find me rooting for you, or supporting you in the best way possible. 

I know being with me is quite a challenge, but I promise it'll be worth it, and you won't regret being with me. I promise to take care of this pretty baby and makeing her the happiest girl. 

I promise to build a future together, where us live together happily foreevahhh.`
    },
    {
      id: 5,
      title: "Moments I Cherish.txt",
      date: "5 days ago",
      size: "2.3 KB",
      emoji: "💗",
      preview: "There are so many little moments with you that I treasure...",
      content: `Honey,

There are so many little moments with you that I treasure and miss when I'm not with you. The first one, is definately the scolding hehe. I fucking love it when you scold me or be the traffic police. Jokes aside, there are soo man things I wanna say. 

Like the way you look at me with those pretty eyes, which makes me want to do everything to protect you. The way you hold my hands, or the way you walk even. The way sit beside me, while we talk, or the smile at your face when I buy your favourite makeup. The list is unlimited. 

I hope we can more and more moments to cherish in the future honeybun.`
    }
  ];

  // Function to return to FileManager when coming from there
  const returnToFileManager = () => {
    if (fromFileManager) {
      // Close the LoveLetters window
      dispatch({ type: 'CLOSE_ACTIVE_WINDOW' });
      
      // Open FileManager with the Love Letters folder open
      dispatch({
        type: 'OPEN_WINDOW',
        payload: {
          title: 'File Manager',
          component: 'FileManager',
          isMinimized: false,
          isMaximized: false,
          position: { x: 100 + Math.random() * 100, y: 100 + Math.random() * 100 },
          size: { width: 800, height: 600 },
          // You could add some state to have FileManager open at this path
          props: { initialPath: '/Love Letters' }
        },
      });
    } else {
      // Just go back to the letter list
      setSelectedLetter(null);
    }
  };

  // Modify the back button handler in the letter view
  if (selectedLetter !== null) {
    const letter = letters[selectedLetter];
    return (
      <div className="h-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col">
        <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 p-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSelectedLetter(null)}
              className="px-3 py-1 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-800 transition-colors flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </button>
            <h2 className="text-lg font-medium text-gray-800">{letter.title}</h2>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Letter header */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-pink-200 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-xl flex items-center justify-center shadow-md text-white">
                  <span className="text-2xl">{letter.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pink-800 mb-1">{letter.title.replace('.txt', '')}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 inline" /> {letter.date}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 inline" /> {new Date().toLocaleDateString()}
                    </div>
                    <div>{letter.size}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter content */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-pink-200">
              <div className="prose prose-pink max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {letter.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main letter list view
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl">💌</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Love Letters</h1>
          </div>
          
          {/* View toggle buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {fromFileManager ? (
              <button
                onClick={returnToFileManager}
                className="px-3 py-1 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-800 transition-colors flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Files
              </button>
            ) : (
              <button
                className="p-2 rounded-lg text-gray-600 hover:bg-pink-100"
              >
                <Home className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Path breadcrumb */}
          <div className="flex-1 bg-pink-50 rounded-lg px-3 py-2">
            <span className="text-sm text-gray-600">
              {fromFileManager ? '/File Manager/Love Letters' : '/Love Letters'}
            </span>
          </div>
        </div>
      </div>

      {/* Content - Grid and List views remain the same */}
      <div className="flex-1 overflow-auto p-6">
        {viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-pink-50 hover:shadow-md"
                onClick={() => setSelectedLetter(index)}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br from-pink-300 to-rose-400 shadow-md">
                  <span className="text-3xl">{letter.emoji}</span>
                </div>
                <span className="text-sm font-medium text-gray-800 text-center max-w-full truncate">
                  {letter.title}
                </span>
                <span className="text-xs text-gray-500 mt-1">{letter.size}</span>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 gap-4 p-4 bg-pink-50 border-b text-sm font-medium text-gray-600">
              <div>Name</div>
              <div>Size</div>
              <div>Modified</div>
              <div>Type</div>
            </div>
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-pink-50"
                onClick={() => setSelectedLetter(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-300 to-rose-400">
                    <span className="text-lg">{letter.emoji}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{letter.title}</span>
                </div>
                <div className="text-sm text-gray-600">{letter.size}</div>
                <div className="text-sm text-gray-600">{letter.date}</div>
                <div className="text-sm text-gray-600">Text</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status bar remains the same */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-pink-200 p-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{letters.length} items</span>
          <div className="flex items-center space-x-2">
            <span>Written with</span>
            <span className="text-red-500">❤️</span>
            <span>just for you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetters;