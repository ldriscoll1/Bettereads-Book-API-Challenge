import path from 'path';
import {promises as fs} from 'fs';
export default async function handler(req, res){
    const {title} = req.query;
    const booksPath = path.join(process.cwd(), 'json', 'books.json');
    const books = JSON.parse(await fs.readFile(booksPath, 'utf8'));
    const data = books.filter(book => book.title === title);
    res.status(200).json(data);
}