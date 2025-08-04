import { Models } from "node-appwrite";

import { FileDocument } from "./file";

export interface User extends Models.Document {
  fullName: string;
  email: string;
  avatar: string;
  accountId: string;
  files: FileDocument[];
}
