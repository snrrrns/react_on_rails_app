export type EventParams = {
  id: number;
  type: string;
  date: string;
  title: string;
  speaker: string;
  host: string;
  published: string;
};

export type EventListProps = {
  events: EventParams[];
};
