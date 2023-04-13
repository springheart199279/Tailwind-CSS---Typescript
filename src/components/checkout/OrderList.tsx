import {
  Card,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import { ArchiveBoxIcon } from "@heroicons/react/24/outline";

import Pic from "../../assets/images/fruits.png";

export default function Example() {
  return (
    <>
      <div className="border border-[#F8F9F9] rounded-[24px] p-12">
        <Card color="transparent" shadow={false} className="w-full">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar size="lg" src={Pic} className="h-120 w-120" />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Kichi Coffee & Drink
                </Typography>
                <IconButton
                  color="white"
                  className="relative border border-[#EDEDED] rounded-[10px] ml-20"
                >
                  <ArchiveBoxIcon className="h-8 w-8" aria-hidden="true" />
                </IconButton>
              </div>
              <Typography color="blue-gray">Lemon Juice Fresh</Typography>
              <hr className="mt-5" />
              <div className="inline-block mt-2">
                <span className="mt-3 mr-48">Order Price</span>
                <span style={{ fontWeight: "bold" }}>$25.99</span>
              </div>
              <div className="inline-block">
                <span className="mt-3 mr-44">Shipping Cost</span>
                <span style={{ fontWeight: "bold" }}>$0.99</span>
              </div>
              <hr className="mt-5" />
              <div className="inline-block mt-3">
                <span
                  className="mt-3 mr-56"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  Total
                </span>
                <span
                  style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}
                >
                  $25.99
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card color="transparent" shadow={false} className="w-full">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar size="lg" src={Pic} className="h-120 w-120" />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Kichi Coffee & Drink
                </Typography>
                <IconButton
                  color="white"
                  className="relative border border-[#EDEDED] rounded-[10px] ml-20"
                >
                  <ArchiveBoxIcon className="h-8 w-8" aria-hidden="true" />
                </IconButton>
              </div>
              <Typography color="blue-gray">Lemon Juice Fresh</Typography>
              <hr className="mt-5" />
              <div className="inline-block mt-2">
                <span className="mt-3 mr-48">Order Price</span>
                <span style={{ fontWeight: "bold" }}>$25.99</span>
              </div>
              <div className="inline-block">
                <span className="mt-3 mr-44">Shipping Cost</span>
                <span style={{ fontWeight: "bold" }}>$0.99</span>
              </div>
              <hr className="mt-5" />
              <div className="inline-block mt-3">
                <span
                  className="mt-3 mr-56"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  Total
                </span>
                <span
                  style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}
                >
                  $25.99
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
