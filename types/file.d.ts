import { Models } from "node-appwrite";

import { User } from "./user";

export interface FileDocument extends Models.Document {
  name: string;
  type: FileType;
  extension: string;
  size: number;
  url: string;
  owner: User;
  accountId: string;
  users: string[];
  bucketFileId: string;
}
