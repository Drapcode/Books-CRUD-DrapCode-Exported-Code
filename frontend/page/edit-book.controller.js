const PageDetail = {
  isTitleFromCollection: false,
  isDescriptionFromCollection: false,
  name: 'Edit Book',
  slug: 'edit-book',
};

export const pageContent = async (req, res, next) => {
  console.log('PageDetail :>> ', PageDetail);
  try {
    let { protocol, originalUrl, projectLogoKeyName } = req;

    let finalData = {
      fullUrl: `${protocol}://${req.get('host')}${originalUrl}`,
      titleTag: 'Edit Book',
      description: 'Edit Book',
      seoImageToReplace: projectLogoKeyName
        ? `${process.env.S3_BUCKET_URL}/${projectLogoKeyName}`
        : 'https://drapcode.com/img/DrapCode-Icon-Dark.png',
    };

    res.render('edit-book', finalData);
  } catch (error) {
    console.log('error :>> ', error);
    next(error);
  }
};
