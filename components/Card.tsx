import { Models } from "node-appwrite";
import React from "react";

const Card = ({ file }: { file: Models.Document & { name: string } }) => {
  return <div>{file.name}</div>;
};

export default Card;
