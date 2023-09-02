export type EventParams = {
  id?: number;
  type: string;
  date: string;
  title: string;
  speaker: string;
  host: string;
  published: boolean;
};

export type EventListProps = {
  events: EventParams[];
};

export type FormErrors = {
  type?: string;
  date?: string;
  title?: string;
  speaker?: string;
  host?: string;
};
