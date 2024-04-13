import { Avatar, Button, HeaderClient, InputPassword } from '@components';

export const HomeClient = () => {
   return (
      <div>
         <HeaderClient />

         <Button className="rounded-lg">Click Me!!!</Button>

         <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s" />

         <InputPassword />
      </div>
   );
};
