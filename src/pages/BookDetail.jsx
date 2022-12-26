import React ,{ useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { BookService } from '../services/BookService'


export default function BookDetail() {
    let { name } = useParams();
    /*The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
    Child routes inherit all params from their parent routes.*/ 

    const [book, setBook] = useState({});   //lifecycle hook

    useEffect(()=>{
      //component yuklendiginde calismasi istenen kod buraya yazilir
      let bookService = new BookService()
      bookService.getByBookName(name).then((result)=>setBook(result.data))
    },[])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{book.bookName}</Card.Header>
                        <Card.Meta>{book.author}</Card.Meta>
                        <Card.Description>
                          
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='yellow'>
                                Approve
                            </Button>
                            <Button basic color='orange'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
