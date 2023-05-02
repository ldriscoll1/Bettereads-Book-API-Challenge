//Sends back all authors from books.json
import path from 'path';
import {promises as fs} from 'fs';
export default async function handler(req, res){
    const booksPath = path.join(process.cwd(), 'json', 'books.json');
    const books = JSON.parse(await fs.readFile(booksPath, 'utf8'));
    const authors = books.map(book => book.author);
    const uniqueAuthors = [...new Set(authors)];
    res.status(200).json(uniqueAuthors);
}