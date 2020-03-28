import allQuotes from './quotes.json';

export default (req, res) => {
    const {author} = req.query
    let quotes = allQuotes;
    if (author) {
        //Get quote from this author
        quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
    }
    if (!quotes.length) {
        //Get Quote from anonymous
        quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown');
    }
  const quote = quotes[Math.floor(Math.random() * quotes.length)]; 
  res.status(200).json(quote);
  };