import React from 'react';
import PostContainer from './Containers/PostContainer';
import MainPageContainer from './Containers/MainPageContainer';
// import UsefullLinksContainer from './Containers/UsefullLinksContainer';
// import AudioPlayerContainer from './Containers/AudioPlayerContainer';
// import SolarSystemContainer from './Components/SolarSystem/SolarSystem';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './Components/Common/404Page';
import { withSuspense } from './hoc/withSuspense';


const mainFeaturedPost = {        // its should delete soon or will delivered in BLL
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  

  const UsefullLinksContainerWithLazy = React.lazy(() => import('./Containers/UsefullLinksContainer'));
  const AudioPlayerContainerWithLazy = React.lazy(() => import('./Containers/AudioPlayerContainer'));
  const SolarSystemContainerWithLazy = React.lazy(() => import('./Components/SolarSystem/SolarSystem'));

function Routes() {

    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to={"/main"} />} />
            <Route path='/posts' render={() => <PostContainer post={mainFeaturedPost} />} />
            <Route exact path='/main' render={() => <MainPageContainer />} />
            <Route path='/library' render={withSuspense(UsefullLinksContainerWithLazy)} />
            <Route path='/solarsys' render={withSuspense(SolarSystemContainerWithLazy)} />
            <Route path='/music' render={withSuspense(AudioPlayerContainerWithLazy)} />
            <Route path='/contacts' render={() => <div>ContactsContainer will be here soon</div>} />
            <Route path='*' render={() => <NotFoundPage/>} />
        </Switch>


    );
}

export default Routes;
