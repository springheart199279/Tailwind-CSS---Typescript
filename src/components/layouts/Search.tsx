import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.svg";

function Search() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }: any) => setEmail(target.value);

  return (
    <div>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 normal-case p-3 rounded-l-[15px]"
            >
              Bermingham
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </MenuHandler>
        </Menu>
        <Input
          type="tel"
          placeholder="Search"
          className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500 mr-56 rounded-[15px]"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={onChange}
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={email ? "gray" : "blue-gray"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded-[12px] "
        >
          <AdjustmentsHorizontalIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

export default Search;
