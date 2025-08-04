import Image from "next/image";

import FileUploader from "./FileUploader";
import Search from "./Search";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form action="">
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="Sign out"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
