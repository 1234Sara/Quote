var quoteAuthor = [
    {
       quote: '"Be yourself; everyone else is already taken."',
       author: "--Oscar Wilde"
   },
   {
       quote: '"Resentment is like drinking poison and waiting for your enemies to die."',
       author: "--Nelson Mandela"
   },
   {
       quote: `"You miss 100% of the shots you don't take."`,
       author: "--Wayne Gretzy"
   },
   {
        quote: `"It's not what happens to you, but how you react to it that matters."`,
        author: "--Epictetus"
   },
   {
        quote: '"The best revenge is massive success."',
        author: "--Frank Sinatra"
   },
   {
        quote: '"Do not take life too seriously. You will not get out alive."',
        author: "--Elbert Hubbard"
   },
   {
        quote: `"So many books, so little time."`,
        author: "--Frank Zappa"
   },
   {
        quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: "--Albert Einstein"
   },
   {
        quote: '"A room without books is like a body without a soul."',
        author: "--Marcus Tullius Cicero"
   },
   {
        quote: '"You only live once, but if you do it right, once is enough."',
        author: "--Mae West"
   },
   {
        quote: '"Be the change that you wish to see in the world."',
        author: "--Mahatma Gandhi"
   },
   {
        quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
        author: "--Robert Frost"
   },
   {
        quote: `"If you tell the truth, you don't have to remember anything."`,
        author: "--Mark Twain"
   },
   {
        quote: `"A friend is someone who knows all about you and still loves you"`,
        author: "--Elbert Hubbard"
   },
   {
        quote: '"Insanity is doing the same thing, over and over again, but expecting different results."',
        author: "--Narcotics Anonymous"
   },
   {
       quote: '"It is better to be hated for what you are than to be loved for what you are not."',
       author: "--Andre Gide, Autumn Leaves"
 
   }   
]
var lastIndex;

function getElement(){

   var randomIndex = Math.floor(Math.random() * quoteAuthor.length);

    if (randomIndex == lastIndex){
        randomIndex = (randomIndex + 1) % quoteAuthor.length;
    }

    lastIndex = randomIndex; 

//     console.log(randomIndex);

   document.getElementById('demo').innerHTML = quoteAuthor[randomIndex].quote;
   document.getElementById('head').innerHTML = quoteAuthor[randomIndex].author;
}
