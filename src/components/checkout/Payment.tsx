import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

import Visa from "../../assets/images/visa.png";
import Btc from "../../assets/images/bbtc.png";
import Crypto from "../../assets/images/cryptoeats.png";
import Map from "../../assets/images/map.png";

function Payment() {
  return (
    <div>
      <div className="flex">
        <div className="w-[50%] mt-5 ml-10">
          <div>
            <h1 style={{ fontWeight: "bold" }}>Email</h1>
          </div>
          <div className="w-[80%] mt-3">
            <Input
              variant="outlined"
              label="Enter username"
              size="lg"
              className="rounded-[18px]"
            />
          </div>
          <div className="w-[50%] mt-12">
            <h1 style={{ fontWeight: "bold" }}>Payment Method</h1>
          </div>
        </div>
        <div className="w-[50%] mt-5 ml-10">
          <div>
            <h1 style={{ fontWeight: "bold" }}>Password</h1>
          </div>
          <div className="w-[80%] mt-3">
            <Input
              variant="outlined"
              label="Enter password"
              size="lg"
              className="rounded-[18px]"
            />
          </div>
          <div className="w-[50%] mt-12 ml-32">
            <a href="#">
              <h1
                style={{ fontWeight: "bold", textAlign: "right", color: "red" }}
              >
                Add New +
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[33%] mt-5 ml-10 rounded-[18px] border border-dashed pl-3 pr-3">
          <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem]"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar size="lg" src={Visa} alt="Visa" className="h-18 w-48" />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <div className="5 flex items-center gap-0 ml-24  mb-10">
                    <Checkbox />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  **** 0081
                </h1>
                <div className="inline-block">
                  <span>Visa</span>
                  <span
                    style={{ fontWeight: "bold", color: "red" }}
                    className="ml-44"
                  >
                    Edit
                  </span>
                </div>
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="w-[33%] mt-5 ml-10 rounded-[18px] border border-dashed pl-3 pr-3">
          <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem]"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar size="lg" src={Btc} alt="Visa" className="h-18 w-36" />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <div className="5 flex items-center gap-0 ml-24  mb-10">
                    <Checkbox />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>BBTC</h1>
                <div className="inline-block">
                  <span>BBTC</span>
                  <span
                    style={{ fontWeight: "bold", color: "red" }}
                    className="ml-44"
                  >
                    Edit
                  </span>
                </div>
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="w-[33%] mt-5 ml-10 rounded-[18px] border border-dashed pl-3 pr-3">
          <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem]"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar size="lg" src={Crypto} alt="Visa" className="h-18 w-16" />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <div className="5 flex items-center gap-0 ml-24  mb-10">
                    <Checkbox />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  CryptoEats
                </h1>
                <div className="inline-block">
                  <span>Visa</span>
                  <span
                    style={{ fontWeight: "bold", color: "red" }}
                    className="ml-44"
                  >
                    Edit
                  </span>
                </div>
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex">
        <div className="w-[100%] mt-5 ml-10 rounded-[18px] border border-dashed pl-3 pr-3">
          <Card color="transparent" shadow={false}>
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar size="lg" variant="circular" src={Map} alt="candice wu" />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    76A Eight Eve, New York..
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <h1 style={{ color: "red" }} className="pl-32">
                      Add New Address +
                    </h1>
                  </div>
                </div>
                <Typography color="blue-gray">+01 (123) 466 0050</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0 pl-12">
              <Typography>
                <h1 className="font-bold">14:00 Today, Apr 14</h1>
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex">
        <div className="pl-16 mt-5">
          <Checkbox label="Billing Address is same as shipping address" />
        </div>
      </div>
      <div className="flex">
        <div className="pl-20 mt-5 w-[100%] mx-auto">
          <Button color="red" fullWidth className="rounded-[18px]">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
