import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-purple-600" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="">
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-purple-600"/>
              {user?.email}
            </span>
          ) : (
            <span>Welcome to DadoStore</span>
          )}
        </SheetTitle>
        <Separator className="my-2"/>
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks/>
          ) : (
            <Button onClick={async () => await loginWithRedirect()} className="flex-1 font-bold hover:bg-purple-600 my-3">
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
