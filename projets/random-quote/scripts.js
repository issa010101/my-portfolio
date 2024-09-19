document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
      { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
      { text: "Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.", author: "Alan Kay" },
      { text: "Hidup adalah apa yang terjadi saat kamu sibuk membuat rencana lain.", author: "John Lennon" },
      { text: "Kamu hanya hidup sekali, tapi jika kamu melakukannya dengan benar, sekali sudah cukup.", author: "Mae West" },
      { text: "Jangan biarkan kemarin mengambil terlalu banyak waktu hari ini.", author: "Will Rogers" },
      { text: "Kamu tidak dapat mengubah arah angin, tetapi kamu dapat mengatur layar untuk mencapai tujuan.", author: "Jimmy Dean" },
      { text: "Hidup ini 10% apa yang terjadi padamu dan 90% bagaimana kamu meresponnya.", author: "Charles R. Swindoll" },
      { text: "Berpikir positif dan positif akan terjadi.", author: "Anonymous" },
      { text: "Kualitas terbesar dari diri kita adalah kemampuan untuk terus melangkah meski menghadapi kesulitan.", author: "Anonymous" },
      { text: "Kamu tidak akan pernah mengalami perubahan jika kamu terus melakukan hal yang sama.", author: "Anonymous" },
      { text: "Hidup bukanlah tentang menunggu badai berlalu, tetapi tentang belajar bagaimana menari di tengah hujan.", author: "Anonymous" }
    ];
  
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');
  
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    function updateQuote() {
      const quote = getRandomQuote();
      textElement.textContent = `"${quote.text}"`;
      authorElement.textContent = `- ${quote.author}`;
    }
  
    newQuoteButton.addEventListener('click', updateQuote);
  
    tweetQuoteButton.addEventListener('click', function() {
      const tweetText = encodeURIComponent(`${textElement.textContent} ${authorElement.textContent}`);
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
      window.open(tweetUrl, '_blank');
    });
  
    // Initialize with a random quote
    updateQuote();
  });
  