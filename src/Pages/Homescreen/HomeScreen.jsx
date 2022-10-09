import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Nav from '../../Components/nav/Nav';
import Rows from '../../Components/Rows/Rows';
import requests from '../../lib/requests';



const HomeScreen = () => {
    return (
        <div className=''>
           <Nav/>
            <Banner/>
 <Rows title={'Netflix Originals'} fetchUrls={requests.fetchNetflixOriginals}/>
 <Rows title={'Trending'} fetchUrls={requests.fetchTrending}/>
 <Rows title={'Top Rated'} fetchUrls={requests.fetchTopRated}/>
 <Rows title={'Comedy'} fetchUrls={requests.fetchComedyMovies}/>
 <Rows title={'Action'} fetchUrls={requests.fetchActionMovies}/>
 <Rows title={'Horror'} fetchUrls={requests.fetchHorrorMovies}/>
 <Rows title={'Documentaries'} fetchUrls={requests.fetchDocumantaries}/>
 <Rows title={'Romance'} fetchUrls={requests.fetchRomanceMovies}/>
 
        </div>
    );
};

export default HomeScreen;