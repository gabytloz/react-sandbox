export const scrollTo = ( element, to, duration ) => {
    if ( duration < 0 ) return;

    let cache         = element.scrollTop;
    const difference  = to - cache;
    const perTick     = difference / duration * 10;

    setTimeout(() => {
      cache = cache + perTick;

      window.scrollTo( 0, cache );

      if ( cache === to ) return;
      scrollTo( element, to, duration - 10 );

    }, 10);
}

const shouldUpdateScroll = (prevRouterProps, { location }) => {
  const elementId = location.pathname.replace( /^\//, '');
  const element = document.getElementById( elementId );

  if ( element  === null ) return true;

  scrollTo( document.body, element.offsetTop, 350 );

  return false;
}

export default shouldUpdateScroll;
