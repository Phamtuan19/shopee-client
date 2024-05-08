export const initApp = () => {
   // const { getLocalStorage } = useLocalStorage();

   // const logo = getLocalStorage('logo');

   const headLinkIcon = document.querySelector('head link[rel="icon"]');
   // const headTitle = document.querySelector('head title');

   if (headLinkIcon) {
      headLinkIcon.setAttribute(
         'href',
         'data:image/jpeg;base64,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',
      );
   } else {
      const headLink = document.querySelector('head');
      const linkLogoImage = document.createElement('link');
      linkLogoImage.setAttribute('type', 'image/svg+xml');
      linkLogoImage.setAttribute('rel', 'icon');
      linkLogoImage.setAttribute(
         'href',
         'data:image/jpeg;base64,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',
      );
      headLink?.appendChild(linkLogoImage);
   }
};