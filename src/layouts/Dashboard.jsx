import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import BookDetail from '../pages/BookDetail'
import BookList from '../pages/BookList'
import CartDetail from '../pages/CartDetail'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes>
                            <Route exact path = '/' element = {<BookList/>}/>
                            <Route exact path = '/books' element = {<BookList/>}/>
                            <Route path = '/books/:name' element = {<BookDetail/>}/>
                            <Route path = '/cart' element = {<CartDetail/>}/>
                        </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

}
