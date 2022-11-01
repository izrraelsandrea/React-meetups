import { useContext } from 'react';
import MeetupList from '../components/layout/meetups/MeetupList';

import FavoritesContext from '../store/favorite-context';


function Favorites(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites ===0){
        content = <p>You have no favorites yet</p>
    }else {
        content =  <MeetupList meetups={favoritesCtx.favorites} />
    }
    return <section>
        <h1>My Favorites</h1>
       {content}
    </section>
    }
    export default Favorites;