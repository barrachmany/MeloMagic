import natural from 'natural';

const { WordTokenizer, PorterStemmer, stopwords, TfIdf } = natural;

function preprocessLyrics(lyrics) {
    // Tokenize the lyrics
    const tokenizer = new WordTokenizer();
    let tokens = tokenizer.tokenize(lyrics.toLowerCase());

    // Remove stop words and perform stemming
    const stemmer = PorterStemmer;
    tokens = tokens.filter(token => !stopwords.includes(token)).map(token => stemmer.stem(token));

    return tokens.join(' ');
}

const calculateLyricsSimilarity=(lyrics1, lyrics2)=> {
    // Preprocess the lyrics
    const processedLyrics1 = preprocessLyrics(lyrics1);
    const processedLyrics2 = preprocessLyrics(lyrics2);

    // Create TF-IDF vectors
    const tfidf = new TfIdf();
    tfidf.addDocument(processedLyrics1);
    tfidf.addDocument(processedLyrics2);

    // Compute cosine similarity between the vectors
    const vector1 = tfidf.listTerms(0).reduce((acc, term) => {
        acc[term.term] = term.tfidf;
        return acc;
    }, {});
    const vector2 = tfidf.listTerms(1).reduce((acc, term) => {
        acc[term.term] = term.tfidf;
        return acc;
    }, {});

    const dotProduct = Object.keys(vector1).reduce((sum, key) => {
        return sum + (vector1[key] * (vector2[key] || 0));
    }, 0);

    const magnitude1 = Math.sqrt(Object.values(vector1).reduce((sum, value) => sum + value * value, 0));
    const magnitude2 = Math.sqrt(Object.values(vector2).reduce((sum, value) => sum + value * value, 0));

    const similarity = dotProduct / (magnitude1 * magnitude2);

    console.log(`Lyrics similarity: ${similarity * 100}%`); // Output: `Lyrics similarity: 0.0%

    return similarity * 100; // Convert to percentage
}

export default { calculateLyricsSimilarity };