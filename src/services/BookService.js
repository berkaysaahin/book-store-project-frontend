import axios from "axios"

export class BookService{

    getBooks(){
        return axios.get("http://localhost:8080/api/books/getAll")
    }

    getByBookName(bookName){
        return axios.get("http://localhost:8080/api/books/getByBookName?bookName="+bookName)
    }
}
