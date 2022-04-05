import { Message } from ".";

export interface Post {
  id: string;
  post_id: string;
  status:
    | "PENDING_APPROVAL"
    | "APPROVED"
    | "ACCEPTED"
    | "IN_PROGRESS"
    | "IMPLEMENTED";
  content: {
    title: string;
    createdDate: string;
    description: string;
    images?: Array<string>;
    county: string;
    reporterName: string;
  };
  reporter: string;
  up_votes: number;
  down_votes: number;
}
