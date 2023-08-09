exports.productsError= (req, res, next) => {
    console.log('in error')
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/' });
  } 