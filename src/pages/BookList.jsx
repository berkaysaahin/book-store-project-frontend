
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react'
import { BookService } from '../services/BookService'

export default function ProductList() {

  const [books, setBooks] = useState([]);   //lifecycle hook

  useEffect(()=>{
    //component yuklendiginde calismasi istenen kod buraya yazilir
    let bookService = new BookService()
    bookService.getBooks().then(result=>setBooks(result.data))
    
  },[])


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Book</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Units In Stock</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Paperback</Table.HeaderCell>
            <Table.HeaderCell>Publisher</Table.HeaderCell>
            <Table.HeaderCell>Publication Date</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
            <Table.HeaderCell>ISBN</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            books.map(book => (
              <Table.Row key = {book.bookId}>
                <Table.Cell><Link to = {`/books/${book.bookName}`}>{book.bookName}</Link> </Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>{book.unitPrice}</Table.Cell>
                <Table.Cell>{book.unitsInStock}</Table.Cell>
                <Table.Cell>{book.category.categoryName}</Table.Cell>
                <Table.Cell>{book.pages}</Table.Cell>
                <Table.Cell>{book.publisher}</Table.Cell>
                <Table.Cell>{book.publicationDate}</Table.Cell>
                <Table.Cell>{book.language}</Table.Cell>
                <Table.Cell>{book.isbn}</Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='10'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
