import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@radix-ui/react-icons';

import languages from '../i18n';

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
   Button,
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuTrigger,
   LazyLoadingImage,
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTrigger,
} from '@components';
import { SvgIcon } from '@helpers';
import { useI18n, useLocalStorage } from '@hooks';
import { images } from '@assets/images';
import { LANGUAGE, LOCALSTORAGE_LANGUAGE_KEY } from '@constants';

export const SheetMobile = () => {
   const translate = useI18n(languages);
   const { i18n, t } = useTranslation();

   const { setLocalStorage } = useLocalStorage();

   const handleChangeLanguage = (language: string) => {
      setLocalStorage(LOCALSTORAGE_LANGUAGE_KEY, language);
      void i18n.changeLanguage(language);
   };

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button variant="link">
               <SvgIcon width={24} height={24} className="text-black" name="bars" />
            </Button>
         </SheetTrigger>
         <SheetContent side="left" className="p-0 ">
            <SheetHeader className="p-0 text-white">
               {/* <SheetTitle>Edit profile</SheetTitle>
               <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription> */}
               <div className="bg-[#080808]  px-6 py-4">
                  <div className="flex gap-4 items-center ">
                     <SvgIcon name="user" width={40} height={40} className="text-white" />
                     <div className="text-white flex flex-col">
                        <div className="text-lg">{`${translate('ACCOUNT')}`}</div>
                        <Link to="" className="text-sm text-left">
                           {`${translate('SIGNIN')}`}
                        </Link>
                     </div>
                  </div>
               </div>
            </SheetHeader>
            <div className="grid gap-4 px-6 py-4">
               <div className="">
                  <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="item-1">
                        <AccordionTrigger className="!no-underline">
                           <Link to="" className="text-base">
                              Sale
                           </Link>
                        </AccordionTrigger>
                        <AccordionContent>
                           <Link to="">Yes. It adheres to the WAI-ARIA design pattern.</Link>
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-2">
                        <AccordionTrigger isIcon={false} className="!no-underline">
                           <Link to="" className="text-base ">
                              Sale
                           </Link>
                        </AccordionTrigger>
                     </AccordionItem>
                  </Accordion>
               </div>
            </div>
            <SheetFooter className="absolute bottom-0 p-4">
               <SheetClose asChild>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button
                           variant="outline"
                           startIcon={
                              <LazyLoadingImage
                                 src={i18n.language === LANGUAGE.VI ? images.vnFlag : images.ukFlag}
                                 width="24"
                              />
                           }
                           className="w-40 justify-start"
                        >
                           <span className="font-medium">{`${t(i18n.language === LANGUAGE.VI ? 'COUNTRY_VI' : 'COUNTRY_EN')}`}</span>
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-40">
                        <DropdownMenuGroup className="flex flex-col gap-y-2 w-full">
                           <DropdownMenuItem
                              className="flex justify-between"
                              onClick={() => handleChangeLanguage(LANGUAGE.VI)}
                           >
                              <div className="flex gap-2">
                                 <LazyLoadingImage src={images.vnFlag} width="24" />
                                 <div className="">{`${t('COUNTRY_VI')}`}</div>
                              </div>
                              {i18n.language === LANGUAGE.VI && <CheckIcon width={16} height={16} />}
                           </DropdownMenuItem>
                           <DropdownMenuItem
                              className="flex justify-between"
                              onClick={() => handleChangeLanguage(LANGUAGE.EN)}
                           >
                              <div className="flex gap-2">
                                 <LazyLoadingImage src={images.ukFlag} width="24" />
                                 <div className="">{`${t('COUNTRY_EN')}`}</div>
                              </div>
                              {i18n.language === LANGUAGE.EN && <CheckIcon width={16} height={16} />}
                           </DropdownMenuItem>
                        </DropdownMenuGroup>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </SheetClose>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
};
