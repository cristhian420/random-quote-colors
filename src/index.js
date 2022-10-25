const quotes = [
    'To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde',
    'That it will never come again is what makes life so sweet. – Emily Dickinson',
    'It is never too late to be what you might have been. – George Eliot',
    'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson',
    'Pain is inevitable. Suffering is optional. – Haruki Murakami',
    'All the world´s a stage, and all the men and women merely players. – William Shakespeare',
    'Be kind, for everyone you meet is fighting a hard battle. – Plato',
    'Unable are the loved to die for love is immortality. – Emily Dickinson',
    'Let me live, love, and say it well in good sentences. – Sylvia Plath',
    'Don´t let your happiness depend on something you may lose. – C.S. Lewis',
    'We are all broken, that´s how the light gets in. – Ernest Hemingway',
    'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well. – Voltaire',
    'Life is tough my darling, but so are you. – Stephanie Bennett Henry',
    'Self-awareness and self-love matter. Who we are is how we lead. – Brene Brown',
    'Amateurs sit and wait for inspiration, the rest of us just get up and go to work. – Stephen King',
    'Get it down. Take chances. It may be bad, but it´s the only way you can do anything really good. – William Faulkner',
    'As a writer, you should not judge, you should understand. – Ernest Hemingway',
    'To produce a mighty book, you must choose a mighty theme. – Herman Melville',
    'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen. – John Steinbeck',
    'Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book. – John Green',
    'The Six Golden Rules of Writing: Read, read, read, and write, write, write. – Ernest Gaines',
    'As for Write what you know, I was regularly told this as a beginner. I think it´s a very good rule and have always obeyed it. I write about imaginary countries, alien societies on other planets, dragons, wizards, the Napa Valley in 22002. I know these things. I know them better than anybody else possibly could, so it´s my duty to testify about them. – Ursula K. Le Guin',
    'You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write. – Annie Proulx',
    'Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write. – Rainer Maria Rilke',
    'The purpose of a writer is to keep civilization from destroying itself. – Albert Camus',
    'A writer never has a vacation. For a writer life consists of either writing or thinking about writing. – Eugene Ionesco',
    'Read, read, read. Read everything – trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You´ll absorb it. Then write. If it´s good, you´ll find out. If it´s not, throw it out of the window. – William Faulkner',
    'A good writer possesses not only his own spirit but also the spirit of his friends. – Friedrich Nietzsche',
    'Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul. – Meg Rosoff',
    'I am not at all in a humour for writing; I must write on until I am. – Jane Austen',
    'You don´t start out writing good stuff. You start out writing crap and thinking it´s good stuff, and then gradually you get better at it. That´s why I say one of the most valuable traits is persistence. – Octavia E. Butler',
    'You can always edit a bad page. You can´t edit a blank page. – Jodi Picoult',
    'Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now. – Annie Dillard',
    'If there´s a book that you want to read, but it hasn´t been written yet, then you must write it. – Toni Morrison',
    'Tears are words that need to be written. – Paulo Coelho'
    ];
    
    const randomQuote = () => {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      const randomColor = '[' + Math.floor(Math.random() * (47 - 30 + 1) + 30) + 'm';
      console.log(`\x1b${randomColor}${quote}`);
    }
    
    module.exports = {
      randomQuote
    };