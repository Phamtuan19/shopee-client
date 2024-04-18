import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
   Avatar,
   Button,
   HeaderClient,
   InputPassword,
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@components';

export const HomeClient = () => {
   return (
      <div>
         <HeaderClient />

         <Button className="rounded-lg">Click Me!!!</Button>

         <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s" />

         <InputPassword />

         <div className="mt-3 w-[500px] flex justify-center">
            <Select>
               <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
               </SelectContent>
            </Select>
         </div>

         <div className="px-10">
            <Accordion type="single" collapsible className="w-full">
               <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                     Yes. It comes with default styles that matches the other components&apos; aesthetic.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                     Yes. It's animated by default, but you can disable it if you prefer.
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </div>
      </div>
   );
};
