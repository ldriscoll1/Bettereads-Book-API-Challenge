// back infor on particular author by name
import path from 'path';
import {promises as fs} from 'fs';
export default async function handler(req, res){
    const {name} = req.query;
    const booksPath = path.join(process.cwd(), 'json', 'books.json');
    const books = JSON.parse(await fs.readFile(booksPath, 'utf8'));
    const data = books.filter(book => book.author === name);
    res.status(200).json(data);
}